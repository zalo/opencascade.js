#!/usr/bin/python3

import os
import time
import subprocess
import multiprocessing

from filter.filterSourceFiles import filterSourceFile
from filter.filterPackages import filterPackages

from argparse import ArgumentParser

try:
  from tqdm import tqdm
  HAS_TQDM = True
except ImportError:
  HAS_TQDM = False

from buildPaths import OCJS_ROOT, OCCT_ROOT, RAPIDJSON_ROOT, FREETYPE_ROOT, numJobs

libraryBasePath = OCJS_ROOT + "/build/sources"

# Potentially problematic packages, when used with dynamic linking
# These files contain function pointer definitions and header files and are therefore likely to cause problems.
# https://github.com/emscripten-core/emscripten/issues/13241
# "AdvApp2Var"
# "BRepGProp"
# "BRepMesh"
# "BSplSLib"
# "CPnts"
# "DDF"
# "Draw"
# "Graphic3d"
# "IFSelect"
# "Interface"
# "MoniTool"
# "NCollection"
# "OpenGl"
# "OSD"
# "ShapeProcess"
# "Standard"
# "StdObjMgt"
# "TDF

sourceBasePath = OCCT_ROOT + "/src/"

includePaths = []
includePaths.extend([
  RAPIDJSON_ROOT + "/include",
  FREETYPE_ROOT + "/include/freetype",
  FREETYPE_ROOT + "/include",
])
for dirpath, dirnames, filenames in os.walk(os.path.join(sourceBasePath)):
  includePaths.append(dirpath)

def buildObjectFiles(file, args):
  relativeFile = file.replace(sourceBasePath, "")
  try:
    os.makedirs(libraryBasePath + "/" + os.path.dirname(relativeFile))
  except Exception:
    pass

  # Use appropriate language standard based on file extension
  is_c_file = file.endswith(".c")
  lang_std = "-std=c17" if is_c_file else "-std=c++17"

  command = [
    "emcc",
    lang_std,
    "-flto",
    "-fexceptions",
    "-sDISABLE_EXCEPTION_CATCHING=0",
    "-DIGNORE_NO_ATOMICS=1",
    "-DOCCT_NO_PLUGINS",
    "-DHAVE_RAPIDJSON",
    "-Os",
    # "-g3",
    # "-gsource-map",
    # "--source-map-base=http://localhost:8080",
    # "-fPIC",
    "-pthread" if args["threading"] == "multi-threaded" else "",
    *list(map(lambda x: "-I" + x, includePaths)),
    "-c",
    file,
  ]

  # Only add C++-specific flags for C++ files
  if not is_c_file:
    command.insert(3, "-frtti")

  if not os.path.exists(libraryBasePath + "/" + relativeFile + ".o"):
    try:
      subprocess.check_call([
        *command,
        "-o", libraryBasePath + "/" + relativeFile + ".o",
        ])
      return ("ok", relativeFile)
    except subprocess.CalledProcessError:
      return ("failed", relativeFile)
  else:
    return ("skipped", relativeFile)

allModules = {}
for dirpath, dirnames, filenames in os.walk(sourceBasePath):
  if not any(x for x in filenames if x == "PACKAGES"):
    continue
  allModules[os.path.basename(dirpath)] = []
  with open(dirpath + "/PACKAGES", "r") as a_file:
    for package in a_file:
      packageName = package.strip()
      allModules[os.path.basename(dirpath)].append(packageName)
def getModuleNameByPackageName(inputPackageName):
  for moduleName in allModules:
    for package in allModules[moduleName]:
      packageName = package.strip()
      if packageName == inputPackageName:
        return moduleName
  return ""

filesToBuild = []
for dirpath, dirnames, filenames in os.walk(sourceBasePath):
  packageOrModuleName = os.path.basename(dirpath.replace(sourceBasePath, ""))
  for item in filenames:
    if not filterPackages(packageOrModuleName) or not filterPackages(getModuleNameByPackageName(packageOrModuleName)):
      continue
    if filterSourceFile(dirpath + "/" + item):
      filesToBuild.append(dirpath + "/" + item)

if __name__ == "__main__":
  parser = ArgumentParser()
  parser.add_argument(dest="threading", choices=["single-threaded", "multi-threaded"], help="Build in single vs. multi-threaded mode")
  args = parser.parse_args()

  try:
    os.makedirs(libraryBasePath)
  except Exception:
    pass

  total = len(filesToBuild)
  print(f"Compiling {total} OCCT source files...")

  ok = failed = skipped = 0
  start = time.time()

  def myBuildFunction(x):
    return buildObjectFiles(x, {
      "threading": args.threading,
    })

  with multiprocessing.Pool(processes=numJobs()) as p:
    if HAS_TQDM:
      for status, path in tqdm(p.imap_unordered(myBuildFunction, filesToBuild), total=total, desc="Compiling sources", unit="file"):
        if status == "ok": ok += 1
        elif status == "failed": failed += 1
        else: skipped += 1
    else:
      for i, (status, path) in enumerate(p.imap_unordered(myBuildFunction, filesToBuild), 1):
        if status == "ok": ok += 1
        elif status == "failed":
          failed += 1
          print(f"Warning: failed to compile {path}, skipping")
        else: skipped += 1
        if i % 100 == 0 or i == total:
          elapsed = time.time() - start
          rate = i / elapsed if elapsed > 0 else 0
          eta = (total - i) / rate if rate > 0 else 0
          print(f"[{i}/{total}] {ok} ok, {failed} failed, {skipped} skipped | {rate:.1f} files/s | ETA: {eta/60:.1f}min", flush=True)

  elapsed = time.time() - start
  print(f"\nSource compilation done: {ok} compiled, {failed} failed, {skipped} skipped (total: {total}) in {elapsed/60:.1f}min")
