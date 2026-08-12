"""Link-closure resolution for custom builds.

Embind requires every base class referenced via base<...> to be registered in
the final module, and returning opencascade::handle<T> from a bound method
fails at call time with UnboundTypeError unless Handle_T is registered.
Historically builds/*.yml had to list every base class by hand (see the
"Base classes (required by Embind for inheritance)" section) and hardcode a
small set of Handle types.

This module computes the transitive closure automatically from the generated
binding sources: starting from the symbols requested in the yml, it follows
every base<X> reference in each binding .cpp, and (optionally) pulls in
Handle_X for every class X in the closure when such a binding exists.

Environment:
  OCJS_INCLUDE_HANDLES=1   also include Handle_X bindings for every X in the
                           closure (bigger output, needed for handle-heavy
                           API surfaces like build123d's OCP usage)
"""

import os
import re

_BASE_RE = re.compile(r"base<([A-Za-z0-9_]+)>")


def indexBindings(bindingsDir):
  """Map symbol name -> generated binding .cpp path."""
  idx = {}
  for dirpath, _dirnames, filenames in os.walk(bindingsDir):
    for f in filenames:
      if f.endswith(".cpp"):
        idx[f[:-4]] = os.path.join(dirpath, f)
  return idx


def resolveClosure(symbols, bindingsDir, includeHandles=None, knownExternal=frozenset()):
  """Return (closure, missing) for the requested symbols.

  closure: set of symbols to compile/link (requested + bases + handles)
  missing: requested or derived symbols with no generated binding .cpp and
           not provided externally (e.g. via additionalBindCode)
  """
  if includeHandles is None:
    includeHandles = os.environ.get("OCJS_INCLUDE_HANDLES", "") == "1"

  idx = indexBindings(bindingsDir)
  closure = set()
  missing = []
  queue = list(symbols)
  while queue:
    sym = queue.pop()
    if sym in closure:
      continue
    closure.add(sym)
    path = idx.get(sym)
    if path is None:
      if sym not in knownExternal:
        missing.append(sym)
      continue
    try:
      with open(path, errors="replace") as f:
        src = f.read()
    except OSError:
      continue
    for baseSym in _BASE_RE.findall(src):
      if baseSym not in closure:
        queue.append(baseSym)
    if includeHandles:
      handleSym = "Handle_" + sym
      if handleSym in idx and handleSym not in closure:
        queue.append(handleSym)
  # Only keep symbols that actually have bindings (missing ones are reported).
  # knownExternal symbols are provided by additionalBindCode — linking their
  # generated .o too would duplicate Embind registrations and raw_destructor
  # template specializations (wasm-ld duplicate-symbol errors).
  return {s for s in closure if s in idx and s not in knownExternal}, missing
