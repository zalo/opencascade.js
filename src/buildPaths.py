"""Central path configuration for the opencascade.js build pipeline.

Historically every script hardcoded the Docker container layout (/occt,
/opencascade.js, /emsdk, ...). These env vars let the pipeline run outside
Docker (e.g. directly on a dev machine) while defaulting to the container
layout so the Dockerfile keeps working unchanged.

  OCJS_ROOT       root of this repository            (default /opencascade.js)
  OCCT_ROOT       OCCT source checkout               (default /occt)
  RAPIDJSON_ROOT  rapidjson checkout                 (default /rapidjson)
  FREETYPE_ROOT   freetype checkout                  (default /freetype)
  EMSDK           emsdk install root                 (default /emsdk)
  OCJS_JOBS       max parallel compile/codegen jobs  (default: cpu count)
  OCJS_BUILD_DIR  object/binding tree                (default $OCJS_ROOT/build)
                  — the two exception models need SEPARATE trees: their
                  objects are not link-compatible
  OCJS_EXCEPTIONS C++ exception model for EVERY compile step:
                    wasm         (default) -fwasm-exceptions — native wasm EH,
                                 legacy encoding (try/catch/delegate)
                    wasm-exnref  -fwasm-exceptions -sWASM_LEGACY_EXCEPTIONS=0
                    js           -fexceptions -sDISABLE_EXCEPTION_CATCHING=0
                                 — Emscripten's JS-emulated exceptions (the
                                 pre-2026-10 shipping model; now the
                                 cascadestudio-jseh debug artifact)
                  buildFromYaml.py infers it from the yml's link flags (and
                  refuses a conflicting OCJS_EXCEPTIONS); compileSources.py
                  has no yml, so set it there for a js tree.
"""

import multiprocessing
import os

OCJS_ROOT = os.environ.get("OCJS_ROOT", "/opencascade.js")
OCJS_BUILD_DIR = os.environ.get("OCJS_BUILD_DIR", OCJS_ROOT + "/build")
OCCT_ROOT = os.environ.get("OCCT_ROOT", "/occt")
RAPIDJSON_ROOT = os.environ.get("RAPIDJSON_ROOT", "/rapidjson")
FREETYPE_ROOT = os.environ.get("FREETYPE_ROOT", "/freetype")
EMSDK_ROOT = os.environ.get("EMSDK", "/emsdk")


def numJobs() -> int:
  jobs = int(os.environ.get("OCJS_JOBS", "0"))
  return jobs if jobs > 0 else multiprocessing.cpu_count()


EXCEPTION_MODES = ("wasm", "wasm-exnref", "js")


def exceptionMode() -> str:
  mode = os.environ.get("OCJS_EXCEPTIONS", "wasm")
  if mode not in EXCEPTION_MODES:
    raise ValueError("OCJS_EXCEPTIONS must be one of " + ", ".join(EXCEPTION_MODES) + ", not " + repr(mode))
  return mode


def exceptionFlags() -> list:
  """Compile flags for the C++ exception model (see OCJS_EXCEPTIONS)."""
  mode = exceptionMode()
  if mode == "js":
    return ["-fexceptions", "-sDISABLE_EXCEPTION_CATCHING=0"]
  if mode == "wasm":
    return ["-fwasm-exceptions"]
  return ["-fwasm-exceptions", "-sWASM_LEGACY_EXCEPTIONS=0"]


def exceptionModeOfFlags(flags):
  """The exception model a list of emcc link flags names (None: neither)."""
  if "-fwasm-exceptions" in flags:
    return "wasm-exnref" if "-sWASM_LEGACY_EXCEPTIONS=0" in flags else "wasm"
  if "-fexceptions" in flags:
    return "js"
  return None
