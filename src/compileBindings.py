#!/usr/bin/python3

import os
import sys
import time
from Common import ocIncludePaths, additionalIncludePaths
import subprocess
import multiprocessing
from functools import partial

from argparse import ArgumentParser

try:
  from tqdm import tqdm
  HAS_TQDM = True
except ImportError:
  HAS_TQDM = False

libraryBasePath = "/opencascade.js/build/bindings"

def buildOneFile(args, item):
  if not os.path.exists(item + ".o"):
    command = [
      "emcc",
      "-std=c++17",
      "-flto",
      "-fexceptions",
      "-sDISABLE_EXCEPTION_CATCHING=0",
      "-DIGNORE_NO_ATOMICS=1",
      "-DOCCT_NO_PLUGINS",
      "-frtti",
      "-DHAVE_RAPIDJSON",
      "-Os",
      "-pthread" if args["threading"] == "multi-threaded" else "",
      *list(map(lambda x: "-I" + x, ocIncludePaths + additionalIncludePaths)),
      "-c", item,
    ]
    try:
      subprocess.check_call([
        *command,
        "-o", item + ".o",
      ])
      return ("ok", item)
    except subprocess.CalledProcessError:
      return ("failed", item)
  else:
    return ("skipped", item)

def compileCustomCodeBindings(args):
  filesToBuild = []
  for dirpath, dirnames, filenames in os.walk(libraryBasePath + "/myMain.h"):
    filesToBuild.extend(map(lambda x: dirpath + "/" + x, filter(lambda x: x.endswith(".cpp"), filenames)))

  total = len(filesToBuild)
  print(f"Compiling {total} custom binding files...")

  ok = failed = skipped = 0
  with multiprocessing.Pool(processes=int(multiprocessing.cpu_count() / 1)) as p:
    if HAS_TQDM:
      for status, path in tqdm(p.imap_unordered(partial(buildOneFile, args), sorted(filesToBuild)), total=total, desc="Compiling bindings", unit="file"):
        if status == "ok": ok += 1
        elif status == "failed": failed += 1
        else: skipped += 1
    else:
      start = time.time()
      for i, (status, path) in enumerate(p.imap_unordered(partial(buildOneFile, args), sorted(filesToBuild)), 1):
        if status == "ok": ok += 1
        elif status == "failed":
          failed += 1
          print(f"Warning: failed to compile {path}, skipping")
        else: skipped += 1
        if i % 50 == 0 or i == total:
          elapsed = time.time() - start
          rate = i / elapsed if elapsed > 0 else 0
          eta = (total - i) / rate if rate > 0 else 0
          print(f"[{i}/{total}] {ok} ok, {failed} failed, {skipped} skipped | {rate:.1f} files/s | ETA: {eta/60:.1f}min", flush=True)

  print(f"\nCustom bindings done: {ok} compiled, {failed} failed, {skipped} skipped (total: {total})")

if __name__ == "__main__":
  parser = ArgumentParser()
  parser.add_argument(dest="threading", choices=["single-threaded", "multi-threaded"], help="Build in single vs. multi-threaded mode")
  args = parser.parse_args()

  filesToBuild = []
  for dirpath, dirnames, filenames in os.walk(libraryBasePath):
    filesToBuild.extend(map(lambda x: dirpath + "/" + x, filter(lambda x: x.endswith(".cpp"), filenames)))

  total = len(filesToBuild)
  print(f"Compiling {total} binding files...")

  ok = failed = skipped = 0
  start = time.time()

  with multiprocessing.Pool(processes=int(multiprocessing.cpu_count() / 1)) as p:
    if HAS_TQDM:
      for status, path in tqdm(p.imap_unordered(partial(buildOneFile, {
        "threading": args.threading,
      }), sorted(filesToBuild)), total=total, desc="Compiling bindings", unit="file"):
        if status == "ok": ok += 1
        elif status == "failed": failed += 1
        else: skipped += 1
    else:
      for i, (status, path) in enumerate(p.imap_unordered(partial(buildOneFile, {
        "threading": args.threading,
      }), sorted(filesToBuild)), 1):
        if status == "ok": ok += 1
        elif status == "failed":
          failed += 1
          print(f"Warning: failed to compile {path}, skipping")
        else: skipped += 1
        if i % 50 == 0 or i == total:
          elapsed = time.time() - start
          rate = i / elapsed if elapsed > 0 else 0
          eta = (total - i) / rate if rate > 0 else 0
          print(f"[{i}/{total}] {ok} ok, {failed} failed, {skipped} skipped | {rate:.1f} files/s | ETA: {eta/60:.1f}min", flush=True)

  elapsed = time.time() - start
  print(f"\nBinding compilation done: {ok} compiled, {failed} failed, {skipped} skipped (total: {total}) in {elapsed/60:.1f}min")
