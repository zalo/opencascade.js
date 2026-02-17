# syntax=docker/dockerfile:1
FROM emscripten/emsdk:4.0.23 AS base-image

RUN \
  apt update -y && \
  apt install -y \
  bash \
  build-essential \
  cmake \
  curl \
  git \
  libffi-dev \
  libgdbm-dev \
  libncurses5-dev \
  libnss3-dev \
  libreadline-dev \
  libsqlite3-dev \
  libssl-dev \
  libbz2-dev \
  npm \
  python3 \
  python3-pip \
  python3-setuptools \
  zlib1g-dev

RUN \
  pip install \
  libclang \
  pyyaml \
  cerberus \
  argparse

WORKDIR /rapidjson/
RUN \
  git clone -b v1.1.0 https://github.com/Tencent/rapidjson.git .

WORKDIR /freetype/
RUN \
  git clone -b VER-2-13-0 https://github.com/freetype/freetype.git .

# OCCT 8.0.0 RC4 from GitHub
ENV OCCT_VERSION=V8_0_0_rc4
WORKDIR /occt/
RUN \
  curl -L "https://github.com/Open-Cascade-SAS/OCCT/archive/refs/tags/${OCCT_VERSION}.tar.gz" -o occt.tar.gz && \
  tar -xzf occt.tar.gz && \
  mv OCCT-*/* . && \
  mv OCCT-*/.* . || true && \
  rmdir OCCT-* || true && \
  rm occt.tar.gz

WORKDIR /opencascade.js/

ARG threading=single-threaded
ENV threading=$threading

# --- Stage: Flatten OCCT directory structure ---
# Only flattenOcct8.py is needed here — cached unless the script changes
COPY src/flattenOcct8.py ./src/flattenOcct8.py
RUN /opencascade.js/src/flattenOcct8.py

# --- Stage: Apply patches ---
FROM base-image AS test-image
COPY src/applyPatches.py ./src/applyPatches.py
COPY src/patches ./src/patches
RUN \
  mkdir -p /opencascade.js/build/ && \
  mkdir -p /opencascade.js/dist/ && \
  /opencascade.js/src/applyPatches.py

# --- Stage: Compile OCCT sources ---
# This layer only depends on compileSources.py, Common.py, stubs, and filter.
# It does NOT change when binding scripts (bindings.py, generateBindings.py) change.
# This is the biggest caching win: ~30 min of OCCT compilation is cached.
FROM test-image AS sources-compiled
COPY src/compileSources.py ./src/compileSources.py
COPY src/Common.py ./src/Common.py
COPY src/stubs/ ./src/stubs/
COPY src/filter/ ./src/filter/
RUN /opencascade.js/src/compileSources.py ${threading}

# --- Stage: Generate bindings ---
# Separate from compilation so binding code changes don't require recompilation
FROM sources-compiled AS bindings-generated
COPY src/ ./src/
COPY builds/ ./builds/
RUN /opencascade.js/src/generateBindings.py

# --- Stage: Compile bindings and finalize ---
FROM bindings-generated AS custom-build-image
RUN \
  /opencascade.js/src/compileBindings.py ${threading} && \
  chmod -R 777 /opencascade.js/ && \
  chmod -R 777 /occt

ENTRYPOINT ["/opencascade.js/src/buildFromYaml.py"]
