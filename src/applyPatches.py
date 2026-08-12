#!/usr/bin/python3

import os
import subprocess
from buildPaths import OCJS_ROOT, OCCT_ROOT

# Patch files address OCCT as /occt/src/... — strip the '/occt/' prefix (-p2)
# and apply relative to OCCT_ROOT so the patches work for any checkout location.
for dirpath, dirnames, filenames in os.walk(OCJS_ROOT + "/src/patches"):
  for filename in filenames:
    print("applying patch " + dirpath + "/" + filename)
    try:
      subprocess.check_call(
        ["patch -p2 -N -d '" + OCCT_ROOT + "' < '" + dirpath + "/" + filename + "'"],
        stdout=subprocess.PIPE, shell=True)
      print("...done applying patch")
    except Exception:
      print("WARNING: Could not apply patch " + filename + " (may not be needed for this OCCT version)")
