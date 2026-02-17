#!/usr/bin/python3

from typing import Callable
from bindings import EmbindBindings, TypescriptBindings, shouldProcessClass
import clang.cindex
import os
import errno
from filter.filterTypedefs import filterTypedef
from filter.filterEnums import filterEnum
from wasmGenerator.Common import ignoreDuplicateTypedef, SkipException
from Common import ocIncludeFiles, includePathArgs
import json
import multiprocessing
import os
from filter.filterPackages import filterPackages
from functools import partial

libraryBasePath = "/opencascade.js/build/bindings"
buildDirectory = "/opencascade.js/build"
occtBasePath = "/occt/src/"
ocIncludeStatements = os.linesep.join(map(lambda x: "#include \"" + os.path.basename(x) + "\"", list(sorted(ocIncludeFiles))))

import re as _re

def _generateHandleTypedefs() -> str:
  """Generate Handle_ClassName typedefs for all OCCT classes using DEFINE_STANDARD_RTTIEXT.

  OCCT 8.0 removed DEFINE_STANDARD_HANDLE from most classes, so Handle_ClassName
  typedefs no longer exist. The binding generator needs these typedefs to create
  Handle binding files via templateTypedefGenerator.
  """
  typedefs = []
  seen = set()
  pattern = _re.compile(r'DEFINE_STANDARD_RTTIEXT\s*\(\s*(\w+)\s*,')
  # Classes that are macro parameters or unavailable in WASM builds
  _skip = {'Class'}
  _skip_prefixes = ('IVtk', 'IVtkVTK', 'IVtkOCC', 'IVtkDraw')
  for dirpath, dirnames, filenames in os.walk(occtBasePath):
    for fname in filenames:
      if not fname.endswith('.hxx'):
        continue
      filepath = os.path.join(dirpath, fname)
      try:
        with open(filepath, 'r', errors='replace') as f:
          for line in f:
            m = pattern.search(line)
            if m:
              className = m.group(1)
              if className in _skip or className.startswith(_skip_prefixes):
                continue
              if className not in seen:
                seen.add(className)
                typedefs.append(
                  f"typedef opencascade::handle<{className}> Handle_{className};"
                )
      except OSError:
        pass
  return "\n".join(typedefs)

handleTypedefs = _generateHandleTypedefs()
print(f"Generated {len(handleTypedefs.splitlines())} Handle typedefs for OCCT 8.0 compatibility")

# OCCT 8.0 moved NCollection aliases to Deprecated/NCollectionAliases/.
# We can't #include those headers (some have broken #include chains referencing
# removed OCCT types). Instead, inject the needed typedefs directly into myMain.h.
# Add entries here for any NCollection alias your build config requires.
ncollectionTypedefs = "\n".join([
  "typedef NCollection_Array1<gp_Pnt> TColgp_Array1OfPnt;",
  "typedef NCollection_Array1<gp_Dir> TColgp_Array1OfDir;",
  "typedef NCollection_Array1<gp_Pnt2d> TColgp_Array1OfPnt2d;",
  "typedef NCollection_Array1<gp_Vec> TColgp_Array1OfVec;",
  "typedef NCollection_Array1<double> TColStd_Array1OfReal;",
  "typedef NCollection_Array1<int> TColStd_Array1OfInteger;",
  "typedef NCollection_IndexedMap<TopoDS_Shape, TopTools_ShapeMapHasher> TopTools_IndexedMapOfShape;",
  "typedef NCollection_Array1<Poly_Triangle> Poly_Array1OfTriangle;",
  "typedef NCollection_HArray1<gp_Pnt> TColgp_HArray1OfPnt;",
  "typedef opencascade::handle<TColgp_HArray1OfPnt> Handle_TColgp_HArray1OfPnt;",
])
print(f"Injecting {len(ncollectionTypedefs.splitlines())} NCollection typedefs for OCCT 8.0 compatibility")

def mkdirp(name: str) -> None:
  try:
    os.makedirs(name)
  except OSError as e:
    if e.errno != errno.EEXIST:
      raise

def filterClasses(child, customBuild):
  if customBuild:
    return (
      child.location.file.name == "myMain.h" and
      shouldProcessClass(child, occtBasePath)
    )
  return (
    child.extent.start.file.name.startswith(occtBasePath) and
    filterPackages(os.path.basename(os.path.dirname(child.location.file.name))) and
    shouldProcessClass(child, occtBasePath)
  )

def filterTemplates(child, customBuild):
  if customBuild:
    return (
      child.location.file.name == "myMain.h" and
      child.kind == clang.cindex.CursorKind.TYPEDEF_DECL and
      (
        child.underlying_typedef_type.kind == clang.cindex.TypeKind.ELABORATED or
        child.underlying_typedef_type.kind == clang.cindex.TypeKind.UNEXPOSED
      )
    )
  return (
    (
      (
        child.extent.start.file.name.startswith(occtBasePath) and
        filterPackages(os.path.basename(os.path.dirname(child.location.file.name)))
      ) or
      # OCCT 8.0: Handle typedefs injected into myMain.h (no longer in OCCT headers)
      child.location.file.name == "myMain.h"
    ) and
    child.kind == clang.cindex.CursorKind.TYPEDEF_DECL and
    (
      child.underlying_typedef_type.kind == clang.cindex.TypeKind.ELABORATED or
      child.underlying_typedef_type.kind == clang.cindex.TypeKind.UNEXPOSED
    )
  )

def filterEnums(child, customBuild):
  if customBuild:
    return child.location.file.name == "myMain.h"
  return ((
      child.extent.start.file.name.startswith(occtBasePath) and
      filterPackages(os.path.basename(os.path.dirname(child.location.file.name)))
    ) and
    child.kind == clang.cindex.CursorKind.ENUM_DECL
  )

def processChildBatch(customCode, generator, buildType: str, extension: str, filterFunction: Callable[[any], bool], processFunction: Callable[[any, any], str], typedefGenerator: any, templateTypedefGenerator: any, preamble: str, customBuild: bool, batch):
  tu = parse(customCode)
  children = list(generator(tu)[batch.start:batch.stop])

  for child in children:
    if not filterFunction(child, customBuild) or child.spelling == "":
      continue

    relOcFileName: str = child.extent.start.file.name.replace(occtBasePath, "")
    mkdirp(buildDirectory + "/" + buildType + "/" + os.path.dirname(relOcFileName))
    mkdirp(buildDirectory + "/" + buildType + "/" + relOcFileName)
    filename = buildDirectory + "/" + buildType + "/" + relOcFileName + "/" + (child.spelling if not child.spelling == "" else child.type.spelling) + extension

    if not os.path.exists(filename):
      if not child.spelling.startswith("("):
        print("Processing " + child.spelling)
        try:
          output = processFunction(tu, preamble, child, typedefGenerator(tu), templateTypedefGenerator(tu))
          bindingsFile = open(filename, "w")
          bindingsFile.write(output)
        except SkipException as e:
          print(str(e))
      else:
        print("Skipping " + child.spelling)
    else:
      print("file " + child.spelling + ".cpp already exists, skipping")

def split(a, n):
  k, m = divmod(len(a), n)
  return (a[i * k + min(i, m):(i + 1) * k + min(i + 1, m)] for i in range(n))

def processChildren(generator, buildType: str, extension: str, filterFunction: Callable[[any], bool], processFunction: Callable[[any, any], str], typedefs: any, templateTypedefs: any, preamble: str, customCode, customBuild):
  tu = parse(customCode)
  func = partial(processChildBatch, customCode, generator, buildType, extension, filterFunction, processFunction, typedefs, templateTypedefs, preamble, customBuild)
  if not customBuild:
    numthreads = multiprocessing.cpu_count()
    batches = split(range(len(generator(tu))), numthreads)
    with multiprocessing.Pool(processes=numthreads) as p:
      p.map(func, batches)
  else:
    func(range(len(generator(tu))))

def processTemplate(child):
  templateRefs = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TEMPLATE_REF, child.get_children()))
  if len(templateRefs) != 1:
    raise SkipException("The number of template refs for the template typedef \"" + child.spelling + "\" is not 1!")

  templateClass = templateRefs[0].get_definition()
  if templateClass is None:
    raise SkipException("Template class is None (" + child.spelling + ")")
  templateArgNames = list(filter(lambda x: x.kind == clang.cindex.CursorKind.TEMPLATE_TYPE_PARAMETER, templateClass.get_children()))
  templateArgs = {}
  for i, templateArgName in enumerate(templateArgNames):
    templateArgType = child.type.get_template_argument_type(i)
    if templateArgType.spelling == "":
      raise SkipException("Template argument type is empty for at least one argument. Is this class using default values for template arguments? This is currently not supported (" + child.spelling + ")")
    templateArgs[templateArgName.spelling] = templateArgType
  
  return [templateClass, templateArgs]

def embindGenerationFuncClasses(tu, preamble, child, typedefs, templateTypedefs) -> str:
  embindings = EmbindBindings(typedefs, templateTypedefs, tu)
  output = embindings.processClass(child)

  return preamble + output

def embindGenerationFuncTemplates(tu, preamble, child, typedefs, templateTypedefs) -> str:
  [templateClass, templateArgs] = processTemplate(child)
  embindings = EmbindBindings(typedefs, templateTypedefs, tu)
  output = embindings.processClass(templateClass, child, templateArgs)

  return preamble + output

def embindGenerationFuncEnums(tu, preamble, child, typedefs, templateTypedefs) -> str:
  embindings = EmbindBindings(typedefs, templateTypedefs, tu)
  output = embindings.processEnum(child)

  return preamble + output

def templateTypedefGenerator(tu):
  return list(filter(
    lambda x:
      x.kind == clang.cindex.CursorKind.TYPEDEF_DECL and
      not (x.get_definition() is None or not x == x.get_definition()) and
      filterTypedef(x) and
      x.type.get_num_template_arguments() != -1 and
      not ignoreDuplicateTypedef(x),
    tu.cursor.get_children()))

def typedefGenerator(tu):
  return list(filter(lambda x: x.kind == clang.cindex.CursorKind.TYPEDEF_DECL, tu.cursor.get_children()))

def allChildrenGenerator(tu):
  return list(tu.cursor.get_children())

def enumGenerator(tu):
  return list(filter(lambda x: x.kind == clang.cindex.CursorKind.ENUM_DECL and filterEnum(x), tu.cursor.get_children()))

def process(extension, embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, preamble, customCode, customBuild):
  processChildren(allChildrenGenerator, "bindings", extension, filterClasses, embindGenerationFuncClasses, typedefGenerator, templateTypedefGenerator, preamble, customCode, customBuild)
  processChildren(templateTypedefGenerator, "bindings", extension, filterTemplates, embindGenerationFuncTemplates, typedefGenerator, templateTypedefGenerator, preamble, customCode, customBuild)
  processChildren(enumGenerator, "bindings", extension, filterEnums, embindGenerationFuncEnums, typedefGenerator, templateTypedefGenerator, preamble, customCode, customBuild)

def typescriptGenerationFuncClasses(tu, preamble, child, typedefs, templateTypedefs) -> str:
  typescript = TypescriptBindings(typedefs, templateTypedefs, tu)
  output = typescript.processClass(child)

  return json.dumps({
    ".d.ts": preamble + output,
    "kind": "class",
    "exports": typescript.exports,
  })

def typescriptGenerationFuncTemplates(tu, preamble, child, typedefs, templateTypedefs) -> str:
  [templateClass, templateArgs] = processTemplate(child)
  typescript = TypescriptBindings(typedefs, templateTypedefs, tu)
  output = typescript.processClass(templateClass, child, templateArgs)

  return json.dumps({
    ".d.ts": preamble + output,
    "kind": "class",
    "exports": typescript.exports,
  })

def typescriptGenerationFuncEnums(tu, preamble, child, typedefs, templateTypedefs) -> str:
  typescript = TypescriptBindings(typedefs, templateTypedefs, tu)
  output = typescript.processEnum(child)

  return json.dumps({
    ".d.ts": preamble + output,
    "kind": "enum",
    "exports": typescript.exports,
  })

def parse(additionalCppCode = ""):
  index = clang.cindex.Index.create()
  translationUnit = index.parse(
    "myMain.h", [
      "-x",
      "c++",
      "-std=c++17",
      "-stdlib=libc++",
      "-D__EMSCRIPTEN__"
    ] + includePathArgs,
    [["myMain.h", ocIncludeStatements + "\n" + handleTypedefs + "\n" + ncollectionTypedefs + "\n" + additionalCppCode]]
  )

  if len(translationUnit.diagnostics) > 0:
    print("Diagnostic Messages:")
    for d in translationUnit.diagnostics:
      print("  " + d.format())

  return translationUnit

referenceTypeTemplateDefs = \
  "\n" + \
  "// Undefine OCCT macros that conflict with Emscripten headers\n" + \
  "#undef CONSTRUCTOR\n" + \
  "#include <emscripten/bind.h>\n" + \
  "using namespace emscripten;\n" + \
  "#include <functional>\n" + \
  "\n" + \
  "template<typename T>\n" + \
  "T getReferenceValue(const emscripten::val& v) {\n" + \
  "  if(!(v.typeOf().as<std::string>() == \"object\")) {\n" + \
  "    return v.as<T>(allow_raw_pointers());\n" + \
  "  } else if(v.typeOf().as<std::string>() == \"object\" && v.hasOwnProperty(\"current\")) {\n" + \
  "    return v[\"current\"].as<T>(allow_raw_pointers());\n" + \
  "  }\n" + \
  "  throw(\"unsupported type\");\n" + \
  "}\n" + \
  "\n" + \
  "template<typename T>\n" + \
  "void updateReferenceValue(emscripten::val& v, T& val) {\n" + \
  "  if(v.typeOf().as<std::string>() == \"object\" && v.hasOwnProperty(\"current\")) {\n" + \
  "    v.set(\"current\", val);\n" + \
  "  }\n" + \
  "}\n" + \
  "\n"

def generateCustomCodeBindings(customCode):
  try:
    os.makedirs(libraryBasePath)
  except Exception:
    pass

  embindPreamble = ocIncludeStatements + "\n" + handleTypedefs + "\n" + ncollectionTypedefs + "\n" + referenceTypeTemplateDefs + "\n" + customCode

  process(".cpp", embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, embindPreamble, customCode, True)
  process(".d.ts.json", typescriptGenerationFuncClasses, typescriptGenerationFuncTemplates, typescriptGenerationFuncEnums, "", customCode, True)

if __name__ == "__main__":
  try:
    os.makedirs(libraryBasePath)
  except Exception:
    pass

  embindPreamble = ocIncludeStatements + "\n" + handleTypedefs + "\n" + ncollectionTypedefs + "\n" + referenceTypeTemplateDefs
  process(".cpp", embindGenerationFuncClasses, embindGenerationFuncTemplates, embindGenerationFuncEnums, embindPreamble, "", False)

  process(".d.ts.json", typescriptGenerationFuncClasses, typescriptGenerationFuncTemplates, typescriptGenerationFuncEnums, "", "", False)
