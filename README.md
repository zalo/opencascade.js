# opencascade.js — CascadeStudio Fork

A custom build of [opencascade.js](https://github.com/donalffons/opencascade.js) for [CascadeStudio](https://github.com/zalo/CascadeStudio).

This fork (`cascadestudio-v2` branch) tracks OCCT 8.0.0 RC4 with emsdk 4.0.23 and produces a tailored WASM module containing only the bindings CascadeStudio needs.

## What's Different

| | Upstream | This Fork |
|---|---------|-----------|
| OCCT version | 7.6.2 | 8.0.0 RC4 |
| emsdk version | 3.x | 4.0.23 |
| Build config | Full (~2000+ classes) | `cascadestudio.yml` (~120 classes) |
| Output | `opencascade.full.js` | `cascadestudio.js` + `.wasm` |
| ES modules | Optional | Always (`-sEXPORT_ES6=1`) |

## Build

Requires Docker.

```bash
docker build --target custom-build-image -t ocjs-cascadestudio .
```

Extract the built files:

```bash
docker create --name ocjs-extract ocjs-cascadestudio
docker cp ocjs-extract:/opencascade.js/dist/ ./dist/
docker rm ocjs-extract
```

Output: `dist/cascadestudio.js` and `dist/cascadestudio.wasm`

## Configuration

All bindings are defined in [`builds/cascadestudio.yml`](builds/cascadestudio.yml). Add new OCCT classes by appending `- symbol: ClassName` entries.

See [CLAUDE.md](CLAUDE.md) for detailed build system documentation, known issues, and troubleshooting.

## Usage in CascadeStudio

CascadeStudio references this fork via npm:

```json
"opencascade.js": "github:zalo/opencascade.js#cascadestudio-v2"
```

The built WASM files are committed to the `dist/` directory so CascadeStudio can consume them without building from source.

## Upstream

Forked from [donalffons/opencascade.js](https://github.com/donalffons/opencascade.js).
