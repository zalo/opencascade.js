from filter.filterIncludeFiles import filterIncludeFile
from buildPaths import OCJS_ROOT, OCCT_ROOT, RAPIDJSON_ROOT, FREETYPE_ROOT, EMSDK_ROOT
from typing import Set
import os

occtBasePath = OCCT_ROOT + "/src/"

def getGlobalIncludes() -> Set[str]:
  includeFiles = list()
  additionalIncludePaths = list()
  for dirpath, dirnames, filenames in os.walk(occtBasePath):
    # Skip OCCT 8.0+ Deprecated directory entirely.
    # NCollectionAliases typedefs are injected directly into
    # generateBindings.py's myMain.h (avoids broken #include chains
    # from deprecated headers referencing removed OCCT types).
    if "/Deprecated" in dirpath or dirpath.endswith("Deprecated"):
      continue
    additionalIncludePaths.append(str(dirpath))
    for item in filenames:
      if filterIncludeFile(item):
        includeFiles.append(str(os.path.join(dirpath, item)))
  # Add NCollectionAliases to include search paths (not to include files)
  # so that #include <TColgp_Array1OfPnt.hxx> resolves during compilation
  ncollPath = os.path.join(occtBasePath, "Deprecated", "NCollectionAliases")
  if os.path.isdir(ncollPath):
    additionalIncludePaths.append(ncollPath)
  return [includeFiles, additionalIncludePaths]

[ocIncludeFiles, ocIncludePaths] = getGlobalIncludes()

additionalIncludePaths = [
  RAPIDJSON_ROOT + "/include",
  FREETYPE_ROOT + "/include/freetype",
  FREETYPE_ROOT + "/include",
]

includePathArgs = \
  list(dict.fromkeys(map(lambda x: "-I" + x, ocIncludePaths))) + \
  [
    # Prevent libclang from searching HOST system headers (/usr/include).
    # The host's stdlib.h has exception specifications that conflict with emsdk's
    # C++ headers, causing occ::handle<T> to fail to resolve (falls back to int).
    "-nostdinc",
    "-nostdinc++",
    # Tell emsdk headers we're targeting emscripten
    "-D__EMSCRIPTEN__",
  ] + \
  list(map(lambda x: "-I" + x, [
    # Stubs directory FIRST — provides xlocale.h stub
    OCJS_ROOT + "/src/stubs",
    # libc++ BEFORE sysroot: libc++ wrapper headers (e.g. cstdlib) use
    # #include_next <stdlib.h> which must find the sysroot version, not host
    EMSDK_ROOT + "/upstream/emscripten/system/lib/libcxx/include/",
    EMSDK_ROOT + "/upstream/emscripten/system/lib/libcxx/include/__support/newlib/",
    # Emscripten sysroot C headers (replaces /usr/include)
    EMSDK_ROOT + "/upstream/emscripten/cache/sysroot/include/",
    EMSDK_ROOT + "/upstream/emscripten/system/include/",
    # Clang builtins (stdarg.h, limits.h, etc.)
    EMSDK_ROOT + "/upstream/lib/clang/" + next(os.walk(EMSDK_ROOT + '/upstream/lib/clang/'))[1][0] + "/include/",
  ])) + \
  list(map(lambda x: "-I" + x, ocIncludePaths + additionalIncludePaths))
  