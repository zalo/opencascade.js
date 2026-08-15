import clang.cindex

def filterMethodOrProperty(theClass, methodOrProperty):
  # OCCT 8.0: Many classes explicitly delete copy/move constructors and assignment operators.
  # Embind can't handle these — wire.h tries to instantiate copy construction.
  # Filter them out generically using libclang's is_deleted_method().
  if methodOrProperty.kind in [clang.cindex.CursorKind.CONSTRUCTOR, clang.cindex.CursorKind.CXX_METHOD]:
    try:
      if methodOrProperty.is_deleted_method():
        return False
    except AttributeError:
      pass

  # # error: no matching conversion for functional-style cast from '(lambda at /opencascade.js/build/modules/module.TKHLR.wasm.cpp:8477:153)' to 'std::function<HLRAlgo_BiPoint::PointsT &(HLRAlgo_PolyAlgo &, emscripten::val, emscripten::val, emscripten::val, emscripten::val, emscripten::val)>'
  # if \
  #   (theClass.spelling == "HLRAlgo_PolyAlgo" and methodOrProperty.spelling == "Show") or \
  #   (theClass.spelling == "HLRAlgo_PolyAlgo" and methodOrProperty.spelling == "Hide") or \
  #   (theClass.spelling == "TopOpeBRepDS_DataStructure" and methodOrProperty.spelling == "ChangeMapOfShapeWithState") or \
  #   (theClass.spelling == "TopOpeBRepDS_TKI" and methodOrProperty.spelling == "ChangeValue"):
  #   return False

  # error: undefined symbol: _ZN16AppDef_MultiLine12SetParameterEid
  if theClass.spelling == "AppDef_MultiLine" and methodOrProperty.spelling == "SetParameter":
    return False

  # error: overload of method DN has no implementation
  if theClass.spelling == "BSplCLib" and methodOrProperty.spelling == "DN":
    return False

  # error: overload of method Knots has no implementation
  if theClass.spelling == "BlendFunc" and (
    methodOrProperty.spelling == "Knots" or
    methodOrProperty.spelling == "Mults"
  ):
    return False

  # error: overload of method Error has no implementation
  if (
    theClass.spelling == "AppDef_TheResol" or
    theClass.spelling == "AppDef_ResConstraintOfTheGradient" or
    theClass.spelling == "AppDef_ResConstraintOfMyGradientOfCompute" or
    theClass.spelling == "AppDef_ResConstraintOfMyGradientbisOfBSplineCompute"
  ) and methodOrProperty.spelling == "Error":
    return False

  # error: overload of method Dump has no implementation
  if theClass.spelling == "BinTools_Curve2dSet" and methodOrProperty.spelling == "Dump":
    return False

  # error: Implicitly binding raw pointers is illegal (BRepMesh_DiscretRoot* reference parameter)
  if theClass.spelling == "BRepMesh_IncrementalMesh" and methodOrProperty.spelling == "Discret":
    return False

  # error: call to deleted constructor of 'std::istream'
  if (
    (theClass.spelling == "BinObjMgt_Persistent" and methodOrProperty.spelling == "Read") or
    (theClass.spelling == "BinTools" and methodOrProperty.spelling == "GetReal") or
    (theClass.spelling == "BinTools" and methodOrProperty.spelling == "GetShortReal") or
    (theClass.spelling == "BinTools" and methodOrProperty.spelling == "GetInteger") or
    (theClass.spelling == "BinTools" and methodOrProperty.spelling == "GetBool") or
    (theClass.spelling == "BinTools" and methodOrProperty.spelling == "GetExtChar") or
    (theClass.spelling == "BinTools_SurfaceSet" and methodOrProperty.spelling == "ReadSurface") or
    (theClass.spelling == "BinTools_Curve2dSet" and methodOrProperty.spelling == "ReadCurve2d") or
    (theClass.spelling == "BinTools_CurveSet" and methodOrProperty.spelling == "ReadCurve") or
    (theClass.spelling == "BinTools_IStream" and methodOrProperty.spelling == "Stream")
  ):
    return False

  # error: no matching function for call to object of type 'std::function<bool (MeshVS_DataSource &, int, bool, NCollection_Array1<double> &, emscripten::val, MeshVS_EntityType &)>'
  if \
    (theClass.spelling == "MeshVS_DataSource" and methodOrProperty.spelling == "GetGeom") or \
    (theClass.spelling == "MeshVS_DataSource" and methodOrProperty.spelling == "GetGeomType") or \
    (theClass.spelling == "MeshVS_DeformedDataSource" and methodOrProperty.spelling == "GetGeom") or \
    (theClass.spelling == "MeshVS_DeformedDataSource" and methodOrProperty.spelling == "GetGeomType") or \
    (theClass.spelling == "Interface_STAT" and methodOrProperty.spelling == "Description") or \
    (theClass.spelling == "Interface_STAT" and methodOrProperty.spelling == "Phase"):
    return False

  # error: calling a private constructor of class 'X'
  if \
    (theClass.spelling == "VrmlData_Node" and methodOrProperty.spelling == "Scene") or \
    (theClass.spelling == "Font_FTFont" and methodOrProperty.spelling == "GlyphImage") or \
    (theClass.spelling == "LDOMString" and methodOrProperty.spelling == "getOwnerDocument") or \
    (theClass.spelling == "LDOM_MemManager" and methodOrProperty.spelling == "Self") or \
    (theClass.spelling == "Aspect_VKeySet" and methodOrProperty.spelling == "Mutex") or \
    (theClass.spelling == "Image_VideoRecorder" and methodOrProperty.spelling == "ChangeFrame") or \
    (theClass.spelling == "StdPrs_BRepFont" and methodOrProperty.spelling == "Mutex") or \
    (theClass.spelling == "AdvApp2Var_Network" and methodOrProperty.spelling == "ChangePatch") or \
    (theClass.spelling == "AdvApp2Var_Framework" and methodOrProperty.spelling == "IsoU") or \
    (theClass.spelling == "LDOM_Node" and methodOrProperty.spelling == "getOwnerDocument") or \
    (theClass.spelling == "AdvApp2Var_Network" and methodOrProperty.spelling == "Patch") or \
    (theClass.spelling == "AdvApp2Var_Framework" and methodOrProperty.spelling == "IsoV"):
    return False

  # error: non-const lvalue reference to type 'X' cannot bind to a temporary of type 'X'
  if \
    (theClass.spelling == "Resource_Unicode") or \
    (theClass.spelling == "NCollection_DataMap" and methodOrProperty.spelling == "Find") or \
    (theClass.spelling == "OSD_Thread" and methodOrProperty.spelling == "Wait") or \
    (theClass.spelling == "TCollection_ExtendedString" and methodOrProperty.spelling == "ToUTF8CString") or \
    (theClass.spelling == "Message" and methodOrProperty.spelling == "ToOSDMetric") or \
    (theClass.spelling == "OSD" and methodOrProperty.spelling == "RealToCString") or \
    (theClass.spelling == "XmlObjMgt" and methodOrProperty.spelling == "GetInteger") or \
    (theClass.spelling == "NCollection_IndexedDataMap" and methodOrProperty.spelling == "FindFromKey") or \
    (theClass.spelling == "XmlObjMgt" and methodOrProperty.spelling == "GetReal") or \
    (theClass.spelling == "BOPAlgo_Tools" and methodOrProperty.spelling == "PerformCommonBlocks") or \
    (theClass.spelling == "Transfer_Finder" and methodOrProperty.spelling == "GetStringAttribute") or \
    (theClass.spelling == "MoniTool_TypedValue" and methodOrProperty.spelling == "Internals") or \
    (theClass.spelling == "MoniTool_AttrList" and methodOrProperty.spelling == "GetStringAttribute") or \
    (theClass.spelling == "MoniTool_CaseData" and methodOrProperty.spelling == "Text") or \
    (theClass.spelling == "StepData_StepReaderData" and methodOrProperty.spelling == "ReadEnumParam") or \
    (theClass.spelling == "XSControl_Vars") or \
    (theClass.spelling == "MeshVS_DataSource" and methodOrProperty.spelling == "GetGroup"):
    return False

  # Error during build
  # error: static_assert failed due to requirement '!std::is_pointer<void (*)(Graphic3d_CView *)>::value' "Implicitly binding raw pointers is illegal.  Specify allow_raw_pointer<arg<?>>"
  if theClass.spelling == "Graphic3d_GraduatedTrihedron" and methodOrProperty.spelling == "CubicAxesCallback":
    return False

  # Error during build: error: address of bit-field requested
  if theClass.type.spelling == "MeshVS_TwoColors":
    return False
  
  # Error during build: error: address of bit-field requested
  if (
    theClass.spelling == "Graphic3d_CStructure" and
    methodOrProperty.spelling in [
      "IsInfinite",
      "stick",
      "highlight",
      "visible",
      "HLRValidation",
      "IsForHighlight",
      "IsMutable",
      "Is2dText",
    ]
  ):
    return False

  if methodOrProperty.access_specifier == clang.cindex.AccessSpecifier.PUBLIC and methodOrProperty.kind == clang.cindex.CursorKind.USING_DECLARATION:
    print("Using declarations are not supported! (" + theClass.spelling + ", " + methodOrProperty.spelling + ")")
    return False

  if (
    methodOrProperty.result_type.spelling.startswith("Standard_OStream") or
    methodOrProperty.type.spelling == "std::ifstream"
  ):
    return False

  # Skip methods/constructors with ostream/istream parameters (non-copyable, can't pass through Embind)
  # Also detects misresolved types: libclang sometimes reports complex types like
  # occ::handle<X> or std::istream as 'int' when template resolution fails.
  # We cross-check against source tokens to catch these cases.
  if methodOrProperty.kind in [
    clang.cindex.CursorKind.CXX_METHOD,
    clang.cindex.CursorKind.CONSTRUCTOR,
    clang.cindex.CursorKind.FUNCTION_DECL,
  ]:
    try:
      for arg in methodOrProperty.get_arguments():
        argType = arg.type.spelling.lower()
        if "ostream" in argType or "istream" in argType:
          return False
        # Detect misresolved parameter types: if resolved type is 'int' but source tokens
        # contain complex type indicators, the type was incorrectly simplified
        canonical = arg.type.get_canonical().spelling
        stripped = canonical.replace('const ', '').replace(' &', '').replace('&', '').replace(' *', '').replace('*', '').strip()
        if stripped in ['int', 'unsigned int']:
          tokens = [t.spelling for t in arg.get_tokens()]
          # Source mentions handle/Handle/occ → misresolved occ::handle<X> type
          if any(t in ['Handle', 'handle', 'occ'] for t in tokens):
            print(f"  Skipping {theClass.spelling}::{methodOrProperty.spelling}: param '{arg.spelling}' type misresolved to '{canonical}' (source tokens suggest handle type)")
            return False
          # Source mentions stream types → misresolved std::istream/ostream
          if any('stream' in t.lower() for t in tokens):
            print(f"  Skipping {theClass.spelling}::{methodOrProperty.spelling}: param '{arg.spelling}' type misresolved to '{canonical}' (source tokens suggest stream type)")
            return False
    except Exception:
      pass


  # OCCT 8.0: gp_Dir and gp_Dir2d have nested enum class D for axis selection.
  # libclang reports these as 'gp_Dir::D' / 'const gp_Dir::D' (or gp_Dir2d::D) on
  # consuming classes like gp_Ax1, gp_Ax2, gp_Ax3, gp_Pln, etc.
  if methodOrProperty.kind in [clang.cindex.CursorKind.CONSTRUCTOR, clang.cindex.CursorKind.CXX_METHOD]:
    try:
      for arg in methodOrProperty.get_arguments():
        ts = arg.type.spelling
        if ts in ['D', 'const D'] or '::D' in ts:
          return False
    except Exception:
      pass

  # error: call to implicitly-deleted copy constructor of 'Aspect_VKeySet'
  # error: rvalue reference to type 'Aspect_VKeySet' cannot bind to lvalue of type 'Aspect_VKeySet'
  # error: call to implicitly-deleted copy constructor of 'Aspect_VKeySet'
  if (
    theClass.spelling == "AIS_ViewController" and (
      methodOrProperty.spelling == "Keys" or
      methodOrProperty.spelling == "ChangeKeys"
    )
  ) or (
    theClass.spelling == "Aspect_WindowInputListener" and (
      methodOrProperty.spelling == "Keys" or
      methodOrProperty.spelling == "ChangeKeys"
    )
  ):
    return False

  # error: private copy constructor used in this function
  if theClass.spelling == "BRepClass3d_SolidExplorer" and methodOrProperty.spelling == "GetTree":
    return False

  # Error comes in the binding code for "gp_TrsfNLerp", which is a template specialization of "NCollection_Lerp"
  # error: type name requires a specifier or qualifier
  # error: cannot cast from type 'void (NCollection_Lerp<gp_Trsf>::*)(double, gp_Trsf &) const' to pointer type 'gp_Trsf (*)(const gp_Trsf &, const gp_Trsf &, double)'
  if theClass.spelling == "NCollection_Lerp" and methodOrProperty.spelling == "Interpolate" and methodOrProperty.is_static_method():
    return False

  # causes extreme memory growth which fails the build (see corresponding typedef filter)
  if theClass.spelling in ["NCollection_Sequence", "NCollection_List"] and "::Iterator" in methodOrProperty.displayname:
    return False

  # NCollection template containers use nested dependent types (value_type, iterator,
  # allocator_type, const_reference) that aren't resolved when binding template
  # specializations via typedef.  Filter out methods/constructors using these types.
  # Note: Value/SetValue are added manually via additionalCppCode in build YAML files.
  _ncoll_containers = {"NCollection_Array1", "NCollection_HArray1", "NCollection_IndexedMap"}
  _ncoll_bad_types = {
    "value_type", "const value_type &", "value_type &&",
    "iterator", "const_iterator",
    "allocator_type", "const allocator_type &",
    "const_reference", "reference",
    # NCollection_HArray1 template parameter names
    "TheItemType", "const TheItemType &",
    "Array1Type", "const Array1Type &",
  }
  if theClass.spelling in _ncoll_containers:
    if methodOrProperty.result_type.spelling in _ncoll_bad_types:
      return False
    if methodOrProperty.kind in [
      clang.cindex.CursorKind.CXX_METHOD,
      clang.cindex.CursorKind.CONSTRUCTOR,
    ]:
      try:
        for arg in methodOrProperty.get_arguments():
          if arg.type.spelling in _ncoll_bad_types:
            return False
      except Exception:
        pass

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZNK19Geom2dHatch_Hatcher6IsDoneEv`: undefined). Build with -s ASSERTIONS=1 for more info.
  # Seems like ::isDone() is not defined anywhere
  if theClass.spelling == "Geom2dHatch_Hatcher" and methodOrProperty.spelling == "IsDone":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZN21Geom2dAPI_Interpolate13ClearTangentsEv`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dAPI_Interpolate" and methodOrProperty.spelling == "ClearTangents":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZNK21Geom2dGcc_Lin2dTanObl11IsParallel2Ev`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dGcc_Lin2dTanObl" and methodOrProperty.spelling == "IsParallel2":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZN25Geom2dInt_Geom2dCurveTool11IsCompositeERK17Adaptor2d_Curve2d`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dInt_Geom2dCurveTool" and methodOrProperty.spelling == "IsComposite":
    return False

  # Creates error during instantiation:
  # Uncaught (in promise) RuntimeError: abort(Assertion failed: bad export type for `_ZN46Geom2dInt_TheCurveLocatorOfTheProjPCurOfGInter6LocateERK17Adaptor2d_Curve2dS2_iiR17Extrema_POnCurv2dS4_`: undefined). Build with -s ASSERTIONS=1 for more info.
  if theClass.spelling == "Geom2dInt_TheCurveLocatorOfTheProjPCurOfGInter" and methodOrProperty.spelling == "Locate":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_IntSS" and methodOrProperty.spelling == "SetTolFixTangents":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_IntSS" and methodOrProperty.spelling == "TolFixTangents":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomAPI_Interpolate" and methodOrProperty.spelling == "ClearTangents":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomFill_FunctionGuide" and methodOrProperty.spelling == "Deriv2T":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomFill_SweepSectionGenerator" and methodOrProperty.spelling == "Init":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_ResConstraintOfMyGradientOfTheComputeLineBezierOfWLApprox" and methodOrProperty.spelling == "Error":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_ResConstraintOfMyGradientbisOfTheComputeLineOfWLApprox" and methodOrProperty.spelling == "Error":
    return False

  # Creates error during instantiation:
  # see above
  if theClass.spelling == "GeomInt_WLApprox" and methodOrProperty.spelling == "Perform":
    return False

  # error: no matching constructor for initialization of 'Extrema_ExtCC'
  if theClass.spelling in [
    "GeomAPI_ExtremaCurveSurface",
    "GeomAPI_ExtremaCurveCurve"
   ] and methodOrProperty.spelling == "Extrema":
    return False

  # error: call to implicitly-deleted copy constructor of 'Extrema_ExtPS'
  if theClass.spelling == "GeomAPI_ProjectPointOnSurf" and methodOrProperty.spelling == "Extrema":
    return False

  # error: no matching function for call to 'select_overload'
  if theClass.spelling == "Select3D_SensitiveTriangulation" and methodOrProperty.spelling == "LastDetectedTriangle":
    return False

  # error: call to implicitly-deleted copy constructor of 'IntTools_FClass2d'
  # error: call to implicitly-deleted copy constructor of 'BRepClass3d_SolidClassifier'
  if theClass.spelling == "IntTools_Context" and methodOrProperty.spelling in [
    "FClass2d",
    "ProjPS",
    "SolidClassifier"
  ]:
    return False

  # error: call to implicitly-deleted copy constructor of 'std::__2::basic_stringstream<char, std::__2::char_traits<char>, std::__2::allocator<char>>'
  if theClass.spelling == "Message_AttributeStream" and methodOrProperty.spelling == "Stream":
    return False

  # error: calling a private constructor of class 'OpenGl_Clipping'
  if theClass.spelling == "OpenGl_Context" and methodOrProperty.spelling in [
    "ChangeClipping",
    "Clipping",
  ]:
    return False

  # many errors
  if theClass.spelling == "OpenGl_GlFunctions" and methodOrProperty.kind == clang.cindex.CursorKind.FIELD_DECL:
    return False

  if theClass.spelling == "OpenGl_GraphicDriver" and methodOrProperty.spelling in [
    "Options",
    "ChangeOptions",
  ]:
    return False

  # Several BSplCLib statics (Analyse, KnotAnalysis, ...) take non-const enum
  # references as out-params (GeomAbs_BSplKnotDistribution&) which Embind
  # cannot bind — drop any method with such a parameter so the rest of
  # BSplCLib compiles.
  if theClass.spelling == "BSplCLib":
    for _arg in methodOrProperty.get_arguments():
      if "BSplKnotDistribution" in _arg.type.spelling:
        return False

  # The 2-D geometric-constraint solvers (Gcc) expose
  #   void WhichQualifier(Standard_Integer, GccEnt_Position&, GccEnt_Position&) const
  # which returns the per-solution qualifiers through non-const enum
  # references. Embind cannot bind an enum out-param (bind.h:531 "non-const
  # lvalue reference to type 'GccEnt_Position' cannot bind to a temporary"),
  # and that ONE method was enough to fail the whole binding file — which is
  # why the entire Geom2dGcc/GccAna family was silently missing from the
  # module. Same precedent as the BSplCLib enum out-params above.
  if methodOrProperty.kind in [
    clang.cindex.CursorKind.CXX_METHOD,
    clang.cindex.CursorKind.FUNCTION_DECL,
  ]:
    try:
      for _arg in methodOrProperty.get_arguments():
        _ts = _arg.type.spelling
        if "GccEnt_Position" in _ts and "&" in _ts and not _ts.startswith("const"):
          return False
    except Exception:
      pass

  # OCCT 8.0.1 declares this static overload in TCollection_AsciiString.hxx
  # (line ~1415) but never defines it — declare-without-define upstream bug:
  # wasm-ld: error: undefined symbol: TCollection_AsciiString::IsEqual(TCollection_AsciiString const&, char const*)
  if theClass.spelling == "TCollection_AsciiString" and methodOrProperty.spelling == "IsEqual":
    _args = [a.type.spelling for a in methodOrProperty.get_arguments()]
    if len(_args) == 2 and "char" in _args[1]:
      return False

  # wasm-ld: error: /opencascade.js/build/bindings/OpenGl/OpenGl_ShaderProgram.hxx/OpenGl_ShaderProgram.cpp.o: undefined symbol: OpenGl_ShaderProgram::compileShaderVerbose(opencascade::handle<OpenGl_Context> const&, opencascade::handle<OpenGl_ShaderObject> const&, TCollection_AsciiString const&, bool)
  if theClass.spelling == "OpenGl_ShaderProgram" and methodOrProperty.spelling == "compileShaderVerbose":
    return False

  # wasm-ld: error: /opencascade.js/build/bindings/OpenGl/OpenGl_View.hxx/OpenGl_View.cpp.o: undefined symbol: OpenGl_View::SetTextureEnv(opencascade::handle<OpenGl_Context> const&, opencascade::handle<Graphic3d_TextureEnv> const&)
  if theClass.spelling == "OpenGl_View" and methodOrProperty.spelling in [
    "SetTextureEnv",
    "SetBackgroundTextureStyle",
    "SetBackgroundGradient",
    "SetBackgroundGradientType",
  ]:
    return False

  # error: call to 'abs' is ambiguous
  if (
    (
      theClass.spelling == "NCollection_Vec2" or
      theClass.spelling == "NCollection_Vec3" or
      theClass.spelling == "NCollection_Vec4"
    ) and
    methodOrProperty.spelling == "cwiseAbs"
  ):
    return False

  # error: undefined symbol: _ZN21XCAFDoc_GeomToleranceC2ERKN11opencascade6handleIS_EE (referenced by top-level compiled C/C++ code)
  if (
    theClass.spelling == "XCAFDoc_GeomTolerance" and
    methodOrProperty.kind == clang.cindex.CursorKind.CONSTRUCTOR and
    methodOrProperty.type.spelling == "void (const opencascade::handle<XCAFDoc_GeomTolerance> &)"
  ):
    return False

  return True
