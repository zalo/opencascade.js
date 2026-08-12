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
"""

import multiprocessing
import os

OCJS_ROOT = os.environ.get("OCJS_ROOT", "/opencascade.js")
OCCT_ROOT = os.environ.get("OCCT_ROOT", "/occt")
RAPIDJSON_ROOT = os.environ.get("RAPIDJSON_ROOT", "/rapidjson")
FREETYPE_ROOT = os.environ.get("FREETYPE_ROOT", "/freetype")
EMSDK_ROOT = os.environ.get("EMSDK", "/emsdk")


def numJobs() -> int:
  jobs = int(os.environ.get("OCJS_JOBS", "0"))
  return jobs if jobs > 0 else multiprocessing.cpu_count()
