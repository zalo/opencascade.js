def filterIncludeFile(filename):
  if not filename.endswith(".hxx"):
    return False

  # fatal error: 'AIS_LocalStatus.hxx' file not found
  if (
    filename == "AIS_DataMapOfSelStat.hxx" or
    filename == "AIS_DataMapIteratorOfDataMapOfSelStat.hxx"
  ):
    return False

  # fatal error: 'X11/Xlib.h' file not found
  if (
    filename == "InterfaceGraphic.hxx"
  ):
    return False

  # fatal error: 'X11/XWDFile.h' file not found
  if filename == "Aspect_XWD.hxx":
    return False

  # fatal error: 'X11/Shell.h' file not found
  if filename == "IVtkDraw_Interactor.hxx":
    return False

  # error: use of undeclared identifier 'myBoxes' / error: use of undeclared identifier 'myElements'
  if filename == "BVH_IndexedBoxSet.hxx":
    return False

  # error: "Atomic operation isn't implemented for current platform!"
  if (
    filename == "BOPDS_Iterator.hxx" or
    filename == "BOPDS_IteratorSI.hxx" or
    filename == "BOPTools_BoxTree" or
    filename == "BOPTools_BoxTree.hxx" or
    filename == "BVH_LinearBuilder.hxx" or
    filename == "BVH_RadixSorter.hxx" or
    filename == "OSD_Parallel.hxx" or
    filename == "OSD_ThreadPool.hxx" or
    filename == "Standard_Atomic.hxx" or
    filename == "BOPTools_Parallel.hxx" or
    filename == "BVH_DistanceField.hxx"
  ):
    return False

  # fatal error: 'vtkType.h' file not found
  if (
    filename == "IVtk_Types.hxx" or
    filename == "IVtk_IShape.hxx" or
    filename == "IVtk_IShapeData.hxx" or
    filename == "IVtk_IShapeMesher.hxx" or
    filename == "IVtk_IShapePickerAlgo.hxx" or
    filename == "IVtkOCC_SelectableObject.hxx" or
    filename == "IVtkOCC_Shape.hxx" or
    filename == "IVtkOCC_ShapeMesher.hxx" or
    filename == "IVtkOCC_ShapePickerAlgo.hxx" or
    filename == "IVtk_IShapePickerAlgo.hxx" or
    filename == "IVtkTools.hxx" or
    filename == "IVtkTools_DisplayModeFilter.hxx" or
    filename == "IVtkTools_ShapeDataSource.hxx" or
    filename == "IVtkTools_ShapeObject.hxx" or
    filename == "IVtkTools_ShapePicker.hxx" or
    filename == "IVtkTools_SubPolyDataFilter.hxx" or
    filename == "IVtkVTK_ShapeData.hxx"
  ):
    return False

  # fatal error: 'vtkSmartPointer.h' file not found 
  if (
    filename == "IVtkVTK_View.hxx"
  ):
    return False

  # fatal error: 'windows.h' file not found 
  if (
    filename == "OSD_WNT.hxx" or
    filename == "WNT_Dword.hxx"
  ):
    return False

  # fatal error: 'vtkActor.h' file not found
  if filename == "IVtkDraw_HighlightAndSelectionPipeline.hxx":
    return False

  # error: expected member name or ';' after declaration specifiers
  if filename == "math_Householder.hxx":
    return False

  # error: typedef redefinition with different types (conflicts with emsdk 4.0+ WebGL headers)
  if (
    filename == "OpenGl_GLESExtensions.hxx" or
    filename == "OpenGl_GlFunctions.hxx"
  ):
    return False

  # error: rapidjson v1.1.0 const member assignment fails with C++17 strict rules
  if filename == "RWGltf_GltfJsonParser.hxx":
    return False

  # error: no member named 'NbIterations' in 'MathLin::EigenResult' (OCCT 8.0 RC4)
  if filename == "MathLin_Jacobi.hxx":
    return False

  # error: OCCT #define CONSTRUCTOR macro conflicts with emscripten val.h EM_INVOKER_KIND::CONSTRUCTOR
  if filename == "IntCurve_IntConicConic.hxx":
    return False

  # NCollectionAliases headers that reference non-existent types in OCCT 8.0
  # (BOPDS_ListOfPaveBlock.hxx and Graphic3d_MapOfStructure.hxx were removed)
  if (
    filename == "BOPDS_DataMapOfIntegerListOfPaveBlock.hxx" or
    filename == "BOPDS_DataMapOfPaveBlockListOfPaveBlock.hxx" or
    filename == "BOPDS_IndexedDataMapOfPaveBlockListOfPaveBlock.hxx" or
    filename == "BOPDS_VectorOfListOfPaveBlock.hxx" or
    filename == "Graphic3d_MapIteratorOfMapOfStructure.hxx"
  ):
    return False

  return True
