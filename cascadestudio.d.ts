export declare class Quantity_Color {
  Name_1(): Quantity_NameOfColor;
  SetValues_1(theName: Quantity_NameOfColor): void;
  Rgb(): any;
  Values(theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theType: Quantity_TypeOfColor): void;
  SetValues_2(theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theType: Quantity_TypeOfColor): void;
  Red(): Standard_Real;
  Green(): Standard_Real;
  Blue(): Standard_Real;
  Hue(): Standard_Real;
  Light(): Standard_Real;
  ChangeIntensity(theDelta: Standard_Real): void;
  Saturation(): Standard_Real;
  ChangeContrast(theDelta: Standard_Real): void;
  IsDifferent(theOther: Quantity_Color): Standard_Boolean;
  IsEqual(theOther: Quantity_Color): Standard_Boolean;
  Distance(theColor: Quantity_Color): Standard_Real;
  SquareDistance(theColor: Quantity_Color): Standard_Real;
  Delta(theColor: Quantity_Color, DC: Standard_Real, DI: Standard_Real): void;
  DeltaE2000(theOther: Quantity_Color): Standard_Real;
  static Name_2(theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): Quantity_NameOfColor;
  static StringName(theColor: Quantity_NameOfColor): Standard_Character;
  static ColorFromName_1(theName: Standard_Character, theColor: Quantity_NameOfColor): Standard_Boolean;
  static ColorFromName_2(theColorNameString: Standard_Character, theColor: Quantity_Color): Standard_Boolean;
  static ColorFromHex(theHexColorString: Standard_Character, theColor: Quantity_Color): Standard_Boolean;
  static ColorToHex(theColor: Quantity_Color, theToPrefixHash: Standard_Boolean): XCAFDoc_PartId;
  static Convert_sRGB_To_HLS(theRgb: NCollection_Vec3<float>): any;
  static Convert_HLS_To_sRGB(theHls: NCollection_Vec3<float>): any;
  static Convert_LinearRGB_To_HLS(theRgb: NCollection_Vec3<float>): any;
  static Convert_HLS_To_LinearRGB(theHls: NCollection_Vec3<float>): any;
  static Convert_LinearRGB_To_Lab(theRgb: NCollection_Vec3<float>): any;
  static Convert_Lab_To_Lch(theLab: NCollection_Vec3<float>): any;
  static Convert_Lab_To_LinearRGB(theLab: NCollection_Vec3<float>): any;
  static Convert_Lch_To_Lab(theLch: NCollection_Vec3<float>): any;
  static Color2argb(theColor: Quantity_Color, theARGB: Standard_Integer): void;
  static Argb2color(theARGB: Standard_Integer, theColor: Quantity_Color): void;
  static Convert_LinearRGB_To_sRGB_1(theLinearValue: Standard_Real): Standard_Real;
  static Convert_LinearRGB_To_sRGB_2(theLinearValue: Standard_ShortReal): Standard_ShortReal;
  static Convert_sRGB_To_LinearRGB_1(thesRGBValue: Standard_Real): Standard_Real;
  static Convert_sRGB_To_LinearRGB_2(thesRGBValue: Standard_ShortReal): Standard_ShortReal;
  static Convert_LinearRGB_To_sRGB_approx22_1(theLinearValue: Standard_ShortReal): Standard_ShortReal;
  static Convert_sRGB_To_LinearRGB_approx22_1(thesRGBValue: Standard_ShortReal): Standard_ShortReal;
  static Convert_LinearRGB_To_sRGB_approx22_2(theRGB: NCollection_Vec3<float>): any;
  static Convert_sRGB_To_LinearRGB_approx22_2(theRGB: NCollection_Vec3<float>): any;
  static HlsRgb(theH: Standard_Real, theL: Standard_Real, theS: Standard_Real, theR: Standard_Real, theG: Standard_Real, theB: Standard_Real): void;
  static RgbHls(theR: Standard_Real, theG: Standard_Real, theB: Standard_Real, theH: Standard_Real, theL: Standard_Real, theS: Standard_Real): void;
  static Epsilon(): Standard_Real;
  static SetEpsilon(theEpsilon: Standard_Real): void;
  delete(): void;
}

  export declare class Quantity_Color_1 extends Quantity_Color {
    constructor();
  }

  export declare class Quantity_Color_2 extends Quantity_Color {
    constructor(theName: Quantity_NameOfColor);
  }

  export declare class Quantity_Color_3 extends Quantity_Color {
    constructor(theC1: Standard_Real, theC2: Standard_Real, theC3: Standard_Real, theType: Quantity_TypeOfColor);
  }

  export declare class Quantity_Color_4 extends Quantity_Color {
    constructor(theRgb: NCollection_Vec3<float>);
  }

export declare type Quantity_TypeOfColor = {
  Quantity_TOC_RGB: {};
  Quantity_TOC_sRGB: {};
  Quantity_TOC_HLS: {};
  Quantity_TOC_CIELab: {};
  Quantity_TOC_CIELch: {};
}

export declare class Quantity_ColorRGBA {
  SetValues(theRed: Standard_ShortReal, theGreen: Standard_ShortReal, theBlue: Standard_ShortReal, theAlpha: Standard_ShortReal): void;
  GetRGB(): Quantity_Color;
  ChangeRGB(): Quantity_Color;
  SetRGB(theRgb: Quantity_Color): void;
  Alpha(): Standard_ShortReal;
  SetAlpha(theAlpha: Standard_ShortReal): void;
  IsDifferent(theOther: Quantity_ColorRGBA): Standard_Boolean;
  IsEqual(theOther: Quantity_ColorRGBA): Standard_Boolean;
  static ColorFromName(theColorNameString: Standard_Character, theColor: Quantity_ColorRGBA): Standard_Boolean;
  static ColorFromHex(theHexColorString: Standard_Character, theColor: Quantity_ColorRGBA, theAlphaComponentIsOff: Standard_Boolean): Standard_Boolean;
  static ColorToHex(theColor: Quantity_ColorRGBA, theToPrefixHash: Standard_Boolean): XCAFDoc_PartId;
  static Convert_LinearRGB_To_sRGB(theRGB: NCollection_Vec4<float>): any;
  static Convert_sRGB_To_LinearRGB(theRGB: NCollection_Vec4<float>): any;
  delete(): void;
}

  export declare class Quantity_ColorRGBA_1 extends Quantity_ColorRGBA {
    constructor();
  }

  export declare class Quantity_ColorRGBA_2 extends Quantity_ColorRGBA {
    constructor(theRgb: Quantity_Color);
  }

  export declare class Quantity_ColorRGBA_3 extends Quantity_ColorRGBA {
    constructor(theRgb: Quantity_Color, theAlpha: Standard_ShortReal);
  }

  export declare class Quantity_ColorRGBA_4 extends Quantity_ColorRGBA {
    constructor(theRgba: NCollection_Vec4<float>);
  }

  export declare class Quantity_ColorRGBA_5 extends Quantity_ColorRGBA {
    constructor(theRed: Standard_ShortReal, theGreen: Standard_ShortReal, theBlue: Standard_ShortReal, theAlpha: Standard_ShortReal);
  }

export declare type Message_Gravity = {
  Message_Trace: {};
  Message_Info: {};
  Message_Warning: {};
  Message_Alarm: {};
  Message_Fail: {};
}

export declare class Message {
  constructor();
  static DefaultMessenger(): any;
  static Send_1(theGravity: Message_Gravity): any;
  static Send_2(theMessage: XCAFDoc_PartId, theGravity: Message_Gravity): void;
  static SendFail_1(): any;
  static SendAlarm_1(): any;
  static SendWarning_1(): any;
  static SendInfo_1(): any;
  static SendTrace_1(): any;
  static SendFail_2(theMessage: XCAFDoc_PartId): void;
  static SendAlarm_2(theMessage: XCAFDoc_PartId): void;
  static SendWarning_2(theMessage: XCAFDoc_PartId): void;
  static SendInfo_2(theMessage: XCAFDoc_PartId): void;
  static SendTrace_2(theMessage: XCAFDoc_PartId): void;
  static FillTime(Hour: Standard_Integer, Minute: Standard_Integer, Second: Standard_Real): XCAFDoc_PartId;
  static DefaultReport(theToCreate: Standard_Boolean): any;
  static MetricFromString_1(theString: Standard_Character, theType: Message_MetricType): Standard_Boolean;
  static MetricToString(theType: Message_MetricType): Standard_Character;
  static MetricFromString_2(theString: Standard_Character): Message_MetricType;
  static ToMessageMetric(theMemInfo: any, theMetric: Message_MetricType): Standard_Boolean;
  delete(): void;
}

export declare class Message_ProgressRange {
  UserBreak(): Standard_Boolean;
  More(): Standard_Boolean;
  IsActive(): Standard_Boolean;
  Close(): void;
  delete(): void;
}

  export declare class Message_ProgressRange_1 extends Message_ProgressRange {
    constructor();
  }

  export declare class Message_ProgressRange_2 extends Message_ProgressRange {
    constructor(theOther: Message_ProgressRange);
  }

export declare class Precision {
  constructor();
  static Angular(): Standard_Real;
  static Confusion(): Standard_Real;
  static SquareConfusion(): Standard_Real;
  static Computational(): Standard_Real;
  static SquareComputational(): Standard_Real;
  static Intersection(): Standard_Real;
  static Approximation(): Standard_Real;
  static Parametric_1(P: Standard_Real, T: Standard_Real): Standard_Real;
  static PConfusion_1(T: Standard_Real): Standard_Real;
  static SquarePConfusion(): Standard_Real;
  static PIntersection_1(T: Standard_Real): Standard_Real;
  static PApproximation_1(T: Standard_Real): Standard_Real;
  static Parametric_2(P: Standard_Real): Standard_Real;
  static PConfusion_2(): Standard_Real;
  static PIntersection_2(): Standard_Real;
  static PApproximation_2(): Standard_Real;
  static IsInfinite(R: Standard_Real): Standard_Boolean;
  static IsPositiveInfinite(R: Standard_Real): Standard_Boolean;
  static IsNegativeInfinite(R: Standard_Real): Standard_Boolean;
  static Infinite(): Standard_Real;
  delete(): void;
}

export declare class TCollection_ExtendedString {
  AssignCat_1(theOther: TCollection_ExtendedString): void;
  AssignCat_2(theOther: Standard_Integer): void;
  AssignCat_3(theChar: Standard_Character): void;
  AssignCat_4(theOther: Standard_Real): void;
  AssignCat_5(theChar: Standard_ExtCharacter): void;
  AssignCat_6(theString: Standard_ExtCharacter, theLength: Standard_Integer): void;
  AssignCat_7(theString: Standard_ExtCharacter): void;
  AssignCat_9(theStringView: any): void;
  Cat_1(theOther: Standard_ExtCharacter, theLength: Standard_Integer): TCollection_ExtendedString;
  Cat_2(theOther: Standard_ExtCharacter): TCollection_ExtendedString;
  Cat_3(theOther: Standard_Integer): TCollection_ExtendedString;
  Cat_4(theOther: Standard_Real): TCollection_ExtendedString;
  Cat_5(theChar: Standard_Character): TCollection_ExtendedString;
  Cat_6(theChar: Standard_ExtCharacter): TCollection_ExtendedString;
  Cat_7(theOther: TCollection_ExtendedString): TCollection_ExtendedString;
  ChangeAll(theChar: Standard_ExtCharacter, theNewChar: Standard_ExtCharacter): void;
  Clear(): void;
  Copy_1(theString: Standard_ExtCharacter, theLength: Standard_Integer): void;
  Copy_2(theString: Standard_ExtCharacter): void;
  Copy_3(theFromWhere: TCollection_ExtendedString): void;
  Move(theOther: TCollection_ExtendedString): void;
  Swap(theOther: TCollection_ExtendedString): void;
  Insert_1(theWhere: Standard_Integer, theWhat: Standard_ExtCharacter): void;
  Insert_2(theWhere: Standard_Integer, theWhat: Standard_ExtCharacter, theLength: Standard_Integer): void;
  Insert_3(theWhere: Standard_Integer, theWhat: Standard_ExtCharacter): void;
  Insert_4(theWhere: Standard_Integer, theWhat: TCollection_ExtendedString): void;
  IsEmpty(): Standard_Boolean;
  IsEqual_1(theOther: Standard_ExtCharacter, theLength: Standard_Integer): Standard_Boolean;
  IsEqual_2(theOther: Standard_ExtCharacter): Standard_Boolean;
  IsEqual_3(theOther: TCollection_ExtendedString): Standard_Boolean;
  IsDifferent_1(theOther: Standard_ExtCharacter, theLength: Standard_Integer): Standard_Boolean;
  IsDifferent_2(theOther: Standard_ExtCharacter): Standard_Boolean;
  IsDifferent_3(theOther: TCollection_ExtendedString): Standard_Boolean;
  IsLess_1(theOther: Standard_ExtCharacter, theLength: Standard_Integer): Standard_Boolean;
  IsLess_2(theOther: Standard_ExtCharacter): Standard_Boolean;
  IsLess_3(theOther: TCollection_ExtendedString): Standard_Boolean;
  IsGreater_1(theOther: Standard_ExtCharacter, theLength: Standard_Integer): Standard_Boolean;
  IsGreater_2(theOther: Standard_ExtCharacter): Standard_Boolean;
  IsGreater_3(theOther: TCollection_ExtendedString): Standard_Boolean;
  StartsWith_1(theStartString: Standard_ExtCharacter, theLength: Standard_Integer): Standard_Boolean;
  StartsWith_2(theStartString: Standard_ExtCharacter): Standard_Boolean;
  StartsWith_3(theStartString: TCollection_ExtendedString): Standard_Boolean;
  EndsWith_1(theEndString: Standard_ExtCharacter, theLength: Standard_Integer): Standard_Boolean;
  EndsWith_2(theEndString: Standard_ExtCharacter): Standard_Boolean;
  EndsWith_3(theEndString: TCollection_ExtendedString): Standard_Boolean;
  IsAscii(): Standard_Boolean;
  Length(): Standard_Integer;
  RemoveAll(theWhat: Standard_ExtCharacter): void;
  Remove(theWhere: Standard_Integer, theHowMany: Standard_Integer): void;
  Search_1(theWhat: Standard_ExtCharacter, theLength: Standard_Integer): Standard_Integer;
  Search_2(theWhat: Standard_ExtCharacter): Standard_Integer;
  Search_3(theWhat: TCollection_ExtendedString): Standard_Integer;
  SearchFromEnd_1(theWhat: Standard_ExtCharacter, theLength: Standard_Integer): Standard_Integer;
  SearchFromEnd_2(theWhat: Standard_ExtCharacter): Standard_Integer;
  SearchFromEnd_3(theWhat: TCollection_ExtendedString): Standard_Integer;
  SetValue_1(theWhere: Standard_Integer, theWhat: Standard_ExtCharacter): void;
  SetValue_2(theWhere: Standard_Integer, theWhat: Standard_ExtCharacter, theLength: Standard_Integer): void;
  SetValue_3(theWhere: Standard_Integer, theWhat: Standard_ExtCharacter): void;
  SetValue_4(theWhere: Standard_Integer, theWhat: TCollection_ExtendedString): void;
  SubString(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): TCollection_ExtendedString;
  Split(theWhere: Standard_Integer): TCollection_ExtendedString;
  Token(theSeparators: Standard_ExtCharacter, theWhichOne: Standard_Integer): TCollection_ExtendedString;
  ToExtString(): Standard_ExtCharacter;
  Trunc(theHowMany: Standard_Integer): void;
  Value(theWhere: Standard_Integer): Standard_ExtCharacter;
  HashCode(): Standard_Size;
  static EmptyString(): TCollection_ExtendedString;
  static IsEqual_4(theString1: TCollection_ExtendedString, theString2: TCollection_ExtendedString): Standard_Boolean;
  LengthOfCString(): Standard_Integer;
  LeftAdjust(): void;
  RightAdjust(): void;
  LeftJustify(theWidth: Standard_Integer, theFiller: Standard_ExtCharacter): void;
  RightJustify(theWidth: Standard_Integer, theFiller: Standard_ExtCharacter): void;
  Center(theWidth: Standard_Integer, theFiller: Standard_ExtCharacter): void;
  Capitalize(): void;
  Prepend_1(theOther: Standard_ExtCharacter, theLength: Standard_Integer): void;
  Prepend_2(theOther: Standard_ExtCharacter): void;
  Prepend_3(theOther: TCollection_ExtendedString): void;
  FirstLocationInSet(theSet: TCollection_ExtendedString, theFromIndex: Standard_Integer, theToIndex: Standard_Integer): Standard_Integer;
  FirstLocationNotInSet(theSet: TCollection_ExtendedString, theFromIndex: Standard_Integer, theToIndex: Standard_Integer): Standard_Integer;
  IntegerValue(): Standard_Integer;
  IsIntegerValue(): Standard_Boolean;
  RealValue(): Standard_Real;
  IsRealValue(theToCheckFull: Standard_Boolean): Standard_Boolean;
  IsSameString(theOther: TCollection_ExtendedString, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
  delete(): void;
}

  export declare class TCollection_ExtendedString_1 extends TCollection_ExtendedString {
    constructor();
  }

  export declare class TCollection_ExtendedString_2 extends TCollection_ExtendedString {
    constructor(theString: Standard_Character, theIsMultiByte: Standard_Boolean);
  }

  export declare class TCollection_ExtendedString_3 extends TCollection_ExtendedString {
    constructor(theString: Standard_ExtCharacter);
  }

  export declare class TCollection_ExtendedString_4 extends TCollection_ExtendedString {
    constructor(theStringUtf: Standard_WideChar);
  }

  export declare class TCollection_ExtendedString_5 extends TCollection_ExtendedString {
    constructor(theChar: Standard_Character);
  }

  export declare class TCollection_ExtendedString_6 extends TCollection_ExtendedString {
    constructor(theChar: Standard_ExtCharacter);
  }

  export declare class TCollection_ExtendedString_7 extends TCollection_ExtendedString {
    constructor(theLength: Standard_Integer, theFiller: Standard_ExtCharacter);
  }

  export declare class TCollection_ExtendedString_8 extends TCollection_ExtendedString {
    constructor(theValue: Standard_Integer);
  }

  export declare class TCollection_ExtendedString_9 extends TCollection_ExtendedString {
    constructor(theValue: Standard_Real);
  }

  export declare class TCollection_ExtendedString_10 extends TCollection_ExtendedString {
    constructor(theString: TCollection_ExtendedString);
  }

  export declare class TCollection_ExtendedString_11 extends TCollection_ExtendedString {
    constructor(theOther: TCollection_ExtendedString);
  }

  export declare class TCollection_ExtendedString_12 extends TCollection_ExtendedString {
    constructor(theString: XCAFDoc_PartId, theIsMultiByte: Standard_Boolean);
  }

  export declare class TCollection_ExtendedString_13 extends TCollection_ExtendedString {
    constructor(theString: Standard_ExtCharacter, theLength: Standard_Integer);
  }

  export declare class TCollection_ExtendedString_15 extends TCollection_ExtendedString {
    constructor(theStringView: any);
  }

export declare class TCollection_HAsciiString extends Standard_Transient {
  AssignCat_1(other: Standard_Character): void;
  AssignCat_2(other: any): void;
  Capitalize(): void;
  Cat_1(other: Standard_Character): any;
  Cat_2(other: any): any;
  Center(Width: Standard_Integer, Filler: Standard_Character): void;
  ChangeAll(aChar: Standard_Character, NewChar: Standard_Character, CaseSensitive: Standard_Boolean): void;
  Clear(): void;
  FirstLocationInSet(Set: any, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  FirstLocationNotInSet(Set: any, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  Insert_1(where: Standard_Integer, what: Standard_Character): void;
  Insert_2(where: Standard_Integer, what: Standard_Character): void;
  Insert_3(where: Standard_Integer, what: any): void;
  InsertAfter(Index: Standard_Integer, other: any): void;
  InsertBefore(Index: Standard_Integer, other: any): void;
  IsEmpty(): Standard_Boolean;
  IsLess(other: any): Standard_Boolean;
  IsGreater(other: any): Standard_Boolean;
  IntegerValue(): Standard_Integer;
  IsIntegerValue(): Standard_Boolean;
  IsRealValue(): Standard_Boolean;
  IsAscii(): Standard_Boolean;
  IsDifferent(S: any): Standard_Boolean;
  IsSameString_1(S: any): Standard_Boolean;
  IsSameString_2(S: any, CaseSensitive: Standard_Boolean): Standard_Boolean;
  LeftAdjust(): void;
  LeftJustify(Width: Standard_Integer, Filler: Standard_Character): void;
  Length(): Standard_Integer;
  Location_1(other: any, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  Location_2(N: Standard_Integer, C: Standard_Character, FromIndex: Standard_Integer, ToIndex: Standard_Integer): Standard_Integer;
  LowerCase(): void;
  Prepend(other: any): void;
  RealValue(): Standard_Real;
  RemoveAll_1(C: Standard_Character, CaseSensitive: Standard_Boolean): void;
  RemoveAll_2(what: Standard_Character): void;
  Remove(where: Standard_Integer, ahowmany: Standard_Integer): void;
  RightAdjust(): void;
  RightJustify(Width: Standard_Integer, Filler: Standard_Character): void;
  Search_1(what: Standard_Character): Standard_Integer;
  Search_2(what: any): Standard_Integer;
  SearchFromEnd_1(what: Standard_Character): Standard_Integer;
  SearchFromEnd_2(what: any): Standard_Integer;
  SetValue_1(where: Standard_Integer, what: Standard_Character): void;
  SetValue_2(where: Standard_Integer, what: Standard_Character): void;
  SetValue_3(where: Standard_Integer, what: any): void;
  Split(where: Standard_Integer): any;
  SubString(FromIndex: Standard_Integer, ToIndex: Standard_Integer): any;
  ToCString(): Standard_Character;
  Token(separators: Standard_Character, whichone: Standard_Integer): any;
  Trunc(ahowmany: Standard_Integer): void;
  UpperCase(): void;
  UsefullLength(): Standard_Integer;
  Value(where: Standard_Integer): Standard_Character;
  String(): XCAFDoc_PartId;
  IsSameState(other: any): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class TCollection_HAsciiString_1 extends TCollection_HAsciiString {
    constructor();
  }

  export declare class TCollection_HAsciiString_2 extends TCollection_HAsciiString {
    constructor(message: Standard_Character);
  }

  export declare class TCollection_HAsciiString_3 extends TCollection_HAsciiString {
    constructor(aChar: Standard_Character);
  }

  export declare class TCollection_HAsciiString_4 extends TCollection_HAsciiString {
    constructor(length: Standard_Integer, filler: Standard_Character);
  }

  export declare class TCollection_HAsciiString_5 extends TCollection_HAsciiString {
    constructor(value: Standard_Integer);
  }

  export declare class TCollection_HAsciiString_6 extends TCollection_HAsciiString {
    constructor(value: Standard_Real);
  }

  export declare class TCollection_HAsciiString_7 extends TCollection_HAsciiString {
    constructor(aString: XCAFDoc_PartId);
  }

  export declare class TCollection_HAsciiString_8 extends TCollection_HAsciiString {
    constructor(theString: XCAFDoc_PartId);
  }

  export declare class TCollection_HAsciiString_9 extends TCollection_HAsciiString {
    constructor(aString: any);
  }

  export declare class TCollection_HAsciiString_10 extends TCollection_HAsciiString {
    constructor(aString: any, replaceNonAscii: Standard_Character);
  }

export declare class TCollection_AsciiString {
  AssignCat_1(theOther: Standard_Character): void;
  AssignCat_2(theOther: Standard_Integer): void;
  AssignCat_3(theOther: Standard_Real): void;
  AssignCat_4(theOther: TCollection_ExtendedString, theReplaceNonAscii: Standard_Character): void;
  AssignCat_5(theStringUtf: Standard_WideChar): void;
  AssignCat_6(theString: Standard_Character, theLength: Standard_Integer): void;
  AssignCat_7(theOther: XCAFDoc_PartId): void;
  AssignCat_8(theCString: Standard_Character): void;
  AssignCat_9(theStringView: any): void;
  Capitalize(): void;
  Cat_1(theString: Standard_Character, theLength: Standard_Integer): XCAFDoc_PartId;
  Cat_2(theOther: Standard_Character): XCAFDoc_PartId;
  Cat_3(theOther: Standard_Integer): XCAFDoc_PartId;
  Cat_4(theOther: Standard_Real): XCAFDoc_PartId;
  Cat_5(theOther: TCollection_ExtendedString, theReplaceNonAscii: Standard_Character): XCAFDoc_PartId;
  Cat_6(theStringUtf: Standard_WideChar): XCAFDoc_PartId;
  Cat_7(theOther: XCAFDoc_PartId): XCAFDoc_PartId;
  Cat_8(theCString: Standard_Character): XCAFDoc_PartId;
  Cat_9(theStringView: any): XCAFDoc_PartId;
  Center(theWidth: Standard_Integer, theFiller: Standard_Character): void;
  ChangeAll(theChar: Standard_Character, theNewChar: Standard_Character, theCaseSensitive: Standard_Boolean): void;
  Clear(): void;
  Copy_1(theString: Standard_Character, theLength: Standard_Integer): void;
  Copy_2(theCString: Standard_Character): void;
  Copy_3(theStringView: any): void;
  Copy_5(theFromWhere: XCAFDoc_PartId): void;
  Move(theOther: XCAFDoc_PartId): void;
  Swap(theOther: XCAFDoc_PartId): void;
  FirstLocationInSet_1(theSet: Standard_Character, theSetLength: Standard_Integer, theFromIndex: Standard_Integer, theToIndex: Standard_Integer): Standard_Integer;
  FirstLocationInSet_2(theSet: XCAFDoc_PartId, theFromIndex: Standard_Integer, theToIndex: Standard_Integer): Standard_Integer;
  FirstLocationInSet_3(theSet: any, theFromIndex: Standard_Integer, theToIndex: Standard_Integer): Standard_Integer;
  FirstLocationNotInSet_1(theSet: Standard_Character, theSetLength: Standard_Integer, theFromIndex: Standard_Integer, theToIndex: Standard_Integer): Standard_Integer;
  FirstLocationNotInSet_2(theSet: XCAFDoc_PartId, theFromIndex: Standard_Integer, theToIndex: Standard_Integer): Standard_Integer;
  FirstLocationNotInSet_3(theSet: any, theFromIndex: Standard_Integer, theToIndex: Standard_Integer): Standard_Integer;
  Insert_1(theWhere: Standard_Integer, theWhat: Standard_Character): void;
  Insert_2(theWhere: Standard_Integer, theString: Standard_Character, theLength: Standard_Integer): void;
  Insert_3(theWhere: Standard_Integer, theWhat: XCAFDoc_PartId): void;
  Insert_4(theWhere: Standard_Integer, theCString: Standard_Character): void;
  Insert_5(theWhere: Standard_Integer, theStringView: any): void;
  InsertAfter_1(theIndex: Standard_Integer, theString: Standard_Character, theLength: Standard_Integer): void;
  InsertAfter_2(theIndex: Standard_Integer, theOther: XCAFDoc_PartId): void;
  InsertAfter_3(theIndex: Standard_Integer, theCString: Standard_Character): void;
  InsertAfter_4(theIndex: Standard_Integer, theStringView: any): void;
  InsertBefore_1(theIndex: Standard_Integer, theString: Standard_Character, theLength: Standard_Integer): void;
  InsertBefore_2(theIndex: Standard_Integer, theOther: XCAFDoc_PartId): void;
  InsertBefore_3(theIndex: Standard_Integer, theCString: Standard_Character): void;
  InsertBefore_4(theIndex: Standard_Integer, theStringView: any): void;
  IsEmpty(): Standard_Boolean;
  IsEqual_1(theOther: XCAFDoc_PartId): Standard_Boolean;
  IsEqual_2(theString: Standard_Character, theLength: Standard_Integer): Standard_Boolean;
  IsEqual_3(theCString: Standard_Character): Standard_Boolean;
  IsEqual_4(theStringView: any): Standard_Boolean;
  IsDifferent_1(theOther: XCAFDoc_PartId): Standard_Boolean;
  IsDifferent_2(theString: Standard_Character, theLength: Standard_Integer): Standard_Boolean;
  IsDifferent_3(theCString: Standard_Character): Standard_Boolean;
  IsDifferent_4(theStringView: any): Standard_Boolean;
  IsLess_1(theString: Standard_Character, theLength: Standard_Integer): Standard_Boolean;
  IsLess_2(theOther: XCAFDoc_PartId): Standard_Boolean;
  IsLess_3(theCString: Standard_Character): Standard_Boolean;
  IsLess_4(theStringView: any): Standard_Boolean;
  IsGreater_1(theString: Standard_Character, theLength: Standard_Integer): Standard_Boolean;
  IsGreater_2(theOther: XCAFDoc_PartId): Standard_Boolean;
  IsGreater_3(theCString: Standard_Character): Standard_Boolean;
  IsGreater_4(theStringView: any): Standard_Boolean;
  StartsWith_1(theStartString: Standard_Character, theStartLength: Standard_Integer): Standard_Boolean;
  StartsWith_2(theStartString: XCAFDoc_PartId): Standard_Boolean;
  StartsWith_3(theCString: Standard_Character): Standard_Boolean;
  StartsWith_4(theStartString: any): Standard_Boolean;
  EndsWith_1(theEndString: Standard_Character, theEndLength: Standard_Integer): Standard_Boolean;
  EndsWith_2(theEndString: XCAFDoc_PartId): Standard_Boolean;
  EndsWith_3(theEndString: any): Standard_Boolean;
  IntegerValue(): Standard_Integer;
  IsIntegerValue(): Standard_Boolean;
  IsRealValue(theToCheckFull: Standard_Boolean): Standard_Boolean;
  IsAscii(): Standard_Boolean;
  LeftAdjust(): void;
  LeftJustify(theWidth: Standard_Integer, theFiller: Standard_Character): void;
  Length(): Standard_Integer;
  Location_1(theOther: XCAFDoc_PartId, theFromIndex: Standard_Integer, theToIndex: Standard_Integer): Standard_Integer;
  Location_2(theN: Standard_Integer, theC: Standard_Character, theFromIndex: Standard_Integer, theToIndex: Standard_Integer): Standard_Integer;
  LowerCase(): void;
  Prepend(theOther: XCAFDoc_PartId): void;
  RealValue(): Standard_Real;
  RemoveAll_1(theC: Standard_Character, theCaseSensitive: Standard_Boolean): void;
  RemoveAll_2(theWhat: Standard_Character): void;
  Remove(theWhere: Standard_Integer, theHowMany: Standard_Integer): void;
  RightAdjust(): void;
  RightJustify(theWidth: Standard_Integer, theFiller: Standard_Character): void;
  Search_1(theWhat: Standard_Character, theWhatLength: Standard_Integer): Standard_Integer;
  Search_2(theWhat: XCAFDoc_PartId): Standard_Integer;
  Search_3(theCString: Standard_Character): Standard_Integer;
  Search_4(theWhat: any): Standard_Integer;
  SearchFromEnd_1(theWhat: Standard_Character, theWhatLength: Standard_Integer): Standard_Integer;
  SearchFromEnd_2(theWhat: XCAFDoc_PartId): Standard_Integer;
  SearchFromEnd_3(theCString: Standard_Character): Standard_Integer;
  SearchFromEnd_4(theWhat: any): Standard_Integer;
  SetValue_1(theWhere: Standard_Integer, theWhat: Standard_Character): void;
  SetValue_2(theWhere: Standard_Integer, theString: Standard_Character, theLength: Standard_Integer): void;
  SetValue_3(theWhere: Standard_Integer, theWhat: XCAFDoc_PartId): void;
  SetValue_4(theWhere: Standard_Integer, theCString: Standard_Character): void;
  SetValue_5(theWhere: Standard_Integer, theStringView: any): void;
  Split(theWhere: Standard_Integer): XCAFDoc_PartId;
  SubString(theFromIndex: Standard_Integer, theToIndex: Standard_Integer): XCAFDoc_PartId;
  ToCString(): Standard_Character;
  Token(theSeparators: Standard_Character, theWhichOne: Standard_Integer): XCAFDoc_PartId;
  Trunc(theHowMany: Standard_Integer): void;
  UpperCase(): void;
  UsefullLength(): Standard_Integer;
  Value(theWhere: Standard_Integer): Standard_Character;
  HashCode(): Standard_Size;
  static EmptyString(): XCAFDoc_PartId;
  static IsEqual_6(string1: XCAFDoc_PartId, string2: XCAFDoc_PartId): Standard_Boolean;
  static IsEqual_7(string1: XCAFDoc_PartId, string2: Standard_Character): Standard_Boolean;
  static IsEqual_8(theString1: XCAFDoc_PartId, theStringView: any): Standard_Boolean;
  static IsEqual_9(theStringView: any, theString2: XCAFDoc_PartId): Standard_Boolean;
  static IsSameString_1(theString1: Standard_Character, theLength1: Standard_Integer, theString2: Standard_Character, theLength2: Standard_Integer, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
  static IsSameString_2(theString1: XCAFDoc_PartId, theString2: XCAFDoc_PartId, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
  static IsSameString_3(theString1: XCAFDoc_PartId, theCString: Standard_Character, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
  static IsSameString_4(theCString: Standard_Character, theString2: XCAFDoc_PartId, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
  static IsSameString_5(theString1: XCAFDoc_PartId, theStringView: any, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
  static IsSameString_6(theStringView: any, theString2: XCAFDoc_PartId, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
  static IsSameString_7(theCString1: Standard_Character, theCString2: Standard_Character, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
  static IsSameString_8(theStringView1: any, theStringView2: any, theIsCaseSensitive: Standard_Boolean): Standard_Boolean;
  delete(): void;
}

  export declare class TCollection_AsciiString_1 extends TCollection_AsciiString {
    constructor();
  }

  export declare class TCollection_AsciiString_2 extends TCollection_AsciiString {
    constructor(theStringView: any);
  }

  export declare class TCollection_AsciiString_3 extends TCollection_AsciiString {
    constructor(theMessage: Standard_Character);
  }

  export declare class TCollection_AsciiString_4 extends TCollection_AsciiString {
    constructor(theMessage: Standard_Character, theLength: Standard_Integer);
  }

  export declare class TCollection_AsciiString_5 extends TCollection_AsciiString {
    constructor(theChar: Standard_Character);
  }

  export declare class TCollection_AsciiString_6 extends TCollection_AsciiString {
    constructor(theLength: Standard_Integer, theFiller: Standard_Character);
  }

  export declare class TCollection_AsciiString_7 extends TCollection_AsciiString {
    constructor(theValue: Standard_Integer);
  }

  export declare class TCollection_AsciiString_8 extends TCollection_AsciiString {
    constructor(theValue: Standard_Real);
  }

  export declare class TCollection_AsciiString_9 extends TCollection_AsciiString {
    constructor(theString: XCAFDoc_PartId);
  }

  export declare class TCollection_AsciiString_10 extends TCollection_AsciiString {
    constructor(theOther: XCAFDoc_PartId);
  }

  export declare class TCollection_AsciiString_11 extends TCollection_AsciiString {
    constructor(theString: XCAFDoc_PartId, theChar: Standard_Character);
  }

  export declare class TCollection_AsciiString_12 extends TCollection_AsciiString {
    constructor(theString: XCAFDoc_PartId, theMessage: Standard_Character);
  }

  export declare class TCollection_AsciiString_13 extends TCollection_AsciiString {
    constructor(theString: XCAFDoc_PartId, theOtherString: XCAFDoc_PartId);
  }

  export declare class TCollection_AsciiString_14 extends TCollection_AsciiString {
    constructor(theExtendedString: TCollection_ExtendedString, theReplaceNonAscii: Standard_Character);
  }

  export declare class TCollection_AsciiString_15 extends TCollection_AsciiString {
    constructor(theStringUtf: Standard_WideChar);
  }

export declare class StdFail_NotDone extends Standard_Failure {
  ExceptionType(): Standard_Character;
  delete(): void;
}

  export declare class StdFail_NotDone_1 extends StdFail_NotDone {
    constructor(theMessage: Standard_Character);
  }

  export declare class StdFail_NotDone_2 extends StdFail_NotDone {
    constructor(theMessage: Standard_Character, theStackTrace: Standard_Character);
  }

export declare class NCollection_BaseMap {
  NbBuckets(): Standard_Size;
  Extent(): Standard_Integer;
  Length(): Standard_Integer;
  Size(): Standard_Size;
  IsEmpty(): Standard_Boolean;
  Allocator(): TDF_HAllocator;
  delete(): void;
}

export declare class Standard_ConstructionError extends Standard_DomainError {
  ExceptionType(): Standard_Character;
  delete(): void;
}

  export declare class Standard_ConstructionError_1 extends Standard_ConstructionError {
    constructor(theMessage: Standard_Character);
  }

  export declare class Standard_ConstructionError_2 extends Standard_ConstructionError {
    constructor(theMessage: Standard_Character, theStackTrace: Standard_Character);
  }

export declare class Standard_Transient {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): Handle_Standard_Type;
  DynamicType(): Handle_Standard_Type;
  IsInstance_1(theType: Handle_Standard_Type): Standard_Boolean;
  IsInstance_2(theTypeName: Standard_Character): Standard_Boolean;
  IsKind_1(theType: Handle_Standard_Type): Standard_Boolean;
  IsKind_2(theTypeName: Standard_Character): Standard_Boolean;
  This(): Standard_Transient;
  GetRefCount(): Standard_Integer;
  IncrementRefCounter(): void;
  DecrementRefCounter(): Standard_Integer;
  Delete(): void;
  delete(): void;
}

  export declare class Standard_Transient_1 extends Standard_Transient {
    constructor();
  }

  export declare class Standard_Transient_2 extends Standard_Transient {
    constructor(a: Standard_Transient);
  }

export declare class Standard_Failure {
  what(): Standard_Character;
  GetMessageString(): Standard_Character;
  ExceptionType(): Standard_Character;
  GetStackString(): Standard_Character;
  static DefaultStackTraceLength(): Standard_Integer;
  static SetDefaultStackTraceLength(theNbStackTraces: Standard_Integer): void;
  delete(): void;
}

  export declare class Standard_Failure_1 extends Standard_Failure {
    constructor();
  }

  export declare class Standard_Failure_2 extends Standard_Failure {
    constructor(theOther: Standard_Failure);
  }

  export declare class Standard_Failure_3 extends Standard_Failure {
    constructor(theMessage: Standard_Character);
  }

  export declare class Standard_Failure_4 extends Standard_Failure {
    constructor(theMessage: Standard_Character, theStackTrace: Standard_Character);
  }

export declare class Standard_NoSuchObject extends Standard_DomainError {
  ExceptionType(): Standard_Character;
  delete(): void;
}

  export declare class Standard_NoSuchObject_1 extends Standard_NoSuchObject {
    constructor(theMessage: Standard_Character);
  }

  export declare class Standard_NoSuchObject_2 extends Standard_NoSuchObject {
    constructor(theMessage: Standard_Character, theStackTrace: Standard_Character);
  }

export declare class Standard_DomainError extends Standard_Failure {
  ExceptionType(): Standard_Character;
  delete(): void;
}

  export declare class Standard_DomainError_1 extends Standard_DomainError {
    constructor(theMessage: Standard_Character);
  }

  export declare class Standard_DomainError_2 extends Standard_DomainError {
    constructor(theMessage: Standard_Character, theStackTrace: Standard_Character);
  }

export declare class Standard_TypeMismatch extends Standard_DomainError {
  ExceptionType(): Standard_Character;
  delete(): void;
}

  export declare class Standard_TypeMismatch_1 extends Standard_TypeMismatch {
    constructor(theMessage: Standard_Character);
  }

  export declare class Standard_TypeMismatch_2 extends Standard_TypeMismatch {
    constructor(theMessage: Standard_Character, theStackTrace: Standard_Character);
  }

export declare class gp_Dir {
  SetCoord_1(theIndex: Standard_Integer, theXi: Standard_Real): void;
  SetCoord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  SetXYZ(theCoord: gp_XYZ): void;
  Coord_1(theIndex: Standard_Integer): Standard_Real;
  Coord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  IsEqual(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Dir, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Dir): Standard_Real;
  AngleWithRef(theOther: gp_Dir, theVRef: gp_Dir): Standard_Real;
  Cross(theRight: gp_Dir): void;
  Crossed(theRight: gp_Dir): gp_Dir;
  CrossCross(theV1: gp_Dir, theV2: gp_Dir): void;
  CrossCrossed(theV1: gp_Dir, theV2: gp_Dir): gp_Dir;
  Dot(theOther: gp_Dir): Standard_Real;
  DotCross(theV1: gp_Dir, theV2: gp_Dir): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Dir;
  Mirror_1(theV: gp_Dir): void;
  Mirrored_1(theV: gp_Dir): gp_Dir;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Dir;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Dir;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Dir;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Dir;
  delete(): void;
}

  export declare class gp_Dir_1 extends gp_Dir {
    constructor();
  }

  export declare class gp_Dir_3 extends gp_Dir {
    constructor(theV: gp_Vec);
  }

  export declare class gp_Dir_4 extends gp_Dir {
    constructor(theCoord: gp_XYZ);
  }

  export declare class gp_Dir_5 extends gp_Dir {
    constructor(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real);
  }

  export declare class gp_Dir_6 extends gp_Dir {
    constructor(a: gp_Dir);
  }

  export declare class gp_Dir_7 extends gp_Dir {
    constructor(a: gp_Dir);
  }

export declare class gp_Hypr {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetMajorRadius(theMajorRadius: Standard_Real): void;
  SetMinorRadius(theMinorRadius: Standard_Real): void;
  SetPosition(theA2: gp_Ax2): void;
  Asymptote1(): gp_Ax1;
  Asymptote2(): gp_Ax1;
  Axis(): gp_Ax1;
  ConjugateBranch1(): gp_Hypr;
  ConjugateBranch2(): gp_Hypr;
  Directrix1(): gp_Ax1;
  Directrix2(): gp_Ax1;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt;
  Focus2(): gp_Pnt;
  Location(): gp_Pnt;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  OtherBranch(): gp_Hypr;
  Parameter(): Standard_Real;
  Position(): gp_Ax2;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Hypr;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Hypr;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Hypr;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Hypr;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Hypr;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Hypr;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Hypr;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Hypr;
  delete(): void;
}

  export declare class gp_Hypr_1 extends gp_Hypr {
    constructor();
  }

  export declare class gp_Hypr_2 extends gp_Hypr {
    constructor(theA2: gp_Ax2, theMajorRadius: Standard_Real, theMinorRadius: Standard_Real);
  }

export declare class gp_Ax2d {
  SetLocation(theP: gp_Pnt2d): void;
  SetDirection(theV: gp_Dir2d): void;
  Location(): gp_Pnt2d;
  Direction(): gp_Dir2d;
  IsCoaxial(Other: gp_Ax2d, AngularTolerance: Standard_Real, LinearTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Ax2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Ax2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Ax2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Ax2d): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Ax2d;
  Mirror_1(P: gp_Pnt2d): void;
  Mirrored_1(P: gp_Pnt2d): gp_Ax2d;
  Mirror_2(A: gp_Ax2d): void;
  Mirrored_2(A: gp_Ax2d): gp_Ax2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Ax2d;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Ax2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Ax2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Ax2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Ax2d;
  delete(): void;
}

  export declare class gp_Ax2d_1 extends gp_Ax2d {
    constructor();
  }

  export declare class gp_Ax2d_2 extends gp_Ax2d {
    constructor(theP: gp_Pnt2d, theV: gp_Dir2d);
  }

export declare class gp {
  static Resolution(): Standard_Real;
  static Origin(): gp_Pnt;
  static DX(): gp_Dir;
  static DY(): gp_Dir;
  static DZ(): gp_Dir;
  static OX(): gp_Ax1;
  static OY(): gp_Ax1;
  static OZ(): gp_Ax1;
  static XOY(): gp_Ax2;
  static ZOX(): gp_Ax2;
  static YOZ(): gp_Ax2;
  static Origin2d(): gp_Pnt2d;
  static DX2d(): gp_Dir2d;
  static DY2d(): gp_Dir2d;
  static OX2d(): gp_Ax2d;
  static OY2d(): gp_Ax2d;
  delete(): void;
}

export declare class gp_Dir2d {
  SetCoord_1(theIndex: Standard_Integer, theXi: Standard_Real): void;
  SetCoord_2(theXv: Standard_Real, theYv: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetXY(theCoord: gp_XY): void;
  Coord_1(theIndex: Standard_Integer): Standard_Real;
  Coord_2(theXv: Standard_Real, theYv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  XY(): gp_XY;
  IsEqual(theOther: gp_Dir2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Dir2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Dir2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Dir2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Dir2d): Standard_Real;
  Crossed(theRight: gp_Dir2d): Standard_Real;
  Dot(theOther: gp_Dir2d): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Dir2d;
  Mirror_1(theV: gp_Dir2d): void;
  Mirrored_1(theV: gp_Dir2d): gp_Dir2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Dir2d;
  Rotate(Ang: Standard_Real): void;
  Rotated(theAng: Standard_Real): gp_Dir2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Dir2d;
  delete(): void;
}

  export declare class gp_Dir2d_1 extends gp_Dir2d {
    constructor();
  }

  export declare class gp_Dir2d_3 extends gp_Dir2d {
    constructor(theV: gp_Vec2d);
  }

  export declare class gp_Dir2d_4 extends gp_Dir2d {
    constructor(theCoord: gp_XY);
  }

  export declare class gp_Dir2d_5 extends gp_Dir2d {
    constructor(theXv: Standard_Real, theYv: Standard_Real);
  }

export declare class gp_Vec {
  SetCoord_1(theIndex: Standard_Integer, theXi: Standard_Real): void;
  SetCoord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  SetXYZ(theCoord: gp_XYZ): void;
  Coord_1(theIndex: Standard_Integer): Standard_Real;
  Coord_2(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  IsEqual(theOther: gp_Vec, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Vec, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Vec, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Vec, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Vec): Standard_Real;
  AngleWithRef(theOther: gp_Vec, theVRef: gp_Vec): Standard_Real;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Add(theOther: gp_Vec): void;
  Added(theOther: gp_Vec): gp_Vec;
  Subtract(theRight: gp_Vec): void;
  Subtracted(theRight: gp_Vec): gp_Vec;
  Multiply(theScalar: Standard_Real): void;
  Multiplied(theScalar: Standard_Real): gp_Vec;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_Vec;
  Cross(theRight: gp_Vec): void;
  Crossed(theRight: gp_Vec): gp_Vec;
  CrossMagnitude(theRight: gp_Vec): Standard_Real;
  CrossSquareMagnitude(theRight: gp_Vec): Standard_Real;
  CrossCross(theV1: gp_Vec, theV2: gp_Vec): void;
  CrossCrossed(theV1: gp_Vec, theV2: gp_Vec): gp_Vec;
  Dot(theOther: gp_Vec): Standard_Real;
  DotCross(theV1: gp_Vec, theV2: gp_Vec): Standard_Real;
  Normalize(): void;
  Normalized(): gp_Vec;
  Reverse(): void;
  Reversed(): gp_Vec;
  SetLinearForm_1(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec, theA3: Standard_Real, theV3: gp_Vec, theV4: gp_Vec): void;
  SetLinearForm_2(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec, theA3: Standard_Real, theV3: gp_Vec): void;
  SetLinearForm_3(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec, theV3: gp_Vec): void;
  SetLinearForm_4(theA1: Standard_Real, theV1: gp_Vec, theA2: Standard_Real, theV2: gp_Vec): void;
  SetLinearForm_5(theA1: Standard_Real, theV1: gp_Vec, theV2: gp_Vec): void;
  SetLinearForm_6(theV1: gp_Vec, theV2: gp_Vec): void;
  Mirror_1(theV: gp_Vec): void;
  Mirrored_1(theV: gp_Vec): gp_Vec;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Vec;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Vec;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Vec;
  Scale(theS: Standard_Real): void;
  Scaled(theS: Standard_Real): gp_Vec;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Vec;
  delete(): void;
}

  export declare class gp_Vec_1 extends gp_Vec {
    constructor();
  }

  export declare class gp_Vec_2 extends gp_Vec {
    constructor(theV: gp_Dir);
  }

  export declare class gp_Vec_3 extends gp_Vec {
    constructor(theCoord: gp_XYZ);
  }

  export declare class gp_Vec_4 extends gp_Vec {
    constructor(theXv: Standard_Real, theYv: Standard_Real, theZv: Standard_Real);
  }

  export declare class gp_Vec_5 extends gp_Vec {
    constructor(theP1: gp_Pnt, theP2: gp_Pnt);
  }

export declare class gp_Circ {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetPosition(theA2: gp_Ax2): void;
  SetRadius(theRadius: Standard_Real): void;
  Area(): Standard_Real;
  Axis(): gp_Ax1;
  Length(): Standard_Real;
  Location(): gp_Pnt;
  Position(): gp_Ax2;
  Radius(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Distance(theP: gp_Pnt): Standard_Real;
  SquareDistance(theP: gp_Pnt): Standard_Real;
  Contains(theP: gp_Pnt, theLinearTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Circ;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Circ;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Circ;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Circ;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Circ;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Circ;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Circ;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Circ;
  delete(): void;
}

  export declare class gp_Circ_1 extends gp_Circ {
    constructor();
  }

  export declare class gp_Circ_2 extends gp_Circ {
    constructor(theA2: gp_Ax2, theRadius: Standard_Real);
  }

export declare class gp_Lin {
  Reverse(): void;
  Reversed(): gp_Lin;
  SetDirection(theV: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  SetPosition(theA1: gp_Ax1): void;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  Position(): gp_Ax1;
  Angle(theOther: gp_Lin): Standard_Real;
  Contains(theP: gp_Pnt, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance_1(theP: gp_Pnt): Standard_Real;
  Distance_2(theOther: gp_Lin): Standard_Real;
  SquareDistance_1(theP: gp_Pnt): Standard_Real;
  SquareDistance_2(theOther: gp_Lin): Standard_Real;
  Normal(theP: gp_Pnt): gp_Lin;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Lin;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Lin;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Lin;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Lin;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Lin;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Lin;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Lin;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Lin;
  delete(): void;
}

  export declare class gp_Lin_1 extends gp_Lin {
    constructor();
  }

  export declare class gp_Lin_2 extends gp_Lin {
    constructor(theA1: gp_Ax1);
  }

  export declare class gp_Lin_3 extends gp_Lin {
    constructor(theP: gp_Pnt, theV: gp_Dir);
  }

export declare class gp_Pnt2d {
  SetCoord_1(theIndex: Standard_Integer, theXi: Standard_Real): void;
  SetCoord_2(theXp: Standard_Real, theYp: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetXY(theCoord: gp_XY): void;
  Coord_1(theIndex: Standard_Integer): Standard_Real;
  Coord_2(theXp: Standard_Real, theYp: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  XY(): gp_XY;
  Coord_3(): gp_XY;
  ChangeCoord(): gp_XY;
  IsEqual(theOther: gp_Pnt2d, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance(theOther: gp_Pnt2d): Standard_Real;
  SquareDistance(theOther: gp_Pnt2d): Standard_Real;
  Mirror_1(theP: gp_Pnt2d): void;
  Mirrored_1(theP: gp_Pnt2d): gp_Pnt2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Pnt2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Pnt2d;
  Scale(theP: gp_Pnt2d, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Pnt2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Pnt2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Pnt2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Pnt2d;
  delete(): void;
}

  export declare class gp_Pnt2d_1 extends gp_Pnt2d {
    constructor();
  }

  export declare class gp_Pnt2d_2 extends gp_Pnt2d {
    constructor(theCoord: gp_XY);
  }

  export declare class gp_Pnt2d_3 extends gp_Pnt2d {
    constructor(theXp: Standard_Real, theYp: Standard_Real);
  }

export declare class gp_Ax3 {
  XReverse(): void;
  YReverse(): void;
  ZReverse(): void;
  SetAxis(theA1: gp_Ax1): void;
  SetDirection(theV: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  SetXDirection(theVx: gp_Dir): void;
  SetYDirection(theVy: gp_Dir): void;
  Angle(theOther: gp_Ax3): Standard_Real;
  Axis(): gp_Ax1;
  Ax2(): gp_Ax2;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  XDirection(): gp_Dir;
  YDirection(): gp_Dir;
  Direct(): Standard_Boolean;
  IsCoplanar_1(theOther: gp_Ax3, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsCoplanar_2(theA1: gp_Ax1, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Ax3;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Ax3;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Ax3;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Ax3;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Ax3;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Ax3;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Ax3;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Ax3;
  delete(): void;
}

  export declare class gp_Ax3_1 extends gp_Ax3 {
    constructor();
  }

  export declare class gp_Ax3_2 extends gp_Ax3 {
    constructor(theA: gp_Ax2);
  }

  export declare class gp_Ax3_3 extends gp_Ax3 {
    constructor(theP: gp_Pnt, theN: gp_Dir, theVx: gp_Dir);
  }

  export declare class gp_Ax3_5 extends gp_Ax3 {
    constructor(theP: gp_Pnt, theV: gp_Dir);
  }

export declare class gp_Trsf {
  SetMirror_1(theP: gp_Pnt): void;
  SetMirror_2(theA1: gp_Ax1): void;
  SetMirror_3(theA2: gp_Ax2): void;
  SetRotation_1(theA1: gp_Ax1, theAng: Standard_Real): void;
  SetRotation_2(theR: gp_Quaternion): void;
  SetRotationPart(theR: gp_Quaternion): void;
  SetScale(theP: gp_Pnt, theS: Standard_Real): void;
  SetDisplacement(theFromSystem1: gp_Ax3, theToSystem2: gp_Ax3): void;
  SetTransformation_1(theFromSystem1: gp_Ax3, theToSystem2: gp_Ax3): void;
  SetTransformation_2(theToSystem: gp_Ax3): void;
  SetTransformation_3(R: gp_Quaternion, theT: gp_Vec): void;
  SetTranslation_1(theV: gp_Vec): void;
  SetTranslation_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  SetTranslationPart(theV: gp_Vec): void;
  SetScaleFactor(theS: Standard_Real): void;
  SetForm(theP: gp_TrsfForm): void;
  SetValues(a11: Standard_Real, a12: Standard_Real, a13: Standard_Real, a14: Standard_Real, a21: Standard_Real, a22: Standard_Real, a23: Standard_Real, a24: Standard_Real, a31: Standard_Real, a32: Standard_Real, a33: Standard_Real, a34: Standard_Real): void;
  IsNegative(): Standard_Boolean;
  Form(): gp_TrsfForm;
  ScaleFactor(): Standard_Real;
  TranslationPart(): gp_XYZ;
  GetRotation_1(theAxis: gp_XYZ, theAngle: Standard_Real): Standard_Boolean;
  GetRotation_2(): gp_Quaternion;
  VectorialPart(): gp_Mat;
  HVectorialPart(): gp_Mat;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Real;
  Invert(): void;
  Inverted(): gp_Trsf;
  Multiplied(theT: gp_Trsf): gp_Trsf;
  Multiply(theT: gp_Trsf): void;
  PreMultiply(theT: gp_Trsf): void;
  Power(theN: Standard_Integer): void;
  Powered(theN: Standard_Integer): gp_Trsf;
  Transforms_1(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  Transforms_2(theCoord: gp_XYZ): void;
  delete(): void;
}

  export declare class gp_Trsf_1 extends gp_Trsf {
    constructor();
  }

  export declare class gp_Trsf_2 extends gp_Trsf {
    constructor(theT: gp_Trsf2d);
  }

export declare class gp_Ax2 {
  SetAxis(A1: gp_Ax1): void;
  SetDirection(V: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  SetXDirection(theVx: gp_Dir): void;
  SetYDirection(theVy: gp_Dir): void;
  Angle(theOther: gp_Ax2): Standard_Real;
  Axis(): gp_Ax1;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  XDirection(): gp_Dir;
  YDirection(): gp_Dir;
  IsCoplanar_1(Other: gp_Ax2, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  IsCoplanar_2(A1: gp_Ax1, LinearTolerance: Standard_Real, AngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Ax2;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Ax2;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Ax2;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Ax2;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Ax2;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Ax2;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Ax2;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Ax2;
  delete(): void;
}

  export declare class gp_Ax2_1 extends gp_Ax2 {
    constructor();
  }

  export declare class gp_Ax2_2 extends gp_Ax2 {
    constructor(P: gp_Pnt, N: gp_Dir, Vx: gp_Dir);
  }

  export declare class gp_Ax2_4 extends gp_Ax2 {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

export declare class gp_GTrsf {
  SetAffinity_1(theA1: gp_Ax1, theRatio: Standard_Real): void;
  SetAffinity_2(theA2: gp_Ax2, theRatio: Standard_Real): void;
  SetValue(theRow: Standard_Integer, theCol: Standard_Integer, theValue: Standard_Real): void;
  SetVectorialPart(theMatrix: gp_Mat): void;
  SetTranslationPart(theCoord: gp_XYZ): void;
  SetTrsf(theT: gp_Trsf): void;
  IsNegative(): Standard_Boolean;
  IsSingular(): Standard_Boolean;
  Form(): gp_TrsfForm;
  SetForm(): void;
  TranslationPart(): gp_XYZ;
  VectorialPart(): gp_Mat;
  Value(theRow: Standard_Integer, theCol: Standard_Integer): Standard_Real;
  Invert(): void;
  Inverted(): gp_GTrsf;
  Multiplied(theT: gp_GTrsf): gp_GTrsf;
  Multiply(theT: gp_GTrsf): void;
  PreMultiply(theT: gp_GTrsf): void;
  Power(theN: Standard_Integer): void;
  Powered(theN: Standard_Integer): gp_GTrsf;
  Transforms_1(theCoord: gp_XYZ): void;
  Transforms_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  Trsf(): gp_Trsf;
  delete(): void;
}

  export declare class gp_GTrsf_1 extends gp_GTrsf {
    constructor();
  }

  export declare class gp_GTrsf_2 extends gp_GTrsf {
    constructor(theT: gp_Trsf);
  }

  export declare class gp_GTrsf_3 extends gp_GTrsf {
    constructor(theM: gp_Mat, theV: gp_XYZ);
  }

export declare class gp_Pnt {
  SetCoord_1(theIndex: Standard_Integer, theXi: Standard_Real): void;
  SetCoord_2(theXp: Standard_Real, theYp: Standard_Real, theZp: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  SetXYZ(theCoord: gp_XYZ): void;
  Coord_1(theIndex: Standard_Integer): Standard_Real;
  Coord_2(theXp: Standard_Real, theYp: Standard_Real, theZp: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  XYZ(): gp_XYZ;
  Coord_3(): gp_XYZ;
  ChangeCoord(): gp_XYZ;
  BaryCenter(theAlpha: Standard_Real, theP: gp_Pnt, theBeta: Standard_Real): void;
  IsEqual(theOther: gp_Pnt, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance(theOther: gp_Pnt): Standard_Real;
  SquareDistance(theOther: gp_Pnt): Standard_Real;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Pnt;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Pnt;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Pnt;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Pnt;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Pnt;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Pnt;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Pnt;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Pnt;
  delete(): void;
}

  export declare class gp_Pnt_1 extends gp_Pnt {
    constructor();
  }

  export declare class gp_Pnt_2 extends gp_Pnt {
    constructor(theCoord: gp_XYZ);
  }

  export declare class gp_Pnt_3 extends gp_Pnt {
    constructor(theXp: Standard_Real, theYp: Standard_Real, theZp: Standard_Real);
  }

export declare class gp_Quaternion {
  IsEqual(theOther: gp_Quaternion): Standard_Boolean;
  SetRotation_1(theVecFrom: gp_Vec, theVecTo: gp_Vec): void;
  SetRotation_2(theVecFrom: gp_Vec, theVecTo: gp_Vec, theHelpCrossVec: gp_Vec): void;
  SetVectorAndAngle(theAxis: gp_Vec, theAngle: Standard_Real): void;
  GetVectorAndAngle(theAxis: gp_Vec, theAngle: Standard_Real): void;
  SetMatrix(theMat: gp_Mat): void;
  GetMatrix(): gp_Mat;
  SetEulerAngles(theOrder: gp_EulerSequence, theAlpha: Standard_Real, theBeta: Standard_Real, theGamma: Standard_Real): void;
  GetEulerAngles(theOrder: gp_EulerSequence, theAlpha: Standard_Real, theBeta: Standard_Real, theGamma: Standard_Real): void;
  Set_1(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theW: Standard_Real): void;
  Set_2(theQuaternion: gp_Quaternion): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  W(): Standard_Real;
  SetIdent(): void;
  Reverse(): void;
  Reversed(): gp_Quaternion;
  Invert(): void;
  Inverted(): gp_Quaternion;
  SquareNorm(): Standard_Real;
  Norm(): Standard_Real;
  Scale(theScale: Standard_Real): void;
  Scaled(theScale: Standard_Real): gp_Quaternion;
  StabilizeLength(): void;
  Normalize(): void;
  Normalized(): gp_Quaternion;
  Negated(): gp_Quaternion;
  Added(theOther: gp_Quaternion): gp_Quaternion;
  Subtracted(theOther: gp_Quaternion): gp_Quaternion;
  Multiplied(theOther: gp_Quaternion): gp_Quaternion;
  Add(theOther: gp_Quaternion): void;
  Subtract(theOther: gp_Quaternion): void;
  Multiply_1(theOther: gp_Quaternion): void;
  Dot(theOther: gp_Quaternion): Standard_Real;
  GetRotationAngle(): Standard_Real;
  Multiply_2(theVec: gp_Vec): gp_Vec;
  delete(): void;
}

  export declare class gp_Quaternion_1 extends gp_Quaternion {
    constructor();
  }

  export declare class gp_Quaternion_2 extends gp_Quaternion {
    constructor(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real, theW: Standard_Real);
  }

  export declare class gp_Quaternion_3 extends gp_Quaternion {
    constructor(theVecFrom: gp_Vec, theVecTo: gp_Vec);
  }

  export declare class gp_Quaternion_4 extends gp_Quaternion {
    constructor(theVecFrom: gp_Vec, theVecTo: gp_Vec, theHelpCrossVec: gp_Vec);
  }

  export declare class gp_Quaternion_5 extends gp_Quaternion {
    constructor(theAxis: gp_Vec, theAngle: Standard_Real);
  }

  export declare class gp_Quaternion_6 extends gp_Quaternion {
    constructor(theMat: gp_Mat);
  }

export declare class gp_Circ2d {
  SetLocation(theP: gp_Pnt2d): void;
  SetXAxis(theA: gp_Ax2d): void;
  SetAxis(theA: gp_Ax22d): void;
  SetYAxis(theA: gp_Ax2d): void;
  SetRadius(theRadius: Standard_Real): void;
  Area(): Standard_Real;
  Coefficients(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real, theE: Standard_Real, theF: Standard_Real): void;
  Contains(theP: gp_Pnt2d, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance(theP: gp_Pnt2d): Standard_Real;
  SquareDistance(theP: gp_Pnt2d): Standard_Real;
  Length(): Standard_Real;
  Location(): gp_Pnt2d;
  Radius(): Standard_Real;
  Axis(): gp_Ax22d;
  Position(): gp_Ax22d;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Reverse(): void;
  Reversed(): gp_Circ2d;
  IsDirect(): Standard_Boolean;
  Mirror_1(theP: gp_Pnt2d): void;
  Mirrored_1(theP: gp_Pnt2d): gp_Circ2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Circ2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Circ2d;
  Scale(theP: gp_Pnt2d, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Circ2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Circ2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Circ2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Circ2d;
  delete(): void;
}

  export declare class gp_Circ2d_1 extends gp_Circ2d {
    constructor();
  }

  export declare class gp_Circ2d_2 extends gp_Circ2d {
    constructor(theXAxis: gp_Ax2d, theRadius: Standard_Real, theIsSense: Standard_Boolean);
  }

  export declare class gp_Circ2d_3 extends gp_Circ2d {
    constructor(theAxis: gp_Ax22d, theRadius: Standard_Real);
  }

export declare class gp_Vec2d {
  SetCoord_1(theIndex: Standard_Integer, theXi: Standard_Real): void;
  SetCoord_2(theXv: Standard_Real, theYv: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetXY(theCoord: gp_XY): void;
  Coord_1(theIndex: Standard_Integer): Standard_Real;
  Coord_2(theXv: Standard_Real, theYv: Standard_Real): void;
  X(): Standard_Real;
  Y(): Standard_Real;
  XY(): gp_XY;
  IsEqual(theOther: gp_Vec2d, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Vec2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Vec2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Vec2d, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Vec2d): Standard_Real;
  Magnitude(): Standard_Real;
  SquareMagnitude(): Standard_Real;
  Add(theOther: gp_Vec2d): void;
  Added(theOther: gp_Vec2d): gp_Vec2d;
  Crossed(theRight: gp_Vec2d): Standard_Real;
  CrossMagnitude(theRight: gp_Vec2d): Standard_Real;
  CrossSquareMagnitude(theRight: gp_Vec2d): Standard_Real;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_Vec2d;
  Dot(theOther: gp_Vec2d): Standard_Real;
  GetNormal(): gp_Vec2d;
  Multiply(theScalar: Standard_Real): void;
  Multiplied(theScalar: Standard_Real): gp_Vec2d;
  Normalize(): void;
  Normalized(): gp_Vec2d;
  Reverse(): void;
  Reversed(): gp_Vec2d;
  Subtract(theRight: gp_Vec2d): void;
  Subtracted(theRight: gp_Vec2d): gp_Vec2d;
  SetLinearForm_1(theA1: Standard_Real, theV1: gp_Vec2d, theA2: Standard_Real, theV2: gp_Vec2d, theV3: gp_Vec2d): void;
  SetLinearForm_2(theA1: Standard_Real, theV1: gp_Vec2d, theA2: Standard_Real, theV2: gp_Vec2d): void;
  SetLinearForm_3(theA1: Standard_Real, theV1: gp_Vec2d, theV2: gp_Vec2d): void;
  SetLinearForm_4(theV1: gp_Vec2d, theV2: gp_Vec2d): void;
  Mirror_1(theV: gp_Vec2d): void;
  Mirrored_1(theV: gp_Vec2d): gp_Vec2d;
  Mirror_2(theA1: gp_Ax2d): void;
  Mirrored_2(theA1: gp_Ax2d): gp_Vec2d;
  Rotate(theAng: Standard_Real): void;
  Rotated(theAng: Standard_Real): gp_Vec2d;
  Scale(theS: Standard_Real): void;
  Scaled(theS: Standard_Real): gp_Vec2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Vec2d;
  delete(): void;
}

  export declare class gp_Vec2d_1 extends gp_Vec2d {
    constructor();
  }

  export declare class gp_Vec2d_2 extends gp_Vec2d {
    constructor(theV: gp_Dir2d);
  }

  export declare class gp_Vec2d_3 extends gp_Vec2d {
    constructor(theCoord: gp_XY);
  }

  export declare class gp_Vec2d_4 extends gp_Vec2d {
    constructor(theXv: Standard_Real, theYv: Standard_Real);
  }

  export declare class gp_Vec2d_5 extends gp_Vec2d {
    constructor(theP1: gp_Pnt2d, theP2: gp_Pnt2d);
  }

export declare type gp_EulerSequence = {
  gp_EulerAngles: {};
  gp_YawPitchRoll: {};
  gp_Extrinsic_XYZ: {};
  gp_Extrinsic_XZY: {};
  gp_Extrinsic_YZX: {};
  gp_Extrinsic_YXZ: {};
  gp_Extrinsic_ZXY: {};
  gp_Extrinsic_ZYX: {};
  gp_Intrinsic_XYZ: {};
  gp_Intrinsic_XZY: {};
  gp_Intrinsic_YZX: {};
  gp_Intrinsic_YXZ: {};
  gp_Intrinsic_ZXY: {};
  gp_Intrinsic_ZYX: {};
  gp_Extrinsic_XYX: {};
  gp_Extrinsic_XZX: {};
  gp_Extrinsic_YZY: {};
  gp_Extrinsic_YXY: {};
  gp_Extrinsic_ZYZ: {};
  gp_Extrinsic_ZXZ: {};
  gp_Intrinsic_XYX: {};
  gp_Intrinsic_XZX: {};
  gp_Intrinsic_YZY: {};
  gp_Intrinsic_YXY: {};
  gp_Intrinsic_ZXZ: {};
  gp_Intrinsic_ZYZ: {};
}

export declare class gp_Parab {
  SetAxis(theA1: gp_Ax1): void;
  SetFocal(theFocal: Standard_Real): void;
  SetLocation(theP: gp_Pnt): void;
  SetPosition(theA2: gp_Ax2): void;
  Axis(): gp_Ax1;
  Directrix(): gp_Ax1;
  Focal(): Standard_Real;
  Focus(): gp_Pnt;
  Location(): gp_Pnt;
  Parameter(): Standard_Real;
  Position(): gp_Ax2;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Parab;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Parab;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Parab;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Parab;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Parab;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Parab;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Parab;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Parab;
  delete(): void;
}

  export declare class gp_Parab_1 extends gp_Parab {
    constructor();
  }

  export declare class gp_Parab_2 extends gp_Parab {
    constructor(theA2: gp_Ax2, theFocal: Standard_Real);
  }

  export declare class gp_Parab_3 extends gp_Parab {
    constructor(theD: gp_Ax1, theF: gp_Pnt);
  }

export declare class gp_Ax1 {
  SetDirection(theV: gp_Dir): void;
  SetLocation(theP: gp_Pnt): void;
  Direction(): gp_Dir;
  Location(): gp_Pnt;
  IsCoaxial(Other: gp_Ax1, AngularTolerance: Standard_Real, LinearTolerance: Standard_Real): Standard_Boolean;
  IsNormal(theOther: gp_Ax1, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsOpposite(theOther: gp_Ax1, theAngularTolerance: Standard_Real): Standard_Boolean;
  IsParallel(theOther: gp_Ax1, theAngularTolerance: Standard_Real): Standard_Boolean;
  Angle(theOther: gp_Ax1): Standard_Real;
  Reverse(): void;
  Reversed(): gp_Ax1;
  Mirror_1(P: gp_Pnt): void;
  Mirrored_1(P: gp_Pnt): gp_Ax1;
  Mirror_2(A1: gp_Ax1): void;
  Mirrored_2(A1: gp_Ax1): gp_Ax1;
  Mirror_3(A2: gp_Ax2): void;
  Mirrored_3(A2: gp_Ax2): gp_Ax1;
  Rotate(theA1: gp_Ax1, theAngRad: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAngRad: Standard_Real): gp_Ax1;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Ax1;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Ax1;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Ax1;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Ax1;
  delete(): void;
}

  export declare class gp_Ax1_1 extends gp_Ax1 {
    constructor();
  }

  export declare class gp_Ax1_2 extends gp_Ax1 {
    constructor(theP: gp_Pnt, theV: gp_Dir);
  }

export declare class gp_Pln {
  Coefficients(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real): void;
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theLoc: gp_Pnt): void;
  SetPosition(theA3: gp_Ax3): void;
  UReverse(): void;
  VReverse(): void;
  Direct(): Standard_Boolean;
  Axis(): gp_Ax1;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  Distance_1(theP: gp_Pnt): Standard_Real;
  Distance_2(theL: gp_Lin): Standard_Real;
  Distance_3(theOther: gp_Pln): Standard_Real;
  SignedDistance_1(theP: gp_Pnt): Standard_Real;
  SignedDistance_2(theL: gp_Lin): Standard_Real;
  SignedDistance_3(theOther: gp_Pln): Standard_Real;
  SquareDistance_1(theP: gp_Pnt): Standard_Real;
  SquareDistance_2(theL: gp_Lin): Standard_Real;
  SquareDistance_3(theOther: gp_Pln): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Contains_1(theP: gp_Pnt, theLinearTolerance: Standard_Real): Standard_Boolean;
  Contains_2(theL: gp_Lin, theLinearTolerance: Standard_Real, theAngularTolerance: Standard_Real): Standard_Boolean;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Pln;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Pln;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Pln;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Pln;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Pln;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Pln;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Pln;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Pln;
  delete(): void;
}

  export declare class gp_Pln_1 extends gp_Pln {
    constructor();
  }

  export declare class gp_Pln_2 extends gp_Pln {
    constructor(theA3: gp_Ax3);
  }

  export declare class gp_Pln_3 extends gp_Pln {
    constructor(theP: gp_Pnt, theV: gp_Dir);
  }

  export declare class gp_Pln_4 extends gp_Pln {
    constructor(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real, theD: Standard_Real);
  }

export declare class gp_Elips {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetMajorRadius(theMajorRadius: Standard_Real): void;
  SetMinorRadius(theMinorRadius: Standard_Real): void;
  SetPosition(theA2: gp_Ax2): void;
  Area(): Standard_Real;
  Axis(): gp_Ax1;
  Directrix1(): gp_Ax1;
  Directrix2(): gp_Ax1;
  Eccentricity(): Standard_Real;
  Focal(): Standard_Real;
  Focus1(): gp_Pnt;
  Focus2(): gp_Pnt;
  Location(): gp_Pnt;
  MajorRadius(): Standard_Real;
  MinorRadius(): Standard_Real;
  Parameter(): Standard_Real;
  Position(): gp_Ax2;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Mirror_1(theP: gp_Pnt): void;
  Mirrored_1(theP: gp_Pnt): gp_Elips;
  Mirror_2(theA1: gp_Ax1): void;
  Mirrored_2(theA1: gp_Ax1): gp_Elips;
  Mirror_3(theA2: gp_Ax2): void;
  Mirrored_3(theA2: gp_Ax2): gp_Elips;
  Rotate(theA1: gp_Ax1, theAng: Standard_Real): void;
  Rotated(theA1: gp_Ax1, theAng: Standard_Real): gp_Elips;
  Scale(theP: gp_Pnt, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt, theS: Standard_Real): gp_Elips;
  Transform(theT: gp_Trsf): void;
  Transformed(theT: gp_Trsf): gp_Elips;
  Translate_1(theV: gp_Vec): void;
  Translated_1(theV: gp_Vec): gp_Elips;
  Translate_2(theP1: gp_Pnt, theP2: gp_Pnt): void;
  Translated_2(theP1: gp_Pnt, theP2: gp_Pnt): gp_Elips;
  delete(): void;
}

  export declare class gp_Elips_1 extends gp_Elips {
    constructor();
  }

  export declare class gp_Elips_2 extends gp_Elips {
    constructor(theA2: gp_Ax2, theMajorRadius: Standard_Real, theMinorRadius: Standard_Real);
  }

export declare class gp_Lin2d {
  Reverse(): void;
  Reversed(): gp_Lin2d;
  SetDirection(theV: gp_Dir2d): void;
  SetLocation(theP: gp_Pnt2d): void;
  SetPosition(theA: gp_Ax2d): void;
  Coefficients(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real): void;
  Direction(): gp_Dir2d;
  Location(): gp_Pnt2d;
  Position(): gp_Ax2d;
  Angle(theOther: gp_Lin2d): Standard_Real;
  Contains(theP: gp_Pnt2d, theLinearTolerance: Standard_Real): Standard_Boolean;
  Distance_1(theP: gp_Pnt2d): Standard_Real;
  Distance_2(theOther: gp_Lin2d): Standard_Real;
  SquareDistance_1(theP: gp_Pnt2d): Standard_Real;
  SquareDistance_2(theOther: gp_Lin2d): Standard_Real;
  Normal(theP: gp_Pnt2d): gp_Lin2d;
  Mirror_1(theP: gp_Pnt2d): void;
  Mirrored_1(theP: gp_Pnt2d): gp_Lin2d;
  Mirror_2(theA: gp_Ax2d): void;
  Mirrored_2(theA: gp_Ax2d): gp_Lin2d;
  Rotate(theP: gp_Pnt2d, theAng: Standard_Real): void;
  Rotated(theP: gp_Pnt2d, theAng: Standard_Real): gp_Lin2d;
  Scale(theP: gp_Pnt2d, theS: Standard_Real): void;
  Scaled(theP: gp_Pnt2d, theS: Standard_Real): gp_Lin2d;
  Transform(theT: gp_Trsf2d): void;
  Transformed(theT: gp_Trsf2d): gp_Lin2d;
  Translate_1(theV: gp_Vec2d): void;
  Translated_1(theV: gp_Vec2d): gp_Lin2d;
  Translate_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): void;
  Translated_2(theP1: gp_Pnt2d, theP2: gp_Pnt2d): gp_Lin2d;
  delete(): void;
}

  export declare class gp_Lin2d_1 extends gp_Lin2d {
    constructor();
  }

  export declare class gp_Lin2d_2 extends gp_Lin2d {
    constructor(theA: gp_Ax2d);
  }

  export declare class gp_Lin2d_3 extends gp_Lin2d {
    constructor(theP: gp_Pnt2d, theV: gp_Dir2d);
  }

  export declare class gp_Lin2d_4 extends gp_Lin2d {
    constructor(theA: Standard_Real, theB: Standard_Real, theC: Standard_Real);
  }

export declare class gp_XYZ {
  SetCoord_1(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  SetCoord_2(theIndex: Standard_Integer, theXi: Standard_Real): void;
  SetX(theX: Standard_Real): void;
  SetY(theY: Standard_Real): void;
  SetZ(theZ: Standard_Real): void;
  Coord_1(theIndex: Standard_Integer): Standard_Real;
  ChangeCoord(theIndex: Standard_Integer): Standard_Real;
  Coord_2(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real): void;
  GetData(): Standard_Real;
  ChangeData(): Standard_Real;
  X(): Standard_Real;
  Y(): Standard_Real;
  Z(): Standard_Real;
  Modulus(): Standard_Real;
  SquareModulus(): Standard_Real;
  IsEqual(theOther: gp_XYZ, theTolerance: Standard_Real): Standard_Boolean;
  Add(theOther: gp_XYZ): void;
  Added(theOther: gp_XYZ): gp_XYZ;
  Cross(theOther: gp_XYZ): void;
  Crossed(theOther: gp_XYZ): gp_XYZ;
  CrossMagnitude(theRight: gp_XYZ): Standard_Real;
  CrossSquareMagnitude(theRight: gp_XYZ): Standard_Real;
  CrossCross(theCoord1: gp_XYZ, theCoord2: gp_XYZ): void;
  CrossCrossed(theCoord1: gp_XYZ, theCoord2: gp_XYZ): gp_XYZ;
  Divide(theScalar: Standard_Real): void;
  Divided(theScalar: Standard_Real): gp_XYZ;
  Dot(theOther: gp_XYZ): Standard_Real;
  DotCross(theCoord1: gp_XYZ, theCoord2: gp_XYZ): Standard_Real;
  Multiply_1(theScalar: Standard_Real): void;
  Multiply_2(theOther: gp_XYZ): void;
  Multiply_3(theMatrix: gp_Mat): void;
  Multiplied_1(theScalar: Standard_Real): gp_XYZ;
  Multiplied_2(theOther: gp_XYZ): gp_XYZ;
  Multiplied_3(theMatrix: gp_Mat): gp_XYZ;
  Normalize(): void;
  Normalized(): gp_XYZ;
  Reverse(): void;
  Reversed(): gp_XYZ;
  Subtract(theOther: gp_XYZ): void;
  Subtracted(theOther: gp_XYZ): gp_XYZ;
  SetLinearForm_1(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ, theA3: Standard_Real, theXYZ3: gp_XYZ, theXYZ4: gp_XYZ): void;
  SetLinearForm_2(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ, theA3: Standard_Real, theXYZ3: gp_XYZ): void;
  SetLinearForm_3(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ, theXYZ3: gp_XYZ): void;
  SetLinearForm_4(theA1: Standard_Real, theXYZ1: gp_XYZ, theA2: Standard_Real, theXYZ2: gp_XYZ): void;
  SetLinearForm_5(theA1: Standard_Real, theXYZ1: gp_XYZ, theXYZ2: gp_XYZ): void;
  SetLinearForm_6(theXYZ1: gp_XYZ, theXYZ2: gp_XYZ): void;
  delete(): void;
}

  export declare class gp_XYZ_1 extends gp_XYZ {
    constructor();
  }

  export declare class gp_XYZ_2 extends gp_XYZ {
    constructor(theX: Standard_Real, theY: Standard_Real, theZ: Standard_Real);
  }

export declare class Bnd_Box {
  SetWhole(): void;
  SetVoid(): void;
  Set_1(P: gp_Pnt): void;
  Set_2(P: gp_Pnt, D: gp_Dir): void;
  Update_1(aXmin: Standard_Real, aYmin: Standard_Real, aZmin: Standard_Real, aXmax: Standard_Real, aYmax: Standard_Real, aZmax: Standard_Real): void;
  Update_2(X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  GetGap(): Standard_Real;
  SetGap(Tol: Standard_Real): void;
  Enlarge(Tol: Standard_Real): void;
  Get_1(theXmin: Standard_Real, theYmin: Standard_Real, theZmin: Standard_Real, theXmax: Standard_Real, theYmax: Standard_Real, theZmax: Standard_Real): void;
  Get_2(): Limits;
  GetXMin(): Standard_Real;
  GetXMax(): Standard_Real;
  GetYMin(): Standard_Real;
  GetYMax(): Standard_Real;
  GetZMin(): Standard_Real;
  GetZMax(): Standard_Real;
  CornerMin(): gp_Pnt;
  CornerMax(): gp_Pnt;
  Center(): any;
  OpenXmin(): void;
  OpenXmax(): void;
  OpenYmin(): void;
  OpenYmax(): void;
  OpenZmin(): void;
  OpenZmax(): void;
  IsOpen(): Standard_Boolean;
  IsOpenXmin(): Standard_Boolean;
  IsOpenXmax(): Standard_Boolean;
  IsOpenYmin(): Standard_Boolean;
  IsOpenYmax(): Standard_Boolean;
  IsOpenZmin(): Standard_Boolean;
  IsOpenZmax(): Standard_Boolean;
  IsWhole(): Standard_Boolean;
  IsVoid(): Standard_Boolean;
  IsXThin(tol: Standard_Real): Standard_Boolean;
  IsYThin(tol: Standard_Real): Standard_Boolean;
  IsZThin(tol: Standard_Real): Standard_Boolean;
  IsThin(tol: Standard_Real): Standard_Boolean;
  Transformed(T: gp_Trsf): Bnd_Box;
  Add_1(Other: Bnd_Box): void;
  Add_2(P: gp_Pnt): void;
  Add_3(P: gp_Pnt, D: gp_Dir): void;
  Add_4(D: gp_Dir): void;
  IsOut_1(P: gp_Pnt): Standard_Boolean;
  IsOut_2(L: gp_Lin): Standard_Boolean;
  IsOut_3(P: gp_Pln): Standard_Boolean;
  IsOut_4(Other: Bnd_Box): Standard_Boolean;
  IsOut_5(Other: Bnd_Box, T: gp_Trsf): Standard_Boolean;
  IsOut_6(T1: gp_Trsf, Other: Bnd_Box, T2: gp_Trsf): Standard_Boolean;
  IsOut_7(P1: gp_Pnt, P2: gp_Pnt, D: gp_Dir): Standard_Boolean;
  Contains(theP: gp_Pnt): Standard_Boolean;
  Intersects(theOther: Bnd_Box): Standard_Boolean;
  Distance(Other: Bnd_Box): Standard_Real;
  Dump(): void;
  SquareExtent(): Standard_Real;
  FinitePart(): Bnd_Box;
  HasFinitePart(): Standard_Boolean;
  delete(): void;
}

  export declare class Bnd_Box_1 extends Bnd_Box {
    constructor();
  }

  export declare class Bnd_Box_2 extends Bnd_Box {
    constructor(theMin: gp_Pnt, theMax: gp_Pnt);
  }

export declare class Bnd_OBB {
  ReBuild(theListOfPoints: NCollection_Array1<gp_Pnt>, theListOfTolerances: NCollection_Array1<double>, theIsOptimal: Standard_Boolean): void;
  SetCenter(theCenter: gp_Pnt): void;
  SetXComponent(theXDirection: gp_Dir, theHXSize: Standard_Real): void;
  SetYComponent(theYDirection: gp_Dir, theHYSize: Standard_Real): void;
  SetZComponent(theZDirection: gp_Dir, theHZSize: Standard_Real): void;
  Position(): gp_Ax3;
  Center(): gp_XYZ;
  XDirection(): gp_XYZ;
  YDirection(): gp_XYZ;
  ZDirection(): gp_XYZ;
  XHSize(): Standard_Real;
  YHSize(): Standard_Real;
  ZHSize(): Standard_Real;
  GetHalfSizes(): HalfSizes;
  IsVoid(): Standard_Boolean;
  SetVoid(): void;
  SetAABox(theFlag: Standard_Boolean): void;
  IsAABox(): Standard_Boolean;
  Enlarge(theGapAdd: Standard_Real): void;
  GetVertex(theP: gp_Pnt[8]): Standard_Boolean;
  SquareExtent(): Standard_Real;
  IsOut_1(theOther: Bnd_OBB): Standard_Boolean;
  IsOut_2(theP: gp_Pnt): Standard_Boolean;
  Contains(theP: gp_Pnt): Standard_Boolean;
  Intersects(theOther: Bnd_OBB): Standard_Boolean;
  IsCompletelyInside(theOther: Bnd_OBB): Standard_Boolean;
  Add_1(theOther: Bnd_OBB): void;
  Add_2(theP: gp_Pnt): void;
  delete(): void;
}

  export declare class Bnd_OBB_1 extends Bnd_OBB {
    constructor();
  }

  export declare class Bnd_OBB_2 extends Bnd_OBB {
    constructor(theCenter: gp_Pnt, theXDirection: gp_Dir, theYDirection: gp_Dir, theZDirection: gp_Dir, theHXSize: Standard_Real, theHYSize: Standard_Real, theHZSize: Standard_Real);
  }

  export declare class Bnd_OBB_3 extends Bnd_OBB {
    constructor(theBox: Bnd_Box);
  }

export declare type GeomAbs_CurveType = {
  GeomAbs_Line: {};
  GeomAbs_Circle: {};
  GeomAbs_Ellipse: {};
  GeomAbs_Hyperbola: {};
  GeomAbs_Parabola: {};
  GeomAbs_BezierCurve: {};
  GeomAbs_BSplineCurve: {};
  GeomAbs_OffsetCurve: {};
  GeomAbs_OtherCurve: {};
}

export declare type GeomAbs_Shape = {
  GeomAbs_C0: {};
  GeomAbs_G1: {};
  GeomAbs_C1: {};
  GeomAbs_G2: {};
  GeomAbs_C2: {};
  GeomAbs_C3: {};
  GeomAbs_CN: {};
}

export declare type GeomAbs_JoinType = {
  GeomAbs_Arc: {};
  GeomAbs_Tangent: {};
  GeomAbs_Intersection: {};
}

export declare type GeomAbs_SurfaceType = {
  GeomAbs_Plane: {};
  GeomAbs_Cylinder: {};
  GeomAbs_Cone: {};
  GeomAbs_Sphere: {};
  GeomAbs_Torus: {};
  GeomAbs_BezierSurface: {};
  GeomAbs_BSplineSurface: {};
  GeomAbs_SurfaceOfRevolution: {};
  GeomAbs_SurfaceOfExtrusion: {};
  GeomAbs_OffsetSurface: {};
  GeomAbs_OtherSurface: {};
}

export declare class Poly_Triangle {
  Set_1(theN1: Standard_Integer, theN2: Standard_Integer, theN3: Standard_Integer): void;
  Set_2(theIndex: Standard_Integer, theNode: Standard_Integer): void;
  Get(theN1: Standard_Integer, theN2: Standard_Integer, theN3: Standard_Integer): void;
  Value(theIndex: Standard_Integer): Standard_Integer;
  ChangeValue(theIndex: Standard_Integer): Standard_Integer;
  delete(): void;
}

  export declare class Poly_Triangle_1 extends Poly_Triangle {
    constructor();
  }

  export declare class Poly_Triangle_2 extends Poly_Triangle {
    constructor(theN1: Standard_Integer, theN2: Standard_Integer, theN3: Standard_Integer);
  }

export declare class Poly_Triangulation extends Standard_Transient {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  Copy(): any;
  Deflection_1(): Standard_Real;
  Deflection_2(theDeflection: Standard_Real): void;
  Parameters_1(): any;
  Parameters_2(theParams: any): void;
  Clear(): void;
  HasGeometry(): Standard_Boolean;
  NbNodes(): Standard_Integer;
  NbTriangles(): Standard_Integer;
  HasUVNodes(): Standard_Boolean;
  HasNormals(): Standard_Boolean;
  Node(theIndex: Standard_Integer): gp_Pnt;
  SetNode(theIndex: Standard_Integer, thePnt: gp_Pnt): void;
  UVNode(theIndex: Standard_Integer): gp_Pnt2d;
  SetUVNode(theIndex: Standard_Integer, thePnt: gp_Pnt2d): void;
  Triangle(theIndex: Standard_Integer): Poly_Triangle;
  SetTriangle(theIndex: Standard_Integer, theTriangle: Poly_Triangle): void;
  Normal_1(theIndex: Standard_Integer): gp_Dir;
  Normal_2(theIndex: Standard_Integer, theVec3: NCollection_Vec3<float>): void;
  SetNormal_1(theIndex: Standard_Integer, theNormal: NCollection_Vec3<float>): void;
  SetNormal_2(theIndex: Standard_Integer, theNormal: gp_Dir): void;
  MeshPurpose(): Poly_MeshPurpose;
  SetMeshPurpose(thePurpose: Poly_MeshPurpose): void;
  CachedMinMax(): Bnd_Box;
  SetCachedMinMax(theBox: Bnd_Box): void;
  HasCachedMinMax(): Standard_Boolean;
  UpdateCachedMinMax(): void;
  MinMax(theBox: Bnd_Box, theTrsf: gp_Trsf, theIsAccurate: Standard_Boolean): Standard_Boolean;
  IsDoublePrecision(): Standard_Boolean;
  SetDoublePrecision(theIsDouble: Standard_Boolean): void;
  ResizeNodes(theNbNodes: Standard_Integer, theToCopyOld: Standard_Boolean): void;
  ResizeTriangles(theNbTriangles: Standard_Integer, theToCopyOld: Standard_Boolean): void;
  AddUVNodes(): void;
  RemoveUVNodes(): void;
  AddNormals(): void;
  RemoveNormals(): void;
  ComputeNormals(): void;
  MapNodeArray(): any;
  MapTriangleArray(): any;
  MapUVNodeArray(): any;
  MapNormalArray(): any;
  InternalTriangles(): any;
  InternalNodes(): Poly_ArrayOfNodes;
  InternalUVNodes(): Poly_ArrayOfUVNodes;
  InternalNormals(): any;
  SetNormals(theNormals: any): void;
  Triangles(): any;
  ChangeTriangles(): any;
  ChangeTriangle(theIndex: Standard_Integer): Poly_Triangle;
  NbDeferredNodes(): Standard_Integer;
  NbDeferredTriangles(): Standard_Integer;
  HasDeferredData(): Standard_Boolean;
  LoadDeferredData(theFileSystem: any): Standard_Boolean;
  DetachedLoadDeferredData(theFileSystem: any): any;
  UnloadDeferredData(): Standard_Boolean;
  delete(): void;
}

  export declare class Poly_Triangulation_1 extends Poly_Triangulation {
    constructor();
  }

  export declare class Poly_Triangulation_2 extends Poly_Triangulation {
    constructor(theNbNodes: Standard_Integer, theNbTriangles: Standard_Integer, theHasUVNodes: Standard_Boolean, theHasNormals: Standard_Boolean);
  }

  export declare class Poly_Triangulation_3 extends Poly_Triangulation {
    constructor(Nodes: NCollection_Array1<gp_Pnt>, Triangles: NCollection_Array1<Poly_Triangle>);
  }

  export declare class Poly_Triangulation_4 extends Poly_Triangulation {
    constructor(Nodes: NCollection_Array1<gp_Pnt>, UVNodes: NCollection_Array1<gp_Pnt2d>, Triangles: NCollection_Array1<Poly_Triangle>);
  }

  export declare class Poly_Triangulation_5 extends Poly_Triangulation {
    constructor(theTriangulation: any);
  }

export declare class Poly_PolygonOnTriangulation extends Standard_Transient {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  Copy(): any;
  Deflection_1(): Standard_Real;
  Deflection_2(theDefl: Standard_Real): void;
  NbNodes(): Standard_Integer;
  Node(theIndex: Standard_Integer): Standard_Integer;
  ChangeNodeArray(): any;
  SetNode(theIndex: Standard_Integer, theNode: Standard_Integer): void;
  HasParameters(): Standard_Boolean;
  Parameter(theIndex: Standard_Integer): Standard_Real;
  SetParameter(theIndex: Standard_Integer, theValue: Standard_Real): void;
  ChangeParameterArray(): any;
  SetParameters(theParameters: any): void;
  Nodes(): any;
  Parameters(): any;
  ChangeNodes(): any;
  ChangeParameters(): any;
  delete(): void;
}

  export declare class Poly_PolygonOnTriangulation_1 extends Poly_PolygonOnTriangulation {
    constructor(theNbNodes: Standard_Integer, theHasParams: Standard_Boolean);
  }

  export declare class Poly_PolygonOnTriangulation_2 extends Poly_PolygonOnTriangulation {
    constructor(Nodes: NCollection_Array1<int>);
  }

  export declare class Poly_PolygonOnTriangulation_3 extends Poly_PolygonOnTriangulation {
    constructor(Nodes: NCollection_Array1<int>, Parameters: NCollection_Array1<double>);
  }

export declare class Poly_Connect {
  Load(theTriangulation: any): void;
  Triangulation(): any;
  Triangle(N: Standard_Integer): Standard_Integer;
  Triangles(T: Standard_Integer, t1: Standard_Integer, t2: Standard_Integer, t3: Standard_Integer): void;
  Nodes(T: Standard_Integer, n1: Standard_Integer, n2: Standard_Integer, n3: Standard_Integer): void;
  Initialize(N: Standard_Integer): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): Standard_Integer;
  delete(): void;
}

  export declare class Poly_Connect_1 extends Poly_Connect {
    constructor();
  }

  export declare class Poly_Connect_2 extends Poly_Connect {
    constructor(theTriangulation: any);
  }

export declare class TopLoc_Location {
  IsIdentity(): Standard_Boolean;
  Identity(): void;
  FirstDatum(): any;
  FirstPower(): Standard_Integer;
  NextLocation(): TopLoc_Location;
  Transformation(): gp_Trsf;
  Inverted(): TopLoc_Location;
  Multiplied(Other: TopLoc_Location): TopLoc_Location;
  Divided(Other: TopLoc_Location): TopLoc_Location;
  Predivided(Other: TopLoc_Location): TopLoc_Location;
  Powered(pwr: Standard_Integer): TopLoc_Location;
  HashCode(): Standard_Size;
  IsEqual(theOther: TopLoc_Location): Standard_Boolean;
  IsDifferent(theOther: TopLoc_Location): Standard_Boolean;
  Clear(): void;
  static ScalePrec(): Standard_Real;
  delete(): void;
}

  export declare class TopLoc_Location_1 extends TopLoc_Location {
    constructor();
  }

  export declare class TopLoc_Location_2 extends TopLoc_Location {
    constructor(theOther: TopLoc_Location);
  }

  export declare class TopLoc_Location_3 extends TopLoc_Location {
    constructor(theOther: TopLoc_Location);
  }

  export declare class TopLoc_Location_4 extends TopLoc_Location {
    constructor(T: gp_Trsf);
  }

  export declare class TopLoc_Location_5 extends TopLoc_Location {
    constructor(D: any);
  }

export declare class GC_MakeArcOfHyperbola extends GC_Root {
  Value(): any;
  delete(): void;
}

  export declare class GC_MakeArcOfHyperbola_1 extends GC_MakeArcOfHyperbola {
    constructor(theHypr: gp_Hypr, theAlpha1: Standard_Real, theAlpha2: Standard_Real, theSense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfHyperbola_2 extends GC_MakeArcOfHyperbola {
    constructor(theHypr: gp_Hypr, theP: gp_Pnt, theAlpha: Standard_Real, theSense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfHyperbola_3 extends GC_MakeArcOfHyperbola {
    constructor(theHypr: gp_Hypr, theP1: gp_Pnt, theP2: gp_Pnt, theSense: Standard_Boolean);
  }

export declare class GC_MakeArcOfParabola extends GC_Root {
  Value(): any;
  delete(): void;
}

  export declare class GC_MakeArcOfParabola_1 extends GC_MakeArcOfParabola {
    constructor(theParab: gp_Parab, theAlpha1: Standard_Real, theAlpha2: Standard_Real, theSense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfParabola_2 extends GC_MakeArcOfParabola {
    constructor(theParab: gp_Parab, theP: gp_Pnt, theAlpha: Standard_Real, theSense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfParabola_3 extends GC_MakeArcOfParabola {
    constructor(theParab: gp_Parab, theP1: gp_Pnt, theP2: gp_Pnt, theSense: Standard_Boolean);
  }

export declare class GC_MakeArcOfCircle extends GC_Root {
  Value(): any;
  delete(): void;
}

  export declare class GC_MakeArcOfCircle_1 extends GC_MakeArcOfCircle {
    constructor(theCirc: gp_Circ, theAlpha1: Standard_Real, theAlpha2: Standard_Real, theSense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfCircle_2 extends GC_MakeArcOfCircle {
    constructor(theCirc: gp_Circ, theP: gp_Pnt, theAlpha: Standard_Real, theSense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfCircle_3 extends GC_MakeArcOfCircle {
    constructor(theCirc: gp_Circ, theP1: gp_Pnt, theP2: gp_Pnt, theSense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfCircle_4 extends GC_MakeArcOfCircle {
    constructor(theP1: gp_Pnt, theP2: gp_Pnt, theP3: gp_Pnt);
  }

  export declare class GC_MakeArcOfCircle_5 extends GC_MakeArcOfCircle {
    constructor(theP1: gp_Pnt, theV: gp_Vec, theP2: gp_Pnt);
  }

export declare class GC_Root {
  constructor();
  IsDone(): Standard_Boolean;
  IsError(): Standard_Boolean;
  Status(): gce_ErrorType;
  delete(): void;
}

export declare class GC_MakeSegment extends GC_Root {
  Value(): any;
  delete(): void;
}

  export declare class GC_MakeSegment_1 extends GC_MakeSegment {
    constructor(theP1: gp_Pnt, theP2: gp_Pnt);
  }

  export declare class GC_MakeSegment_2 extends GC_MakeSegment {
    constructor(theLine: gp_Lin, theU1: Standard_Real, theU2: Standard_Real);
  }

  export declare class GC_MakeSegment_3 extends GC_MakeSegment {
    constructor(theLine: gp_Lin, thePoint: gp_Pnt, theUlast: Standard_Real);
  }

  export declare class GC_MakeSegment_4 extends GC_MakeSegment {
    constructor(theLine: gp_Lin, theP1: gp_Pnt, theP2: gp_Pnt);
  }

export declare class GC_MakeArcOfEllipse extends GC_Root {
  Value(): any;
  delete(): void;
}

  export declare class GC_MakeArcOfEllipse_1 extends GC_MakeArcOfEllipse {
    constructor(theElips: gp_Elips, theAlpha1: Standard_Real, theAlpha2: Standard_Real, theSense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfEllipse_2 extends GC_MakeArcOfEllipse {
    constructor(theElips: gp_Elips, theP: gp_Pnt, theAlpha: Standard_Real, theSense: Standard_Boolean);
  }

  export declare class GC_MakeArcOfEllipse_3 extends GC_MakeArcOfEllipse {
    constructor(theElips: gp_Elips, theP1: gp_Pnt, theP2: gp_Pnt, theSense: Standard_Boolean);
  }

export declare class GC_MakeCircle extends GC_Root {
  Value(): any;
  delete(): void;
}

  export declare class GC_MakeCircle_1 extends GC_MakeCircle {
    constructor(theC: gp_Circ);
  }

  export declare class GC_MakeCircle_2 extends GC_MakeCircle {
    constructor(theA2: gp_Ax2, theRadius: Standard_Real);
  }

  export declare class GC_MakeCircle_3 extends GC_MakeCircle {
    constructor(theCirc: gp_Circ, theDist: Standard_Real);
  }

  export declare class GC_MakeCircle_4 extends GC_MakeCircle {
    constructor(theCirc: gp_Circ, thePoint: gp_Pnt);
  }

  export declare class GC_MakeCircle_5 extends GC_MakeCircle {
    constructor(theP1: gp_Pnt, theP2: gp_Pnt, theP3: gp_Pnt);
  }

  export declare class GC_MakeCircle_6 extends GC_MakeCircle {
    constructor(theCenter: gp_Pnt, theNorm: gp_Dir, theRadius: Standard_Real);
  }

  export declare class GC_MakeCircle_7 extends GC_MakeCircle {
    constructor(theCenter: gp_Pnt, thePtAxis: gp_Pnt, theRadius: Standard_Real);
  }

  export declare class GC_MakeCircle_8 extends GC_MakeCircle {
    constructor(theAxis: gp_Ax1, theRadius: Standard_Real);
  }

export declare class GeomLib_IsPlanarSurface {
  constructor(S: any, Tol: Standard_Real)
  IsPlanar(): Standard_Boolean;
  Plan(): gp_Pln;
  delete(): void;
}

export declare class gce_Root {
  constructor();
  IsDone(): Standard_Boolean;
  IsError(): Standard_Boolean;
  Status(): gce_ErrorType;
  delete(): void;
}

export declare class gce_MakeLin extends gce_Root {
  Value(): gp_Lin;
  Operator(): gp_Lin;
  delete(): void;
}

  export declare class gce_MakeLin_1 extends gce_MakeLin {
    constructor(A1: gp_Ax1);
  }

  export declare class gce_MakeLin_2 extends gce_MakeLin {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

  export declare class gce_MakeLin_3 extends gce_MakeLin {
    constructor(Lin: gp_Lin, Point: gp_Pnt);
  }

  export declare class gce_MakeLin_4 extends gce_MakeLin {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

export declare class IntAna2d_AnaIntersection {
  Perform_1(L1: gp_Lin2d, L2: gp_Lin2d): void;
  Perform_2(C1: gp_Circ2d, C2: gp_Circ2d): void;
  Perform_3(L: gp_Lin2d, C: gp_Circ2d): void;
  Perform_4(L: gp_Lin2d, C: IntAna2d_Conic): void;
  Perform_5(C: gp_Circ2d, Co: IntAna2d_Conic): void;
  Perform_6(E: gp_Elips2d, C: IntAna2d_Conic): void;
  Perform_7(P: gp_Parab2d, C: IntAna2d_Conic): void;
  Perform_8(H: gp_Hypr2d, C: IntAna2d_Conic): void;
  IsDone(): Standard_Boolean;
  IsEmpty(): Standard_Boolean;
  IdenticalElements(): Standard_Boolean;
  ParallelElements(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(N: Standard_Integer): IntAna2d_IntPoint;
  delete(): void;
}

  export declare class IntAna2d_AnaIntersection_1 extends IntAna2d_AnaIntersection {
    constructor();
  }

  export declare class IntAna2d_AnaIntersection_2 extends IntAna2d_AnaIntersection {
    constructor(L1: gp_Lin2d, L2: gp_Lin2d);
  }

  export declare class IntAna2d_AnaIntersection_3 extends IntAna2d_AnaIntersection {
    constructor(C1: gp_Circ2d, C2: gp_Circ2d);
  }

  export declare class IntAna2d_AnaIntersection_4 extends IntAna2d_AnaIntersection {
    constructor(L: gp_Lin2d, C: gp_Circ2d);
  }

  export declare class IntAna2d_AnaIntersection_5 extends IntAna2d_AnaIntersection {
    constructor(L: gp_Lin2d, C: IntAna2d_Conic);
  }

  export declare class IntAna2d_AnaIntersection_6 extends IntAna2d_AnaIntersection {
    constructor(C: gp_Circ2d, Co: IntAna2d_Conic);
  }

  export declare class IntAna2d_AnaIntersection_7 extends IntAna2d_AnaIntersection {
    constructor(E: gp_Elips2d, C: IntAna2d_Conic);
  }

  export declare class IntAna2d_AnaIntersection_8 extends IntAna2d_AnaIntersection {
    constructor(P: gp_Parab2d, C: IntAna2d_Conic);
  }

  export declare class IntAna2d_AnaIntersection_9 extends IntAna2d_AnaIntersection {
    constructor(H: gp_Hypr2d, C: IntAna2d_Conic);
  }

export declare class GeomConvert {
  constructor();
  static SplitBSplineCurve_1(C: any, FromK1: Standard_Integer, ToK2: Standard_Integer, SameOrientation: Standard_Boolean): any;
  static SplitBSplineCurve_2(C: any, FromU1: Standard_Real, ToU2: Standard_Real, ParametricTolerance: Standard_Real, SameOrientation: Standard_Boolean): any;
  static SplitBSplineSurface_1(S: any, FromUK1: Standard_Integer, ToUK2: Standard_Integer, FromVK1: Standard_Integer, ToVK2: Standard_Integer, SameUOrientation: Standard_Boolean, SameVOrientation: Standard_Boolean): any;
  static SplitBSplineSurface_2(S: any, FromK1: Standard_Integer, ToK2: Standard_Integer, USplit: Standard_Boolean, SameOrientation: Standard_Boolean): any;
  static SplitBSplineSurface_3(S: any, FromU1: Standard_Real, ToU2: Standard_Real, FromV1: Standard_Real, ToV2: Standard_Real, ParametricTolerance: Standard_Real, SameUOrientation: Standard_Boolean, SameVOrientation: Standard_Boolean): any;
  static SplitBSplineSurface_4(S: any, FromParam1: Standard_Real, ToParam2: Standard_Real, USplit: Standard_Boolean, ParametricTolerance: Standard_Real, SameOrientation: Standard_Boolean): any;
  static CurveToBSplineCurve(C: any, Parameterisation: Convert_ParameterisationType): any;
  static SurfaceToBSplineSurface(S: any): any;
  static ConcatG1(ArrayOfCurves: any, ArrayOfToler: NCollection_Array1<double>, ArrayOfConcatenated: any, ClosedFlag: Standard_Boolean, ClosedTolerance: Standard_Real): void;
  static ConcatC1_1(ArrayOfCurves: any, ArrayOfToler: NCollection_Array1<double>, ArrayOfIndices: any, ArrayOfConcatenated: any, ClosedFlag: Standard_Boolean, ClosedTolerance: Standard_Real): void;
  static ConcatC1_2(ArrayOfCurves: any, ArrayOfToler: NCollection_Array1<double>, ArrayOfIndices: any, ArrayOfConcatenated: any, ClosedFlag: Standard_Boolean, ClosedTolerance: Standard_Real, AngularTolerance: Standard_Real): void;
  static C0BSplineToC1BSplineCurve(BS: any, tolerance: Standard_Real, AngularTolerance: Standard_Real): void;
  static C0BSplineToArrayOfC1BSplineCurve_1(BS: any, tabBS: any, tolerance: Standard_Real): void;
  static C0BSplineToArrayOfC1BSplineCurve_2(BS: any, tabBS: any, AngularTolerance: Standard_Real, tolerance: Standard_Real): void;
  delete(): void;
}

export declare class GeomConvert_BSplineCurveToBezierCurve {
  Arc(Index: Standard_Integer): any;
  Arcs(Curves: any): void;
  Knots(TKnots: NCollection_Array1<double>): void;
  NbArcs(): Standard_Integer;
  delete(): void;
}

  export declare class GeomConvert_BSplineCurveToBezierCurve_1 extends GeomConvert_BSplineCurveToBezierCurve {
    constructor(BasisCurve: any);
  }

  export declare class GeomConvert_BSplineCurveToBezierCurve_2 extends GeomConvert_BSplineCurveToBezierCurve {
    constructor(BasisCurve: any, U1: Standard_Real, U2: Standard_Real, ParametricTolerance: Standard_Real);
  }

export declare class GeomConvert_CompCurveToBSplineCurve {
  Add_1(NewCurve: any, Tolerance: Standard_Real, After: Standard_Boolean, WithRatio: Standard_Boolean, MinM: Standard_Integer): Standard_Boolean;
  BSplineCurve(): any;
  Clear(): void;
  delete(): void;
}

  export declare class GeomConvert_CompCurveToBSplineCurve_1 extends GeomConvert_CompCurveToBSplineCurve {
    constructor(Parameterisation: Convert_ParameterisationType);
  }

  export declare class GeomConvert_CompCurveToBSplineCurve_2 extends GeomConvert_CompCurveToBSplineCurve {
    constructor(BasisCurve: any, Parameterisation: Convert_ParameterisationType);
  }

export declare class GCPnts_QuasiUniformDeflection {
  Initialize_1(theC: Adaptor3d_Curve, theDeflection: Standard_Real, theContinuity: GeomAbs_Shape): void;
  Initialize_2(theC: Adaptor2d_Curve2d, theDeflection: Standard_Real, theContinuity: GeomAbs_Shape): void;
  Initialize_3(theC: Adaptor3d_Curve, theDeflection: Standard_Real, theU1: Standard_Real, theU2: Standard_Real, theContinuity: GeomAbs_Shape): void;
  Initialize_4(theC: Adaptor2d_Curve2d, theDeflection: Standard_Real, theU1: Standard_Real, theU2: Standard_Real, theContinuity: GeomAbs_Shape): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Parameter(Index: Standard_Integer): Standard_Real;
  Value(Index: Standard_Integer): gp_Pnt;
  Deflection(): Standard_Real;
  delete(): void;
}

  export declare class GCPnts_QuasiUniformDeflection_1 extends GCPnts_QuasiUniformDeflection {
    constructor();
  }

  export declare class GCPnts_QuasiUniformDeflection_2 extends GCPnts_QuasiUniformDeflection {
    constructor(theC: Adaptor3d_Curve, theDeflection: Standard_Real, theContinuity: GeomAbs_Shape);
  }

  export declare class GCPnts_QuasiUniformDeflection_3 extends GCPnts_QuasiUniformDeflection {
    constructor(theC: Adaptor2d_Curve2d, theDeflection: Standard_Real, theContinuity: GeomAbs_Shape);
  }

  export declare class GCPnts_QuasiUniformDeflection_4 extends GCPnts_QuasiUniformDeflection {
    constructor(theC: Adaptor3d_Curve, theDeflection: Standard_Real, theU1: Standard_Real, theU2: Standard_Real, theContinuity: GeomAbs_Shape);
  }

  export declare class GCPnts_QuasiUniformDeflection_5 extends GCPnts_QuasiUniformDeflection {
    constructor(theC: Adaptor2d_Curve2d, theDeflection: Standard_Real, theU1: Standard_Real, theU2: Standard_Real, theContinuity: GeomAbs_Shape);
  }

export declare class GCPnts_AbscissaPoint {
  static Length_1(theC: Adaptor3d_Curve): Standard_Real;
  static Length_2(theC: Adaptor2d_Curve2d): Standard_Real;
  static Length_3(theC: Adaptor3d_Curve, theTol: Standard_Real): Standard_Real;
  static Length_4(theC: Adaptor2d_Curve2d, theTol: Standard_Real): Standard_Real;
  static Length_5(theC: Adaptor3d_Curve, theU1: Standard_Real, theU2: Standard_Real): Standard_Real;
  static Length_6(theC: Adaptor2d_Curve2d, theU1: Standard_Real, theU2: Standard_Real): Standard_Real;
  static Length_7(theC: Adaptor3d_Curve, theU1: Standard_Real, theU2: Standard_Real, theTol: Standard_Real): Standard_Real;
  static Length_8(theC: Adaptor2d_Curve2d, theU1: Standard_Real, theU2: Standard_Real, theTol: Standard_Real): Standard_Real;
  IsDone(): Standard_Boolean;
  Parameter(): Standard_Real;
  delete(): void;
}

  export declare class GCPnts_AbscissaPoint_1 extends GCPnts_AbscissaPoint {
    constructor();
  }

  export declare class GCPnts_AbscissaPoint_2 extends GCPnts_AbscissaPoint {
    constructor(theC: Adaptor3d_Curve, theAbscissa: Standard_Real, theU0: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_3 extends GCPnts_AbscissaPoint {
    constructor(theTol: Standard_Real, theC: Adaptor3d_Curve, theAbscissa: Standard_Real, theU0: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_4 extends GCPnts_AbscissaPoint {
    constructor(theTol: Standard_Real, theC: Adaptor2d_Curve2d, theAbscissa: Standard_Real, theU0: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_5 extends GCPnts_AbscissaPoint {
    constructor(theC: Adaptor2d_Curve2d, theAbscissa: Standard_Real, theU0: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_6 extends GCPnts_AbscissaPoint {
    constructor(theC: Adaptor3d_Curve, theAbscissa: Standard_Real, theU0: Standard_Real, theUi: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_7 extends GCPnts_AbscissaPoint {
    constructor(theC: Adaptor2d_Curve2d, theAbscissa: Standard_Real, theU0: Standard_Real, theUi: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_8 extends GCPnts_AbscissaPoint {
    constructor(theC: Adaptor3d_Curve, theAbscissa: Standard_Real, theU0: Standard_Real, theUi: Standard_Real, theTol: Standard_Real);
  }

  export declare class GCPnts_AbscissaPoint_9 extends GCPnts_AbscissaPoint {
    constructor(theC: Adaptor2d_Curve2d, theAbscissa: Standard_Real, theU0: Standard_Real, theUi: Standard_Real, theTol: Standard_Real);
  }

export declare class GCPnts_UniformDeflection {
  Initialize_1(theC: Adaptor3d_Curve, theDeflection: Standard_Real, theWithControl: Standard_Boolean): void;
  Initialize_2(theC: Adaptor2d_Curve2d, theDeflection: Standard_Real, theWithControl: Standard_Boolean): void;
  Initialize_3(theC: Adaptor3d_Curve, theDeflection: Standard_Real, theU1: Standard_Real, theU2: Standard_Real, theWithControl: Standard_Boolean): void;
  Initialize_4(theC: Adaptor2d_Curve2d, theDeflection: Standard_Real, theU1: Standard_Real, theU2: Standard_Real, theWithControl: Standard_Boolean): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Parameter(Index: Standard_Integer): Standard_Real;
  Value(Index: Standard_Integer): gp_Pnt;
  Deflection(): Standard_Real;
  delete(): void;
}

  export declare class GCPnts_UniformDeflection_1 extends GCPnts_UniformDeflection {
    constructor();
  }

  export declare class GCPnts_UniformDeflection_2 extends GCPnts_UniformDeflection {
    constructor(theC: Adaptor3d_Curve, theDeflection: Standard_Real, theWithControl: Standard_Boolean);
  }

  export declare class GCPnts_UniformDeflection_3 extends GCPnts_UniformDeflection {
    constructor(theC: Adaptor2d_Curve2d, theDeflection: Standard_Real, theWithControl: Standard_Boolean);
  }

  export declare class GCPnts_UniformDeflection_4 extends GCPnts_UniformDeflection {
    constructor(theC: Adaptor3d_Curve, theDeflection: Standard_Real, theU1: Standard_Real, theU2: Standard_Real, theWithControl: Standard_Boolean);
  }

  export declare class GCPnts_UniformDeflection_5 extends GCPnts_UniformDeflection {
    constructor(theC: Adaptor2d_Curve2d, theDeflection: Standard_Real, theU1: Standard_Real, theU2: Standard_Real, theWithControl: Standard_Boolean);
  }

export declare class GCPnts_TangentialDeflection {
  Initialize_1(theC: Adaptor3d_Curve, theAngularDeflection: Standard_Real, theCurvatureDeflection: Standard_Real, theMinimumOfPoints: Standard_Integer, theUTol: Standard_Real, theMinLen: Standard_Real): void;
  Initialize_2(theC: Adaptor3d_Curve, theFirstParameter: Standard_Real, theLastParameter: Standard_Real, theAngularDeflection: Standard_Real, theCurvatureDeflection: Standard_Real, theMinimumOfPoints: Standard_Integer, theUTol: Standard_Real, theMinLen: Standard_Real): void;
  Initialize_3(theC: Adaptor2d_Curve2d, theAngularDeflection: Standard_Real, theCurvatureDeflection: Standard_Real, theMinimumOfPoints: Standard_Integer, theUTol: Standard_Real, theMinLen: Standard_Real): void;
  Initialize_4(theC: Adaptor2d_Curve2d, theFirstParameter: Standard_Real, theLastParameter: Standard_Real, theAngularDeflection: Standard_Real, theCurvatureDeflection: Standard_Real, theMinimumOfPoints: Standard_Integer, theUTol: Standard_Real, theMinLen: Standard_Real): void;
  AddPoint(thePnt: gp_Pnt, theParam: Standard_Real, theIsReplace: Standard_Boolean): Standard_Integer;
  NbPoints(): Standard_Integer;
  Parameter(I: Standard_Integer): Standard_Real;
  Value(I: Standard_Integer): gp_Pnt;
  static ArcAngularStep(theRadius: Standard_Real, theLinearDeflection: Standard_Real, theAngularDeflection: Standard_Real, theMinLength: Standard_Real): Standard_Real;
  delete(): void;
}

  export declare class GCPnts_TangentialDeflection_1 extends GCPnts_TangentialDeflection {
    constructor();
  }

  export declare class GCPnts_TangentialDeflection_2 extends GCPnts_TangentialDeflection {
    constructor(theC: Adaptor3d_Curve, theAngularDeflection: Standard_Real, theCurvatureDeflection: Standard_Real, theMinimumOfPoints: Standard_Integer, theUTol: Standard_Real, theMinLen: Standard_Real);
  }

  export declare class GCPnts_TangentialDeflection_3 extends GCPnts_TangentialDeflection {
    constructor(theC: Adaptor3d_Curve, theFirstParameter: Standard_Real, theLastParameter: Standard_Real, theAngularDeflection: Standard_Real, theCurvatureDeflection: Standard_Real, theMinimumOfPoints: Standard_Integer, theUTol: Standard_Real, theMinLen: Standard_Real);
  }

  export declare class GCPnts_TangentialDeflection_4 extends GCPnts_TangentialDeflection {
    constructor(theC: Adaptor2d_Curve2d, theAngularDeflection: Standard_Real, theCurvatureDeflection: Standard_Real, theMinimumOfPoints: Standard_Integer, theUTol: Standard_Real, theMinLen: Standard_Real);
  }

  export declare class GCPnts_TangentialDeflection_5 extends GCPnts_TangentialDeflection {
    constructor(theC: Adaptor2d_Curve2d, theFirstParameter: Standard_Real, theLastParameter: Standard_Real, theAngularDeflection: Standard_Real, theCurvatureDeflection: Standard_Real, theMinimumOfPoints: Standard_Integer, theUTol: Standard_Real, theMinLen: Standard_Real);
  }

export declare class GeomProjLib {
  constructor();
  static Curve2d_1(C: any, First: Standard_Real, Last: Standard_Real, S: any, UFirst: Standard_Real, ULast: Standard_Real, VFirst: Standard_Real, VLast: Standard_Real, Tolerance: Standard_Real): any;
  static Curve2d_2(C: any, First: Standard_Real, Last: Standard_Real, S: any, Tolerance: Standard_Real): any;
  static Curve2d_3(C: any, First: Standard_Real, Last: Standard_Real, S: any): any;
  static Curve2d_4(C: any, S: any): any;
  static Curve2d_5(C: any, S: any, UDeb: Standard_Real, UFin: Standard_Real, VDeb: Standard_Real, VFin: Standard_Real): any;
  static Curve2d_6(C: any, S: any, UDeb: Standard_Real, UFin: Standard_Real, VDeb: Standard_Real, VFin: Standard_Real, Tolerance: Standard_Real): any;
  static Project(C: any, S: any): any;
  static ProjectOnPlane(Curve: any, Plane: any, Dir: gp_Dir, KeepParametrization: Standard_Boolean): any;
  delete(): void;
}

export declare class GProp_GProps {
  Add(Item: GProp_GProps, Density: Standard_Real): void;
  Mass(): Standard_Real;
  CentreOfMass(): gp_Pnt;
  MatrixOfInertia(): gp_Mat;
  StaticMoments(Ix: Standard_Real, Iy: Standard_Real, Iz: Standard_Real): void;
  MomentOfInertia(A: gp_Ax1): Standard_Real;
  PrincipalProperties(): GProp_PrincipalProps;
  RadiusOfGyration(A: gp_Ax1): Standard_Real;
  delete(): void;
}

  export declare class GProp_GProps_1 extends GProp_GProps {
    constructor();
  }

  export declare class GProp_GProps_2 extends GProp_GProps {
    constructor(SystemLocation: gp_Pnt);
  }

export declare class BRepTools_WireExplorer {
  Init_1(W: TopoDS_Wire): void;
  Init_2(W: TopoDS_Wire, F: TopoDS_Face): void;
  Init_3(W: TopoDS_Wire, F: TopoDS_Face, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  More(): Standard_Boolean;
  Next(): void;
  Current(): TopoDS_Edge;
  Orientation(): TopAbs_Orientation;
  CurrentVertex(): TopoDS_Vertex;
  Clear(): void;
  delete(): void;
}

  export declare class BRepTools_WireExplorer_1 extends BRepTools_WireExplorer {
    constructor();
  }

  export declare class BRepTools_WireExplorer_2 extends BRepTools_WireExplorer {
    constructor(W: TopoDS_Wire);
  }

  export declare class BRepTools_WireExplorer_3 extends BRepTools_WireExplorer {
    constructor(W: TopoDS_Wire, F: TopoDS_Face);
  }

export declare class BRepTools_ReShape extends Standard_Transient {
  constructor()
  Clear(): void;
  Remove(shape: TopoDS_Shape): void;
  Replace(shape: TopoDS_Shape, newshape: TopoDS_Shape): void;
  IsRecorded(shape: TopoDS_Shape): Standard_Boolean;
  Value(shape: TopoDS_Shape): TopoDS_Shape;
  ValueLeaf(theShape: TopoDS_Shape): TopoDS_Shape;
  Status(shape: TopoDS_Shape, newsh: TopoDS_Shape, last: Standard_Boolean): Standard_Integer;
  Apply(theShape: TopoDS_Shape, theUntil: TopAbs_ShapeEnum): TopoDS_Shape;
  ModeConsiderLocation(): Standard_Boolean;
  CopyVertex_1(theV: TopoDS_Vertex, theTol: Standard_Real): TopoDS_Vertex;
  CopyVertex_2(theV: TopoDS_Vertex, theNewPos: gp_Pnt, aTol: Standard_Real): TopoDS_Vertex;
  IsNewShape(theShape: TopoDS_Shape): Standard_Boolean;
  History(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class BRepTools {
  constructor();
  static UVBounds_1(F: TopoDS_Face, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  static UVBounds_2(F: TopoDS_Face, W: TopoDS_Wire, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  static UVBounds_3(F: TopoDS_Face, E: TopoDS_Edge, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real): void;
  static AddUVBounds_1(F: TopoDS_Face, B: Bnd_Box2d): void;
  static AddUVBounds_2(F: TopoDS_Face, W: TopoDS_Wire, B: Bnd_Box2d): void;
  static AddUVBounds_3(F: TopoDS_Face, E: TopoDS_Edge, B: Bnd_Box2d): void;
  static Update_1(V: TopoDS_Vertex): void;
  static Update_2(E: TopoDS_Edge): void;
  static Update_3(W: TopoDS_Wire): void;
  static Update_4(F: TopoDS_Face): void;
  static Update_5(S: TopoDS_Shell): void;
  static Update_6(S: TopoDS_Solid): void;
  static Update_7(C: TopoDS_CompSolid): void;
  static Update_8(C: TopoDS_Compound): void;
  static Update_9(S: TopoDS_Shape): void;
  static UpdateFaceUVPoints(theF: TopoDS_Face): void;
  static Clean(theShape: TopoDS_Shape, theForce: Standard_Boolean): void;
  static CleanGeometry(theShape: TopoDS_Shape): void;
  static RemoveUnusedPCurves(S: TopoDS_Shape): void;
  static Triangulation(theShape: TopoDS_Shape, theLinDefl: Standard_Real, theToCheckFreeEdges: Standard_Boolean): Standard_Boolean;
  static LoadTriangulation(theShape: TopoDS_Shape, theTriangulationIdx: Standard_Integer, theToSetAsActive: Standard_Boolean, theFileSystem: any): Standard_Boolean;
  static UnloadTriangulation(theShape: TopoDS_Shape, theTriangulationIdx: Standard_Integer): Standard_Boolean;
  static ActivateTriangulation(theShape: TopoDS_Shape, theTriangulationIdx: Standard_Integer, theToActivateStrictly: Standard_Boolean): Standard_Boolean;
  static LoadAllTriangulations(theShape: TopoDS_Shape, theFileSystem: any): Standard_Boolean;
  static UnloadAllTriangulations(theShape: TopoDS_Shape): Standard_Boolean;
  static Compare_1(V1: TopoDS_Vertex, V2: TopoDS_Vertex): Standard_Boolean;
  static Compare_2(E1: TopoDS_Edge, E2: TopoDS_Edge): Standard_Boolean;
  static OuterWire(F: TopoDS_Face): TopoDS_Wire;
  static Map3DEdges(S: TopoDS_Shape, M: NCollection_IndexedMap<TopoDS_Shape, TopTools_ShapeMapHasher>): void;
  static IsReallyClosed(E: TopoDS_Edge, F: TopoDS_Face): Standard_Boolean;
  static DetectClosedness(theFace: TopoDS_Face, theUclosed: Standard_Boolean, theVclosed: Standard_Boolean): void;
  static Write_3(theShape: TopoDS_Shape, theFile: Standard_Character, theProgress: Message_ProgressRange): Standard_Boolean;
  static Write_4(theShape: TopoDS_Shape, theFile: Standard_Character, theWithTriangles: Standard_Boolean, theWithNormals: Standard_Boolean, theVersion: TopTools_FormatVersion, theProgress: Message_ProgressRange): Standard_Boolean;
  static Read_2(Sh: TopoDS_Shape, File: Standard_Character, B: BRep_Builder, theProgress: Message_ProgressRange): Standard_Boolean;
  static EvalAndUpdateTol(theE: TopoDS_Edge, theC3d: any, theC2d: any, theS: any, theF: Standard_Real, theL: Standard_Real): Standard_Real;
  static OriEdgeInFace(theEdge: TopoDS_Edge, theFace: TopoDS_Face): TopAbs_Orientation;
  static RemoveInternals(theS: TopoDS_Shape, theForce: Standard_Boolean): void;
  static CheckLocations(theS: TopoDS_Shape, theProblemShapes: NCollection_List<TopoDS_Shape>): void;
  delete(): void;
}

export declare class TopoDS_Shape {
  constructor()
  IsNull(): Standard_Boolean;
  Nullify(): void;
  Location_1(): TopLoc_Location;
  Location_2(theLoc: TopLoc_Location, theRaiseExc: Standard_Boolean): void;
  Located(theLoc: TopLoc_Location, theRaiseExc: Standard_Boolean): TopoDS_Shape;
  Orientation_1(): TopAbs_Orientation;
  Orientation_2(theOrient: TopAbs_Orientation): void;
  Oriented(theOrient: TopAbs_Orientation): TopoDS_Shape;
  TShape_1(): any;
  ShapeType(): TopAbs_ShapeEnum;
  Free_1(): Standard_Boolean;
  Free_2(theIsFree: Standard_Boolean): void;
  Locked_1(): Standard_Boolean;
  Locked_2(theIsLocked: Standard_Boolean): void;
  Modified_1(): Standard_Boolean;
  Modified_2(theIsModified: Standard_Boolean): void;
  Checked_1(): Standard_Boolean;
  Checked_2(theIsChecked: Standard_Boolean): void;
  Orientable_1(): Standard_Boolean;
  Orientable_2(theIsOrientable: Standard_Boolean): void;
  Closed_1(): Standard_Boolean;
  Closed_2(theIsClosed: Standard_Boolean): void;
  Infinite_1(): Standard_Boolean;
  Infinite_2(theIsInfinite: Standard_Boolean): void;
  Convex_1(): Standard_Boolean;
  Convex_2(theIsConvex: Standard_Boolean): void;
  Move(thePosition: TopLoc_Location, theRaiseExc: Standard_Boolean): void;
  Moved(thePosition: TopLoc_Location, theRaiseExc: Standard_Boolean): TopoDS_Shape;
  Reverse(): void;
  Reversed(): TopoDS_Shape;
  Complement(): void;
  Complemented(): TopoDS_Shape;
  Compose(theOrient: TopAbs_Orientation): void;
  Composed(theOrient: TopAbs_Orientation): TopoDS_Shape;
  NbChildren(): Standard_Integer;
  IsPartner(theOther: TopoDS_Shape): Standard_Boolean;
  IsSame(theOther: TopoDS_Shape): Standard_Boolean;
  IsEqual(theOther: TopoDS_Shape): Standard_Boolean;
  IsNotEqual(theOther: TopoDS_Shape): Standard_Boolean;
  EmptyCopy(): void;
  EmptyCopied(): TopoDS_Shape;
  TShape_2(theTShape: any): void;
  delete(): void;
}

export declare class TopoDS_CompSolid extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_TEdge extends TopoDS_TShape {
  EmptyCopy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class TopoDS_Face extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Solid extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Shell extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Compound extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Edge extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Iterator {
  Initialize(S: TopoDS_Shape, cumOri: Standard_Boolean, cumLoc: Standard_Boolean): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): TopoDS_Shape;
  begin(): any;
  end(): NCollection_ForwardRangeSentinel;
  delete(): void;
}

  export declare class TopoDS_Iterator_1 extends TopoDS_Iterator {
    constructor();
  }

  export declare class TopoDS_Iterator_2 extends TopoDS_Iterator {
    constructor(S: TopoDS_Shape, cumOri: Standard_Boolean, cumLoc: Standard_Boolean);
  }

export declare class TopoDS_Wire extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_TShape extends Standard_Transient {
  Free_1(): Standard_Boolean;
  Free_2(theIsFree: Standard_Boolean): void;
  Locked_1(): Standard_Boolean;
  Locked_2(theIsLocked: Standard_Boolean): void;
  Modified_1(): Standard_Boolean;
  Modified_2(theIsModified: Standard_Boolean): void;
  Checked_1(): Standard_Boolean;
  Checked_2(theIsChecked: Standard_Boolean): void;
  Orientable_1(): Standard_Boolean;
  Orientable_2(theIsOrientable: Standard_Boolean): void;
  Closed_1(): Standard_Boolean;
  Closed_2(theIsClosed: Standard_Boolean): void;
  Infinite_1(): Standard_Boolean;
  Infinite_2(theIsInfinite: Standard_Boolean): void;
  Convex_1(): Standard_Boolean;
  Convex_2(theIsConvex: Standard_Boolean): void;
  ShapeType(): TopAbs_ShapeEnum;
  EmptyCopy(): any;
  NbChildren(): Standard_Integer;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class TopoDS_Vertex extends TopoDS_Shape {
  constructor()
  delete(): void;
}

export declare class TopoDS_Builder {
  constructor();
  MakeWire(W: TopoDS_Wire): void;
  MakeShell(S: TopoDS_Shell): void;
  MakeSolid(S: TopoDS_Solid): void;
  MakeCompSolid(C: TopoDS_CompSolid): void;
  MakeCompound(C: TopoDS_Compound): void;
  Add(S: TopoDS_Shape, C: TopoDS_Shape): void;
  Remove(S: TopoDS_Shape, C: TopoDS_Shape): void;
  delete(): void;
}

export declare class BRep_Tool {
  constructor();
  static IsClosed_1(S: TopoDS_Shape): Standard_Boolean;
  static Surface_1(F: TopoDS_Face, L: TopLoc_Location): any;
  static Surface_2(F: TopoDS_Face): any;
  static Triangulation(theFace: TopoDS_Face, theLocation: TopLoc_Location, theMeshPurpose: Poly_MeshPurpose): any;
  static Triangulations(theFace: TopoDS_Face, theLocation: TopLoc_Location): any;
  static Tolerance_1(F: TopoDS_Face): Standard_Real;
  static NaturalRestriction(F: TopoDS_Face): Standard_Boolean;
  static IsGeometric_1(F: TopoDS_Face): Standard_Boolean;
  static IsGeometric_2(E: TopoDS_Edge): Standard_Boolean;
  static Curve_1(E: TopoDS_Edge, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): any;
  static Curve_2(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real): any;
  static Polygon3D(E: TopoDS_Edge, L: TopLoc_Location): any;
  static CurveOnSurface_1(E: TopoDS_Edge, F: TopoDS_Face, First: Standard_Real, Last: Standard_Real, theIsStored: Standard_Boolean): any;
  static CurveOnSurface_2(E: TopoDS_Edge, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real, theIsStored: Standard_Boolean): any;
  static CurveOnPlane(E: TopoDS_Edge, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): any;
  static CurveOnSurface_3(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): void;
  static CurveOnSurface_4(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real, Index: Standard_Integer): void;
  static PolygonOnSurface_1(E: TopoDS_Edge, F: TopoDS_Face): any;
  static PolygonOnSurface_2(E: TopoDS_Edge, S: any, L: TopLoc_Location): any;
  static PolygonOnSurface_3(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location): void;
  static PolygonOnSurface_4(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location, Index: Standard_Integer): void;
  static PolygonOnTriangulation_1(E: TopoDS_Edge, T: any, L: TopLoc_Location): any;
  static PolygonOnTriangulation_2(E: TopoDS_Edge, P: any, T: any, L: TopLoc_Location): void;
  static PolygonOnTriangulation_3(E: TopoDS_Edge, P: any, T: any, L: TopLoc_Location, Index: Standard_Integer): void;
  static IsClosed_2(E: TopoDS_Edge, F: TopoDS_Face): Standard_Boolean;
  static IsClosed_3(E: TopoDS_Edge, S: any, L: TopLoc_Location): Standard_Boolean;
  static IsClosed_4(E: TopoDS_Edge, T: any, L: TopLoc_Location): Standard_Boolean;
  static Tolerance_2(E: TopoDS_Edge): Standard_Real;
  static SameParameter(E: TopoDS_Edge): Standard_Boolean;
  static SameRange(E: TopoDS_Edge): Standard_Boolean;
  static Degenerated(E: TopoDS_Edge): Standard_Boolean;
  static Range_1(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real): void;
  static Range_2(E: TopoDS_Edge, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): void;
  static Range_3(E: TopoDS_Edge, F: TopoDS_Face, First: Standard_Real, Last: Standard_Real): void;
  static UVPoints_1(E: TopoDS_Edge, S: any, L: TopLoc_Location, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  static UVPoints_2(E: TopoDS_Edge, F: TopoDS_Face, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  static SetUVPoints_1(E: TopoDS_Edge, S: any, L: TopLoc_Location, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  static SetUVPoints_2(E: TopoDS_Edge, F: TopoDS_Face, PFirst: gp_Pnt2d, PLast: gp_Pnt2d): void;
  static HasContinuity_1(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face): Standard_Boolean;
  static Continuity_1(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face): GeomAbs_Shape;
  static HasContinuity_2(E: TopoDS_Edge, S1: any, S2: any, L1: TopLoc_Location, L2: TopLoc_Location): Standard_Boolean;
  static Continuity_2(E: TopoDS_Edge, S1: any, S2: any, L1: TopLoc_Location, L2: TopLoc_Location): GeomAbs_Shape;
  static HasContinuity_3(E: TopoDS_Edge): Standard_Boolean;
  static MaxContinuity(theEdge: TopoDS_Edge): GeomAbs_Shape;
  static Pnt(V: TopoDS_Vertex): gp_Pnt;
  static Tolerance_3(V: TopoDS_Vertex): Standard_Real;
  static Parameter_1(theV: TopoDS_Vertex, theE: TopoDS_Edge, theParam: Standard_Real): Standard_Boolean;
  static Parameter_2(V: TopoDS_Vertex, E: TopoDS_Edge): Standard_Real;
  static Parameter_3(V: TopoDS_Vertex, E: TopoDS_Edge, F: TopoDS_Face): Standard_Real;
  static Parameter_4(V: TopoDS_Vertex, E: TopoDS_Edge, S: any, L: TopLoc_Location): Standard_Real;
  static Parameters(V: TopoDS_Vertex, F: TopoDS_Face): gp_Pnt2d;
  static MaxTolerance(theShape: TopoDS_Shape, theSubShape: TopAbs_ShapeEnum): Standard_Real;
  delete(): void;
}

export declare class BRep_TEdge extends TopoDS_TEdge {
  constructor()
  Tolerance_1(): Standard_Real;
  Tolerance_2(T: Standard_Real): void;
  UpdateTolerance(T: Standard_Real): void;
  SameParameter_1(): Standard_Boolean;
  SameParameter_2(S: Standard_Boolean): void;
  SameRange_1(): Standard_Boolean;
  SameRange_2(S: Standard_Boolean): void;
  Degenerated_1(): Standard_Boolean;
  Degenerated_2(S: Standard_Boolean): void;
  Curves(): any;
  ChangeCurves(): any;
  EmptyCopy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class BRep_Builder extends TopoDS_Builder {
  constructor();
  MakeFace_1(F: TopoDS_Face): void;
  MakeFace_2(F: TopoDS_Face, S: any, Tol: Standard_Real): void;
  MakeFace_3(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real): void;
  MakeFace_4(theFace: TopoDS_Face, theTriangulation: any): void;
  MakeFace_5(theFace: TopoDS_Face, theTriangulations: any, theActiveTriangulation: any): void;
  UpdateFace_1(F: TopoDS_Face, S: any, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateFace_2(theFace: TopoDS_Face, theTriangulation: any, theToReset: Standard_Boolean): void;
  UpdateFace_3(F: TopoDS_Face, Tol: Standard_Real): void;
  NaturalRestriction(F: TopoDS_Face, N: Standard_Boolean): void;
  MakeEdge_1(E: TopoDS_Edge): void;
  MakeEdge_2(E: TopoDS_Edge, C: any, Tol: Standard_Real): void;
  MakeEdge_3(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): void;
  MakeEdge_4(E: TopoDS_Edge, P: any): void;
  MakeEdge_5(E: TopoDS_Edge, N: any, T: any): void;
  MakeEdge_6(E: TopoDS_Edge, N: any, T: any, L: TopLoc_Location): void;
  UpdateEdge_1(E: TopoDS_Edge, C: any, Tol: Standard_Real): void;
  UpdateEdge_2(E: TopoDS_Edge, C: any, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateEdge_3(E: TopoDS_Edge, C: any, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateEdge_4(E: TopoDS_Edge, C1: any, C2: any, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateEdge_5(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateEdge_6(E: TopoDS_Edge, C: any, S: any, L: TopLoc_Location, Tol: Standard_Real, Pf: gp_Pnt2d, Pl: gp_Pnt2d): void;
  UpdateEdge_7(E: TopoDS_Edge, C1: any, C2: any, S: any, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateEdge_8(E: TopoDS_Edge, C1: any, C2: any, S: any, L: TopLoc_Location, Tol: Standard_Real, Pf: gp_Pnt2d, Pl: gp_Pnt2d): void;
  UpdateEdge_9(E: TopoDS_Edge, P: any): void;
  UpdateEdge_10(E: TopoDS_Edge, P: any, L: TopLoc_Location): void;
  UpdateEdge_11(E: TopoDS_Edge, N: any, T: any): void;
  UpdateEdge_12(E: TopoDS_Edge, N: any, T: any, L: TopLoc_Location): void;
  UpdateEdge_13(E: TopoDS_Edge, N1: any, N2: any, T: any): void;
  UpdateEdge_14(E: TopoDS_Edge, N1: any, N2: any, T: any, L: TopLoc_Location): void;
  UpdateEdge_15(E: TopoDS_Edge, P: any, S: TopoDS_Face): void;
  UpdateEdge_16(E: TopoDS_Edge, P: any, S: any, T: TopLoc_Location): void;
  UpdateEdge_17(E: TopoDS_Edge, P1: any, P2: any, S: TopoDS_Face): void;
  UpdateEdge_18(E: TopoDS_Edge, P1: any, P2: any, S: any, L: TopLoc_Location): void;
  UpdateEdge_19(E: TopoDS_Edge, Tol: Standard_Real): void;
  Continuity_1(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, C: GeomAbs_Shape): void;
  Continuity_2(E: TopoDS_Edge, S1: any, S2: any, L1: TopLoc_Location, L2: TopLoc_Location, C: GeomAbs_Shape): void;
  SameParameter(E: TopoDS_Edge, S: Standard_Boolean): void;
  SameRange(E: TopoDS_Edge, S: Standard_Boolean): void;
  Degenerated(E: TopoDS_Edge, D: Standard_Boolean): void;
  Range_1(E: TopoDS_Edge, First: Standard_Real, Last: Standard_Real, Only3d: Standard_Boolean): void;
  Range_2(E: TopoDS_Edge, S: any, L: TopLoc_Location, First: Standard_Real, Last: Standard_Real): void;
  Range_3(E: TopoDS_Edge, F: TopoDS_Face, First: Standard_Real, Last: Standard_Real): void;
  Transfert_1(Ein: TopoDS_Edge, Eout: TopoDS_Edge): void;
  MakeVertex_1(V: TopoDS_Vertex): void;
  MakeVertex_2(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): void;
  UpdateVertex_1(V: TopoDS_Vertex, P: gp_Pnt, Tol: Standard_Real): void;
  UpdateVertex_2(V: TopoDS_Vertex, P: Standard_Real, E: TopoDS_Edge, Tol: Standard_Real): void;
  UpdateVertex_3(V: TopoDS_Vertex, P: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateVertex_4(V: TopoDS_Vertex, P: Standard_Real, E: TopoDS_Edge, S: any, L: TopLoc_Location, Tol: Standard_Real): void;
  UpdateVertex_5(Ve: TopoDS_Vertex, U: Standard_Real, V: Standard_Real, F: TopoDS_Face, Tol: Standard_Real): void;
  UpdateVertex_6(V: TopoDS_Vertex, Tol: Standard_Real): void;
  Transfert_2(Ein: TopoDS_Edge, Eout: TopoDS_Edge, Vin: TopoDS_Vertex, Vout: TopoDS_Vertex): void;
  delete(): void;
}

export declare class BRepAdaptor_Surface extends GeomAdaptor_TransformedSurface {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  Initialize(F: TopoDS_Face, Restriction: Standard_Boolean): void;
  Face(): TopoDS_Face;
  Tolerance(): Standard_Real;
  delete(): void;
}

  export declare class BRepAdaptor_Surface_1 extends BRepAdaptor_Surface {
    constructor();
  }

  export declare class BRepAdaptor_Surface_2 extends BRepAdaptor_Surface {
    constructor(F: TopoDS_Face, R: Standard_Boolean);
  }

export declare class BRepAdaptor_Curve extends GeomAdaptor_TransformedCurve {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  Reset(): void;
  Initialize_1(E: TopoDS_Edge): void;
  Initialize_2(E: TopoDS_Edge, F: TopoDS_Face): void;
  Edge(): TopoDS_Edge;
  Tolerance(): Standard_Real;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  delete(): void;
}

  export declare class BRepAdaptor_Curve_1 extends BRepAdaptor_Curve {
    constructor();
  }

  export declare class BRepAdaptor_Curve_2 extends BRepAdaptor_Curve {
    constructor(E: TopoDS_Edge);
  }

  export declare class BRepAdaptor_Curve_3 extends BRepAdaptor_Curve {
    constructor(E: TopoDS_Edge, F: TopoDS_Face);
  }

export declare class BRepAdaptor_CompCurve extends Adaptor3d_Curve {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  Initialize_1(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean): void;
  Initialize_2(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): void;
  Wire(): TopoDS_Wire;
  Edge(U: Standard_Real, E: TopoDS_Edge, UonE: Standard_Real): void;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  EvalD0(theU: Standard_Real): gp_Pnt;
  EvalD1(theU: Standard_Real): any;
  EvalD2(theU: Standard_Real): any;
  EvalD3(theU: Standard_Real): any;
  EvalDN(theU: Standard_Real, theN: Standard_Integer): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  delete(): void;
}

  export declare class BRepAdaptor_CompCurve_1 extends BRepAdaptor_CompCurve {
    constructor();
  }

  export declare class BRepAdaptor_CompCurve_2 extends BRepAdaptor_CompCurve {
    constructor(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean);
  }

  export declare class BRepAdaptor_CompCurve_3 extends BRepAdaptor_CompCurve {
    constructor(W: TopoDS_Wire, KnotByCurvilinearAbcissa: Standard_Boolean, First: Standard_Real, Last: Standard_Real, Tol: Standard_Real);
  }

export declare class BRepLProp {
  constructor();
  static Continuity_1(C1: BRepAdaptor_Curve, C2: BRepAdaptor_Curve, u1: Standard_Real, u2: Standard_Real, tl: Standard_Real, ta: Standard_Real): GeomAbs_Shape;
  static Continuity_2(C1: BRepAdaptor_Curve, C2: BRepAdaptor_Curve, u1: Standard_Real, u2: Standard_Real): GeomAbs_Shape;
  delete(): void;
}

export declare class TopExp_Explorer {
  Init(S: TopoDS_Shape, ToFind: TopAbs_ShapeEnum, ToAvoid: TopAbs_ShapeEnum): void;
  More(): Standard_Boolean;
  Next(): void;
  Value(): TopoDS_Shape;
  Current(): TopoDS_Shape;
  ReInit(): void;
  ExploredShape(): TopoDS_Shape;
  Depth(): Standard_Integer;
  Clear(): void;
  begin(): any;
  end(): NCollection_ForwardRangeSentinel;
  delete(): void;
}

  export declare class TopExp_Explorer_1 extends TopExp_Explorer {
    constructor();
  }

  export declare class TopExp_Explorer_2 extends TopExp_Explorer {
    constructor(S: TopoDS_Shape, ToFind: TopAbs_ShapeEnum, ToAvoid: TopAbs_ShapeEnum);
  }

export declare class TopExp {
  constructor();
  static MapShapes_1(S: TopoDS_Shape, T: TopAbs_ShapeEnum, M: NCollection_IndexedMap<TopoDS_Shape, TopTools_ShapeMapHasher>): void;
  static MapShapes_2(S: TopoDS_Shape, M: NCollection_IndexedMap<TopoDS_Shape, TopTools_ShapeMapHasher>, cumOri: Standard_Boolean, cumLoc: Standard_Boolean): void;
  static MapShapes_3(S: TopoDS_Shape, M: NCollection_Map<TopoDS_Shape, TopTools_ShapeMapHasher>, cumOri: Standard_Boolean, cumLoc: Standard_Boolean): void;
  static MapShapesAndAncestors(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum, M: NCollection_IndexedDataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>): void;
  static MapShapesAndUniqueAncestors(S: TopoDS_Shape, TS: TopAbs_ShapeEnum, TA: TopAbs_ShapeEnum, M: NCollection_IndexedDataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>, useOrientation: Standard_Boolean): void;
  static FirstVertex(E: TopoDS_Edge, CumOri: Standard_Boolean): TopoDS_Vertex;
  static LastVertex(E: TopoDS_Edge, CumOri: Standard_Boolean): TopoDS_Vertex;
  static Vertices_1(E: TopoDS_Edge, Vfirst: TopoDS_Vertex, Vlast: TopoDS_Vertex, CumOri: Standard_Boolean): void;
  static Vertices_2(W: TopoDS_Wire, Vfirst: TopoDS_Vertex, Vlast: TopoDS_Vertex): void;
  static CommonVertex(E1: TopoDS_Edge, E2: TopoDS_Edge, V: TopoDS_Vertex): Standard_Boolean;
  delete(): void;
}

export declare class TopTools_ShapeMapHasher {
  constructor();
  delete(): void;
}

export declare class BinTools {
  constructor();
  static Write_3(theShape: TopoDS_Shape, theFile: Standard_Character, theRange: Message_ProgressRange): Standard_Boolean;
  static Write_4(theShape: TopoDS_Shape, theFile: Standard_Character, theWithTriangles: Standard_Boolean, theWithNormals: Standard_Boolean, theVersion: BinTools_FormatVersion, theRange: Message_ProgressRange): Standard_Boolean;
  static Read_2(theShape: TopoDS_Shape, theFile: Standard_Character, theRange: Message_ProgressRange): Standard_Boolean;
  delete(): void;
}

export declare class Adaptor2d_Curve2d extends Standard_Transient {
  constructor();
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  NbSamples(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  EvalD0(theU: Standard_Real): gp_Pnt2d;
  EvalD1(theU: Standard_Real): any;
  EvalD2(theU: Standard_Real): any;
  EvalD3(theU: Standard_Real): any;
  EvalDN(theU: Standard_Real, theN: Standard_Integer): gp_Vec2d;
  delete(): void;
}

export declare class Geom2dAdaptor_Curve extends Adaptor2d_Curve2d {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  Reset(): void;
  Load_1(theCurve: any): void;
  Load_2(theCurve: any, theUFirst: Standard_Real, theULast: Standard_Real): void;
  IsInitialized(): Standard_Boolean;
  Curve(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(U: Standard_Real): gp_Pnt2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Resolution(Ruv: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin2d;
  Circle(): gp_Circ2d;
  Ellipse(): gp_Elips2d;
  Hyperbola(): gp_Hypr2d;
  Parabola(): gp_Parab2d;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  NbSamples(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  EvalD0(theU: Standard_Real): gp_Pnt2d;
  EvalD1(theU: Standard_Real): any;
  EvalD2(theU: Standard_Real): any;
  EvalD3(theU: Standard_Real): any;
  EvalDN(theU: Standard_Real, theN: Standard_Integer): gp_Vec2d;
  delete(): void;
}

  export declare class Geom2dAdaptor_Curve_1 extends Geom2dAdaptor_Curve {
    constructor();
  }

  export declare class Geom2dAdaptor_Curve_2 extends Geom2dAdaptor_Curve {
    constructor(C: any);
  }

  export declare class Geom2dAdaptor_Curve_3 extends Geom2dAdaptor_Curve {
    constructor(C: any, UFirst: Standard_Real, ULast: Standard_Real);
  }

export declare class Geom2d_Line extends Geom2d_Curve {
  SetLin2d(L: gp_Lin2d): void;
  SetDirection(V: gp_Dir2d): void;
  Direction(): gp_Dir2d;
  SetLocation(P: gp_Pnt2d): void;
  Location(): gp_Pnt2d;
  SetPosition(A: gp_Ax2d): void;
  Position(): gp_Ax2d;
  Lin2d(): gp_Lin2d;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  Distance(P: gp_Pnt2d): Standard_Real;
  IsCN(N: Standard_Integer): Standard_Boolean;
  EvalD0(U: Standard_Real): gp_Pnt2d;
  EvalD1(U: Standard_Real): any;
  EvalD2(U: Standard_Real): any;
  EvalD3(U: Standard_Real): any;
  EvalDN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Transform(T: gp_Trsf2d): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf2d): Standard_Real;
  ParametricTransformation(T: gp_Trsf2d): Standard_Real;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom2d_Line_1 extends Geom2d_Line {
    constructor(A: gp_Ax2d);
  }

  export declare class Geom2d_Line_2 extends Geom2d_Line {
    constructor(L: gp_Lin2d);
  }

  export declare class Geom2d_Line_3 extends Geom2d_Line {
    constructor(P: gp_Pnt2d, V: gp_Dir2d);
  }

export declare class Geom2d_Point extends Geom2d_Geometry {
  Coord(X: Standard_Real, Y: Standard_Real): void;
  Pnt2d(): gp_Pnt2d;
  X(): Standard_Real;
  Y(): Standard_Real;
  Distance(Other: any): Standard_Real;
  SquareDistance(Other: any): Standard_Real;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom2d_Conic extends Geom2d_Curve {
  SetAxis(theA: gp_Ax22d): void;
  SetXAxis(theAX: gp_Ax2d): void;
  SetYAxis(theAY: gp_Ax2d): void;
  SetLocation(theP: gp_Pnt2d): void;
  XAxis(): gp_Ax2d;
  YAxis(): gp_Ax2d;
  Eccentricity(): Standard_Real;
  Location(): gp_Pnt2d;
  Position(): gp_Ax22d;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom2d_CartesianPoint extends Geom2d_Point {
  SetCoord(X: Standard_Real, Y: Standard_Real): void;
  SetPnt2d(P: gp_Pnt2d): void;
  SetX(X: Standard_Real): void;
  SetY(Y: Standard_Real): void;
  Coord(X: Standard_Real, Y: Standard_Real): void;
  Pnt2d(): gp_Pnt2d;
  X(): Standard_Real;
  Y(): Standard_Real;
  Transform(T: gp_Trsf2d): void;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom2d_CartesianPoint_1 extends Geom2d_CartesianPoint {
    constructor(P: gp_Pnt2d);
  }

  export declare class Geom2d_CartesianPoint_2 extends Geom2d_CartesianPoint {
    constructor(X: Standard_Real, Y: Standard_Real);
  }

export declare class Geom2d_TrimmedCurve extends Geom2d_BoundedCurve {
  constructor(C: any, U1: Standard_Real, U2: Standard_Real, Sense: Standard_Boolean, theAdjustPeriodic: Standard_Boolean)
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  SetTrim(U1: Standard_Real, U2: Standard_Real, Sense: Standard_Boolean, theAdjustPeriodic: Standard_Boolean): void;
  BasisCurve(): any;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  EndPoint(): gp_Pnt2d;
  FirstParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  LastParameter(): Standard_Real;
  StartPoint(): gp_Pnt2d;
  EvalD0(U: Standard_Real): gp_Pnt2d;
  EvalD1(U: Standard_Real): any;
  EvalD2(U: Standard_Real): any;
  EvalD3(U: Standard_Real): any;
  EvalDN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Transform(T: gp_Trsf2d): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf2d): Standard_Real;
  ParametricTransformation(T: gp_Trsf2d): Standard_Real;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom2d_Circle extends Geom2d_Conic {
  SetCirc2d(C: gp_Circ2d): void;
  SetRadius(R: Standard_Real): void;
  Circ2d(): gp_Circ2d;
  Radius(): Standard_Real;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Eccentricity(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  EvalD0(U: Standard_Real): gp_Pnt2d;
  EvalD1(U: Standard_Real): any;
  EvalD2(U: Standard_Real): any;
  EvalD3(U: Standard_Real): any;
  EvalDN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Transform(T: gp_Trsf2d): void;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom2d_Circle_1 extends Geom2d_Circle {
    constructor(C: gp_Circ2d);
  }

  export declare class Geom2d_Circle_2 extends Geom2d_Circle {
    constructor(A: gp_Ax2d, Radius: Standard_Real, Sense: Standard_Boolean);
  }

  export declare class Geom2d_Circle_3 extends Geom2d_Circle {
    constructor(A: gp_Ax22d, Radius: Standard_Real);
  }

export declare class Geom2d_BoundedCurve extends Geom2d_Curve {
  EndPoint(): gp_Pnt2d;
  StartPoint(): gp_Pnt2d;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom2d_Geometry extends Standard_Transient {
  Mirror_1(P: gp_Pnt2d): void;
  Mirror_2(A: gp_Ax2d): void;
  Rotate(P: gp_Pnt2d, Ang: Standard_Real): void;
  Scale(P: gp_Pnt2d, S: Standard_Real): void;
  Translate_1(V: gp_Vec2d): void;
  Translate_2(P1: gp_Pnt2d, P2: gp_Pnt2d): void;
  Transform(T: gp_Trsf2d): void;
  Mirrored_1(P: gp_Pnt2d): any;
  Mirrored_2(A: gp_Ax2d): any;
  Rotated(P: gp_Pnt2d, Ang: Standard_Real): any;
  Scaled(P: gp_Pnt2d, S: Standard_Real): any;
  Transformed(T: gp_Trsf2d): any;
  Translated_1(V: gp_Vec2d): any;
  Translated_2(P1: gp_Pnt2d, P2: gp_Pnt2d): any;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom2d_Curve extends Geom2d_Geometry {
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  TransformedParameter(U: Standard_Real, T: gp_Trsf2d): Standard_Real;
  ParametricTransformation(T: gp_Trsf2d): Standard_Real;
  Reversed(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  EvalD0(U: Standard_Real): gp_Pnt2d;
  EvalD1(U: Standard_Real): ResD1;
  EvalD2(U: Standard_Real): ResD2;
  EvalD3(U: Standard_Real): ResD3;
  EvalDN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  D0(U: Standard_Real, P: gp_Pnt2d): void;
  D1(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  D2(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d): void;
  D3(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d, V2: gp_Vec2d, V3: gp_Vec2d): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec2d;
  Value(U: Standard_Real): gp_Pnt2d;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom_OffsetSurface extends Geom_Surface {
  HasEvalRepresentation(): Standard_Boolean;
  EvalRepresentation(): any;
  SetEvalRepresentation(theDesc: any): void;
  ClearEvalRepresentation(): void;
  SetBasisSurface(S: any, isNotCheckC0: Standard_Boolean): void;
  SetOffsetValue(D: Standard_Real): void;
  Offset(): Standard_Real;
  BasisSurface(): any;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Continuity(): GeomAbs_Shape;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  EvalD0(U: Standard_Real, V: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real, V: Standard_Real): any;
  EvalD2(U: Standard_Real, V: Standard_Real): any;
  EvalD3(U: Standard_Real, V: Standard_Real): any;
  EvalDN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Copy(): any;
  Surface(): any;
  UOsculatingSurface(U: Standard_Real, V: Standard_Real, IsOpposite: Standard_Boolean, UOsculSurf: any): Standard_Boolean;
  VOsculatingSurface(U: Standard_Real, V: Standard_Real, IsOpposite: Standard_Boolean, VOsculSurf: any): Standard_Boolean;
  GetBasisSurfContinuity(): GeomAbs_Shape;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom_OffsetSurface_1 extends Geom_OffsetSurface {
    constructor(S: any, Offset: Standard_Real, isNotCheckC0: Standard_Boolean);
  }

  export declare class Geom_OffsetSurface_2 extends Geom_OffsetSurface {
    constructor(theOther: Geom_OffsetSurface);
  }

export declare class Geom_BezierSurface extends Geom_BoundedSurface {
  HasEvalRepresentation(): Standard_Boolean;
  EvalRepresentation(): any;
  SetEvalRepresentation(theDesc: any): void;
  ClearEvalRepresentation(): void;
  ExchangeUV(): void;
  Increase(UDeg: Standard_Integer, VDeg: Standard_Integer): void;
  InsertPoleColAfter_1(VIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>): void;
  InsertPoleColAfter_2(VIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>, CPoleWeights: NCollection_Array1<double>): void;
  InsertPoleColBefore_1(VIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>): void;
  InsertPoleColBefore_2(VIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>, CPoleWeights: NCollection_Array1<double>): void;
  InsertPoleRowAfter_1(UIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>): void;
  InsertPoleRowAfter_2(UIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>, CPoleWeights: NCollection_Array1<double>): void;
  InsertPoleRowBefore_1(UIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>): void;
  InsertPoleRowBefore_2(UIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>, CPoleWeights: NCollection_Array1<double>): void;
  RemovePoleCol(VIndex: Standard_Integer): void;
  RemovePoleRow(UIndex: Standard_Integer): void;
  Segment(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  SetPole_1(UIndex: Standard_Integer, VIndex: Standard_Integer, P: gp_Pnt): void;
  SetPole_2(UIndex: Standard_Integer, VIndex: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  SetPoleCol_1(VIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>): void;
  SetPoleCol_2(VIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>, CPoleWeights: NCollection_Array1<double>): void;
  SetPoleRow_1(UIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>): void;
  SetPoleRow_2(UIndex: Standard_Integer, CPoles: NCollection_Array1<gp_Pnt>, CPoleWeights: NCollection_Array1<double>): void;
  SetWeight(UIndex: Standard_Integer, VIndex: Standard_Integer, Weight: Standard_Real): void;
  SetWeightCol(VIndex: Standard_Integer, CPoleWeights: NCollection_Array1<double>): void;
  SetWeightRow(UIndex: Standard_Integer, CPoleWeights: NCollection_Array1<double>): void;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Continuity(): GeomAbs_Shape;
  EvalD0(U: Standard_Real, V: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real, V: Standard_Real): any;
  EvalD2(U: Standard_Real, V: Standard_Real): any;
  EvalD3(U: Standard_Real, V: Standard_Real): any;
  EvalDN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  NbUPoles(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  Pole(UIndex: Standard_Integer, VIndex: Standard_Integer): gp_Pnt;
  Poles_1(P: NCollection_Array2<gp_Pnt>): void;
  Poles_2(): any;
  UDegree(): Standard_Integer;
  UIso(U: Standard_Real): any;
  VDegree(): Standard_Integer;
  VIso(V: Standard_Real): any;
  Weight(UIndex: Standard_Integer, VIndex: Standard_Integer): Standard_Real;
  Weights_1(W: NCollection_Array2<double>): void;
  Weights_2(): any;
  WeightsArray(): any;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Transform(T: gp_Trsf): void;
  static MaxDegree(): Standard_Integer;
  Resolution(Tolerance3D: Standard_Real, UTolerance: Standard_Real, VTolerance: Standard_Real): void;
  Copy(): any;
  UKnots(): any;
  VKnots(): any;
  UMultiplicities(): any;
  VMultiplicities(): any;
  UKnotSequence(): any;
  VKnotSequence(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom_BezierSurface_1 extends Geom_BezierSurface {
    constructor(SurfacePoles: NCollection_Array2<gp_Pnt>);
  }

  export declare class Geom_BezierSurface_2 extends Geom_BezierSurface {
    constructor(theOther: Geom_BezierSurface);
  }

  export declare class Geom_BezierSurface_3 extends Geom_BezierSurface {
    constructor(SurfacePoles: NCollection_Array2<gp_Pnt>, PoleWeights: NCollection_Array2<double>);
  }

export declare class Geom_TrimmedCurve extends Geom_BoundedCurve {
  constructor(C: any, U1: Standard_Real, U2: Standard_Real, Sense: Standard_Boolean, theAdjustPeriodic: Standard_Boolean)
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  SetTrim(U1: Standard_Real, U2: Standard_Real, Sense: Standard_Boolean, theAdjustPeriodic: Standard_Boolean): void;
  BasisCurve(): any;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  EndPoint(): gp_Pnt;
  FirstParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  LastParameter(): Standard_Real;
  StartPoint(): gp_Pnt;
  EvalD0(U: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real): any;
  EvalD2(U: Standard_Real): any;
  EvalD3(U: Standard_Real): any;
  EvalDN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
  ParametricTransformation(T: gp_Trsf): Standard_Real;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom_BoundedSurface extends Geom_Surface {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom_Conic extends Geom_Curve {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theP: gp_Pnt): void;
  SetPosition(theA2: gp_Ax2): void;
  Axis(): gp_Ax1;
  Location(): gp_Pnt;
  Position(): gp_Ax2;
  Eccentricity(): Standard_Real;
  XAxis(): gp_Ax1;
  YAxis(): gp_Ax1;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom_Surface extends Geom_Geometry {
  UReverse(): void;
  UReversed(): any;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversed(): any;
  VReversedParameter(V: Standard_Real): Standard_Real;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  Continuity(): GeomAbs_Shape;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  EvalD0(U: Standard_Real, V: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real, V: Standard_Real): ResD1;
  EvalD2(U: Standard_Real, V: Standard_Real): ResD2;
  EvalD3(U: Standard_Real, V: Standard_Real): ResD3;
  EvalDN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  D0(U: Standard_Real, V: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec): void;
  D2(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec): void;
  D3(U: Standard_Real, V: Standard_Real, P: gp_Pnt, D1U: gp_Vec, D1V: gp_Vec, D2U: gp_Vec, D2V: gp_Vec, D2UV: gp_Vec, D3U: gp_Vec, D3V: gp_Vec, D3UUV: gp_Vec, D3UVV: gp_Vec): void;
  DN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Value(U: Standard_Real, V: Standard_Real): gp_Pnt;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom_ConicalSurface extends Geom_ElementarySurface {
  SetCone(C: gp_Cone): void;
  SetRadius(R: Standard_Real): void;
  SetSemiAngle(Ang: Standard_Real): void;
  Cone(): gp_Cone;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReversedParameter(V: Standard_Real): Standard_Real;
  VReverse(): void;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Apex(): gp_Pnt;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Coefficients(A1: Standard_Real, A2: Standard_Real, A3: Standard_Real, B1: Standard_Real, B2: Standard_Real, B3: Standard_Real, C1: Standard_Real, C2: Standard_Real, C3: Standard_Real, D: Standard_Real): void;
  RefRadius(): Standard_Real;
  SemiAngle(): Standard_Real;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  EvalD0(U: Standard_Real, V: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real, V: Standard_Real): any;
  EvalD2(U: Standard_Real, V: Standard_Real): any;
  EvalD3(U: Standard_Real, V: Standard_Real): any;
  EvalDN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom_ConicalSurface_1 extends Geom_ConicalSurface {
    constructor(A3: gp_Ax3, Ang: Standard_Real, Radius: Standard_Real);
  }

  export declare class Geom_ConicalSurface_2 extends Geom_ConicalSurface {
    constructor(C: gp_Cone);
  }

export declare class Geom_CylindricalSurface extends Geom_ElementarySurface {
  SetCylinder(C: gp_Cylinder): void;
  SetRadius(R: Standard_Real): void;
  Cylinder(): gp_Cylinder;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReversedParameter(V: Standard_Real): Standard_Real;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Coefficients(A1: Standard_Real, A2: Standard_Real, A3: Standard_Real, B1: Standard_Real, B2: Standard_Real, B3: Standard_Real, C1: Standard_Real, C2: Standard_Real, C3: Standard_Real, D: Standard_Real): void;
  Radius(): Standard_Real;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  EvalD0(U: Standard_Real, V: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real, V: Standard_Real): any;
  EvalD2(U: Standard_Real, V: Standard_Real): any;
  EvalD3(U: Standard_Real, V: Standard_Real): any;
  EvalDN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom_CylindricalSurface_1 extends Geom_CylindricalSurface {
    constructor(A3: gp_Ax3, Radius: Standard_Real);
  }

  export declare class Geom_CylindricalSurface_2 extends Geom_CylindricalSurface {
    constructor(C: gp_Cylinder);
  }

export declare class Geom_ElementarySurface extends Geom_Surface {
  SetAxis(theA1: gp_Ax1): void;
  SetLocation(theLoc: gp_Pnt): void;
  SetPosition(theAx3: gp_Ax3): void;
  Axis(): gp_Ax1;
  Location(): gp_Pnt;
  Position(): gp_Ax3;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom_BezierCurve extends Geom_BoundedCurve {
  HasEvalRepresentation(): Standard_Boolean;
  EvalRepresentation(): any;
  SetEvalRepresentation(theDesc: any): void;
  ClearEvalRepresentation(): void;
  Increase(Degree: Standard_Integer): void;
  InsertPoleAfter_1(Index: Standard_Integer, P: gp_Pnt): void;
  InsertPoleAfter_2(Index: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  InsertPoleBefore_1(Index: Standard_Integer, P: gp_Pnt): void;
  InsertPoleBefore_2(Index: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  RemovePole(Index: Standard_Integer): void;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Segment(U1: Standard_Real, U2: Standard_Real): void;
  SetPole_1(Index: Standard_Integer, P: gp_Pnt): void;
  SetPole_2(Index: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  SetWeight(Index: Standard_Integer, Weight: Standard_Real): void;
  IsClosed(): Standard_Boolean;
  IsCN(N: Standard_Integer): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  IsRational(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  Degree(): Standard_Integer;
  EvalD0(U: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real): any;
  EvalD2(U: Standard_Real): any;
  EvalD3(U: Standard_Real): any;
  EvalDN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  StartPoint(): gp_Pnt;
  EndPoint(): gp_Pnt;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  NbPoles(): Standard_Integer;
  Pole(Index: Standard_Integer): gp_Pnt;
  Poles_1(P: NCollection_Array1<gp_Pnt>): void;
  Poles_2(): any;
  Weight(Index: Standard_Integer): Standard_Real;
  Weights_1(W: NCollection_Array1<double>): void;
  Weights_2(): any;
  WeightsArray(): any;
  Transform(T: gp_Trsf): void;
  static MaxDegree(): Standard_Integer;
  Resolution(Tolerance3D: Standard_Real, UTolerance: Standard_Real): void;
  Copy(): any;
  Knots(): any;
  Multiplicities(): any;
  KnotSequence(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom_BezierCurve_1 extends Geom_BezierCurve {
    constructor(CurvePoles: NCollection_Array1<gp_Pnt>);
  }

  export declare class Geom_BezierCurve_2 extends Geom_BezierCurve {
    constructor(CurvePoles: NCollection_Array1<gp_Pnt>, PoleWeights: NCollection_Array1<double>);
  }

  export declare class Geom_BezierCurve_3 extends Geom_BezierCurve {
    constructor(theOther: Geom_BezierCurve);
  }

export declare class Geom_Curve extends Geom_Geometry {
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
  ParametricTransformation(T: gp_Trsf): Standard_Real;
  Reversed(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  EvalD0(U: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real): ResD1;
  EvalD2(U: Standard_Real): ResD2;
  EvalD3(U: Standard_Real): ResD3;
  EvalDN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  D0(U: Standard_Real, P: gp_Pnt): void;
  D1(U: Standard_Real, P: gp_Pnt, V1: gp_Vec): void;
  D2(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  D3(U: Standard_Real, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  DN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Value(U: Standard_Real): gp_Pnt;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom_BSplineCurve extends Geom_BoundedCurve {
  HasEvalRepresentation(): Standard_Boolean;
  EvalRepresentation(): any;
  SetEvalRepresentation(theDesc: any): void;
  ClearEvalRepresentation(): void;
  IncreaseDegree(Degree: Standard_Integer): void;
  IncreaseMultiplicity_1(Index: Standard_Integer, M: Standard_Integer): void;
  IncreaseMultiplicity_2(I1: Standard_Integer, I2: Standard_Integer, M: Standard_Integer): void;
  IncrementMultiplicity(I1: Standard_Integer, I2: Standard_Integer, M: Standard_Integer): void;
  InsertKnot(U: Standard_Real, M: Standard_Integer, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  InsertKnots(Knots: NCollection_Array1<double>, Mults: NCollection_Array1<int>, ParametricTolerance: Standard_Real, Add: Standard_Boolean): void;
  RemoveKnot(Index: Standard_Integer, M: Standard_Integer, Tolerance: Standard_Real): Standard_Boolean;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Segment(U1: Standard_Real, U2: Standard_Real, theTolerance: Standard_Real): void;
  SetKnot_1(Index: Standard_Integer, K: Standard_Real): void;
  SetKnots(K: NCollection_Array1<double>): void;
  SetKnot_2(Index: Standard_Integer, K: Standard_Real, M: Standard_Integer): void;
  PeriodicNormalization(U: Standard_Real): void;
  SetPeriodic(): void;
  SetOrigin_1(Index: Standard_Integer): void;
  SetOrigin_2(U: Standard_Real, Tol: Standard_Real): void;
  SetNotPeriodic(): void;
  SetPole_1(Index: Standard_Integer, P: gp_Pnt): void;
  SetPole_2(Index: Standard_Integer, P: gp_Pnt, Weight: Standard_Real): void;
  SetWeight(Index: Standard_Integer, Weight: Standard_Real): void;
  MovePoint(U: Standard_Real, P: gp_Pnt, Index1: Standard_Integer, Index2: Standard_Integer, FirstModifiedPole: Standard_Integer, LastModifiedPole: Standard_Integer): void;
  MovePointAndTangent(U: Standard_Real, P: gp_Pnt, Tangent: gp_Vec, Tolerance: Standard_Real, StartingCondition: Standard_Integer, EndingCondition: Standard_Integer, ErrorStatus: Standard_Integer): void;
  IsCN(N: Standard_Integer): Standard_Boolean;
  IsG1(theTf: Standard_Real, theTl: Standard_Real, theAngTol: Standard_Real): Standard_Boolean;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  IsRational(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  Degree(): Standard_Integer;
  EvalD0(U: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real): any;
  EvalD2(U: Standard_Real): any;
  EvalD3(U: Standard_Real): any;
  EvalDN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  LocalValue(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer): gp_Pnt;
  LocalD0(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt): void;
  LocalD1(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt, V1: gp_Vec): void;
  LocalD2(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec): void;
  LocalD3(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, P: gp_Pnt, V1: gp_Vec, V2: gp_Vec, V3: gp_Vec): void;
  LocalDN(U: Standard_Real, FromK1: Standard_Integer, ToK2: Standard_Integer, N: Standard_Integer): gp_Vec;
  EndPoint(): gp_Pnt;
  FirstUKnotIndex(): Standard_Integer;
  FirstParameter(): Standard_Real;
  Knot(Index: Standard_Integer): Standard_Real;
  Knots_1(K: NCollection_Array1<double>): void;
  Knots_2(): any;
  KnotSequence_1(K: NCollection_Array1<double>): void;
  KnotSequence_2(): any;
  KnotDistribution(): GeomAbs_BSplKnotDistribution;
  LastUKnotIndex(): Standard_Integer;
  LastParameter(): Standard_Real;
  LocateU(U: Standard_Real, ParametricTolerance: Standard_Real, I1: Standard_Integer, I2: Standard_Integer, WithKnotRepetition: Standard_Boolean): void;
  Multiplicity(Index: Standard_Integer): Standard_Integer;
  Multiplicities_1(M: NCollection_Array1<int>): void;
  Multiplicities_2(): any;
  NbKnots(): Standard_Integer;
  NbPoles(): Standard_Integer;
  Pole(Index: Standard_Integer): gp_Pnt;
  Poles_1(P: NCollection_Array1<gp_Pnt>): void;
  Poles_2(): any;
  StartPoint(): gp_Pnt;
  Weight(Index: Standard_Integer): Standard_Real;
  Weights_1(W: NCollection_Array1<double>): void;
  Weights_2(): any;
  WeightsArray(): any;
  Transform(T: gp_Trsf): void;
  static MaxDegree(): Standard_Integer;
  Resolution(Tolerance3D: Standard_Real, UTolerance: Standard_Real): void;
  Copy(): any;
  IsEqual(theOther: any, thePreci: Standard_Real): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom_BSplineCurve_1 extends Geom_BSplineCurve {
    constructor(Poles: NCollection_Array1<gp_Pnt>, Knots: NCollection_Array1<double>, Multiplicities: NCollection_Array1<int>, Degree: Standard_Integer, Periodic: Standard_Boolean);
  }

  export declare class Geom_BSplineCurve_2 extends Geom_BSplineCurve {
    constructor(Poles: NCollection_Array1<gp_Pnt>, Weights: NCollection_Array1<double>, Knots: NCollection_Array1<double>, Multiplicities: NCollection_Array1<int>, Degree: Standard_Integer, Periodic: Standard_Boolean, CheckRational: Standard_Boolean);
  }

  export declare class Geom_BSplineCurve_3 extends Geom_BSplineCurve {
    constructor(theOther: Geom_BSplineCurve);
  }

export declare class Geom_Plane extends Geom_ElementarySurface {
  SetPln(Pl: gp_Pln): void;
  Pln(): gp_Pln;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Coefficients(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real): void;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  IsVPeriodic(): Standard_Boolean;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  EvalD0(U: Standard_Real, V: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real, V: Standard_Real): any;
  EvalD2(U: Standard_Real, V: Standard_Real): any;
  EvalD3(U: Standard_Real, V: Standard_Real): any;
  EvalDN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom_Plane_1 extends Geom_Plane {
    constructor(A3: gp_Ax3);
  }

  export declare class Geom_Plane_2 extends Geom_Plane {
    constructor(Pl: gp_Pln);
  }

  export declare class Geom_Plane_3 extends Geom_Plane {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

  export declare class Geom_Plane_4 extends Geom_Plane {
    constructor(A: Standard_Real, B: Standard_Real, C: Standard_Real, D: Standard_Real);
  }

export declare class Geom_BoundedCurve extends Geom_Curve {
  EndPoint(): gp_Pnt;
  StartPoint(): gp_Pnt;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom_Geometry extends Standard_Transient {
  Mirror_1(P: gp_Pnt): void;
  Mirror_2(A1: gp_Ax1): void;
  Mirror_3(A2: gp_Ax2): void;
  Rotate(A1: gp_Ax1, Ang: Standard_Real): void;
  Scale(P: gp_Pnt, S: Standard_Real): void;
  Translate_1(V: gp_Vec): void;
  Translate_2(P1: gp_Pnt, P2: gp_Pnt): void;
  Transform(T: gp_Trsf): void;
  Mirrored_1(P: gp_Pnt): any;
  Mirrored_2(A1: gp_Ax1): any;
  Mirrored_3(A2: gp_Ax2): any;
  Rotated(A1: gp_Ax1, Ang: Standard_Real): any;
  Scaled(P: gp_Pnt, S: Standard_Real): any;
  Transformed(T: gp_Trsf): any;
  Translated_1(V: gp_Vec): any;
  Translated_2(P1: gp_Pnt, P2: gp_Pnt): any;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Geom_RectangularTrimmedSurface extends Geom_BoundedSurface {
  SetTrim_1(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real, USense: Standard_Boolean, VSense: Standard_Boolean): void;
  SetTrim_2(Param1: Standard_Real, Param2: Standard_Real, UTrim: Standard_Boolean, Sense: Standard_Boolean): void;
  BasisSurface(): any;
  UReverse(): void;
  UReversedParameter(U: Standard_Real): Standard_Real;
  VReverse(): void;
  VReversedParameter(V: Standard_Real): Standard_Real;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Continuity(): GeomAbs_Shape;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsCNu(N: Standard_Integer): Standard_Boolean;
  IsCNv(N: Standard_Integer): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  UIso(U: Standard_Real): any;
  VIso(V: Standard_Real): any;
  EvalD0(U: Standard_Real, V: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real, V: Standard_Real): any;
  EvalD2(U: Standard_Real, V: Standard_Real): any;
  EvalD3(U: Standard_Real, V: Standard_Real): any;
  EvalDN(U: Standard_Real, V: Standard_Real, Nu: Standard_Integer, Nv: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformParameters(U: Standard_Real, V: Standard_Real, T: gp_Trsf): void;
  ParametricTransformation(T: gp_Trsf): gp_GTrsf2d;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom_RectangularTrimmedSurface_1 extends Geom_RectangularTrimmedSurface {
    constructor(S: any, U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real, USense: Standard_Boolean, VSense: Standard_Boolean);
  }

  export declare class Geom_RectangularTrimmedSurface_2 extends Geom_RectangularTrimmedSurface {
    constructor(S: any, Param1: Standard_Real, Param2: Standard_Real, UTrim: Standard_Boolean, Sense: Standard_Boolean);
  }

export declare class Geom_Line extends Geom_Curve {
  SetLin(L: gp_Lin): void;
  SetDirection(V: gp_Dir): void;
  SetLocation(P: gp_Pnt): void;
  SetPosition(A1: gp_Ax1): void;
  Lin(): gp_Lin;
  Position(): gp_Ax1;
  Reverse(): void;
  ReversedParameter(U: Standard_Real): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Continuity(): GeomAbs_Shape;
  IsCN(N: Standard_Integer): Standard_Boolean;
  EvalD0(U: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real): any;
  EvalD2(U: Standard_Real): any;
  EvalD3(U: Standard_Real): any;
  EvalDN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  TransformedParameter(U: Standard_Real, T: gp_Trsf): Standard_Real;
  ParametricTransformation(T: gp_Trsf): Standard_Real;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom_Line_1 extends Geom_Line {
    constructor(A1: gp_Ax1);
  }

  export declare class Geom_Line_2 extends Geom_Line {
    constructor(L: gp_Lin);
  }

  export declare class Geom_Line_3 extends Geom_Line {
    constructor(P: gp_Pnt, V: gp_Dir);
  }

export declare class Geom_Circle extends Geom_Conic {
  SetCirc(C: gp_Circ): void;
  SetRadius(R: Standard_Real): void;
  Circ(): gp_Circ;
  Radius(): Standard_Real;
  ReversedParameter(U: Standard_Real): Standard_Real;
  Eccentricity(): Standard_Real;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  EvalD0(U: Standard_Real): gp_Pnt;
  EvalD1(U: Standard_Real): any;
  EvalD2(U: Standard_Real): any;
  EvalD3(U: Standard_Real): any;
  EvalDN(U: Standard_Real, N: Standard_Integer): gp_Vec;
  Transform(T: gp_Trsf): void;
  Copy(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Geom_Circle_1 extends Geom_Circle {
    constructor(C: gp_Circ);
  }

  export declare class Geom_Circle_2 extends Geom_Circle {
    constructor(A2: gp_Ax2, Radius: Standard_Real);
  }

export declare type TopAbs_ShapeEnum = {
  TopAbs_COMPOUND: {};
  TopAbs_COMPSOLID: {};
  TopAbs_SOLID: {};
  TopAbs_SHELL: {};
  TopAbs_FACE: {};
  TopAbs_WIRE: {};
  TopAbs_EDGE: {};
  TopAbs_VERTEX: {};
  TopAbs_SHAPE: {};
}

export declare type TopAbs_Orientation = {
  TopAbs_FORWARD: {};
  TopAbs_REVERSED: {};
  TopAbs_INTERNAL: {};
  TopAbs_EXTERNAL: {};
}

export declare class GeomAdaptor_TransformedSurface extends Adaptor3d_Surface {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  Load_1(theSurface: any, theTrsf: gp_Trsf): void;
  Load_2(theSurface: any, theUFirst: Standard_Real, theULast: Standard_Real, theVFirst: Standard_Real, theVLast: Standard_Real, theTrsf: gp_Trsf, theTolU: Standard_Real, theTolV: Standard_Real): void;
  SetTrsf(theTrsf: gp_Trsf): void;
  HasTrsf(): Standard_Boolean;
  Trsf(): gp_Trsf;
  Surface(): GeomAdaptor_Surface;
  AdaptorSurfaceOriginal(): GeomAdaptor_Surface;
  AdaptorSurfaceTransformed(): GeomAdaptor_Surface;
  GeomSurfaceOriginal(): any;
  GeomSurfaceTransformed(): any;
  GeomSurface(): any;
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(theS: GeomAbs_Shape): Standard_Integer;
  NbVIntervals(theS: GeomAbs_Shape): Standard_Integer;
  UIntervals(theT: NCollection_Array1<double>, theS: GeomAbs_Shape): void;
  VIntervals(theT: NCollection_Array1<double>, theS: GeomAbs_Shape): void;
  UTrim(theFirst: Standard_Real, theLast: Standard_Real, theTol: Standard_Real): any;
  VTrim(theFirst: Standard_Real, theLast: Standard_Real, theTol: Standard_Real): any;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  ToleranceU(): Standard_Real;
  ToleranceV(): Standard_Real;
  EvalD0(theU: Standard_Real, theV: Standard_Real): gp_Pnt;
  EvalD1(theU: Standard_Real, theV: Standard_Real): any;
  EvalD2(theU: Standard_Real, theV: Standard_Real): any;
  EvalD3(theU: Standard_Real, theV: Standard_Real): any;
  EvalDN(theU: Standard_Real, theV: Standard_Real, theNu: Standard_Integer, theNv: Standard_Integer): gp_Vec;
  UResolution(theR3d: Standard_Real): Standard_Real;
  VResolution(theR3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  UDegree(): Standard_Integer;
  NbUPoles(): Standard_Integer;
  VDegree(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  NbUKnots(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): any;
  BSpline(): any;
  AxeOfRevolution(): gp_Ax1;
  Direction(): gp_Dir;
  BasisCurve(): any;
  BasisSurface(): any;
  OffsetValue(): Standard_Real;
  delete(): void;
}

  export declare class GeomAdaptor_TransformedSurface_1 extends GeomAdaptor_TransformedSurface {
    constructor();
  }

  export declare class GeomAdaptor_TransformedSurface_2 extends GeomAdaptor_TransformedSurface {
    constructor(theSurface: any, theTrsf: gp_Trsf);
  }

  export declare class GeomAdaptor_TransformedSurface_3 extends GeomAdaptor_TransformedSurface {
    constructor(theSurface: any, theUFirst: Standard_Real, theULast: Standard_Real, theVFirst: Standard_Real, theVLast: Standard_Real, theTrsf: gp_Trsf, theTolU: Standard_Real, theTolV: Standard_Real);
  }

export declare class GeomAdaptor_TransformedCurve extends Adaptor3d_Curve {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  Load_1(theCurve: any): void;
  Load_2(theCurve: any, theFirst: Standard_Real, theLast: Standard_Real): void;
  LoadCurveOnSurface(theConSurf: any): void;
  SetTrsf(theTrsf: gp_Trsf): void;
  Trsf(): gp_Trsf;
  Is3DCurve(): Standard_Boolean;
  IsCurveOnSurface(): Standard_Boolean;
  Curve(): GeomAdaptor_Curve;
  ChangeCurve(): GeomAdaptor_Curve;
  CurveOnSurface(): Adaptor3d_CurveOnSurface;
  GeomCurve(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(theS: GeomAbs_Shape): Standard_Integer;
  Intervals(theT: NCollection_Array1<double>, theS: GeomAbs_Shape): void;
  Trim(theFirst: Standard_Real, theLast: Standard_Real, theTol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  EvalD0(theU: Standard_Real): gp_Pnt;
  EvalD1(theU: Standard_Real): any;
  EvalD2(theU: Standard_Real): any;
  EvalD3(theU: Standard_Real): any;
  EvalDN(theU: Standard_Real, theN: Standard_Integer): gp_Vec;
  Resolution(theR3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  OffsetCurve(): any;
  delete(): void;
}

  export declare class GeomAdaptor_TransformedCurve_1 extends GeomAdaptor_TransformedCurve {
    constructor();
  }

  export declare class GeomAdaptor_TransformedCurve_2 extends GeomAdaptor_TransformedCurve {
    constructor(theCurve: any, theTrsf: gp_Trsf);
  }

  export declare class GeomAdaptor_TransformedCurve_3 extends GeomAdaptor_TransformedCurve {
    constructor(theCurve: any, theFirst: Standard_Real, theLast: Standard_Real, theTrsf: gp_Trsf);
  }

export declare class GeomAdaptor_Curve extends Adaptor3d_Curve {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  Reset(): void;
  Load_1(theCurve: any): void;
  Load_2(theCurve: any, theUFirst: Standard_Real, theULast: Standard_Real): void;
  Curve(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  OffsetCurve(): any;
  EvalD0(theU: Standard_Real): gp_Pnt;
  EvalD1(theU: Standard_Real): any;
  EvalD2(theU: Standard_Real): any;
  EvalD3(theU: Standard_Real): any;
  EvalDN(theU: Standard_Real, theN: Standard_Integer): gp_Vec;
  delete(): void;
}

  export declare class GeomAdaptor_Curve_1 extends GeomAdaptor_Curve {
    constructor();
  }

  export declare class GeomAdaptor_Curve_2 extends GeomAdaptor_Curve {
    constructor(theCurve: any);
  }

  export declare class GeomAdaptor_Curve_3 extends GeomAdaptor_Curve {
    constructor(theCurve: any, theUFirst: Standard_Real, theULast: Standard_Real);
  }

export declare class GeomAdaptor_Surface extends Adaptor3d_Surface {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  Load_1(theSurf: any): void;
  Load_2(theSurf: any, theUFirst: Standard_Real, theULast: Standard_Real, theVFirst: Standard_Real, theVLast: Standard_Real, theTolU: Standard_Real, theTolV: Standard_Real): void;
  Surface(): any;
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  Bounds(theU1: Standard_Real, theU2: Standard_Real, theV1: Standard_Real, theV2: Standard_Real): void;
  ToleranceU(): Standard_Real;
  ToleranceV(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(S: GeomAbs_Shape): Standard_Integer;
  NbVIntervals(S: GeomAbs_Shape): Standard_Integer;
  UIntervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  VIntervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  UTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  VTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  EvalD0(theU: Standard_Real, theV: Standard_Real): gp_Pnt;
  EvalD1(theU: Standard_Real, theV: Standard_Real): any;
  EvalD2(theU: Standard_Real, theV: Standard_Real): any;
  EvalD3(theU: Standard_Real, theV: Standard_Real): any;
  EvalDN(theU: Standard_Real, theV: Standard_Real, theNu: Standard_Integer, theNv: Standard_Integer): gp_Vec;
  UResolution(R3d: Standard_Real): Standard_Real;
  VResolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  UDegree(): Standard_Integer;
  NbUPoles(): Standard_Integer;
  VDegree(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  NbUKnots(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): any;
  BSpline(): any;
  AxeOfRevolution(): gp_Ax1;
  Direction(): gp_Dir;
  BasisCurve(): any;
  BasisSurface(): any;
  OffsetValue(): Standard_Real;
  delete(): void;
}

  export declare class GeomAdaptor_Surface_1 extends GeomAdaptor_Surface {
    constructor();
  }

  export declare class GeomAdaptor_Surface_2 extends GeomAdaptor_Surface {
    constructor(theSurf: any);
  }

  export declare class GeomAdaptor_Surface_3 extends GeomAdaptor_Surface {
    constructor(theSurf: any, theUFirst: Standard_Real, theULast: Standard_Real, theVFirst: Standard_Real, theVLast: Standard_Real, theTolU: Standard_Real, theTolV: Standard_Real);
  }

export declare class Adaptor3d_Surface extends Standard_Transient {
  constructor();
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  FirstUParameter(): Standard_Real;
  LastUParameter(): Standard_Real;
  FirstVParameter(): Standard_Real;
  LastVParameter(): Standard_Real;
  UContinuity(): GeomAbs_Shape;
  VContinuity(): GeomAbs_Shape;
  NbUIntervals(S: GeomAbs_Shape): Standard_Integer;
  NbVIntervals(S: GeomAbs_Shape): Standard_Integer;
  UIntervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  VIntervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  UTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  VTrim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsUClosed(): Standard_Boolean;
  IsVClosed(): Standard_Boolean;
  IsUPeriodic(): Standard_Boolean;
  UPeriod(): Standard_Real;
  IsVPeriodic(): Standard_Boolean;
  VPeriod(): Standard_Real;
  Value(theU: Standard_Real, theV: Standard_Real): gp_Pnt;
  D0(theU: Standard_Real, theV: Standard_Real, theP: gp_Pnt): void;
  D1(theU: Standard_Real, theV: Standard_Real, theP: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec): void;
  D2(theU: Standard_Real, theV: Standard_Real, theP: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec, theD2U: gp_Vec, theD2V: gp_Vec, theD2UV: gp_Vec): void;
  D3(theU: Standard_Real, theV: Standard_Real, theP: gp_Pnt, theD1U: gp_Vec, theD1V: gp_Vec, theD2U: gp_Vec, theD2V: gp_Vec, theD2UV: gp_Vec, theD3U: gp_Vec, theD3V: gp_Vec, theD3UUV: gp_Vec, theD3UVV: gp_Vec): void;
  DN(theU: Standard_Real, theV: Standard_Real, theNu: Standard_Integer, theNv: Standard_Integer): gp_Vec;
  UResolution(R3d: Standard_Real): Standard_Real;
  VResolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_SurfaceType;
  Plane(): gp_Pln;
  Cylinder(): gp_Cylinder;
  Cone(): gp_Cone;
  Sphere(): gp_Sphere;
  Torus(): gp_Torus;
  UDegree(): Standard_Integer;
  NbUPoles(): Standard_Integer;
  VDegree(): Standard_Integer;
  NbVPoles(): Standard_Integer;
  NbUKnots(): Standard_Integer;
  NbVKnots(): Standard_Integer;
  IsURational(): Standard_Boolean;
  IsVRational(): Standard_Boolean;
  Bezier(): any;
  BSpline(): any;
  AxeOfRevolution(): gp_Ax1;
  Direction(): gp_Dir;
  BasisCurve(): any;
  BasisSurface(): any;
  OffsetValue(): Standard_Real;
  EvalD0(theU: Standard_Real, theV: Standard_Real): gp_Pnt;
  EvalD1(theU: Standard_Real, theV: Standard_Real): any;
  EvalD2(theU: Standard_Real, theV: Standard_Real): any;
  EvalD3(theU: Standard_Real, theV: Standard_Real): any;
  EvalDN(theU: Standard_Real, theV: Standard_Real, theNu: Standard_Integer, theNv: Standard_Integer): gp_Vec;
  delete(): void;
}

export declare class Adaptor3d_Curve extends Standard_Transient {
  constructor();
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  ShallowCopy(): any;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  Continuity(): GeomAbs_Shape;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  Trim(First: Standard_Real, Last: Standard_Real, Tol: Standard_Real): any;
  IsClosed(): Standard_Boolean;
  IsPeriodic(): Standard_Boolean;
  Period(): Standard_Real;
  Value(theU: Standard_Real): gp_Pnt;
  D0(theU: Standard_Real, theP: gp_Pnt): void;
  D1(theU: Standard_Real, theP: gp_Pnt, theV: gp_Vec): void;
  D2(theU: Standard_Real, theP: gp_Pnt, theV1: gp_Vec, theV2: gp_Vec): void;
  D3(theU: Standard_Real, theP: gp_Pnt, theV1: gp_Vec, theV2: gp_Vec, theV3: gp_Vec): void;
  DN(theU: Standard_Real, theN: Standard_Integer): gp_Vec;
  Resolution(R3d: Standard_Real): Standard_Real;
  GetType(): GeomAbs_CurveType;
  Line(): gp_Lin;
  Circle(): gp_Circ;
  Ellipse(): gp_Elips;
  Hyperbola(): gp_Hypr;
  Parabola(): gp_Parab;
  Degree(): Standard_Integer;
  IsRational(): Standard_Boolean;
  NbPoles(): Standard_Integer;
  NbKnots(): Standard_Integer;
  Bezier(): any;
  BSpline(): any;
  OffsetCurve(): any;
  EvalD0(theU: Standard_Real): gp_Pnt;
  EvalD1(theU: Standard_Real): any;
  EvalD2(theU: Standard_Real): any;
  EvalD3(theU: Standard_Real): any;
  EvalDN(theU: Standard_Real, theN: Standard_Integer): gp_Vec;
  delete(): void;
}

export declare class Handle_Geom2d_Line {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Line): void;
  get(): Geom2d_Line;
  delete(): void;
}

  export declare class Handle_Geom2d_Line_1 extends Handle_Geom2d_Line {
    constructor();
  }

  export declare class Handle_Geom2d_Line_2 extends Handle_Geom2d_Line {
    constructor(thePtr: Geom2d_Line);
  }

  export declare class Handle_Geom2d_Line_3 extends Handle_Geom2d_Line {
    constructor(theHandle: Handle_Geom2d_Line);
  }

  export declare class Handle_Geom2d_Line_4 extends Handle_Geom2d_Line {
    constructor(theHandle: Handle_Geom2d_Line);
  }

export declare class Handle_Geom_Conic {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Conic): void;
  get(): Geom_Conic;
  delete(): void;
}

  export declare class Handle_Geom_Conic_1 extends Handle_Geom_Conic {
    constructor();
  }

  export declare class Handle_Geom_Conic_2 extends Handle_Geom_Conic {
    constructor(thePtr: Geom_Conic);
  }

  export declare class Handle_Geom_Conic_3 extends Handle_Geom_Conic {
    constructor(theHandle: Handle_Geom_Conic);
  }

  export declare class Handle_Geom_Conic_4 extends Handle_Geom_Conic {
    constructor(theHandle: Handle_Geom_Conic);
  }

export declare class Handle_Geom_BoundedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BoundedSurface): void;
  get(): Geom_BoundedSurface;
  delete(): void;
}

  export declare class Handle_Geom_BoundedSurface_1 extends Handle_Geom_BoundedSurface {
    constructor();
  }

  export declare class Handle_Geom_BoundedSurface_2 extends Handle_Geom_BoundedSurface {
    constructor(thePtr: Geom_BoundedSurface);
  }

  export declare class Handle_Geom_BoundedSurface_3 extends Handle_Geom_BoundedSurface {
    constructor(theHandle: Handle_Geom_BoundedSurface);
  }

  export declare class Handle_Geom_BoundedSurface_4 extends Handle_Geom_BoundedSurface {
    constructor(theHandle: Handle_Geom_BoundedSurface);
  }

export declare class Handle_STEPCAFControl_Controller {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPCAFControl_Controller): void;
  get(): STEPCAFControl_Controller;
  delete(): void;
}

  export declare class Handle_STEPCAFControl_Controller_1 extends Handle_STEPCAFControl_Controller {
    constructor();
  }

  export declare class Handle_STEPCAFControl_Controller_2 extends Handle_STEPCAFControl_Controller {
    constructor(thePtr: STEPCAFControl_Controller);
  }

  export declare class Handle_STEPCAFControl_Controller_3 extends Handle_STEPCAFControl_Controller {
    constructor(theHandle: Handle_STEPCAFControl_Controller);
  }

  export declare class Handle_STEPCAFControl_Controller_4 extends Handle_STEPCAFControl_Controller {
    constructor(theHandle: Handle_STEPCAFControl_Controller);
  }

export declare class Handle_Geom_OffsetSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_OffsetSurface): void;
  get(): Geom_OffsetSurface;
  delete(): void;
}

  export declare class Handle_Geom_OffsetSurface_1 extends Handle_Geom_OffsetSurface {
    constructor();
  }

  export declare class Handle_Geom_OffsetSurface_2 extends Handle_Geom_OffsetSurface {
    constructor(thePtr: Geom_OffsetSurface);
  }

  export declare class Handle_Geom_OffsetSurface_3 extends Handle_Geom_OffsetSurface {
    constructor(theHandle: Handle_Geom_OffsetSurface);
  }

  export declare class Handle_Geom_OffsetSurface_4 extends Handle_Geom_OffsetSurface {
    constructor(theHandle: Handle_Geom_OffsetSurface);
  }

export declare class Handle_GeomFill_CorrectedFrenet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_CorrectedFrenet): void;
  get(): GeomFill_CorrectedFrenet;
  delete(): void;
}

  export declare class Handle_GeomFill_CorrectedFrenet_1 extends Handle_GeomFill_CorrectedFrenet {
    constructor();
  }

  export declare class Handle_GeomFill_CorrectedFrenet_2 extends Handle_GeomFill_CorrectedFrenet {
    constructor(thePtr: GeomFill_CorrectedFrenet);
  }

  export declare class Handle_GeomFill_CorrectedFrenet_3 extends Handle_GeomFill_CorrectedFrenet {
    constructor(theHandle: Handle_GeomFill_CorrectedFrenet);
  }

  export declare class Handle_GeomFill_CorrectedFrenet_4 extends Handle_GeomFill_CorrectedFrenet {
    constructor(theHandle: Handle_GeomFill_CorrectedFrenet);
  }

export declare class Handle_Interface_TypedValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_TypedValue): void;
  get(): Interface_TypedValue;
  delete(): void;
}

  export declare class Handle_Interface_TypedValue_1 extends Handle_Interface_TypedValue {
    constructor();
  }

  export declare class Handle_Interface_TypedValue_2 extends Handle_Interface_TypedValue {
    constructor(thePtr: Interface_TypedValue);
  }

  export declare class Handle_Interface_TypedValue_3 extends Handle_Interface_TypedValue {
    constructor(theHandle: Handle_Interface_TypedValue);
  }

  export declare class Handle_Interface_TypedValue_4 extends Handle_Interface_TypedValue {
    constructor(theHandle: Handle_Interface_TypedValue);
  }

export declare class Handle_Geom_CylindricalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_CylindricalSurface): void;
  get(): Geom_CylindricalSurface;
  delete(): void;
}

  export declare class Handle_Geom_CylindricalSurface_1 extends Handle_Geom_CylindricalSurface {
    constructor();
  }

  export declare class Handle_Geom_CylindricalSurface_2 extends Handle_Geom_CylindricalSurface {
    constructor(thePtr: Geom_CylindricalSurface);
  }

  export declare class Handle_Geom_CylindricalSurface_3 extends Handle_Geom_CylindricalSurface {
    constructor(theHandle: Handle_Geom_CylindricalSurface);
  }

  export declare class Handle_Geom_CylindricalSurface_4 extends Handle_Geom_CylindricalSurface {
    constructor(theHandle: Handle_Geom_CylindricalSurface);
  }

export declare class Handle_TDataStd_GenericExtString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_GenericExtString): void;
  get(): TDataStd_GenericExtString;
  delete(): void;
}

  export declare class Handle_TDataStd_GenericExtString_1 extends Handle_TDataStd_GenericExtString {
    constructor();
  }

  export declare class Handle_TDataStd_GenericExtString_2 extends Handle_TDataStd_GenericExtString {
    constructor(thePtr: TDataStd_GenericExtString);
  }

  export declare class Handle_TDataStd_GenericExtString_3 extends Handle_TDataStd_GenericExtString {
    constructor(theHandle: Handle_TDataStd_GenericExtString);
  }

  export declare class Handle_TDataStd_GenericExtString_4 extends Handle_TDataStd_GenericExtString {
    constructor(theHandle: Handle_TDataStd_GenericExtString);
  }

export declare class Handle_Geom_ElementarySurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_ElementarySurface): void;
  get(): Geom_ElementarySurface;
  delete(): void;
}

  export declare class Handle_Geom_ElementarySurface_1 extends Handle_Geom_ElementarySurface {
    constructor();
  }

  export declare class Handle_Geom_ElementarySurface_2 extends Handle_Geom_ElementarySurface {
    constructor(thePtr: Geom_ElementarySurface);
  }

  export declare class Handle_Geom_ElementarySurface_3 extends Handle_Geom_ElementarySurface {
    constructor(theHandle: Handle_Geom_ElementarySurface);
  }

  export declare class Handle_Geom_ElementarySurface_4 extends Handle_Geom_ElementarySurface {
    constructor(theHandle: Handle_Geom_ElementarySurface);
  }

export declare class Handle_Font_SystemFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Font_SystemFont): void;
  get(): Font_SystemFont;
  delete(): void;
}

  export declare class Handle_Font_SystemFont_1 extends Handle_Font_SystemFont {
    constructor();
  }

  export declare class Handle_Font_SystemFont_2 extends Handle_Font_SystemFont {
    constructor(thePtr: Font_SystemFont);
  }

  export declare class Handle_Font_SystemFont_3 extends Handle_Font_SystemFont {
    constructor(theHandle: Handle_Font_SystemFont);
  }

  export declare class Handle_Font_SystemFont_4 extends Handle_Font_SystemFont {
    constructor(theHandle: Handle_Font_SystemFont);
  }

export declare class Handle_ShapeCustom_RestrictionParameters {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeCustom_RestrictionParameters): void;
  get(): ShapeCustom_RestrictionParameters;
  delete(): void;
}

  export declare class Handle_ShapeCustom_RestrictionParameters_1 extends Handle_ShapeCustom_RestrictionParameters {
    constructor();
  }

  export declare class Handle_ShapeCustom_RestrictionParameters_2 extends Handle_ShapeCustom_RestrictionParameters {
    constructor(thePtr: ShapeCustom_RestrictionParameters);
  }

  export declare class Handle_ShapeCustom_RestrictionParameters_3 extends Handle_ShapeCustom_RestrictionParameters {
    constructor(theHandle: Handle_ShapeCustom_RestrictionParameters);
  }

  export declare class Handle_ShapeCustom_RestrictionParameters_4 extends Handle_ShapeCustom_RestrictionParameters {
    constructor(theHandle: Handle_ShapeCustom_RestrictionParameters);
  }

export declare class Handle_GeomFill_Frenet {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_Frenet): void;
  get(): GeomFill_Frenet;
  delete(): void;
}

  export declare class Handle_GeomFill_Frenet_1 extends Handle_GeomFill_Frenet {
    constructor();
  }

  export declare class Handle_GeomFill_Frenet_2 extends Handle_GeomFill_Frenet {
    constructor(thePtr: GeomFill_Frenet);
  }

  export declare class Handle_GeomFill_Frenet_3 extends Handle_GeomFill_Frenet {
    constructor(theHandle: Handle_GeomFill_Frenet);
  }

  export declare class Handle_GeomFill_Frenet_4 extends Handle_GeomFill_Frenet {
    constructor(theHandle: Handle_GeomFill_Frenet);
  }

export declare class Handle_Geom2d_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Curve): void;
  get(): Geom2d_Curve;
  delete(): void;
}

  export declare class Handle_Geom2d_Curve_1 extends Handle_Geom2d_Curve {
    constructor();
  }

  export declare class Handle_Geom2d_Curve_2 extends Handle_Geom2d_Curve {
    constructor(thePtr: Geom2d_Curve);
  }

  export declare class Handle_Geom2d_Curve_3 extends Handle_Geom2d_Curve {
    constructor(theHandle: Handle_Geom2d_Curve);
  }

  export declare class Handle_Geom2d_Curve_4 extends Handle_Geom2d_Curve {
    constructor(theHandle: Handle_Geom2d_Curve);
  }

export declare class Handle_ShapeFix_Root {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Root): void;
  get(): ShapeFix_Root;
  delete(): void;
}

  export declare class Handle_ShapeFix_Root_1 extends Handle_ShapeFix_Root {
    constructor();
  }

  export declare class Handle_ShapeFix_Root_2 extends Handle_ShapeFix_Root {
    constructor(thePtr: ShapeFix_Root);
  }

  export declare class Handle_ShapeFix_Root_3 extends Handle_ShapeFix_Root {
    constructor(theHandle: Handle_ShapeFix_Root);
  }

  export declare class Handle_ShapeFix_Root_4 extends Handle_ShapeFix_Root {
    constructor(theHandle: Handle_ShapeFix_Root);
  }

export declare class Handle_ShapeFix_Wireframe {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Wireframe): void;
  get(): ShapeFix_Wireframe;
  delete(): void;
}

  export declare class Handle_ShapeFix_Wireframe_1 extends Handle_ShapeFix_Wireframe {
    constructor();
  }

  export declare class Handle_ShapeFix_Wireframe_2 extends Handle_ShapeFix_Wireframe {
    constructor(thePtr: ShapeFix_Wireframe);
  }

  export declare class Handle_ShapeFix_Wireframe_3 extends Handle_ShapeFix_Wireframe {
    constructor(theHandle: Handle_ShapeFix_Wireframe);
  }

  export declare class Handle_ShapeFix_Wireframe_4 extends Handle_ShapeFix_Wireframe {
    constructor(theHandle: Handle_ShapeFix_Wireframe);
  }

export declare class Handle_ShapeFix_Face {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Face): void;
  get(): ShapeFix_Face;
  delete(): void;
}

  export declare class Handle_ShapeFix_Face_1 extends Handle_ShapeFix_Face {
    constructor();
  }

  export declare class Handle_ShapeFix_Face_2 extends Handle_ShapeFix_Face {
    constructor(thePtr: ShapeFix_Face);
  }

  export declare class Handle_ShapeFix_Face_3 extends Handle_ShapeFix_Face {
    constructor(theHandle: Handle_ShapeFix_Face);
  }

  export declare class Handle_ShapeFix_Face_4 extends Handle_ShapeFix_Face {
    constructor(theHandle: Handle_ShapeFix_Face);
  }

export declare class Handle_CDM_Document {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: CDM_Document): void;
  get(): CDM_Document;
  delete(): void;
}

  export declare class Handle_CDM_Document_1 extends Handle_CDM_Document {
    constructor();
  }

  export declare class Handle_CDM_Document_2 extends Handle_CDM_Document {
    constructor(thePtr: CDM_Document);
  }

  export declare class Handle_CDM_Document_3 extends Handle_CDM_Document {
    constructor(theHandle: Handle_CDM_Document);
  }

  export declare class Handle_CDM_Document_4 extends Handle_CDM_Document {
    constructor(theHandle: Handle_CDM_Document);
  }

export declare class Handle_TDocStd_Document {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_Document): void;
  get(): TDocStd_Document;
  delete(): void;
}

  export declare class Handle_TDocStd_Document_1 extends Handle_TDocStd_Document {
    constructor();
  }

  export declare class Handle_TDocStd_Document_2 extends Handle_TDocStd_Document {
    constructor(thePtr: TDocStd_Document);
  }

  export declare class Handle_TDocStd_Document_3 extends Handle_TDocStd_Document {
    constructor(theHandle: Handle_TDocStd_Document);
  }

  export declare class Handle_TDocStd_Document_4 extends Handle_TDocStd_Document {
    constructor(theHandle: Handle_TDocStd_Document);
  }

export declare class Handle_GeomAdaptor_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomAdaptor_Curve): void;
  get(): GeomAdaptor_Curve;
  delete(): void;
}

  export declare class Handle_GeomAdaptor_Curve_1 extends Handle_GeomAdaptor_Curve {
    constructor();
  }

  export declare class Handle_GeomAdaptor_Curve_2 extends Handle_GeomAdaptor_Curve {
    constructor(thePtr: GeomAdaptor_Curve);
  }

  export declare class Handle_GeomAdaptor_Curve_3 extends Handle_GeomAdaptor_Curve {
    constructor(theHandle: Handle_GeomAdaptor_Curve);
  }

  export declare class Handle_GeomAdaptor_Curve_4 extends Handle_GeomAdaptor_Curve {
    constructor(theHandle: Handle_GeomAdaptor_Curve);
  }

export declare class Handle_TCollection_HAsciiString {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TCollection_HAsciiString): void;
  get(): TCollection_HAsciiString;
  delete(): void;
}

  export declare class Handle_TCollection_HAsciiString_1 extends Handle_TCollection_HAsciiString {
    constructor();
  }

  export declare class Handle_TCollection_HAsciiString_2 extends Handle_TCollection_HAsciiString {
    constructor(thePtr: TCollection_HAsciiString);
  }

  export declare class Handle_TCollection_HAsciiString_3 extends Handle_TCollection_HAsciiString {
    constructor(theHandle: Handle_TCollection_HAsciiString);
  }

  export declare class Handle_TCollection_HAsciiString_4 extends Handle_TCollection_HAsciiString {
    constructor(theHandle: Handle_TCollection_HAsciiString);
  }

export declare class Handle_Geom_BoundedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BoundedCurve): void;
  get(): Geom_BoundedCurve;
  delete(): void;
}

  export declare class Handle_Geom_BoundedCurve_1 extends Handle_Geom_BoundedCurve {
    constructor();
  }

  export declare class Handle_Geom_BoundedCurve_2 extends Handle_Geom_BoundedCurve {
    constructor(thePtr: Geom_BoundedCurve);
  }

  export declare class Handle_Geom_BoundedCurve_3 extends Handle_Geom_BoundedCurve {
    constructor(theHandle: Handle_Geom_BoundedCurve);
  }

  export declare class Handle_Geom_BoundedCurve_4 extends Handle_Geom_BoundedCurve {
    constructor(theHandle: Handle_Geom_BoundedCurve);
  }

export declare class Handle_Interface_Static {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Interface_Static): void;
  get(): Interface_Static;
  delete(): void;
}

  export declare class Handle_Interface_Static_1 extends Handle_Interface_Static {
    constructor();
  }

  export declare class Handle_Interface_Static_2 extends Handle_Interface_Static {
    constructor(thePtr: Interface_Static);
  }

  export declare class Handle_Interface_Static_3 extends Handle_Interface_Static {
    constructor(theHandle: Handle_Interface_Static);
  }

  export declare class Handle_Interface_Static_4 extends Handle_Interface_Static {
    constructor(theHandle: Handle_Interface_Static);
  }

export declare class Handle_Geom2d_Circle {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Circle): void;
  get(): Geom2d_Circle;
  delete(): void;
}

  export declare class Handle_Geom2d_Circle_1 extends Handle_Geom2d_Circle {
    constructor();
  }

  export declare class Handle_Geom2d_Circle_2 extends Handle_Geom2d_Circle {
    constructor(thePtr: Geom2d_Circle);
  }

  export declare class Handle_Geom2d_Circle_3 extends Handle_Geom2d_Circle {
    constructor(theHandle: Handle_Geom2d_Circle);
  }

  export declare class Handle_Geom2d_Circle_4 extends Handle_Geom2d_Circle {
    constructor(theHandle: Handle_Geom2d_Circle);
  }

export declare class Handle_BRepMesh_IncrementalMesh {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepMesh_IncrementalMesh): void;
  get(): BRepMesh_IncrementalMesh;
  delete(): void;
}

  export declare class Handle_BRepMesh_IncrementalMesh_1 extends Handle_BRepMesh_IncrementalMesh {
    constructor();
  }

  export declare class Handle_BRepMesh_IncrementalMesh_2 extends Handle_BRepMesh_IncrementalMesh {
    constructor(thePtr: BRepMesh_IncrementalMesh);
  }

  export declare class Handle_BRepMesh_IncrementalMesh_3 extends Handle_BRepMesh_IncrementalMesh {
    constructor(theHandle: Handle_BRepMesh_IncrementalMesh);
  }

  export declare class Handle_BRepMesh_IncrementalMesh_4 extends Handle_BRepMesh_IncrementalMesh {
    constructor(theHandle: Handle_BRepMesh_IncrementalMesh);
  }

export declare class Handle_TopoDS_TEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TEdge): void;
  get(): TopoDS_TEdge;
  delete(): void;
}

  export declare class Handle_TopoDS_TEdge_1 extends Handle_TopoDS_TEdge {
    constructor();
  }

  export declare class Handle_TopoDS_TEdge_2 extends Handle_TopoDS_TEdge {
    constructor(thePtr: TopoDS_TEdge);
  }

  export declare class Handle_TopoDS_TEdge_3 extends Handle_TopoDS_TEdge {
    constructor(theHandle: Handle_TopoDS_TEdge);
  }

  export declare class Handle_TopoDS_TEdge_4 extends Handle_TopoDS_TEdge {
    constructor(theHandle: Handle_TopoDS_TEdge);
  }

export declare class Handle_Font_FontMgr {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Font_FontMgr): void;
  get(): Font_FontMgr;
  delete(): void;
}

  export declare class Handle_Font_FontMgr_1 extends Handle_Font_FontMgr {
    constructor();
  }

  export declare class Handle_Font_FontMgr_2 extends Handle_Font_FontMgr {
    constructor(thePtr: Font_FontMgr);
  }

  export declare class Handle_Font_FontMgr_3 extends Handle_Font_FontMgr {
    constructor(theHandle: Handle_Font_FontMgr);
  }

  export declare class Handle_Font_FontMgr_4 extends Handle_Font_FontMgr {
    constructor(theHandle: Handle_Font_FontMgr);
  }

export declare class Handle_BRepAdaptor_CompCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepAdaptor_CompCurve): void;
  get(): BRepAdaptor_CompCurve;
  delete(): void;
}

  export declare class Handle_BRepAdaptor_CompCurve_1 extends Handle_BRepAdaptor_CompCurve {
    constructor();
  }

  export declare class Handle_BRepAdaptor_CompCurve_2 extends Handle_BRepAdaptor_CompCurve {
    constructor(thePtr: BRepAdaptor_CompCurve);
  }

  export declare class Handle_BRepAdaptor_CompCurve_3 extends Handle_BRepAdaptor_CompCurve {
    constructor(theHandle: Handle_BRepAdaptor_CompCurve);
  }

  export declare class Handle_BRepAdaptor_CompCurve_4 extends Handle_BRepAdaptor_CompCurve {
    constructor(theHandle: Handle_BRepAdaptor_CompCurve);
  }

export declare class Handle_TDataStd_GenericEmpty {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDataStd_GenericEmpty): void;
  get(): TDataStd_GenericEmpty;
  delete(): void;
}

  export declare class Handle_TDataStd_GenericEmpty_1 extends Handle_TDataStd_GenericEmpty {
    constructor();
  }

  export declare class Handle_TDataStd_GenericEmpty_2 extends Handle_TDataStd_GenericEmpty {
    constructor(thePtr: TDataStd_GenericEmpty);
  }

  export declare class Handle_TDataStd_GenericEmpty_3 extends Handle_TDataStd_GenericEmpty {
    constructor(theHandle: Handle_TDataStd_GenericEmpty);
  }

  export declare class Handle_TDataStd_GenericEmpty_4 extends Handle_TDataStd_GenericEmpty {
    constructor(theHandle: Handle_TDataStd_GenericEmpty);
  }

export declare class Handle_BRepMesh_DiscretRoot {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepMesh_DiscretRoot): void;
  get(): BRepMesh_DiscretRoot;
  delete(): void;
}

  export declare class Handle_BRepMesh_DiscretRoot_1 extends Handle_BRepMesh_DiscretRoot {
    constructor();
  }

  export declare class Handle_BRepMesh_DiscretRoot_2 extends Handle_BRepMesh_DiscretRoot {
    constructor(thePtr: BRepMesh_DiscretRoot);
  }

  export declare class Handle_BRepMesh_DiscretRoot_3 extends Handle_BRepMesh_DiscretRoot {
    constructor(theHandle: Handle_BRepMesh_DiscretRoot);
  }

  export declare class Handle_BRepMesh_DiscretRoot_4 extends Handle_BRepMesh_DiscretRoot {
    constructor(theHandle: Handle_BRepMesh_DiscretRoot);
  }

export declare class Handle_BRepBuilderAPI_Sewing {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepBuilderAPI_Sewing): void;
  get(): BRepBuilderAPI_Sewing;
  delete(): void;
}

  export declare class Handle_BRepBuilderAPI_Sewing_1 extends Handle_BRepBuilderAPI_Sewing {
    constructor();
  }

  export declare class Handle_BRepBuilderAPI_Sewing_2 extends Handle_BRepBuilderAPI_Sewing {
    constructor(thePtr: BRepBuilderAPI_Sewing);
  }

  export declare class Handle_BRepBuilderAPI_Sewing_3 extends Handle_BRepBuilderAPI_Sewing {
    constructor(theHandle: Handle_BRepBuilderAPI_Sewing);
  }

  export declare class Handle_BRepBuilderAPI_Sewing_4 extends Handle_BRepBuilderAPI_Sewing {
    constructor(theHandle: Handle_BRepBuilderAPI_Sewing);
  }

export declare class Handle_Geom_BezierSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_BezierSurface): void;
  get(): Geom_BezierSurface;
  delete(): void;
}

  export declare class Handle_Geom_BezierSurface_1 extends Handle_Geom_BezierSurface {
    constructor();
  }

  export declare class Handle_Geom_BezierSurface_2 extends Handle_Geom_BezierSurface {
    constructor(thePtr: Geom_BezierSurface);
  }

  export declare class Handle_Geom_BezierSurface_3 extends Handle_Geom_BezierSurface {
    constructor(theHandle: Handle_Geom_BezierSurface);
  }

  export declare class Handle_Geom_BezierSurface_4 extends Handle_Geom_BezierSurface {
    constructor(theHandle: Handle_Geom_BezierSurface);
  }

export declare class Handle_Geom2d_CartesianPoint {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_CartesianPoint): void;
  get(): Geom2d_CartesianPoint;
  delete(): void;
}

  export declare class Handle_Geom2d_CartesianPoint_1 extends Handle_Geom2d_CartesianPoint {
    constructor();
  }

  export declare class Handle_Geom2d_CartesianPoint_2 extends Handle_Geom2d_CartesianPoint {
    constructor(thePtr: Geom2d_CartesianPoint);
  }

  export declare class Handle_Geom2d_CartesianPoint_3 extends Handle_Geom2d_CartesianPoint {
    constructor(theHandle: Handle_Geom2d_CartesianPoint);
  }

  export declare class Handle_Geom2d_CartesianPoint_4 extends Handle_Geom2d_CartesianPoint {
    constructor(theHandle: Handle_Geom2d_CartesianPoint);
  }

export declare class Handle_Adaptor2d_Curve2d {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor2d_Curve2d): void;
  get(): Adaptor2d_Curve2d;
  delete(): void;
}

  export declare class Handle_Adaptor2d_Curve2d_1 extends Handle_Adaptor2d_Curve2d {
    constructor();
  }

  export declare class Handle_Adaptor2d_Curve2d_2 extends Handle_Adaptor2d_Curve2d {
    constructor(thePtr: Adaptor2d_Curve2d);
  }

  export declare class Handle_Adaptor2d_Curve2d_3 extends Handle_Adaptor2d_Curve2d {
    constructor(theHandle: Handle_Adaptor2d_Curve2d);
  }

  export declare class Handle_Adaptor2d_Curve2d_4 extends Handle_Adaptor2d_Curve2d {
    constructor(theHandle: Handle_Adaptor2d_Curve2d);
  }

export declare class Handle_Geom_Line {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Line): void;
  get(): Geom_Line;
  delete(): void;
}

  export declare class Handle_Geom_Line_1 extends Handle_Geom_Line {
    constructor();
  }

  export declare class Handle_Geom_Line_2 extends Handle_Geom_Line {
    constructor(thePtr: Geom_Line);
  }

  export declare class Handle_Geom_Line_3 extends Handle_Geom_Line {
    constructor(theHandle: Handle_Geom_Line);
  }

  export declare class Handle_Geom_Line_4 extends Handle_Geom_Line {
    constructor(theHandle: Handle_Geom_Line);
  }

export declare class Handle_BRepAdaptor_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepAdaptor_Surface): void;
  get(): BRepAdaptor_Surface;
  delete(): void;
}

  export declare class Handle_BRepAdaptor_Surface_1 extends Handle_BRepAdaptor_Surface {
    constructor();
  }

  export declare class Handle_BRepAdaptor_Surface_2 extends Handle_BRepAdaptor_Surface {
    constructor(thePtr: BRepAdaptor_Surface);
  }

  export declare class Handle_BRepAdaptor_Surface_3 extends Handle_BRepAdaptor_Surface {
    constructor(theHandle: Handle_BRepAdaptor_Surface);
  }

  export declare class Handle_BRepAdaptor_Surface_4 extends Handle_BRepAdaptor_Surface {
    constructor(theHandle: Handle_BRepAdaptor_Surface);
  }

export declare class Handle_Geom_Geometry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Geometry): void;
  get(): Geom_Geometry;
  delete(): void;
}

  export declare class Handle_Geom_Geometry_1 extends Handle_Geom_Geometry {
    constructor();
  }

  export declare class Handle_Geom_Geometry_2 extends Handle_Geom_Geometry {
    constructor(thePtr: Geom_Geometry);
  }

  export declare class Handle_Geom_Geometry_3 extends Handle_Geom_Geometry {
    constructor(theHandle: Handle_Geom_Geometry);
  }

  export declare class Handle_Geom_Geometry_4 extends Handle_Geom_Geometry {
    constructor(theHandle: Handle_Geom_Geometry);
  }

export declare class Handle_RWGltf_CafWriter {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: RWGltf_CafWriter): void;
  get(): RWGltf_CafWriter;
  delete(): void;
}

  export declare class Handle_RWGltf_CafWriter_1 extends Handle_RWGltf_CafWriter {
    constructor();
  }

  export declare class Handle_RWGltf_CafWriter_2 extends Handle_RWGltf_CafWriter {
    constructor(thePtr: RWGltf_CafWriter);
  }

  export declare class Handle_RWGltf_CafWriter_3 extends Handle_RWGltf_CafWriter {
    constructor(theHandle: Handle_RWGltf_CafWriter);
  }

  export declare class Handle_RWGltf_CafWriter_4 extends Handle_RWGltf_CafWriter {
    constructor(theHandle: Handle_RWGltf_CafWriter);
  }

export declare class Handle_ShapeFix_Solid {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Solid): void;
  get(): ShapeFix_Solid;
  delete(): void;
}

  export declare class Handle_ShapeFix_Solid_1 extends Handle_ShapeFix_Solid {
    constructor();
  }

  export declare class Handle_ShapeFix_Solid_2 extends Handle_ShapeFix_Solid {
    constructor(thePtr: ShapeFix_Solid);
  }

  export declare class Handle_ShapeFix_Solid_3 extends Handle_ShapeFix_Solid {
    constructor(theHandle: Handle_ShapeFix_Solid);
  }

  export declare class Handle_ShapeFix_Solid_4 extends Handle_ShapeFix_Solid {
    constructor(theHandle: Handle_ShapeFix_Solid);
  }

export declare class Handle_TopoDS_TShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TopoDS_TShape): void;
  get(): TopoDS_TShape;
  delete(): void;
}

  export declare class Handle_TopoDS_TShape_1 extends Handle_TopoDS_TShape {
    constructor();
  }

  export declare class Handle_TopoDS_TShape_2 extends Handle_TopoDS_TShape {
    constructor(thePtr: TopoDS_TShape);
  }

  export declare class Handle_TopoDS_TShape_3 extends Handle_TopoDS_TShape {
    constructor(theHandle: Handle_TopoDS_TShape);
  }

  export declare class Handle_TopoDS_TShape_4 extends Handle_TopoDS_TShape {
    constructor(theHandle: Handle_TopoDS_TShape);
  }

export declare class Handle_GeomFill_TrihedronLaw {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomFill_TrihedronLaw): void;
  get(): GeomFill_TrihedronLaw;
  delete(): void;
}

  export declare class Handle_GeomFill_TrihedronLaw_1 extends Handle_GeomFill_TrihedronLaw {
    constructor();
  }

  export declare class Handle_GeomFill_TrihedronLaw_2 extends Handle_GeomFill_TrihedronLaw {
    constructor(thePtr: GeomFill_TrihedronLaw);
  }

  export declare class Handle_GeomFill_TrihedronLaw_3 extends Handle_GeomFill_TrihedronLaw {
    constructor(theHandle: Handle_GeomFill_TrihedronLaw);
  }

  export declare class Handle_GeomFill_TrihedronLaw_4 extends Handle_GeomFill_TrihedronLaw {
    constructor(theHandle: Handle_GeomFill_TrihedronLaw);
  }

export declare class Handle_TDocStd_Application {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDocStd_Application): void;
  get(): TDocStd_Application;
  delete(): void;
}

  export declare class Handle_TDocStd_Application_1 extends Handle_TDocStd_Application {
    constructor();
  }

  export declare class Handle_TDocStd_Application_2 extends Handle_TDocStd_Application {
    constructor(thePtr: TDocStd_Application);
  }

  export declare class Handle_TDocStd_Application_3 extends Handle_TDocStd_Application {
    constructor(theHandle: Handle_TDocStd_Application);
  }

  export declare class Handle_TDocStd_Application_4 extends Handle_TDocStd_Application {
    constructor(theHandle: Handle_TDocStd_Application);
  }

export declare class Handle_Geom2d_BoundedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_BoundedCurve): void;
  get(): Geom2d_BoundedCurve;
  delete(): void;
}

  export declare class Handle_Geom2d_BoundedCurve_1 extends Handle_Geom2d_BoundedCurve {
    constructor();
  }

  export declare class Handle_Geom2d_BoundedCurve_2 extends Handle_Geom2d_BoundedCurve {
    constructor(thePtr: Geom2d_BoundedCurve);
  }

  export declare class Handle_Geom2d_BoundedCurve_3 extends Handle_Geom2d_BoundedCurve {
    constructor(theHandle: Handle_Geom2d_BoundedCurve);
  }

  export declare class Handle_Geom2d_BoundedCurve_4 extends Handle_Geom2d_BoundedCurve {
    constructor(theHandle: Handle_Geom2d_BoundedCurve);
  }

export declare class Handle_HLRBRep_InternalAlgo {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRBRep_InternalAlgo): void;
  get(): HLRBRep_InternalAlgo;
  delete(): void;
}

  export declare class Handle_HLRBRep_InternalAlgo_1 extends Handle_HLRBRep_InternalAlgo {
    constructor();
  }

  export declare class Handle_HLRBRep_InternalAlgo_2 extends Handle_HLRBRep_InternalAlgo {
    constructor(thePtr: HLRBRep_InternalAlgo);
  }

  export declare class Handle_HLRBRep_InternalAlgo_3 extends Handle_HLRBRep_InternalAlgo {
    constructor(theHandle: Handle_HLRBRep_InternalAlgo);
  }

  export declare class Handle_HLRBRep_InternalAlgo_4 extends Handle_HLRBRep_InternalAlgo {
    constructor(theHandle: Handle_HLRBRep_InternalAlgo);
  }

export declare class Handle_XSControl_Controller {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_Controller): void;
  get(): XSControl_Controller;
  delete(): void;
}

  export declare class Handle_XSControl_Controller_1 extends Handle_XSControl_Controller {
    constructor();
  }

  export declare class Handle_XSControl_Controller_2 extends Handle_XSControl_Controller {
    constructor(thePtr: XSControl_Controller);
  }

  export declare class Handle_XSControl_Controller_3 extends Handle_XSControl_Controller {
    constructor(theHandle: Handle_XSControl_Controller);
  }

  export declare class Handle_XSControl_Controller_4 extends Handle_XSControl_Controller {
    constructor(theHandle: Handle_XSControl_Controller);
  }

export declare class Handle_GeomAdaptor_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomAdaptor_Surface): void;
  get(): GeomAdaptor_Surface;
  delete(): void;
}

  export declare class Handle_GeomAdaptor_Surface_1 extends Handle_GeomAdaptor_Surface {
    constructor();
  }

  export declare class Handle_GeomAdaptor_Surface_2 extends Handle_GeomAdaptor_Surface {
    constructor(thePtr: GeomAdaptor_Surface);
  }

  export declare class Handle_GeomAdaptor_Surface_3 extends Handle_GeomAdaptor_Surface {
    constructor(theHandle: Handle_GeomAdaptor_Surface);
  }

  export declare class Handle_GeomAdaptor_Surface_4 extends Handle_GeomAdaptor_Surface {
    constructor(theHandle: Handle_GeomAdaptor_Surface);
  }

export declare class Handle_STEPControl_Controller {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: STEPControl_Controller): void;
  get(): STEPControl_Controller;
  delete(): void;
}

  export declare class Handle_STEPControl_Controller_1 extends Handle_STEPControl_Controller {
    constructor();
  }

  export declare class Handle_STEPControl_Controller_2 extends Handle_STEPControl_Controller {
    constructor(thePtr: STEPControl_Controller);
  }

  export declare class Handle_STEPControl_Controller_3 extends Handle_STEPControl_Controller {
    constructor(theHandle: Handle_STEPControl_Controller);
  }

  export declare class Handle_STEPControl_Controller_4 extends Handle_STEPControl_Controller {
    constructor(theHandle: Handle_STEPControl_Controller);
  }

export declare class Handle_Geom2d_TrimmedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_TrimmedCurve): void;
  get(): Geom2d_TrimmedCurve;
  delete(): void;
}

  export declare class Handle_Geom2d_TrimmedCurve_1 extends Handle_Geom2d_TrimmedCurve {
    constructor();
  }

  export declare class Handle_Geom2d_TrimmedCurve_2 extends Handle_Geom2d_TrimmedCurve {
    constructor(thePtr: Geom2d_TrimmedCurve);
  }

  export declare class Handle_Geom2d_TrimmedCurve_3 extends Handle_Geom2d_TrimmedCurve {
    constructor(theHandle: Handle_Geom2d_TrimmedCurve);
  }

  export declare class Handle_Geom2d_TrimmedCurve_4 extends Handle_Geom2d_TrimmedCurve {
    constructor(theHandle: Handle_Geom2d_TrimmedCurve);
  }

export declare class Handle_BRepTools_ReShape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepTools_ReShape): void;
  get(): BRepTools_ReShape;
  delete(): void;
}

  export declare class Handle_BRepTools_ReShape_1 extends Handle_BRepTools_ReShape {
    constructor();
  }

  export declare class Handle_BRepTools_ReShape_2 extends Handle_BRepTools_ReShape {
    constructor(thePtr: BRepTools_ReShape);
  }

  export declare class Handle_BRepTools_ReShape_3 extends Handle_BRepTools_ReShape {
    constructor(theHandle: Handle_BRepTools_ReShape);
  }

  export declare class Handle_BRepTools_ReShape_4 extends Handle_BRepTools_ReShape {
    constructor(theHandle: Handle_BRepTools_ReShape);
  }

export declare class Handle_Transfer_TransientProcess {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Transfer_TransientProcess): void;
  get(): Transfer_TransientProcess;
  delete(): void;
}

  export declare class Handle_Transfer_TransientProcess_1 extends Handle_Transfer_TransientProcess {
    constructor();
  }

  export declare class Handle_Transfer_TransientProcess_2 extends Handle_Transfer_TransientProcess {
    constructor(thePtr: Transfer_TransientProcess);
  }

  export declare class Handle_Transfer_TransientProcess_3 extends Handle_Transfer_TransientProcess {
    constructor(theHandle: Handle_Transfer_TransientProcess);
  }

  export declare class Handle_Transfer_TransientProcess_4 extends Handle_Transfer_TransientProcess {
    constructor(theHandle: Handle_Transfer_TransientProcess);
  }

export declare class Handle_Geom2d_Conic {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Conic): void;
  get(): Geom2d_Conic;
  delete(): void;
}

  export declare class Handle_Geom2d_Conic_1 extends Handle_Geom2d_Conic {
    constructor();
  }

  export declare class Handle_Geom2d_Conic_2 extends Handle_Geom2d_Conic {
    constructor(thePtr: Geom2d_Conic);
  }

  export declare class Handle_Geom2d_Conic_3 extends Handle_Geom2d_Conic {
    constructor(theHandle: Handle_Geom2d_Conic);
  }

  export declare class Handle_Geom2d_Conic_4 extends Handle_Geom2d_Conic {
    constructor(theHandle: Handle_Geom2d_Conic);
  }

export declare class Handle_Adaptor3d_Surface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor3d_Surface): void;
  get(): Adaptor3d_Surface;
  delete(): void;
}

  export declare class Handle_Adaptor3d_Surface_1 extends Handle_Adaptor3d_Surface {
    constructor();
  }

  export declare class Handle_Adaptor3d_Surface_2 extends Handle_Adaptor3d_Surface {
    constructor(thePtr: Adaptor3d_Surface);
  }

  export declare class Handle_Adaptor3d_Surface_3 extends Handle_Adaptor3d_Surface {
    constructor(theHandle: Handle_Adaptor3d_Surface);
  }

  export declare class Handle_Adaptor3d_Surface_4 extends Handle_Adaptor3d_Surface {
    constructor(theHandle: Handle_Adaptor3d_Surface);
  }

export declare class Handle_IGESControl_Controller {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IGESControl_Controller): void;
  get(): IGESControl_Controller;
  delete(): void;
}

  export declare class Handle_IGESControl_Controller_1 extends Handle_IGESControl_Controller {
    constructor();
  }

  export declare class Handle_IGESControl_Controller_2 extends Handle_IGESControl_Controller {
    constructor(thePtr: IGESControl_Controller);
  }

  export declare class Handle_IGESControl_Controller_3 extends Handle_IGESControl_Controller {
    constructor(theHandle: Handle_IGESControl_Controller);
  }

  export declare class Handle_IGESControl_Controller_4 extends Handle_IGESControl_Controller {
    constructor(theHandle: Handle_IGESControl_Controller);
  }

export declare class Handle_ShapeFix_Shape {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Shape): void;
  get(): ShapeFix_Shape;
  delete(): void;
}

  export declare class Handle_ShapeFix_Shape_1 extends Handle_ShapeFix_Shape {
    constructor();
  }

  export declare class Handle_ShapeFix_Shape_2 extends Handle_ShapeFix_Shape {
    constructor(thePtr: ShapeFix_Shape);
  }

  export declare class Handle_ShapeFix_Shape_3 extends Handle_ShapeFix_Shape {
    constructor(theHandle: Handle_ShapeFix_Shape);
  }

  export declare class Handle_ShapeFix_Shape_4 extends Handle_ShapeFix_Shape {
    constructor(theHandle: Handle_ShapeFix_Shape);
  }

export declare class Handle_Geom_ConicalSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_ConicalSurface): void;
  get(): Geom_ConicalSurface;
  delete(): void;
}

  export declare class Handle_Geom_ConicalSurface_1 extends Handle_Geom_ConicalSurface {
    constructor();
  }

  export declare class Handle_Geom_ConicalSurface_2 extends Handle_Geom_ConicalSurface {
    constructor(thePtr: Geom_ConicalSurface);
  }

  export declare class Handle_Geom_ConicalSurface_3 extends Handle_Geom_ConicalSurface {
    constructor(theHandle: Handle_Geom_ConicalSurface);
  }

  export declare class Handle_Geom_ConicalSurface_4 extends Handle_Geom_ConicalSurface {
    constructor(theHandle: Handle_Geom_ConicalSurface);
  }

export declare class Handle_XCAFApp_Application {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XCAFApp_Application): void;
  get(): XCAFApp_Application;
  delete(): void;
}

  export declare class Handle_XCAFApp_Application_1 extends Handle_XCAFApp_Application {
    constructor();
  }

  export declare class Handle_XCAFApp_Application_2 extends Handle_XCAFApp_Application {
    constructor(thePtr: XCAFApp_Application);
  }

  export declare class Handle_XCAFApp_Application_3 extends Handle_XCAFApp_Application {
    constructor(theHandle: Handle_XCAFApp_Application);
  }

  export declare class Handle_XCAFApp_Application_4 extends Handle_XCAFApp_Application {
    constructor(theHandle: Handle_XCAFApp_Application);
  }

export declare class Handle_IFSelect_WorkSession {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: IFSelect_WorkSession): void;
  get(): IFSelect_WorkSession;
  delete(): void;
}

  export declare class Handle_IFSelect_WorkSession_1 extends Handle_IFSelect_WorkSession {
    constructor();
  }

  export declare class Handle_IFSelect_WorkSession_2 extends Handle_IFSelect_WorkSession {
    constructor(thePtr: IFSelect_WorkSession);
  }

  export declare class Handle_IFSelect_WorkSession_3 extends Handle_IFSelect_WorkSession {
    constructor(theHandle: Handle_IFSelect_WorkSession);
  }

  export declare class Handle_IFSelect_WorkSession_4 extends Handle_IFSelect_WorkSession {
    constructor(theHandle: Handle_IFSelect_WorkSession);
  }

export declare class Handle_Geom_Plane {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_Plane): void;
  get(): Geom_Plane;
  delete(): void;
}

  export declare class Handle_Geom_Plane_1 extends Handle_Geom_Plane {
    constructor();
  }

  export declare class Handle_Geom_Plane_2 extends Handle_Geom_Plane {
    constructor(thePtr: Geom_Plane);
  }

  export declare class Handle_Geom_Plane_3 extends Handle_Geom_Plane {
    constructor(theHandle: Handle_Geom_Plane);
  }

  export declare class Handle_Geom_Plane_4 extends Handle_Geom_Plane {
    constructor(theHandle: Handle_Geom_Plane);
  }

export declare class Handle_GeomAdaptor_TransformedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomAdaptor_TransformedSurface): void;
  get(): GeomAdaptor_TransformedSurface;
  delete(): void;
}

  export declare class Handle_GeomAdaptor_TransformedSurface_1 extends Handle_GeomAdaptor_TransformedSurface {
    constructor();
  }

  export declare class Handle_GeomAdaptor_TransformedSurface_2 extends Handle_GeomAdaptor_TransformedSurface {
    constructor(thePtr: GeomAdaptor_TransformedSurface);
  }

  export declare class Handle_GeomAdaptor_TransformedSurface_3 extends Handle_GeomAdaptor_TransformedSurface {
    constructor(theHandle: Handle_GeomAdaptor_TransformedSurface);
  }

  export declare class Handle_GeomAdaptor_TransformedSurface_4 extends Handle_GeomAdaptor_TransformedSurface {
    constructor(theHandle: Handle_GeomAdaptor_TransformedSurface);
  }

export declare class Handle_XSControl_WorkSession {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: XSControl_WorkSession): void;
  get(): XSControl_WorkSession;
  delete(): void;
}

  export declare class Handle_XSControl_WorkSession_1 extends Handle_XSControl_WorkSession {
    constructor();
  }

  export declare class Handle_XSControl_WorkSession_2 extends Handle_XSControl_WorkSession {
    constructor(thePtr: XSControl_WorkSession);
  }

  export declare class Handle_XSControl_WorkSession_3 extends Handle_XSControl_WorkSession {
    constructor(theHandle: Handle_XSControl_WorkSession);
  }

  export declare class Handle_XSControl_WorkSession_4 extends Handle_XSControl_WorkSession {
    constructor(theHandle: Handle_XSControl_WorkSession);
  }

export declare class Handle_ShapeFix_Wire {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeFix_Wire): void;
  get(): ShapeFix_Wire;
  delete(): void;
}

  export declare class Handle_ShapeFix_Wire_1 extends Handle_ShapeFix_Wire {
    constructor();
  }

  export declare class Handle_ShapeFix_Wire_2 extends Handle_ShapeFix_Wire {
    constructor(thePtr: ShapeFix_Wire);
  }

  export declare class Handle_ShapeFix_Wire_3 extends Handle_ShapeFix_Wire {
    constructor(theHandle: Handle_ShapeFix_Wire);
  }

  export declare class Handle_ShapeFix_Wire_4 extends Handle_ShapeFix_Wire {
    constructor(theHandle: Handle_ShapeFix_Wire);
  }

export declare class Handle_Geom_RectangularTrimmedSurface {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom_RectangularTrimmedSurface): void;
  get(): Geom_RectangularTrimmedSurface;
  delete(): void;
}

  export declare class Handle_Geom_RectangularTrimmedSurface_1 extends Handle_Geom_RectangularTrimmedSurface {
    constructor();
  }

  export declare class Handle_Geom_RectangularTrimmedSurface_2 extends Handle_Geom_RectangularTrimmedSurface {
    constructor(thePtr: Geom_RectangularTrimmedSurface);
  }

  export declare class Handle_Geom_RectangularTrimmedSurface_3 extends Handle_Geom_RectangularTrimmedSurface {
    constructor(theHandle: Handle_Geom_RectangularTrimmedSurface);
  }

  export declare class Handle_Geom_RectangularTrimmedSurface_4 extends Handle_Geom_RectangularTrimmedSurface {
    constructor(theHandle: Handle_Geom_RectangularTrimmedSurface);
  }

export declare class Handle_CDF_Application {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: CDF_Application): void;
  get(): CDF_Application;
  delete(): void;
}

  export declare class Handle_CDF_Application_1 extends Handle_CDF_Application {
    constructor();
  }

  export declare class Handle_CDF_Application_2 extends Handle_CDF_Application {
    constructor(thePtr: CDF_Application);
  }

  export declare class Handle_CDF_Application_3 extends Handle_CDF_Application {
    constructor(theHandle: Handle_CDF_Application);
  }

  export declare class Handle_CDF_Application_4 extends Handle_CDF_Application {
    constructor(theHandle: Handle_CDF_Application);
  }

export declare class Handle_HLRBRep_Algo {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: HLRBRep_Algo): void;
  get(): HLRBRep_Algo;
  delete(): void;
}

  export declare class Handle_HLRBRep_Algo_1 extends Handle_HLRBRep_Algo {
    constructor();
  }

  export declare class Handle_HLRBRep_Algo_2 extends Handle_HLRBRep_Algo {
    constructor(thePtr: HLRBRep_Algo);
  }

  export declare class Handle_HLRBRep_Algo_3 extends Handle_HLRBRep_Algo {
    constructor(theHandle: Handle_HLRBRep_Algo);
  }

  export declare class Handle_HLRBRep_Algo_4 extends Handle_HLRBRep_Algo {
    constructor(theHandle: Handle_HLRBRep_Algo);
  }

export declare class Handle_BRep_TEdge {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRep_TEdge): void;
  get(): BRep_TEdge;
  delete(): void;
}

  export declare class Handle_BRep_TEdge_1 extends Handle_BRep_TEdge {
    constructor();
  }

  export declare class Handle_BRep_TEdge_2 extends Handle_BRep_TEdge {
    constructor(thePtr: BRep_TEdge);
  }

  export declare class Handle_BRep_TEdge_3 extends Handle_BRep_TEdge {
    constructor(theHandle: Handle_BRep_TEdge);
  }

  export declare class Handle_BRep_TEdge_4 extends Handle_BRep_TEdge {
    constructor(theHandle: Handle_BRep_TEdge);
  }

export declare class Handle_Geom2d_Point {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Point): void;
  get(): Geom2d_Point;
  delete(): void;
}

  export declare class Handle_Geom2d_Point_1 extends Handle_Geom2d_Point {
    constructor();
  }

  export declare class Handle_Geom2d_Point_2 extends Handle_Geom2d_Point {
    constructor(thePtr: Geom2d_Point);
  }

  export declare class Handle_Geom2d_Point_3 extends Handle_Geom2d_Point {
    constructor(theHandle: Handle_Geom2d_Point);
  }

  export declare class Handle_Geom2d_Point_4 extends Handle_Geom2d_Point {
    constructor(theHandle: Handle_Geom2d_Point);
  }

export declare class Handle_StdPrs_BRepFont {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: StdPrs_BRepFont): void;
  get(): StdPrs_BRepFont;
  delete(): void;
}

  export declare class Handle_StdPrs_BRepFont_1 extends Handle_StdPrs_BRepFont {
    constructor();
  }

  export declare class Handle_StdPrs_BRepFont_2 extends Handle_StdPrs_BRepFont {
    constructor(thePtr: StdPrs_BRepFont);
  }

  export declare class Handle_StdPrs_BRepFont_3 extends Handle_StdPrs_BRepFont {
    constructor(theHandle: Handle_StdPrs_BRepFont);
  }

  export declare class Handle_StdPrs_BRepFont_4 extends Handle_StdPrs_BRepFont {
    constructor(theHandle: Handle_StdPrs_BRepFont);
  }

export declare class Handle_CDM_Application {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: CDM_Application): void;
  get(): CDM_Application;
  delete(): void;
}

  export declare class Handle_CDM_Application_1 extends Handle_CDM_Application {
    constructor();
  }

  export declare class Handle_CDM_Application_2 extends Handle_CDM_Application {
    constructor(thePtr: CDM_Application);
  }

  export declare class Handle_CDM_Application_3 extends Handle_CDM_Application {
    constructor(theHandle: Handle_CDM_Application);
  }

  export declare class Handle_CDM_Application_4 extends Handle_CDM_Application {
    constructor(theHandle: Handle_CDM_Application);
  }

export declare class Handle_MoniTool_TypedValue {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: MoniTool_TypedValue): void;
  get(): MoniTool_TypedValue;
  delete(): void;
}

  export declare class Handle_MoniTool_TypedValue_1 extends Handle_MoniTool_TypedValue {
    constructor();
  }

  export declare class Handle_MoniTool_TypedValue_2 extends Handle_MoniTool_TypedValue {
    constructor(thePtr: MoniTool_TypedValue);
  }

  export declare class Handle_MoniTool_TypedValue_3 extends Handle_MoniTool_TypedValue {
    constructor(theHandle: Handle_MoniTool_TypedValue);
  }

  export declare class Handle_MoniTool_TypedValue_4 extends Handle_MoniTool_TypedValue {
    constructor(theHandle: Handle_MoniTool_TypedValue);
  }

export declare class Handle_Geom2d_Geometry {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2d_Geometry): void;
  get(): Geom2d_Geometry;
  delete(): void;
}

  export declare class Handle_Geom2d_Geometry_1 extends Handle_Geom2d_Geometry {
    constructor();
  }

  export declare class Handle_Geom2d_Geometry_2 extends Handle_Geom2d_Geometry {
    constructor(thePtr: Geom2d_Geometry);
  }

  export declare class Handle_Geom2d_Geometry_3 extends Handle_Geom2d_Geometry {
    constructor(theHandle: Handle_Geom2d_Geometry);
  }

  export declare class Handle_Geom2d_Geometry_4 extends Handle_Geom2d_Geometry {
    constructor(theHandle: Handle_Geom2d_Geometry);
  }

export declare class Handle_Adaptor3d_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Adaptor3d_Curve): void;
  get(): Adaptor3d_Curve;
  delete(): void;
}

  export declare class Handle_Adaptor3d_Curve_1 extends Handle_Adaptor3d_Curve {
    constructor();
  }

  export declare class Handle_Adaptor3d_Curve_2 extends Handle_Adaptor3d_Curve {
    constructor(thePtr: Adaptor3d_Curve);
  }

  export declare class Handle_Adaptor3d_Curve_3 extends Handle_Adaptor3d_Curve {
    constructor(theHandle: Handle_Adaptor3d_Curve);
  }

  export declare class Handle_Adaptor3d_Curve_4 extends Handle_Adaptor3d_Curve {
    constructor(theHandle: Handle_Adaptor3d_Curve);
  }

export declare class Handle_TDF_Attribute {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: TDF_Attribute): void;
  get(): TDF_Attribute;
  delete(): void;
}

  export declare class Handle_TDF_Attribute_1 extends Handle_TDF_Attribute {
    constructor();
  }

  export declare class Handle_TDF_Attribute_2 extends Handle_TDF_Attribute {
    constructor(thePtr: TDF_Attribute);
  }

  export declare class Handle_TDF_Attribute_3 extends Handle_TDF_Attribute {
    constructor(theHandle: Handle_TDF_Attribute);
  }

  export declare class Handle_TDF_Attribute_4 extends Handle_TDF_Attribute {
    constructor(theHandle: Handle_TDF_Attribute);
  }

export declare class Handle_ShapeUpgrade_UnifySameDomain {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: ShapeUpgrade_UnifySameDomain): void;
  get(): ShapeUpgrade_UnifySameDomain;
  delete(): void;
}

  export declare class Handle_ShapeUpgrade_UnifySameDomain_1 extends Handle_ShapeUpgrade_UnifySameDomain {
    constructor();
  }

  export declare class Handle_ShapeUpgrade_UnifySameDomain_2 extends Handle_ShapeUpgrade_UnifySameDomain {
    constructor(thePtr: ShapeUpgrade_UnifySameDomain);
  }

  export declare class Handle_ShapeUpgrade_UnifySameDomain_3 extends Handle_ShapeUpgrade_UnifySameDomain {
    constructor(theHandle: Handle_ShapeUpgrade_UnifySameDomain);
  }

  export declare class Handle_ShapeUpgrade_UnifySameDomain_4 extends Handle_ShapeUpgrade_UnifySameDomain {
    constructor(theHandle: Handle_ShapeUpgrade_UnifySameDomain);
  }

export declare class Handle_Geom2dAdaptor_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: Geom2dAdaptor_Curve): void;
  get(): Geom2dAdaptor_Curve;
  delete(): void;
}

  export declare class Handle_Geom2dAdaptor_Curve_1 extends Handle_Geom2dAdaptor_Curve {
    constructor();
  }

  export declare class Handle_Geom2dAdaptor_Curve_2 extends Handle_Geom2dAdaptor_Curve {
    constructor(thePtr: Geom2dAdaptor_Curve);
  }

  export declare class Handle_Geom2dAdaptor_Curve_3 extends Handle_Geom2dAdaptor_Curve {
    constructor(theHandle: Handle_Geom2dAdaptor_Curve);
  }

  export declare class Handle_Geom2dAdaptor_Curve_4 extends Handle_Geom2dAdaptor_Curve {
    constructor(theHandle: Handle_Geom2dAdaptor_Curve);
  }

export declare class Handle_GeomAdaptor_TransformedCurve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: GeomAdaptor_TransformedCurve): void;
  get(): GeomAdaptor_TransformedCurve;
  delete(): void;
}

  export declare class Handle_GeomAdaptor_TransformedCurve_1 extends Handle_GeomAdaptor_TransformedCurve {
    constructor();
  }

  export declare class Handle_GeomAdaptor_TransformedCurve_2 extends Handle_GeomAdaptor_TransformedCurve {
    constructor(thePtr: GeomAdaptor_TransformedCurve);
  }

  export declare class Handle_GeomAdaptor_TransformedCurve_3 extends Handle_GeomAdaptor_TransformedCurve {
    constructor(theHandle: Handle_GeomAdaptor_TransformedCurve);
  }

  export declare class Handle_GeomAdaptor_TransformedCurve_4 extends Handle_GeomAdaptor_TransformedCurve {
    constructor(theHandle: Handle_GeomAdaptor_TransformedCurve);
  }

export declare class Handle_BRepAdaptor_Curve {
  Nullify(): void;
  IsNull(): boolean;
  reset(thePtr: BRepAdaptor_Curve): void;
  get(): BRepAdaptor_Curve;
  delete(): void;
}

  export declare class Handle_BRepAdaptor_Curve_1 extends Handle_BRepAdaptor_Curve {
    constructor();
  }

  export declare class Handle_BRepAdaptor_Curve_2 extends Handle_BRepAdaptor_Curve {
    constructor(thePtr: BRepAdaptor_Curve);
  }

  export declare class Handle_BRepAdaptor_Curve_3 extends Handle_BRepAdaptor_Curve {
    constructor(theHandle: Handle_BRepAdaptor_Curve);
  }

  export declare class Handle_BRepAdaptor_Curve_4 extends Handle_BRepAdaptor_Curve {
    constructor(theHandle: Handle_BRepAdaptor_Curve);
  }

export declare class CDF_Application extends CDM_Application {
  static Load(aGUID: Standard_GUID): any;
  NewDocument(theFormat: TCollection_ExtendedString, theDoc: any): void;
  InitDocument(theDoc: any): void;
  Open(aDocument: any): void;
  CanClose(aDocument: any): CDM_CanCloseStatus;
  Close(aDocument: any): void;
  Retrieve_1(aFolder: TCollection_ExtendedString, aName: TCollection_ExtendedString, UseStorageConfiguration: Standard_Boolean, theFilter: any, theRange: Message_ProgressRange): any;
  Retrieve_2(aFolder: TCollection_ExtendedString, aName: TCollection_ExtendedString, aVersion: TCollection_ExtendedString, UseStorageConfiguration: Standard_Boolean, theFilter: any, theRange: Message_ProgressRange): any;
  CanRetrieve_1(theFolder: TCollection_ExtendedString, theName: TCollection_ExtendedString, theAppendMode: Standard_Boolean): PCDM_ReaderStatus;
  CanRetrieve_2(theFolder: TCollection_ExtendedString, theName: TCollection_ExtendedString, theVersion: TCollection_ExtendedString, theAppendMode: Standard_Boolean): PCDM_ReaderStatus;
  GetRetrieveStatus(): PCDM_ReaderStatus;
  ReaderFromFormat(aFormat: TCollection_ExtendedString): any;
  WriterFromFormat(aFormat: TCollection_ExtendedString): any;
  Format(aFileName: TCollection_ExtendedString, theFormat: TCollection_ExtendedString): Standard_Boolean;
  DefaultFolder(): Standard_ExtCharacter;
  SetDefaultFolder(aFolder: Standard_ExtCharacter): Standard_Boolean;
  MetaDataDriver(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class CDM_Document extends Standard_Transient {
  Update_1(aToDocument: any, aReferenceIdentifier: Standard_Integer, aModifContext: GLvoid): void;
  Update_2(ErrorString: TCollection_ExtendedString): Standard_Boolean;
  StorageFormat(): TCollection_ExtendedString;
  Extensions(Extensions: NCollection_Sequence<TCollection_ExtendedString>): void;
  GetAlternativeDocument(aFormat: TCollection_ExtendedString, anAlternativeDocument: any): Standard_Boolean;
  CreateReference_1(anOtherDocument: any): Standard_Integer;
  RemoveReference(aReferenceIdentifier: Standard_Integer): void;
  RemoveAllReferences(): void;
  Document(aReferenceIdentifier: Standard_Integer): any;
  IsInSession(aReferenceIdentifier: Standard_Integer): Standard_Boolean;
  IsStored_1(aReferenceIdentifier: Standard_Integer): Standard_Boolean;
  Name(aReferenceIdentifier: Standard_Integer): TCollection_ExtendedString;
  UpdateFromDocuments(aModifContext: GLvoid): void;
  ToReferencesNumber(): Standard_Integer;
  FromReferencesNumber(): Standard_Integer;
  ShallowReferences(aDocument: any): Standard_Boolean;
  DeepReferences(aDocument: any): Standard_Boolean;
  CopyReference(aFromDocument: any, aReferenceIdentifier: Standard_Integer): Standard_Integer;
  IsReadOnly_1(): Standard_Boolean;
  IsReadOnly_2(aReferenceIdentifier: Standard_Integer): Standard_Boolean;
  SetIsReadOnly(): void;
  UnsetIsReadOnly(): void;
  Modify(): void;
  Modifications(): Standard_Integer;
  UnModify(): void;
  IsUpToDate(aReferenceIdentifier: Standard_Integer): Standard_Boolean;
  SetIsUpToDate(aReferenceIdentifier: Standard_Integer): void;
  SetComment(aComment: TCollection_ExtendedString): void;
  AddComment(aComment: TCollection_ExtendedString): void;
  SetComments(aComments: NCollection_Sequence<TCollection_ExtendedString>): void;
  Comments(aComments: NCollection_Sequence<TCollection_ExtendedString>): void;
  Comment(): Standard_ExtCharacter;
  IsStored_2(): Standard_Boolean;
  StorageVersion(): Standard_Integer;
  SetMetaData(aMetaData: any): void;
  UnsetIsStored(): void;
  MetaData(): any;
  Folder(): TCollection_ExtendedString;
  SetRequestedFolder(aFolder: TCollection_ExtendedString): void;
  RequestedFolder(): TCollection_ExtendedString;
  HasRequestedFolder(): Standard_Boolean;
  SetRequestedName(aName: TCollection_ExtendedString): void;
  RequestedName(): TCollection_ExtendedString;
  SetRequestedPreviousVersion(aPreviousVersion: TCollection_ExtendedString): void;
  UnsetRequestedPreviousVersion(): void;
  HasRequestedPreviousVersion(): Standard_Boolean;
  RequestedPreviousVersion(): TCollection_ExtendedString;
  SetRequestedComment(aComment: TCollection_ExtendedString): void;
  RequestedComment(): TCollection_ExtendedString;
  LoadResources(): void;
  FindFileExtension(): Standard_Boolean;
  FileExtension(): TCollection_ExtendedString;
  FindDescription(): Standard_Boolean;
  Description(): TCollection_ExtendedString;
  IsModified(): Standard_Boolean;
  IsOpened_1(): Standard_Boolean;
  Open(anApplication: any): void;
  CanClose(): CDM_CanCloseStatus;
  Close(): void;
  Application(): any;
  CanCloseReference(aDocument: any, aReferenceIdentifier: Standard_Integer): Standard_Boolean;
  CloseReference(aDocument: any, aReferenceIdentifier: Standard_Integer): void;
  IsOpened_2(aReferenceIdentifier: Standard_Integer): Standard_Boolean;
  CreateReference_2(aMetaData: any, aReferenceIdentifier: Standard_Integer, anApplication: any, aToDocumentVersion: Standard_Integer, UseStorageConfiguration: Standard_Boolean): void;
  CreateReference_3(aMetaData: any, anApplication: any, aDocumentVersion: Standard_Integer, UseStorageConfiguration: Standard_Boolean): Standard_Integer;
  ReferenceCounter(): Standard_Integer;
  Update_3(): void;
  Reference(aReferenceIdentifier: Standard_Integer): any;
  SetModifications(Modifications: Standard_Integer): void;
  SetReferenceCounter(aReferenceCounter: Standard_Integer): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class CDM_Application extends Standard_Transient {
  Resources(): any;
  MessageDriver(): any;
  BeginOfUpdate(aDocument: any): void;
  EndOfUpdate(aDocument: any, theStatus: Standard_Boolean, ErrorString: TCollection_ExtendedString): void;
  Write(aString: Standard_ExtCharacter): void;
  Name(): TCollection_ExtendedString;
  Version(): XCAFDoc_PartId;
  MetaDataLookUpTable(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class TDF_Attribute extends Standard_Transient {
  ID(): Standard_GUID;
  SetID_1(a0: Standard_GUID): void;
  SetID_2(): void;
  Label(): TDF_Label;
  Transaction(): Standard_Integer;
  UntilTransaction(): Standard_Integer;
  IsValid(): Standard_Boolean;
  IsNew(): Standard_Boolean;
  IsForgotten(): Standard_Boolean;
  IsAttribute(anID: Standard_GUID): Standard_Boolean;
  FindAttribute_1(anID: Standard_GUID, anAttribute: any): Standard_Boolean;
  AddAttribute(other: any): void;
  ForgetAttribute(aguid: Standard_GUID): Standard_Boolean;
  ForgetAllAttributes(clearChildren: Standard_Boolean): void;
  AfterAddition(): void;
  BeforeRemoval(): void;
  BeforeForget(): void;
  AfterResume(): void;
  AfterRetrieval(forceIt: Standard_Boolean): Standard_Boolean;
  BeforeUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  AfterUndo(anAttDelta: any, forceIt: Standard_Boolean): Standard_Boolean;
  BeforeCommitTransaction(): void;
  Backup_1(): void;
  IsBackuped(): Standard_Boolean;
  BackupCopy(): any;
  Restore(anAttribute: any): void;
  DeltaOnAddition(): any;
  DeltaOnForget(): any;
  DeltaOnResume(): any;
  DeltaOnModification_1(anOldAttribute: any): any;
  DeltaOnModification_2(aDelta: any): void;
  DeltaOnRemoval(): any;
  NewEmpty(): any;
  Paste(intoAttribute: any, aRelocationTable: any): void;
  References(aDataSet: any): void;
  Forget(aTransaction: Standard_Integer): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class TDF_Label {
  constructor()
  Nullify(): void;
  Data(): any;
  Tag(): Standard_Integer;
  Father(): TDF_Label;
  IsNull(): Standard_Boolean;
  Imported(aStatus: Standard_Boolean): void;
  IsImported(): Standard_Boolean;
  IsEqual(aLabel: TDF_Label): Standard_Boolean;
  IsDifferent(aLabel: TDF_Label): Standard_Boolean;
  IsRoot(): Standard_Boolean;
  IsAttribute(anID: Standard_GUID): Standard_Boolean;
  AddAttribute(anAttribute: any, append: Standard_Boolean): void;
  ForgetAttribute_1(anAttribute: any): void;
  ForgetAttribute_2(aguid: Standard_GUID): Standard_Boolean;
  ForgetAllAttributes(clearChildren: Standard_Boolean): void;
  ResumeAttribute(anAttribute: any): void;
  FindAttribute_1(anID: Standard_GUID, anAttribute: any): Standard_Boolean;
  FindAttribute_3(anID: Standard_GUID, aTransaction: Standard_Integer, anAttribute: any): Standard_Boolean;
  MayBeModified(): Standard_Boolean;
  AttributesModified(): Standard_Boolean;
  HasAttribute(): Standard_Boolean;
  NbAttributes(): Standard_Integer;
  Depth(): Standard_Integer;
  IsDescendant(aLabel: TDF_Label): Standard_Boolean;
  Root(): TDF_Label;
  HasChild(): Standard_Boolean;
  NbChildren(): Standard_Integer;
  FindChild(aTag: Standard_Integer, create: Standard_Boolean): TDF_Label;
  NewChild(): TDF_Label;
  Transaction(): Standard_Integer;
  HasLowerNode(otherLabel: TDF_Label): Standard_Boolean;
  HasGreaterNode(otherLabel: TDF_Label): Standard_Boolean;
  delete(): void;
}

export declare class TDataStd_Name extends TDataStd_GenericExtString {
  constructor()
  static GetID(): Standard_GUID;
  static Set_1(label: TDF_Label, string: TCollection_ExtendedString): any;
  static Set_2(label: TDF_Label, guid: Standard_GUID, string: TCollection_ExtendedString): any;
  Set_3(S: TCollection_ExtendedString): void;
  SetID_1(guid: Standard_GUID): void;
  SetID_2(): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
  delete(): void;
}

export declare class TDataStd_GenericEmpty extends TDF_Attribute {
  Restore(a0: any): void;
  Paste(a0: any, a1: any): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class TDataStd_GenericExtString extends TDF_Attribute {
  Set(S: TCollection_ExtendedString): void;
  SetID(guid: Standard_GUID): void;
  Get(): TCollection_ExtendedString;
  ID(): Standard_GUID;
  Restore(with_: any): void;
  Paste(into: any, RT: any): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class TDocStd_Document extends CDM_Document {
  constructor(astorageformat: TCollection_ExtendedString)
  static Get(L: TDF_Label): any;
  IsSaved(): Standard_Boolean;
  IsChanged(): Standard_Boolean;
  SetSaved(): void;
  SetSavedTime(theTime: Standard_Integer): void;
  GetSavedTime(): Standard_Integer;
  GetName(): TCollection_ExtendedString;
  GetPath(): TCollection_ExtendedString;
  SetData(data: any): void;
  GetData(): any;
  Main(): TDF_Label;
  IsEmpty(): Standard_Boolean;
  IsValid(): Standard_Boolean;
  SetModified(L: TDF_Label): void;
  PurgeModified(): void;
  GetModified(): any;
  NewCommand(): void;
  HasOpenCommand(): Standard_Boolean;
  OpenCommand(): void;
  CommitCommand(): Standard_Boolean;
  AbortCommand(): void;
  GetUndoLimit(): Standard_Integer;
  SetUndoLimit(L: Standard_Integer): void;
  ClearUndos(): void;
  ClearRedos(): void;
  GetAvailableUndos(): Standard_Integer;
  Undo(): Standard_Boolean;
  GetAvailableRedos(): Standard_Integer;
  Redo(): Standard_Boolean;
  GetUndos(): any;
  GetRedos(): any;
  RemoveFirstUndo(): void;
  InitDeltaCompaction(): Standard_Boolean;
  PerformDeltaCompaction(): Standard_Boolean;
  UpdateReferences(aDocEntry: XCAFDoc_PartId): void;
  Recompute(): void;
  Update(aToDocument: any, aReferenceIdentifier: Standard_Integer, aModifContext: GLvoid): void;
  StorageFormat(): TCollection_ExtendedString;
  SetEmptyLabelsSavingMode(isAllowed: Standard_Boolean): void;
  EmptyLabelsSavingMode(): Standard_Boolean;
  ChangeStorageFormat(newStorageFormat: TCollection_ExtendedString): void;
  SetNestedTransactionMode(isAllowed: Standard_Boolean): void;
  IsNestedTransactionMode(): Standard_Boolean;
  SetModificationMode(theTransactionOnly: Standard_Boolean): void;
  ModificationMode(): Standard_Boolean;
  BeforeClose(): void;
  StorageFormatVersion(): TDocStd_FormatVersion;
  ChangeStorageFormatVersion(theVersion: TDocStd_FormatVersion): void;
  static CurrentStorageFormatVersion(): TDocStd_FormatVersion;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class TDocStd_Application extends CDF_Application {
  constructor()
  IsDriverLoaded(): Standard_Boolean;
  Resources(): any;
  ResourcesName(): Standard_Character;
  DefineFormat(theFormat: XCAFDoc_PartId, theDescription: XCAFDoc_PartId, theExtension: XCAFDoc_PartId, theReader: any, theWriter: any): void;
  ReadingFormats(theFormats: NCollection_Sequence<TCollection_AsciiString>): void;
  WritingFormats(theFormats: NCollection_Sequence<TCollection_AsciiString>): void;
  NbDocuments(): Standard_Integer;
  GetDocument_1(index: Standard_Integer): any;
  GetDocument_2(index: Standard_Integer, aDoc: any): void;
  NewDocument_1(format: TCollection_ExtendedString, aDoc: any): void;
  NewDocument_2(format: TCollection_ExtendedString, aDoc: any): void;
  InitDocument(aDoc: any): void;
  Close(aDoc: any): void;
  IsInSession(path: TCollection_ExtendedString): Standard_Integer;
  Open_1(thePath: TCollection_ExtendedString, theDoc: any, theFilter: any, theRange: Message_ProgressRange): PCDM_ReaderStatus;
  Open_2(thePath: TCollection_ExtendedString, theDoc: any, theRange: Message_ProgressRange): PCDM_ReaderStatus;
  SaveAs_1(theDoc: any, path: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  Save_1(theDoc: any, theRange: Message_ProgressRange): PCDM_StoreStatus;
  SaveAs_3(theDoc: any, path: TCollection_ExtendedString, theStatusMessage: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  Save_2(theDoc: any, theStatusMessage: TCollection_ExtendedString, theRange: Message_ProgressRange): PCDM_StoreStatus;
  OnOpenTransaction(theDoc: any): void;
  OnCommitTransaction(theDoc: any): void;
  OnAbortTransaction(theDoc: any): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare type Font_FontAspect = {
  Font_FontAspect_UNDEFINED: {};
  Font_FontAspect_Regular: {};
  Font_FontAspect_Bold: {};
  Font_FontAspect_Italic: {};
  Font_FontAspect_BoldItalic: {};
  Font_FA_Undefined: {};
  Font_FA_Regular: {};
  Font_FA_Bold: {};
  Font_FA_Italic: {};
  Font_FA_BoldItalic: {};
}

export declare class Font_FontMgr extends Standard_Transient {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  static GetInstance(): any;
  static FontAspectToString(theAspect: Font_FontAspect): Standard_Character;
  static ToUseUnicodeSubsetFallback(): Standard_Boolean;
  AvailableFonts(theList: any): void;
  GetAvailableFonts(): any;
  GetAvailableFontsNames(theFontsNames: any): void;
  GetFont_1(theFontName: any, theFontAspect: Font_FontAspect, theFontSize: Standard_Integer): any;
  GetFont_2(theFontName: XCAFDoc_PartId): any;
  FindFont_1(theFontName: XCAFDoc_PartId, theStrictLevel: Font_StrictLevel, theFontAspect: Font_FontAspect, theDoFailMsg: Standard_Boolean): any;
  FindFont_2(theFontName: XCAFDoc_PartId, theFontAspect: Font_FontAspect): any;
  FindFallbackFont(theSubset: Font_UnicodeSubset, theFontAspect: Font_FontAspect): any;
  CheckFont_1(theFonts: any, theFontPath: XCAFDoc_PartId): Standard_Boolean;
  CheckFont_2(theFontPath: Standard_Character): any;
  RegisterFont(theFont: any, theToOverride: Standard_Boolean): Standard_Boolean;
  RegisterFonts(theFonts: any, theToOverride: Standard_Boolean): Standard_Boolean;
  ToTraceAliases(): Standard_Boolean;
  SetTraceAliases(theToTrace: Standard_Boolean): void;
  ToPrintErrors(): Standard_Boolean;
  SetPrintErrors(theToPrintErrors: Standard_Boolean): void;
  GetAllAliases(theAliases: any): void;
  GetFontAliases(theFontNames: any, theAliasName: XCAFDoc_PartId): void;
  AddFontAlias(theAliasName: XCAFDoc_PartId, theFontName: XCAFDoc_PartId): Standard_Boolean;
  RemoveFontAlias(theAliasName: XCAFDoc_PartId, theFontName: XCAFDoc_PartId): Standard_Boolean;
  InitFontDataBase(): void;
  ClearFontDataBase(): void;
  static EmbedFallbackFont(): any;
  delete(): void;
}

export declare class Font_SystemFont extends Standard_Transient {
  constructor(theFontName: XCAFDoc_PartId)
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  FontKey(): XCAFDoc_PartId;
  FontName(): XCAFDoc_PartId;
  FontPath(theAspect: Font_FontAspect): XCAFDoc_PartId;
  FontFaceId(theAspect: Font_FontAspect): Standard_Integer;
  SetFontPath(theAspect: Font_FontAspect, thePath: XCAFDoc_PartId, theFaceId: Standard_Integer): void;
  HasFontAspect(theAspect: Font_FontAspect): Standard_Boolean;
  FontPathAny(theAspect: Font_FontAspect, theToSynthesizeItalic: Standard_Boolean, theFaceId: Standard_Integer): XCAFDoc_PartId;
  IsEqual(theOtherFont: any): Standard_Boolean;
  IsSingleStrokeFont(): Standard_Boolean;
  SetSingleStrokeFont(theIsSingleLine: Standard_Boolean): void;
  ToString(): XCAFDoc_PartId;
  delete(): void;
}

export declare type Graphic3d_HorizontalTextAlignment = {
  Graphic3d_HTA_LEFT: {};
  Graphic3d_HTA_CENTER: {};
  Graphic3d_HTA_RIGHT: {};
}

export declare type Graphic3d_VerticalTextAlignment = {
  Graphic3d_VTA_BOTTOM: {};
  Graphic3d_VTA_CENTER: {};
  Graphic3d_VTA_TOP: {};
  Graphic3d_VTA_TOPFIRSTLINE: {};
}

export declare class StdPrs_BRepTextBuilder {
  constructor();
  Perform_1(theFont: Font_BRepFont, theFormatter: any, thePenLoc: gp_Ax3): TopoDS_Shape;
  Perform_2(theFont: Font_BRepFont, theString: NCollection_String, thePenLoc: gp_Ax3, theHAlign: Graphic3d_HorizontalTextAlignment, theVAlign: Graphic3d_VerticalTextAlignment): TopoDS_Shape;
  delete(): void;
}

export declare class StdPrs_BRepFont extends Standard_Transient {
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  static FindAndCreate(theFontName: XCAFDoc_PartId, theFontAspect: Font_FontAspect, theSize: Standard_Real, theStrictLevel: Font_StrictLevel): any;
  Release(): void;
  Init_1(theFontPath: NCollection_String, theSize: Standard_Real, theFaceId: Standard_Integer): Standard_Boolean;
  FindAndInit(theFontName: XCAFDoc_PartId, theFontAspect: Font_FontAspect, theSize: Standard_Real, theStrictLevel: Font_StrictLevel): Standard_Boolean;
  FTFont(): any;
  RenderGlyph(theChar: Standard_Utf32Char): TopoDS_Shape;
  SetCompositeCurveMode(theToConcatenate: Standard_Boolean): void;
  SetWidthScaling(theScaleFactor: Standard_ShortReal): void;
  Ascender(): Standard_Real;
  Descender(): Standard_Real;
  LineSpacing(): Standard_Real;
  PointSize(): Standard_Real;
  AdvanceX_1(theUCharNext: Standard_Utf32Char): Standard_Real;
  AdvanceX_2(theUChar: Standard_Utf32Char, theUCharNext: Standard_Utf32Char): Standard_Real;
  AdvanceY_1(theUCharNext: Standard_Utf32Char): Standard_Real;
  AdvanceY_2(theUChar: Standard_Utf32Char, theUCharNext: Standard_Utf32Char): Standard_Real;
  Scale(): Standard_Real;
  Init_2(theFontName: NCollection_String, theFontAspect: Font_FontAspect, theSize: Standard_Real): Standard_Boolean;
  delete(): void;
}

  export declare class StdPrs_BRepFont_1 extends StdPrs_BRepFont {
    constructor();
  }

  export declare class StdPrs_BRepFont_2 extends StdPrs_BRepFont {
    constructor(theFontPath: NCollection_String, theSize: Standard_Real, theFaceId: Standard_Integer);
  }

  export declare class StdPrs_BRepFont_3 extends StdPrs_BRepFont {
    constructor(theFontName: NCollection_String, theFontAspect: Font_FontAspect, theSize: Standard_Real, theStrictLevel: Font_StrictLevel);
  }

export declare class StdPrs_ToolTriangulatedShape extends BRepLib_ToolTriangulatedShape {
  constructor();
  static IsTriangulated(theShape: TopoDS_Shape): Standard_Boolean;
  static IsClosed(theShape: TopoDS_Shape): Standard_Boolean;
  static GetDeflection(theShape: TopoDS_Shape, theDrawer: any): Standard_Real;
  static IsTessellated(theShape: TopoDS_Shape, theDrawer: any): Standard_Boolean;
  static Tessellate(theShape: TopoDS_Shape, theDrawer: any): Standard_Boolean;
  static ClearOnOwnDeflectionChange(theShape: TopoDS_Shape, theDrawer: any, theToResetCoeff: Standard_Boolean): void;
  delete(): void;
}

export declare class GeomFill_CorrectedFrenet extends GeomFill_TrihedronLaw {
  Copy(): any;
  SetCurve(C: any): Standard_Boolean;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  EvaluateBestMode(): GeomFill_Trihedron;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class GeomFill_CorrectedFrenet_1 extends GeomFill_CorrectedFrenet {
    constructor();
  }

  export declare class GeomFill_CorrectedFrenet_2 extends GeomFill_CorrectedFrenet {
    constructor(ForEvaluation: Standard_Boolean);
  }

export declare class GeomFill_Frenet extends GeomFill_TrihedronLaw {
  constructor()
  Copy(): any;
  Init(): void;
  SetCurve(C: any): Standard_Boolean;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class GeomFill_TrihedronLaw extends Standard_Transient {
  SetCurve(C: any): Standard_Boolean;
  Copy(): any;
  ErrorStatus(): GeomFill_PipeError;
  D0(Param: Standard_Real, Tangent: gp_Vec, Normal: gp_Vec, BiNormal: gp_Vec): Standard_Boolean;
  D1(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec): Standard_Boolean;
  D2(Param: Standard_Real, Tangent: gp_Vec, DTangent: gp_Vec, D2Tangent: gp_Vec, Normal: gp_Vec, DNormal: gp_Vec, D2Normal: gp_Vec, BiNormal: gp_Vec, DBiNormal: gp_Vec, D2BiNormal: gp_Vec): Standard_Boolean;
  NbIntervals(S: GeomAbs_Shape): Standard_Integer;
  Intervals(T: NCollection_Array1<double>, S: GeomAbs_Shape): void;
  SetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetInterval(First: Standard_Real, Last: Standard_Real): void;
  GetAverageLaw(ATangent: gp_Vec, ANormal: gp_Vec, ABiNormal: gp_Vec): void;
  IsConstant(): Standard_Boolean;
  IsOnlyBy3dCurve(): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class GeomAPI {
  constructor();
  static To2d(C: any, P: gp_Pln): any;
  static To3d(C: any, P: gp_Pln): any;
  delete(): void;
}

export declare class GeomAPI_PointsToBSplineSurface {
  Init_1(Points: NCollection_Array2<gp_Pnt>, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Interpolate_1(Points: NCollection_Array2<gp_Pnt>, thePeriodic: Standard_Boolean): void;
  Interpolate_2(Points: NCollection_Array2<gp_Pnt>, ParType: Approx_ParametrizationType, thePeriodic: Standard_Boolean): void;
  Init_2(ZPoints: NCollection_Array2<double>, X0: Standard_Real, dX: Standard_Real, Y0: Standard_Real, dY: Standard_Real, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Interpolate_3(ZPoints: NCollection_Array2<double>, X0: Standard_Real, dX: Standard_Real, Y0: Standard_Real, dY: Standard_Real): void;
  Init_3(Points: NCollection_Array2<gp_Pnt>, ParType: Approx_ParametrizationType, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real, thePeriodic: Standard_Boolean): void;
  Init_4(Points: NCollection_Array2<gp_Pnt>, Weight1: Standard_Real, Weight2: Standard_Real, Weight3: Standard_Real, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Surface(): any;
  IsDone(): Standard_Boolean;
  delete(): void;
}

  export declare class GeomAPI_PointsToBSplineSurface_1 extends GeomAPI_PointsToBSplineSurface {
    constructor();
  }

  export declare class GeomAPI_PointsToBSplineSurface_2 extends GeomAPI_PointsToBSplineSurface {
    constructor(Points: NCollection_Array2<gp_Pnt>, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSplineSurface_3 extends GeomAPI_PointsToBSplineSurface {
    constructor(Points: NCollection_Array2<gp_Pnt>, ParType: Approx_ParametrizationType, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSplineSurface_4 extends GeomAPI_PointsToBSplineSurface {
    constructor(Points: NCollection_Array2<gp_Pnt>, Weight1: Standard_Real, Weight2: Standard_Real, Weight3: Standard_Real, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSplineSurface_5 extends GeomAPI_PointsToBSplineSurface {
    constructor(ZPoints: NCollection_Array2<double>, X0: Standard_Real, dX: Standard_Real, Y0: Standard_Real, dY: Standard_Real, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

export declare class GeomAPI_Interpolate {
  Load_1(InitialTangent: gp_Vec, FinalTangent: gp_Vec, Scale: Standard_Boolean): void;
  Load_2(Tangents: NCollection_Array1<gp_Vec>, TangentFlags: any, Scale: Standard_Boolean): void;
  Perform(): void;
  Curve(): any;
  IsDone(): Standard_Boolean;
  delete(): void;
}

  export declare class GeomAPI_Interpolate_1 extends GeomAPI_Interpolate {
    constructor(Points: any, PeriodicFlag: Standard_Boolean, Tolerance: Standard_Real);
  }

  export declare class GeomAPI_Interpolate_2 extends GeomAPI_Interpolate {
    constructor(Points: any, Parameters: any, PeriodicFlag: Standard_Boolean, Tolerance: Standard_Real);
  }

export declare class GeomAPI_IntSS {
  Perform(S1: any, S2: any, Tol: Standard_Real): void;
  IsDone(): Standard_Boolean;
  NbLines(): Standard_Integer;
  Line(Index: Standard_Integer): any;
  delete(): void;
}

  export declare class GeomAPI_IntSS_1 extends GeomAPI_IntSS {
    constructor();
  }

  export declare class GeomAPI_IntSS_2 extends GeomAPI_IntSS {
    constructor(S1: any, S2: any, Tol: Standard_Real);
  }

export declare class GeomAPI_PointsToBSpline {
  Init_1(Points: NCollection_Array1<gp_Pnt>, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Init_2(Points: NCollection_Array1<gp_Pnt>, ParType: Approx_ParametrizationType, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Init_3(Points: NCollection_Array1<gp_Pnt>, Parameters: NCollection_Array1<double>, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Init_4(Points: NCollection_Array1<gp_Pnt>, Weight1: Standard_Real, Weight2: Standard_Real, Weight3: Standard_Real, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real): void;
  Curve(): any;
  IsDone(): Standard_Boolean;
  delete(): void;
}

  export declare class GeomAPI_PointsToBSpline_1 extends GeomAPI_PointsToBSpline {
    constructor();
  }

  export declare class GeomAPI_PointsToBSpline_2 extends GeomAPI_PointsToBSpline {
    constructor(Points: NCollection_Array1<gp_Pnt>, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSpline_3 extends GeomAPI_PointsToBSpline {
    constructor(Points: NCollection_Array1<gp_Pnt>, ParType: Approx_ParametrizationType, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSpline_4 extends GeomAPI_PointsToBSpline {
    constructor(Points: NCollection_Array1<gp_Pnt>, Parameters: NCollection_Array1<double>, DegMin: Standard_Integer, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

  export declare class GeomAPI_PointsToBSpline_5 extends GeomAPI_PointsToBSpline {
    constructor(Points: NCollection_Array1<gp_Pnt>, Weight1: Standard_Real, Weight2: Standard_Real, Weight3: Standard_Real, DegMax: Standard_Integer, Continuity: GeomAbs_Shape, Tol3D: Standard_Real);
  }

export declare class GeomAPI_ProjectPointOnCurve {
  Init_1(P: gp_Pnt, Curve: any): void;
  Init_2(P: gp_Pnt, Curve: any, Umin: Standard_Real, Usup: Standard_Real): void;
  Init_3(Curve: any, Umin: Standard_Real, Usup: Standard_Real): void;
  Perform(P: gp_Pnt): void;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt;
  Parameter_1(Index: Standard_Integer): Standard_Real;
  Parameter_2(Index: Standard_Integer, U: Standard_Real): void;
  Distance(Index: Standard_Integer): Standard_Real;
  NearestPoint(): gp_Pnt;
  LowerDistanceParameter(): Standard_Real;
  LowerDistance(): Standard_Real;
  Extrema(): Extrema_ExtPC;
  delete(): void;
}

  export declare class GeomAPI_ProjectPointOnCurve_1 extends GeomAPI_ProjectPointOnCurve {
    constructor();
  }

  export declare class GeomAPI_ProjectPointOnCurve_2 extends GeomAPI_ProjectPointOnCurve {
    constructor(P: gp_Pnt, Curve: any);
  }

  export declare class GeomAPI_ProjectPointOnCurve_3 extends GeomAPI_ProjectPointOnCurve {
    constructor(P: gp_Pnt, Curve: any, Umin: Standard_Real, Usup: Standard_Real);
  }

export declare class GeomAPI_IntCS {
  Perform(C: any, S: any): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt;
  Parameters_1(Index: Standard_Integer, U: Standard_Real, V: Standard_Real, W: Standard_Real): void;
  NbSegments(): Standard_Integer;
  Segment(Index: Standard_Integer): any;
  Parameters_2(Index: Standard_Integer, U1: Standard_Real, V1: Standard_Real, U2: Standard_Real, V2: Standard_Real): void;
  delete(): void;
}

  export declare class GeomAPI_IntCS_1 extends GeomAPI_IntCS {
    constructor();
  }

  export declare class GeomAPI_IntCS_2 extends GeomAPI_IntCS {
    constructor(C: any, S: any);
  }

export declare class GeomAPI_ExtremaCurveCurve {
  Init_1(C1: any, C2: any): void;
  Init_2(C1: any, C2: any, U1min: Standard_Real, U1max: Standard_Real, U2min: Standard_Real, U2max: Standard_Real): void;
  NbExtrema(): Standard_Integer;
  Points(Index: Standard_Integer, P1: gp_Pnt, P2: gp_Pnt): void;
  Parameters(Index: Standard_Integer, U1: Standard_Real, U2: Standard_Real): void;
  Distance(Index: Standard_Integer): Standard_Real;
  IsParallel(): Standard_Boolean;
  NearestPoints(P1: gp_Pnt, P2: gp_Pnt): void;
  LowerDistanceParameters(U1: Standard_Real, U2: Standard_Real): void;
  LowerDistance(): Standard_Real;
  TotalNearestPoints(P1: gp_Pnt, P2: gp_Pnt): Standard_Boolean;
  TotalLowerDistanceParameters(U1: Standard_Real, U2: Standard_Real): Standard_Boolean;
  TotalLowerDistance(): Standard_Real;
  delete(): void;
}

  export declare class GeomAPI_ExtremaCurveCurve_1 extends GeomAPI_ExtremaCurveCurve {
    constructor();
  }

  export declare class GeomAPI_ExtremaCurveCurve_2 extends GeomAPI_ExtremaCurveCurve {
    constructor(C1: any, C2: any);
  }

  export declare class GeomAPI_ExtremaCurveCurve_3 extends GeomAPI_ExtremaCurveCurve {
    constructor(C1: any, C2: any, U1min: Standard_Real, U1max: Standard_Real, U2min: Standard_Real, U2max: Standard_Real);
  }

export declare class GeomAPI_ProjectPointOnSurf {
  Init_1(P: gp_Pnt, Surface: any, Tolerance: Standard_Real, Algo: Extrema_ExtAlgo): void;
  Init_2(P: gp_Pnt, Surface: any, Algo: Extrema_ExtAlgo): void;
  Init_3(P: gp_Pnt, Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Tolerance: Standard_Real, Algo: Extrema_ExtAlgo): void;
  Init_4(P: gp_Pnt, Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Algo: Extrema_ExtAlgo): void;
  Init_5(Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Tolerance: Standard_Real, Algo: Extrema_ExtAlgo): void;
  Init_6(Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Algo: Extrema_ExtAlgo): void;
  SetExtremaAlgo(theAlgo: Extrema_ExtAlgo): void;
  SetExtremaFlag(theExtFlag: Extrema_ExtFlag): void;
  Perform(P: gp_Pnt): void;
  IsDone(): Standard_Boolean;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt;
  Parameters(Index: Standard_Integer, U: Standard_Real, V: Standard_Real): void;
  Distance(Index: Standard_Integer): Standard_Real;
  NearestPoint(): gp_Pnt;
  LowerDistanceParameters(U: Standard_Real, V: Standard_Real): void;
  LowerDistance(): Standard_Real;
  delete(): void;
}

  export declare class GeomAPI_ProjectPointOnSurf_1 extends GeomAPI_ProjectPointOnSurf {
    constructor();
  }

  export declare class GeomAPI_ProjectPointOnSurf_2 extends GeomAPI_ProjectPointOnSurf {
    constructor(P: gp_Pnt, Surface: any, Algo: Extrema_ExtAlgo);
  }

  export declare class GeomAPI_ProjectPointOnSurf_3 extends GeomAPI_ProjectPointOnSurf {
    constructor(P: gp_Pnt, Surface: any, Tolerance: Standard_Real, Algo: Extrema_ExtAlgo);
  }

  export declare class GeomAPI_ProjectPointOnSurf_4 extends GeomAPI_ProjectPointOnSurf {
    constructor(P: gp_Pnt, Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Tolerance: Standard_Real, Algo: Extrema_ExtAlgo);
  }

  export declare class GeomAPI_ProjectPointOnSurf_5 extends GeomAPI_ProjectPointOnSurf {
    constructor(P: gp_Pnt, Surface: any, Umin: Standard_Real, Usup: Standard_Real, Vmin: Standard_Real, Vsup: Standard_Real, Algo: Extrema_ExtAlgo);
  }

export declare class Geom2dAPI_InterCurveCurve {
  Init_1(C1: any, C2: any, Tol: Standard_Real): void;
  Init_2(C1: any, Tol: Standard_Real): void;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt2d;
  NbSegments(): Standard_Integer;
  Segment(Index: Standard_Integer, Curve1: any, Curve2: any): void;
  Intersector(): Geom2dInt_GInter;
  delete(): void;
}

  export declare class Geom2dAPI_InterCurveCurve_1 extends Geom2dAPI_InterCurveCurve {
    constructor();
  }

  export declare class Geom2dAPI_InterCurveCurve_2 extends Geom2dAPI_InterCurveCurve {
    constructor(C1: any, C2: any, Tol: Standard_Real);
  }

  export declare class Geom2dAPI_InterCurveCurve_3 extends Geom2dAPI_InterCurveCurve {
    constructor(C1: any, Tol: Standard_Real);
  }

export declare class Geom2dAPI_ProjectPointOnCurve {
  Init_1(P: gp_Pnt2d, Curve: any): void;
  Init_2(P: gp_Pnt2d, Curve: any, Umin: Standard_Real, Usup: Standard_Real): void;
  NbPoints(): Standard_Integer;
  Point(Index: Standard_Integer): gp_Pnt2d;
  Parameter_1(Index: Standard_Integer): Standard_Real;
  Parameter_2(Index: Standard_Integer, U: Standard_Real): void;
  Distance(Index: Standard_Integer): Standard_Real;
  NearestPoint(): gp_Pnt2d;
  LowerDistanceParameter(): Standard_Real;
  LowerDistance(): Standard_Real;
  Extrema(): Extrema_ExtPC2d;
  delete(): void;
}

  export declare class Geom2dAPI_ProjectPointOnCurve_1 extends Geom2dAPI_ProjectPointOnCurve {
    constructor();
  }

  export declare class Geom2dAPI_ProjectPointOnCurve_2 extends Geom2dAPI_ProjectPointOnCurve {
    constructor(P: gp_Pnt2d, Curve: any);
  }

  export declare class Geom2dAPI_ProjectPointOnCurve_3 extends Geom2dAPI_ProjectPointOnCurve {
    constructor(P: gp_Pnt2d, Curve: any, Umin: Standard_Real, Usup: Standard_Real);
  }

export declare class Geom2dGcc_Lin2dTanObl {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Lin2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Intersection2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  delete(): void;
}

  export declare class Geom2dGcc_Lin2dTanObl_1 extends Geom2dGcc_Lin2dTanObl {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, TheLin: gp_Lin2d, TolAng: Standard_Real, Angle: Standard_Real);
  }

  export declare class Geom2dGcc_Lin2dTanObl_2 extends Geom2dGcc_Lin2dTanObl {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, TheLin: gp_Lin2d, TolAng: Standard_Real, Param1: Standard_Real, Angle: Standard_Real);
  }

export declare class Geom2dGcc_Circ2d3Tan {
  Results(Circ: GccAna_Circ2d3Tan, Rank1: Standard_Integer, Rank2: Standard_Integer, Rank3: Standard_Integer): void;
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Circ2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position, Qualif3: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency3(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Standard_Integer): Standard_Boolean;
  IsTheSame2(Index: Standard_Integer): Standard_Boolean;
  IsTheSame3(Index: Standard_Integer): Standard_Boolean;
  delete(): void;
}

  export declare class Geom2dGcc_Circ2d3Tan_1 extends Geom2dGcc_Circ2d3Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Qualified2: Geom2dGcc_QualifiedCurve, Qualified3: Geom2dGcc_QualifiedCurve, Tolerance: Standard_Real, Param1: Standard_Real, Param2: Standard_Real, Param3: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d3Tan_2 extends Geom2dGcc_Circ2d3Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Qualified2: Geom2dGcc_QualifiedCurve, Point: any, Tolerance: Standard_Real, Param1: Standard_Real, Param2: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d3Tan_3 extends Geom2dGcc_Circ2d3Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Point1: any, Point2: any, Tolerance: Standard_Real, Param1: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d3Tan_4 extends Geom2dGcc_Circ2d3Tan {
    constructor(Point1: any, Point2: any, Point3: any, Tolerance: Standard_Real);
  }

export declare class Geom2dGcc_Circ2d2TanOn {
  Results_1(Circ: GccAna_Circ2d2TanOn): void;
  Results_2(Circ: Geom2dGcc_Circ2d2TanOnGeo): void;
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Circ2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  CenterOn3(Index: Standard_Integer, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Standard_Integer): Standard_Boolean;
  IsTheSame2(Index: Standard_Integer): Standard_Boolean;
  delete(): void;
}

  export declare class Geom2dGcc_Circ2d2TanOn_1 extends Geom2dGcc_Circ2d2TanOn {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Qualified2: Geom2dGcc_QualifiedCurve, OnCurve: Geom2dAdaptor_Curve, Tolerance: Standard_Real, Param1: Standard_Real, Param2: Standard_Real, ParamOn: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d2TanOn_2 extends Geom2dGcc_Circ2d2TanOn {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Point: any, OnCurve: Geom2dAdaptor_Curve, Tolerance: Standard_Real, Param1: Standard_Real, ParamOn: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d2TanOn_3 extends Geom2dGcc_Circ2d2TanOn {
    constructor(Point1: any, Point2: any, OnCurve: Geom2dAdaptor_Curve, Tolerance: Standard_Real);
  }

export declare class Geom2dGcc_Circ2dTanCen {
  constructor(Qualified1: Geom2dGcc_QualifiedCurve, Pcenter: any, Tolerance: Standard_Real)
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Circ2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Standard_Integer): Standard_Boolean;
  delete(): void;
}

export declare class Geom2dGcc_Circ2d2TanRad {
  Results_1(Circ: GccAna_Circ2d2TanRad): void;
  Results_2(Circ: Geom2dGcc_Circ2d2TanRadGeo): void;
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Circ2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Standard_Integer): Standard_Boolean;
  IsTheSame2(Index: Standard_Integer): Standard_Boolean;
  delete(): void;
}

  export declare class Geom2dGcc_Circ2d2TanRad_1 extends Geom2dGcc_Circ2d2TanRad {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Qualified2: Geom2dGcc_QualifiedCurve, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d2TanRad_2 extends Geom2dGcc_Circ2d2TanRad {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Point: any, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2d2TanRad_3 extends Geom2dGcc_Circ2d2TanRad {
    constructor(Point1: any, Point2: any, Radius: Standard_Real, Tolerance: Standard_Real);
  }

export declare class Geom2dGcc_QualifiedCurve {
  constructor(Curve: Geom2dAdaptor_Curve, Qualifier: GccEnt_Position)
  Qualified(): Geom2dAdaptor_Curve;
  Qualifier(): GccEnt_Position;
  IsUnqualified(): Standard_Boolean;
  IsEnclosing(): Standard_Boolean;
  IsEnclosed(): Standard_Boolean;
  IsOutside(): Standard_Boolean;
  delete(): void;
}

export declare class Geom2dGcc_Lin2d2Tan {
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Lin2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position, Qualif2: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  Tangency2(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  delete(): void;
}

  export declare class Geom2dGcc_Lin2d2Tan_1 extends Geom2dGcc_Lin2d2Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Qualified2: Geom2dGcc_QualifiedCurve, Tolang: Standard_Real);
  }

  export declare class Geom2dGcc_Lin2d2Tan_2 extends Geom2dGcc_Lin2d2Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, ThePoint: gp_Pnt2d, Tolang: Standard_Real);
  }

  export declare class Geom2dGcc_Lin2d2Tan_3 extends Geom2dGcc_Lin2d2Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, Qualified2: Geom2dGcc_QualifiedCurve, Tolang: Standard_Real, Param1: Standard_Real, Param2: Standard_Real);
  }

  export declare class Geom2dGcc_Lin2d2Tan_4 extends Geom2dGcc_Lin2d2Tan {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, ThePoint: gp_Pnt2d, Tolang: Standard_Real, Param1: Standard_Real);
  }

export declare class Geom2dGcc_Circ2dTanOnRad {
  Results_1(Circ: GccAna_Circ2dTanOnRad): void;
  Results_2(Circ: Geom2dGcc_Circ2dTanOnRadGeo): void;
  IsDone(): Standard_Boolean;
  NbSolutions(): Standard_Integer;
  ThisSolution(Index: Standard_Integer): gp_Circ2d;
  WhichQualifier(Index: Standard_Integer, Qualif1: GccEnt_Position): void;
  Tangency1(Index: Standard_Integer, ParSol: Standard_Real, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  CenterOn3(Index: Standard_Integer, ParArg: Standard_Real, PntSol: gp_Pnt2d): void;
  IsTheSame1(Index: Standard_Integer): Standard_Boolean;
  delete(): void;
}

  export declare class Geom2dGcc_Circ2dTanOnRad_1 extends Geom2dGcc_Circ2dTanOnRad {
    constructor(Qualified1: Geom2dGcc_QualifiedCurve, OnCurv: Geom2dAdaptor_Curve, Radius: Standard_Real, Tolerance: Standard_Real);
  }

  export declare class Geom2dGcc_Circ2dTanOnRad_2 extends Geom2dGcc_Circ2dTanOnRad {
    constructor(Point1: any, OnCurv: Geom2dAdaptor_Curve, Radius: Standard_Real, Tolerance: Standard_Real);
  }

export declare type GccEnt_Position = {
  GccEnt_unqualified: {};
  GccEnt_enclosing: {};
  GccEnt_enclosed: {};
  GccEnt_outside: {};
  GccEnt_noqualifier: {};
}

export declare class HLRBRep_Algo extends HLRBRep_InternalAlgo {
  Add_1(S: TopoDS_Shape, SData: any, nbIso: Standard_Integer): void;
  Add_2(S: TopoDS_Shape, nbIso: Standard_Integer): void;
  Index(S: TopoDS_Shape): Standard_Integer;
  OutLinedShapeNullify(): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class HLRBRep_Algo_1 extends HLRBRep_Algo {
    constructor();
  }

  export declare class HLRBRep_Algo_2 extends HLRBRep_Algo {
    constructor(A: any);
  }

export declare class HLRBRep_HLRToShape {
  constructor(A: any)
  VCompound_1(): TopoDS_Shape;
  VCompound_2(S: TopoDS_Shape): TopoDS_Shape;
  Rg1LineVCompound_1(): TopoDS_Shape;
  Rg1LineVCompound_2(S: TopoDS_Shape): TopoDS_Shape;
  RgNLineVCompound_1(): TopoDS_Shape;
  RgNLineVCompound_2(S: TopoDS_Shape): TopoDS_Shape;
  OutLineVCompound_1(): TopoDS_Shape;
  OutLineVCompound3d(): TopoDS_Shape;
  OutLineVCompound_2(S: TopoDS_Shape): TopoDS_Shape;
  IsoLineVCompound_1(): TopoDS_Shape;
  IsoLineVCompound_2(S: TopoDS_Shape): TopoDS_Shape;
  HCompound_1(): TopoDS_Shape;
  HCompound_2(S: TopoDS_Shape): TopoDS_Shape;
  Rg1LineHCompound_1(): TopoDS_Shape;
  Rg1LineHCompound_2(S: TopoDS_Shape): TopoDS_Shape;
  RgNLineHCompound_1(): TopoDS_Shape;
  RgNLineHCompound_2(S: TopoDS_Shape): TopoDS_Shape;
  OutLineHCompound_1(): TopoDS_Shape;
  OutLineHCompound_2(S: TopoDS_Shape): TopoDS_Shape;
  IsoLineHCompound_1(): TopoDS_Shape;
  IsoLineHCompound_2(S: TopoDS_Shape): TopoDS_Shape;
  CompoundOfEdges_1(type: HLRBRep_TypeOfResultingEdge, visible: Standard_Boolean, In3d: Standard_Boolean): TopoDS_Shape;
  CompoundOfEdges_2(S: TopoDS_Shape, type: HLRBRep_TypeOfResultingEdge, visible: Standard_Boolean, In3d: Standard_Boolean): TopoDS_Shape;
  delete(): void;
}

export declare class HLRBRep_InternalAlgo extends Standard_Transient {
  Projector_1(P: HLRAlgo_Projector): void;
  Projector_2(): HLRAlgo_Projector;
  Update(): void;
  Load_1(S: any, SData: any, nbIso: Standard_Integer): void;
  Load_2(S: any, nbIso: Standard_Integer): void;
  Index(S: any): Standard_Integer;
  Remove(I: Standard_Integer): void;
  ShapeData(I: Standard_Integer, SData: any): void;
  SeqOfShapeBounds(): any;
  NbShapes(): Standard_Integer;
  ShapeBounds(I: Standard_Integer): HLRBRep_ShapeBounds;
  InitEdgeStatus(): void;
  Select_1(): void;
  Select_2(I: Standard_Integer): void;
  SelectEdge(I: Standard_Integer): void;
  SelectFace(I: Standard_Integer): void;
  ShowAll_1(): void;
  ShowAll_2(I: Standard_Integer): void;
  HideAll_1(): void;
  HideAll_2(I: Standard_Integer): void;
  PartialHide(): void;
  Hide_1(): void;
  Hide_2(I: Standard_Integer): void;
  Hide_3(I: Standard_Integer, J: Standard_Integer): void;
  Debug_1(deb: Standard_Boolean): void;
  Debug_2(): Standard_Boolean;
  DataStructure(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class HLRBRep_InternalAlgo_1 extends HLRBRep_InternalAlgo {
    constructor();
  }

  export declare class HLRBRep_InternalAlgo_2 extends HLRBRep_InternalAlgo {
    constructor(A: any);
  }

export declare class HLRAlgo_Projector {
  Set(T: gp_Trsf, Persp: Standard_Boolean, Focus: Standard_Real): void;
  Directions(D1: gp_Vec2d, D2: gp_Vec2d, D3: gp_Vec2d): void;
  Scaled(On: Standard_Boolean): void;
  Perspective(): Standard_Boolean;
  Transformation(): gp_Trsf;
  InvertedTransformation(): gp_Trsf;
  FullTransformation(): gp_Trsf;
  Focus(): Standard_Real;
  Transform_1(D: gp_Vec): void;
  Transform_2(Pnt: gp_Pnt): void;
  Project_1(P: gp_Pnt, Pout: gp_Pnt2d): void;
  Project_2(P: gp_Pnt, X: Standard_Real, Y: Standard_Real, Z: Standard_Real): void;
  Project_3(P: gp_Pnt, D1: gp_Vec, Pout: gp_Pnt2d, D1out: gp_Vec2d): void;
  Shoot(X: Standard_Real, Y: Standard_Real): gp_Lin;
  delete(): void;
}

  export declare class HLRAlgo_Projector_1 extends HLRAlgo_Projector {
    constructor();
  }

  export declare class HLRAlgo_Projector_2 extends HLRAlgo_Projector {
    constructor(CS: gp_Ax2);
  }

  export declare class HLRAlgo_Projector_3 extends HLRAlgo_Projector {
    constructor(CS: gp_Ax2, Focus: Standard_Real);
  }

  export declare class HLRAlgo_Projector_4 extends HLRAlgo_Projector {
    constructor(T: gp_Trsf, Persp: Standard_Boolean, Focus: Standard_Real);
  }

  export declare class HLRAlgo_Projector_5 extends HLRAlgo_Projector {
    constructor(T: gp_Trsf, Persp: Standard_Boolean, Focus: Standard_Real, v1: gp_Vec2d, v2: gp_Vec2d, v3: gp_Vec2d);
  }

export declare class ShapeUpgrade_UnifySameDomain extends Standard_Transient {
  Initialize(aShape: TopoDS_Shape, UnifyEdges: Standard_Boolean, UnifyFaces: Standard_Boolean, ConcatBSplines: Standard_Boolean): void;
  AllowInternalEdges(theValue: Standard_Boolean): void;
  KeepShape(theShape: TopoDS_Shape): void;
  KeepShapes(theShapes: NCollection_Map<TopoDS_Shape, TopTools_ShapeMapHasher>): void;
  SetSafeInputMode(theValue: Standard_Boolean): void;
  SetLinearTolerance(theValue: Standard_Real): void;
  SetAngularTolerance(theValue: Standard_Real): void;
  Build(): void;
  Shape(): TopoDS_Shape;
  History_1(): any;
  History_2(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class ShapeUpgrade_UnifySameDomain_1 extends ShapeUpgrade_UnifySameDomain {
    constructor();
  }

  export declare class ShapeUpgrade_UnifySameDomain_2 extends ShapeUpgrade_UnifySameDomain {
    constructor(aShape: TopoDS_Shape, UnifyEdges: Standard_Boolean, UnifyFaces: Standard_Boolean, ConcatBSplines: Standard_Boolean);
  }

export declare class ShapeAnalysis_Curve {
  constructor();
  Project_1(C3D: any, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real, AdjustToEnds: Standard_Boolean): Standard_Real;
  Project_2(C3D: Adaptor3d_Curve, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real, AdjustToEnds: Standard_Boolean): Standard_Real;
  Project_3(C3D: any, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real, cf: Standard_Real, cl: Standard_Real, AdjustToEnds: Standard_Boolean): Standard_Real;
  ProjectAct(C3D: Adaptor3d_Curve, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real): Standard_Real;
  NextProject_1(paramPrev: Standard_Real, C3D: any, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real, cf: Standard_Real, cl: Standard_Real, AdjustToEnds: Standard_Boolean): Standard_Real;
  NextProject_2(paramPrev: Standard_Real, C3D: Adaptor3d_Curve, P3D: gp_Pnt, preci: Standard_Real, proj: gp_Pnt, param: Standard_Real): Standard_Real;
  ValidateRange(Crv: any, First: Standard_Real, Last: Standard_Real, prec: Standard_Real): Standard_Boolean;
  FillBndBox(C2d: any, First: Standard_Real, Last: Standard_Real, NPoints: Standard_Integer, Exact: Standard_Boolean, Box: Bnd_Box2d): void;
  SelectForwardSeam(C1: any, C2: any): Standard_Integer;
  static IsPlanar_1(pnts: NCollection_Array1<gp_Pnt>, Normal: gp_XYZ, preci: Standard_Real): Standard_Boolean;
  static IsPlanar_2(curve: any, Normal: gp_XYZ, preci: Standard_Real): Standard_Boolean;
  static GetSamplePoints_1(curve: any, first: Standard_Real, last: Standard_Real, seq: NCollection_Sequence<gp_Pnt2d>): Standard_Boolean;
  static GetSamplePoints_2(curve: any, first: Standard_Real, last: Standard_Real, seq: NCollection_Sequence<gp_Pnt>): Standard_Boolean;
  static IsClosed(curve: any, preci: Standard_Real): Standard_Boolean;
  static IsPeriodic_1(curve: any): Standard_Boolean;
  static IsPeriodic_2(curve: any): Standard_Boolean;
  delete(): void;
}

export declare class ShapeAnalysis_FreeBounds {
  GetClosedWires(): TopoDS_Compound;
  GetOpenWires(): TopoDS_Compound;
  static ConnectEdgesToWires_1(edges: any, toler: Standard_Real, shared: Standard_Boolean): any;
  static ConnectEdgesToWires_2(edges: any, toler: Standard_Real, shared: Standard_Boolean, wires: any): void;
  static ConnectWiresToWires_1(iwires: any, toler: Standard_Real, shared: Standard_Boolean): any;
  static ConnectWiresToWires_2(iwires: any, toler: Standard_Real, shared: Standard_Boolean, owires: any): void;
  static ConnectWiresToWires_3(iwires: any, toler: Standard_Real, shared: Standard_Boolean, vertices: NCollection_DataMap<TopoDS_Shape, TopoDS_Shape, TopTools_ShapeMapHasher>): any;
  static ConnectWiresToWires_4(iwires: any, toler: Standard_Real, shared: Standard_Boolean, owires: any, vertices: NCollection_DataMap<TopoDS_Shape, TopoDS_Shape, TopTools_ShapeMapHasher>): void;
  static SplitWires_1(wires: any, toler: Standard_Real, shared: Standard_Boolean, closed: any, open: any): void;
  static DispatchWires(wires: any, closed: TopoDS_Compound, open: TopoDS_Compound): void;
  delete(): void;
}

  export declare class ShapeAnalysis_FreeBounds_1 extends ShapeAnalysis_FreeBounds {
    constructor();
  }

  export declare class ShapeAnalysis_FreeBounds_2 extends ShapeAnalysis_FreeBounds {
    constructor(shape: TopoDS_Shape, toler: Standard_Real, splitclosed: Standard_Boolean, splitopen: Standard_Boolean);
  }

  export declare class ShapeAnalysis_FreeBounds_3 extends ShapeAnalysis_FreeBounds {
    constructor(shape: TopoDS_Shape, splitclosed: Standard_Boolean, splitopen: Standard_Boolean, checkinternaledges: Standard_Boolean);
  }

export declare class ShapeAnalysis_Edge {
  constructor()
  HasCurve3d(edge: TopoDS_Edge): Standard_Boolean;
  Curve3d(edge: TopoDS_Edge, C3d: any, cf: Standard_Real, cl: Standard_Real, orient: Standard_Boolean): Standard_Boolean;
  IsClosed3d(edge: TopoDS_Edge): Standard_Boolean;
  HasPCurve_1(edge: TopoDS_Edge, face: TopoDS_Face): Standard_Boolean;
  HasPCurve_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location): Standard_Boolean;
  PCurve_1(edge: TopoDS_Edge, face: TopoDS_Face, C2d: any, cf: Standard_Real, cl: Standard_Real, orient: Standard_Boolean): Standard_Boolean;
  PCurve_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location, C2d: any, cf: Standard_Real, cl: Standard_Real, orient: Standard_Boolean): Standard_Boolean;
  BoundUV_1(edge: TopoDS_Edge, face: TopoDS_Face, first: gp_Pnt2d, last: gp_Pnt2d): Standard_Boolean;
  BoundUV_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location, first: gp_Pnt2d, last: gp_Pnt2d): Standard_Boolean;
  IsSeam_1(edge: TopoDS_Edge, face: TopoDS_Face): Standard_Boolean;
  IsSeam_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location): Standard_Boolean;
  FirstVertex(edge: TopoDS_Edge): TopoDS_Vertex;
  LastVertex(edge: TopoDS_Edge): TopoDS_Vertex;
  GetEndTangent2d_1(edge: TopoDS_Edge, face: TopoDS_Face, atEnd: Standard_Boolean, pos: gp_Pnt2d, tang: gp_Vec2d, dparam: Standard_Real): Standard_Boolean;
  GetEndTangent2d_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location, atEnd: Standard_Boolean, pos: gp_Pnt2d, tang: gp_Vec2d, dparam: Standard_Real): Standard_Boolean;
  CheckVerticesWithCurve3d(edge: TopoDS_Edge, preci: Standard_Real, vtx: Standard_Integer): Standard_Boolean;
  CheckVerticesWithPCurve_1(edge: TopoDS_Edge, face: TopoDS_Face, preci: Standard_Real, vtx: Standard_Integer): Standard_Boolean;
  CheckVerticesWithPCurve_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location, preci: Standard_Real, vtx: Standard_Integer): Standard_Boolean;
  CheckVertexTolerance_1(edge: TopoDS_Edge, face: TopoDS_Face, toler1: Standard_Real, toler2: Standard_Real): Standard_Boolean;
  CheckVertexTolerance_2(edge: TopoDS_Edge, toler1: Standard_Real, toler2: Standard_Real): Standard_Boolean;
  CheckCurve3dWithPCurve_1(edge: TopoDS_Edge, face: TopoDS_Face): Standard_Boolean;
  CheckCurve3dWithPCurve_2(edge: TopoDS_Edge, surface: any, location: TopLoc_Location): Standard_Boolean;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  CheckSameParameter_1(edge: TopoDS_Edge, maxdev: Standard_Real, NbControl: Standard_Integer): Standard_Boolean;
  CheckSameParameter_2(theEdge: TopoDS_Edge, theFace: TopoDS_Face, theMaxdev: Standard_Real, theNbControl: Standard_Integer): Standard_Boolean;
  CheckPCurveRange(theFirst: Standard_Real, theLast: Standard_Real, thePC: any): Standard_Boolean;
  CheckOverlapping(theEdge1: TopoDS_Edge, theEdge2: TopoDS_Edge, theTolOverlap: Standard_Real, theDomainDist: Standard_Real): Standard_Boolean;
  delete(): void;
}

export declare class ShapeCustom_RestrictionParameters extends Standard_Transient {
  constructor()
  GMaxDegree(): Standard_Integer;
  GMaxSeg(): Standard_Integer;
  ConvertPlane(): Standard_Boolean;
  ConvertBezierSurf(): Standard_Boolean;
  ConvertRevolutionSurf(): Standard_Boolean;
  ConvertExtrusionSurf(): Standard_Boolean;
  ConvertOffsetSurf(): Standard_Boolean;
  ConvertCylindricalSurf(): Standard_Boolean;
  ConvertConicalSurf(): Standard_Boolean;
  ConvertToroidalSurf(): Standard_Boolean;
  ConvertSphericalSurf(): Standard_Boolean;
  SegmentSurfaceMode(): Standard_Boolean;
  ConvertCurve3d(): Standard_Boolean;
  ConvertOffsetCurv3d(): Standard_Boolean;
  ConvertCurve2d(): Standard_Boolean;
  ConvertOffsetCurv2d(): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class ShapeCustom {
  constructor();
  static ApplyModifier(S: TopoDS_Shape, M: any, context: NCollection_DataMap<TopoDS_Shape, TopoDS_Shape, TopTools_ShapeMapHasher>, MD: BRepTools_Modifier, theProgress: Message_ProgressRange, aReShape: any): TopoDS_Shape;
  static DirectFaces(S: TopoDS_Shape): TopoDS_Shape;
  static ScaleShape(S: TopoDS_Shape, scale: Standard_Real): TopoDS_Shape;
  static BSplineRestriction(S: TopoDS_Shape, Tol3d: Standard_Real, Tol2d: Standard_Real, MaxDegree: Standard_Integer, MaxNbSegment: Standard_Integer, Continuity3d: GeomAbs_Shape, Continuity2d: GeomAbs_Shape, Degree: Standard_Boolean, Rational: Standard_Boolean, aParameters: any): TopoDS_Shape;
  static ConvertToRevolution(S: TopoDS_Shape): TopoDS_Shape;
  static SweptToElementary(S: TopoDS_Shape): TopoDS_Shape;
  static ConvertToBSpline(S: TopoDS_Shape, extrMode: Standard_Boolean, revolMode: Standard_Boolean, offsetMode: Standard_Boolean, planeMode: Standard_Boolean): TopoDS_Shape;
  delete(): void;
}

export declare class ShapeFix_Wire extends ShapeFix_Root {
  ClearModes(): void;
  ClearStatuses(): void;
  Init_1(wire: TopoDS_Wire, face: TopoDS_Face, prec: Standard_Real): void;
  Init_2(saw: any): void;
  Load_1(wire: TopoDS_Wire): void;
  Load_2(sbwd: any): void;
  SetFace_1(face: TopoDS_Face): void;
  SetFace_2(theFace: TopoDS_Face, theSurfaceAnalysis: any): void;
  SetSurface_1(theSurfaceAnalysis: any): void;
  SetSurface_2(surf: any): void;
  SetSurface_3(surf: any, loc: TopLoc_Location): void;
  SetPrecision(prec: Standard_Real): void;
  SetMaxTailAngle(theMaxTailAngle: Standard_Real): void;
  SetMaxTailWidth(theMaxTailWidth: Standard_Real): void;
  IsLoaded(): Standard_Boolean;
  IsReady(): Standard_Boolean;
  NbEdges(): Standard_Integer;
  Wire(): TopoDS_Wire;
  WireAPIMake(): TopoDS_Wire;
  Analyzer(): any;
  WireData(): any;
  Face(): TopoDS_Face;
  ModifyTopologyMode(): Standard_Boolean;
  ModifyGeometryMode(): Standard_Boolean;
  ModifyRemoveLoopMode(): Standard_Integer;
  ClosedWireMode(): Standard_Boolean;
  PreferencePCurveMode(): Standard_Boolean;
  FixGapsByRangesMode(): Standard_Boolean;
  FixReorderMode(): Standard_Integer;
  FixSmallMode(): Standard_Integer;
  FixConnectedMode(): Standard_Integer;
  FixEdgeCurvesMode(): Standard_Integer;
  FixDegeneratedMode(): Standard_Integer;
  FixSelfIntersectionMode(): Standard_Integer;
  FixLackingMode(): Standard_Integer;
  FixGaps3dMode(): Standard_Integer;
  FixGaps2dMode(): Standard_Integer;
  FixReversed2dMode(): Standard_Integer;
  FixRemovePCurveMode(): Standard_Integer;
  FixAddPCurveMode(): Standard_Integer;
  FixRemoveCurve3dMode(): Standard_Integer;
  FixAddCurve3dMode(): Standard_Integer;
  FixSeamMode(): Standard_Integer;
  FixShiftedMode(): Standard_Integer;
  FixSameParameterMode(): Standard_Integer;
  FixVertexToleranceMode(): Standard_Integer;
  FixNotchedEdgesMode(): Standard_Integer;
  FixSelfIntersectingEdgeMode(): Standard_Integer;
  FixIntersectingEdgesMode(): Standard_Integer;
  FixNonAdjacentIntersectingEdgesMode(): Standard_Integer;
  FixTailMode(): Standard_Integer;
  Perform(theProgress: Message_ProgressRange): Standard_Boolean;
  FixReorder_1(theModeBoth: Standard_Boolean): Standard_Boolean;
  FixSmall_1(lockvtx: Standard_Boolean, precsmall: Standard_Real): Standard_Integer;
  FixConnected_1(prec: Standard_Real): Standard_Boolean;
  FixEdgeCurves(): Standard_Boolean;
  FixDegenerated_1(): Standard_Boolean;
  FixSelfIntersection(): Standard_Boolean;
  FixLacking_1(force: Standard_Boolean): Standard_Boolean;
  FixClosed(prec: Standard_Real): Standard_Boolean;
  FixGaps3d(): Standard_Boolean;
  FixGaps2d(): Standard_Boolean;
  FixReorder_2(wi: ShapeAnalysis_WireOrder): Standard_Boolean;
  FixSmall_2(num: Standard_Integer, lockvtx: Standard_Boolean, precsmall: Standard_Real): Standard_Boolean;
  FixConnected_2(num: Standard_Integer, prec: Standard_Real, theUpdateWire: Standard_Boolean): Standard_Boolean;
  FixSeam(num: Standard_Integer): Standard_Boolean;
  FixShifted(): Standard_Boolean;
  FixDegenerated_2(num: Standard_Integer): Standard_Boolean;
  FixLacking_2(num: Standard_Integer, force: Standard_Boolean): Standard_Boolean;
  FixNotchedEdges(): Standard_Boolean;
  FixGap3d(num: Standard_Integer, convert: Standard_Boolean): Standard_Boolean;
  FixGap2d(num: Standard_Integer, convert: Standard_Boolean): Standard_Boolean;
  FixTails(): Standard_Boolean;
  StatusReorder(status: ShapeExtend_Status): Standard_Boolean;
  StatusSmall(status: ShapeExtend_Status): Standard_Boolean;
  StatusConnected(status: ShapeExtend_Status): Standard_Boolean;
  StatusEdgeCurves(status: ShapeExtend_Status): Standard_Boolean;
  StatusDegenerated(status: ShapeExtend_Status): Standard_Boolean;
  StatusSelfIntersection(status: ShapeExtend_Status): Standard_Boolean;
  StatusLacking(status: ShapeExtend_Status): Standard_Boolean;
  StatusClosed(status: ShapeExtend_Status): Standard_Boolean;
  StatusGaps3d(status: ShapeExtend_Status): Standard_Boolean;
  StatusGaps2d(status: ShapeExtend_Status): Standard_Boolean;
  StatusNotches(status: ShapeExtend_Status): Standard_Boolean;
  StatusRemovedSegment(): Standard_Boolean;
  StatusFixTails(status: ShapeExtend_Status): Standard_Boolean;
  LastFixStatus(status: ShapeExtend_Status): Standard_Boolean;
  FixEdgeTool(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class ShapeFix_Wire_1 extends ShapeFix_Wire {
    constructor();
  }

  export declare class ShapeFix_Wire_2 extends ShapeFix_Wire {
    constructor(wire: TopoDS_Wire, face: TopoDS_Face, prec: Standard_Real);
  }

export declare class ShapeFix_Solid extends ShapeFix_Root {
  Init(solid: TopoDS_Solid): void;
  Perform(theProgress: Message_ProgressRange): Standard_Boolean;
  SolidFromShell(shell: TopoDS_Shell): TopoDS_Solid;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  Solid(): TopoDS_Shape;
  FixShellTool(): any;
  SetMsgRegistrator(msgreg: any): void;
  SetPrecision(preci: Standard_Real): void;
  SetMinTolerance(mintol: Standard_Real): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  FixShellMode(): Standard_Integer;
  FixShellOrientationMode(): Standard_Integer;
  CreateOpenSolidMode(): Standard_Boolean;
  Shape(): TopoDS_Shape;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class ShapeFix_Solid_1 extends ShapeFix_Solid {
    constructor();
  }

  export declare class ShapeFix_Solid_2 extends ShapeFix_Solid {
    constructor(solid: TopoDS_Solid);
  }

export declare class ShapeFix_Wireframe extends ShapeFix_Root {
  ClearStatuses(): void;
  Load(shape: TopoDS_Shape): void;
  FixWireGaps(): Standard_Boolean;
  FixSmallEdges(): Standard_Boolean;
  CheckSmallEdges(theSmallEdges: NCollection_Map<TopoDS_Shape, TopTools_ShapeMapHasher>, theEdgeToFaces: NCollection_DataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>, theFaceWithSmall: NCollection_DataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>, theMultyEdges: NCollection_Map<TopoDS_Shape, TopTools_ShapeMapHasher>): Standard_Boolean;
  MergeSmallEdges(theSmallEdges: NCollection_Map<TopoDS_Shape, TopTools_ShapeMapHasher>, theEdgeToFaces: NCollection_DataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>, theFaceWithSmall: NCollection_DataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>, theMultyEdges: NCollection_Map<TopoDS_Shape, TopTools_ShapeMapHasher>, theModeDrop: Standard_Boolean, theLimitAngle: Standard_Real): Standard_Boolean;
  StatusWireGaps(status: ShapeExtend_Status): Standard_Boolean;
  StatusSmallEdges(status: ShapeExtend_Status): Standard_Boolean;
  Shape(): TopoDS_Shape;
  ModeDropSmallEdges(): Standard_Boolean;
  SetLimitAngle(theLimitAngle: Standard_Real): void;
  LimitAngle(): Standard_Real;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class ShapeFix_Wireframe_1 extends ShapeFix_Wireframe {
    constructor();
  }

  export declare class ShapeFix_Wireframe_2 extends ShapeFix_Wireframe {
    constructor(shape: TopoDS_Shape);
  }

export declare class ShapeFix_Shape extends ShapeFix_Root {
  Init(shape: TopoDS_Shape): void;
  Perform(theProgress: Message_ProgressRange): Standard_Boolean;
  Shape(): TopoDS_Shape;
  FixSolidTool(): any;
  FixShellTool(): any;
  FixFaceTool(): any;
  FixWireTool(): any;
  FixEdgeTool(): any;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  SetMsgRegistrator(msgreg: any): void;
  SetPrecision(preci: Standard_Real): void;
  SetMinTolerance(mintol: Standard_Real): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  FixSolidMode(): Standard_Integer;
  FixFreeShellMode(): Standard_Integer;
  FixFreeFaceMode(): Standard_Integer;
  FixFreeWireMode(): Standard_Integer;
  FixSameParameterMode(): Standard_Integer;
  FixVertexPositionMode(): Standard_Integer;
  FixVertexTolMode(): Standard_Integer;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class ShapeFix_Shape_1 extends ShapeFix_Shape {
    constructor();
  }

  export declare class ShapeFix_Shape_2 extends ShapeFix_Shape {
    constructor(shape: TopoDS_Shape);
  }

export declare class ShapeFix_Face extends ShapeFix_Root {
  ClearModes(): void;
  Init_1(face: TopoDS_Face): void;
  Init_2(surf: any, preci: Standard_Real, fwd: Standard_Boolean): void;
  Init_3(surf: any, preci: Standard_Real, fwd: Standard_Boolean): void;
  SetMsgRegistrator(msgreg: any): void;
  SetPrecision(preci: Standard_Real): void;
  SetMinTolerance(mintol: Standard_Real): void;
  SetMaxTolerance(maxtol: Standard_Real): void;
  FixWireMode(): Standard_Integer;
  FixOrientationMode(): Standard_Integer;
  FixAddNaturalBoundMode(): Standard_Integer;
  FixMissingSeamMode(): Standard_Integer;
  FixSmallAreaWireMode(): Standard_Integer;
  RemoveSmallAreaFaceMode(): Standard_Integer;
  FixIntersectingWiresMode(): Standard_Integer;
  FixLoopWiresMode(): Standard_Integer;
  FixSplitFaceMode(): Standard_Integer;
  AutoCorrectPrecisionMode(): Standard_Integer;
  FixPeriodicDegeneratedMode(): Standard_Integer;
  Face(): TopoDS_Face;
  Result(): TopoDS_Shape;
  Add(wire: TopoDS_Wire): void;
  Perform(theProgress: Message_ProgressRange): Standard_Boolean;
  FixOrientation_1(): Standard_Boolean;
  FixOrientation_2(MapWires: NCollection_DataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>): Standard_Boolean;
  FixAddNaturalBound(): Standard_Boolean;
  FixMissingSeam(): Standard_Boolean;
  FixSmallAreaWire(theIsRemoveSmallFace: Standard_Boolean): Standard_Boolean;
  FixLoopWire(aResWires: NCollection_Sequence<TopoDS_Shape>): Standard_Boolean;
  FixIntersectingWires(): Standard_Boolean;
  FixWiresTwoCoincEdges(): Standard_Boolean;
  FixSplitFace(MapWires: NCollection_DataMap<TopoDS_Shape, NCollection_List<TopoDS_Shape>, TopTools_ShapeMapHasher>): Standard_Boolean;
  FixPeriodicDegenerated(): Standard_Boolean;
  Status(status: ShapeExtend_Status): Standard_Boolean;
  FixWireTool(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class ShapeFix_Face_1 extends ShapeFix_Face {
    constructor();
  }

  export declare class ShapeFix_Face_2 extends ShapeFix_Face {
    constructor(face: TopoDS_Face);
  }

export declare class ShapeFix_Root extends Standard_Transient {
  constructor()
  Set(Root: any): void;
  SetContext(context: any): void;
  Context(): any;
  SetMsgRegistrator(msgreg: any): void;
  MsgRegistrator(): any;
  SetPrecision(preci: Standard_Real): void;
  Precision(): Standard_Real;
  SetMinTolerance(mintol: Standard_Real): void;
  MinTolerance(): Standard_Real;
  SetMaxTolerance(maxtol: Standard_Real): void;
  MaxTolerance(): Standard_Real;
  LimitTolerance(toler: Standard_Real): Standard_Real;
  SendMsg_1(shape: TopoDS_Shape, message: Message_Msg, gravity: Message_Gravity): void;
  SendMsg_2(message: Message_Msg, gravity: Message_Gravity): void;
  SendWarning_1(shape: TopoDS_Shape, message: Message_Msg): void;
  SendWarning_2(message: Message_Msg): void;
  SendFail_1(shape: TopoDS_Shape, message: Message_Msg): void;
  SendFail_2(message: Message_Msg): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class BOPAlgo_ToolsProvider extends BOPAlgo_Builder {
  Clear(): void;
  AddTool(theShape: TopoDS_Shape): void;
  SetTools(theShapes: NCollection_List<TopoDS_Shape>): void;
  Tools(): any;
  delete(): void;
}

  export declare class BOPAlgo_ToolsProvider_1 extends BOPAlgo_ToolsProvider {
    constructor();
  }

  export declare class BOPAlgo_ToolsProvider_2 extends BOPAlgo_ToolsProvider {
    constructor(theAllocator: TDF_HAllocator);
  }

export declare class BOPAlgo_Splitter extends BOPAlgo_ToolsProvider {
  Perform(theRange: Message_ProgressRange): void;
  delete(): void;
}

  export declare class BOPAlgo_Splitter_1 extends BOPAlgo_Splitter {
    constructor();
  }

  export declare class BOPAlgo_Splitter_2 extends BOPAlgo_Splitter {
    constructor(theAllocator: TDF_HAllocator);
  }

export declare class BOPAlgo_Builder extends BOPAlgo_BuilderShape {
  Clear(): void;
  PPaveFiller(): BOPAlgo_PPaveFiller;
  PDS(): BOPDS_PDS;
  Context(): any;
  AddArgument(theShape: TopoDS_Shape): void;
  SetArguments(theLS: NCollection_List<TopoDS_Shape>): void;
  Arguments(): any;
  SetNonDestructive(theFlag: Standard_Boolean): void;
  NonDestructive(): Standard_Boolean;
  SetGlue(theGlue: BOPAlgo_GlueEnum): void;
  Glue(): BOPAlgo_GlueEnum;
  SetCheckInverted(theCheck: Standard_Boolean): void;
  CheckInverted(): Standard_Boolean;
  Perform(theRange: Message_ProgressRange): void;
  PerformWithFiller(theFiller: BOPAlgo_PaveFiller, theRange: Message_ProgressRange): void;
  BuildBOP_1(theObjects: NCollection_List<TopoDS_Shape>, theObjState: TopAbs_State, theTools: NCollection_List<TopoDS_Shape>, theToolsState: TopAbs_State, theRange: Message_ProgressRange, theReport: any): void;
  BuildBOP_2(theObjects: NCollection_List<TopoDS_Shape>, theTools: NCollection_List<TopoDS_Shape>, theOperation: BOPAlgo_Operation, theRange: Message_ProgressRange, theReport: any): void;
  Images(): any;
  Origins(): any;
  ShapesSD(): any;
  delete(): void;
}

  export declare class BOPAlgo_Builder_1 extends BOPAlgo_Builder {
    constructor();
  }

  export declare class BOPAlgo_Builder_2 extends BOPAlgo_Builder {
    constructor(theAllocator: TDF_HAllocator);
  }

export declare class BOPAlgo_BuilderShape extends BOPAlgo_Algo {
  Shape(): TopoDS_Shape;
  Modified(theS: TopoDS_Shape): any;
  Generated(theS: TopoDS_Shape): any;
  IsDeleted(theS: TopoDS_Shape): Standard_Boolean;
  HasModified(): Standard_Boolean;
  HasGenerated(): Standard_Boolean;
  HasDeleted(): Standard_Boolean;
  History(): any;
  SetToFillHistory(theHistFlag: Standard_Boolean): void;
  HasHistory(): Standard_Boolean;
  delete(): void;
}

export declare class BOPAlgo_Options {
  Allocator(): TDF_HAllocator;
  Clear(): void;
  AddError(theAlert: any): void;
  AddWarning(theAlert: any): void;
  HasErrors(): Standard_Boolean;
  HasError(theType: any): Standard_Boolean;
  HasWarnings(): Standard_Boolean;
  HasWarning(theType: any): Standard_Boolean;
  GetReport(): any;
  ClearWarnings(): void;
  static GetParallelMode(): Standard_Boolean;
  static SetParallelMode(theNewMode: Standard_Boolean): void;
  SetRunParallel(theFlag: Standard_Boolean): void;
  RunParallel(): Standard_Boolean;
  SetFuzzyValue(theFuzz: Standard_Real): void;
  FuzzyValue(): Standard_Real;
  SetUseOBB(theUseOBB: Standard_Boolean): void;
  UseOBB(): Standard_Boolean;
  delete(): void;
}

  export declare class BOPAlgo_Options_1 extends BOPAlgo_Options {
    constructor();
  }

  export declare class BOPAlgo_Options_2 extends BOPAlgo_Options {
    constructor(theAllocator: TDF_HAllocator);
  }

export declare type BOPAlgo_GlueEnum = {
  BOPAlgo_GlueOff: {};
  BOPAlgo_GlueShift: {};
  BOPAlgo_GlueFull: {};
}

export declare class BOPAlgo_Algo extends BOPAlgo_Options {
  Perform(theRange: Message_ProgressRange): void;
  delete(): void;
}

export declare class BRepAlgoAPI_Section extends BRepAlgoAPI_BooleanOperation {
  Init1_1(S1: TopoDS_Shape): void;
  Init1_2(Pl: gp_Pln): void;
  Init1_3(Sf: any): void;
  Init2_1(S2: TopoDS_Shape): void;
  Init2_2(Pl: gp_Pln): void;
  Init2_3(Sf: any): void;
  Approximation(B: Standard_Boolean): void;
  ComputePCurveOn1(B: Standard_Boolean): void;
  ComputePCurveOn2(B: Standard_Boolean): void;
  Build(theRange: Message_ProgressRange): void;
  HasAncestorFaceOn1(E: TopoDS_Shape, F: TopoDS_Shape): Standard_Boolean;
  HasAncestorFaceOn2(E: TopoDS_Shape, F: TopoDS_Shape): Standard_Boolean;
  delete(): void;
}

  export declare class BRepAlgoAPI_Section_1 extends BRepAlgoAPI_Section {
    constructor();
  }

  export declare class BRepAlgoAPI_Section_2 extends BRepAlgoAPI_Section {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Section_3 extends BRepAlgoAPI_Section {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Section_4 extends BRepAlgoAPI_Section {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, aDSF: BOPAlgo_PaveFiller, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Section_5 extends BRepAlgoAPI_Section {
    constructor(S1: TopoDS_Shape, Pl: gp_Pln, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Section_6 extends BRepAlgoAPI_Section {
    constructor(S1: TopoDS_Shape, Sf: any, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Section_7 extends BRepAlgoAPI_Section {
    constructor(Sf: any, S2: TopoDS_Shape, PerformNow: Standard_Boolean);
  }

  export declare class BRepAlgoAPI_Section_8 extends BRepAlgoAPI_Section {
    constructor(Sf1: any, Sf2: any, PerformNow: Standard_Boolean);
  }

export declare class BRepAlgoAPI_Fuse extends BRepAlgoAPI_BooleanOperation {
  delete(): void;
}

  export declare class BRepAlgoAPI_Fuse_1 extends BRepAlgoAPI_Fuse {
    constructor();
  }

  export declare class BRepAlgoAPI_Fuse_2 extends BRepAlgoAPI_Fuse {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Fuse_3 extends BRepAlgoAPI_Fuse {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, theRange: Message_ProgressRange);
  }

  export declare class BRepAlgoAPI_Fuse_4 extends BRepAlgoAPI_Fuse {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, aDSF: BOPAlgo_PaveFiller, theRange: Message_ProgressRange);
  }

export declare class BRepAlgoAPI_Cut extends BRepAlgoAPI_BooleanOperation {
  delete(): void;
}

  export declare class BRepAlgoAPI_Cut_1 extends BRepAlgoAPI_Cut {
    constructor();
  }

  export declare class BRepAlgoAPI_Cut_2 extends BRepAlgoAPI_Cut {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Cut_3 extends BRepAlgoAPI_Cut {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, theRange: Message_ProgressRange);
  }

  export declare class BRepAlgoAPI_Cut_4 extends BRepAlgoAPI_Cut {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, aDSF: BOPAlgo_PaveFiller, bFWD: Standard_Boolean, theRange: Message_ProgressRange);
  }

export declare class BRepAlgoAPI_BooleanOperation extends BRepAlgoAPI_BuilderAlgo {
  Shape1(): TopoDS_Shape;
  Shape2(): TopoDS_Shape;
  SetTools(theLS: NCollection_List<TopoDS_Shape>): void;
  Tools(): any;
  SetOperation(theBOP: BOPAlgo_Operation): void;
  Operation(): BOPAlgo_Operation;
  Build(theRange: Message_ProgressRange): void;
  delete(): void;
}

  export declare class BRepAlgoAPI_BooleanOperation_1 extends BRepAlgoAPI_BooleanOperation {
    constructor();
  }

  export declare class BRepAlgoAPI_BooleanOperation_2 extends BRepAlgoAPI_BooleanOperation {
    constructor(thePF: BOPAlgo_PaveFiller);
  }

export declare class BRepAlgoAPI_Common extends BRepAlgoAPI_BooleanOperation {
  delete(): void;
}

  export declare class BRepAlgoAPI_Common_1 extends BRepAlgoAPI_Common {
    constructor();
  }

  export declare class BRepAlgoAPI_Common_2 extends BRepAlgoAPI_Common {
    constructor(PF: BOPAlgo_PaveFiller);
  }

  export declare class BRepAlgoAPI_Common_3 extends BRepAlgoAPI_Common {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, theRange: Message_ProgressRange);
  }

  export declare class BRepAlgoAPI_Common_4 extends BRepAlgoAPI_Common {
    constructor(S1: TopoDS_Shape, S2: TopoDS_Shape, PF: BOPAlgo_PaveFiller, theRange: Message_ProgressRange);
  }

export declare class BRepAlgoAPI_Splitter extends BRepAlgoAPI_BuilderAlgo {
  SetTools(theLS: NCollection_List<TopoDS_Shape>): void;
  Tools(): any;
  Build(theRange: Message_ProgressRange): void;
  delete(): void;
}

  export declare class BRepAlgoAPI_Splitter_1 extends BRepAlgoAPI_Splitter {
    constructor();
  }

  export declare class BRepAlgoAPI_Splitter_2 extends BRepAlgoAPI_Splitter {
    constructor(thePF: BOPAlgo_PaveFiller);
  }

export declare class BRepOffsetAPI_MakeFilling extends BRepBuilderAPI_MakeShape {
  constructor(Degree: Standard_Integer, NbPtsOnCur: Standard_Integer, NbIter: Standard_Integer, Anisotropie: Standard_Boolean, Tol2d: Standard_Real, Tol3d: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real, MaxDeg: Standard_Integer, MaxSegments: Standard_Integer)
  SetConstrParam(Tol2d: Standard_Real, Tol3d: Standard_Real, TolAng: Standard_Real, TolCurv: Standard_Real): void;
  SetResolParam(Degree: Standard_Integer, NbPtsOnCur: Standard_Integer, NbIter: Standard_Integer, Anisotropie: Standard_Boolean): void;
  SetApproxParam(MaxDeg: Standard_Integer, MaxSegments: Standard_Integer): void;
  LoadInitSurface(Surf: TopoDS_Face): void;
  Add_1(Constr: TopoDS_Edge, Order: GeomAbs_Shape, IsBound: Standard_Boolean): Standard_Integer;
  Add_2(Constr: TopoDS_Edge, Support: TopoDS_Face, Order: GeomAbs_Shape, IsBound: Standard_Boolean): Standard_Integer;
  Add_3(Support: TopoDS_Face, Order: GeomAbs_Shape): Standard_Integer;
  Add_4(Point: gp_Pnt): Standard_Integer;
  Add_5(U: Standard_Real, V: Standard_Real, Support: TopoDS_Face, Order: GeomAbs_Shape): Standard_Integer;
  Build(theRange: Message_ProgressRange): void;
  IsDone(): Standard_Boolean;
  Generated(S: TopoDS_Shape): any;
  G0Error_1(): Standard_Real;
  G1Error_1(): Standard_Real;
  G2Error_1(): Standard_Real;
  G0Error_2(Index: Standard_Integer): Standard_Real;
  G1Error_2(Index: Standard_Integer): Standard_Real;
  G2Error_2(Index: Standard_Integer): Standard_Real;
  delete(): void;
}

export declare class BRepOffsetAPI_MakeOffsetShape extends BRepBuilderAPI_MakeShape {
  constructor()
  PerformBySimple(theS: TopoDS_Shape, theOffsetValue: Standard_Real): void;
  PerformByJoin(S: TopoDS_Shape, Offset: Standard_Real, Tol: Standard_Real, Mode: BRepOffset_Mode, Intersection: Standard_Boolean, SelfInter: Standard_Boolean, Join: GeomAbs_JoinType, RemoveIntEdges: Standard_Boolean, theRange: Message_ProgressRange): void;
  MakeOffset(): BRepOffset_MakeOffset;
  Build(theRange: Message_ProgressRange): void;
  Generated(S: TopoDS_Shape): any;
  Modified(S: TopoDS_Shape): any;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  GetJoinType(): GeomAbs_JoinType;
  delete(): void;
}

export declare class BRepOffsetAPI_MakePipe extends BRepPrimAPI_MakeSweep {
  Pipe(): BRepFill_Pipe;
  Build(theRange: Message_ProgressRange): void;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Generated_1(S: TopoDS_Shape): any;
  Generated_2(SSpine: TopoDS_Shape, SProfile: TopoDS_Shape): TopoDS_Shape;
  ErrorOnSurface(): Standard_Real;
  delete(): void;
}

  export declare class BRepOffsetAPI_MakePipe_1 extends BRepOffsetAPI_MakePipe {
    constructor(Spine: TopoDS_Wire, Profile: TopoDS_Shape);
  }

  export declare class BRepOffsetAPI_MakePipe_2 extends BRepOffsetAPI_MakePipe {
    constructor(Spine: TopoDS_Wire, Profile: TopoDS_Shape, aMode: GeomFill_Trihedron, ForceApproxC1: Standard_Boolean);
  }

export declare class BRepOffsetAPI_DraftAngle extends BRepBuilderAPI_ModifyShape {
  Clear(): void;
  Init(S: TopoDS_Shape): void;
  Add(F: TopoDS_Face, Direction: gp_Dir, Angle: Standard_Real, NeutralPlane: gp_Pln, Flag: Standard_Boolean): void;
  AddDone(): Standard_Boolean;
  Remove(F: TopoDS_Face): void;
  ProblematicShape(): TopoDS_Shape;
  Status(): Draft_ErrorStatus;
  ConnectedFaces(F: TopoDS_Face): any;
  ModifiedFaces(): any;
  Build(theRange: Message_ProgressRange): void;
  CorrectWires(): void;
  Generated(S: TopoDS_Shape): any;
  Modified(S: TopoDS_Shape): any;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
  delete(): void;
}

  export declare class BRepOffsetAPI_DraftAngle_1 extends BRepOffsetAPI_DraftAngle {
    constructor();
  }

  export declare class BRepOffsetAPI_DraftAngle_2 extends BRepOffsetAPI_DraftAngle {
    constructor(S: TopoDS_Shape);
  }

export declare class BRepOffsetAPI_ThruSections extends BRepBuilderAPI_MakeShape {
  constructor(isSolid: Standard_Boolean, ruled: Standard_Boolean, pres3d: Standard_Real)
  Init(isSolid: Standard_Boolean, ruled: Standard_Boolean, pres3d: Standard_Real): void;
  AddWire(wire: TopoDS_Wire): void;
  AddVertex(aVertex: TopoDS_Vertex): void;
  CheckCompatibility(check: Standard_Boolean): void;
  SetSmoothing(UseSmoothing: Standard_Boolean): void;
  SetParType(ParType: Approx_ParametrizationType): void;
  SetContinuity(C: GeomAbs_Shape): void;
  SetCriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  SetMaxDegree(MaxDeg: Standard_Integer): void;
  ParType(): Approx_ParametrizationType;
  Continuity(): GeomAbs_Shape;
  MaxDegree(): Standard_Integer;
  UseSmoothing(): Standard_Boolean;
  CriteriumWeight(W1: Standard_Real, W2: Standard_Real, W3: Standard_Real): void;
  Build(theRange: Message_ProgressRange): void;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  GeneratedFace(Edge: TopoDS_Shape): TopoDS_Shape;
  SetMutableInput(theIsMutableInput: Standard_Boolean): void;
  Generated(S: TopoDS_Shape): any;
  Wires(): any;
  IsMutableInput(): Standard_Boolean;
  GetStatus(): BRepFill_ThruSectionErrorStatus;
  delete(): void;
}

export declare class BRepOffsetAPI_MakeOffset extends BRepBuilderAPI_MakeShape {
  Init_1(Spine: TopoDS_Face, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean): void;
  Init_2(Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean): void;
  SetApprox(ToApprox: Standard_Boolean): void;
  AddWire(Spine: TopoDS_Wire): void;
  Perform(Offset: Standard_Real, Alt: Standard_Real): void;
  Build(theRange: Message_ProgressRange): void;
  Generated(S: TopoDS_Shape): any;
  static ConvertFace(theFace: TopoDS_Face, theAngleTolerance: Standard_Real): TopoDS_Face;
  delete(): void;
}

  export declare class BRepOffsetAPI_MakeOffset_1 extends BRepOffsetAPI_MakeOffset {
    constructor();
  }

  export declare class BRepOffsetAPI_MakeOffset_2 extends BRepOffsetAPI_MakeOffset {
    constructor(Spine: TopoDS_Face, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean);
  }

  export declare class BRepOffsetAPI_MakeOffset_3 extends BRepOffsetAPI_MakeOffset {
    constructor(Spine: TopoDS_Wire, Join: GeomAbs_JoinType, IsOpenResult: Standard_Boolean);
  }

export declare class BRepOffsetAPI_MakePipeShell extends BRepPrimAPI_MakeSweep {
  constructor(Spine: TopoDS_Wire)
  SetMode_1(IsFrenet: Standard_Boolean): void;
  SetDiscreteMode(): void;
  SetMode_2(Axe: gp_Ax2): void;
  SetMode_3(BiNormal: gp_Dir): void;
  SetMode_4(SpineSupport: TopoDS_Shape): Standard_Boolean;
  SetMode_5(AuxiliarySpine: TopoDS_Wire, CurvilinearEquivalence: Standard_Boolean, KeepContact: BRepFill_TypeOfContact): void;
  Add_1(Profile: TopoDS_Shape, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  Add_2(Profile: TopoDS_Shape, Location: TopoDS_Vertex, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  SetLaw_1(Profile: TopoDS_Shape, L: any, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  SetLaw_2(Profile: TopoDS_Shape, L: any, Location: TopoDS_Vertex, WithContact: Standard_Boolean, WithCorrection: Standard_Boolean): void;
  Delete(Profile: TopoDS_Shape): void;
  IsReady(): Standard_Boolean;
  GetStatus(): BRepBuilderAPI_PipeError;
  SetTolerance(Tol3d: Standard_Real, BoundTol: Standard_Real, TolAngular: Standard_Real): void;
  SetMaxDegree(NewMaxDegree: Standard_Integer): void;
  SetMaxSegments(NewMaxSegments: Standard_Integer): void;
  SetForceApproxC1(ForceApproxC1: Standard_Boolean): void;
  SetTransitionMode(Mode: BRepBuilderAPI_TransitionMode): void;
  Simulate(NumberOfSection: Standard_Integer, Result: NCollection_List<TopoDS_Shape>): void;
  Build(theRange: Message_ProgressRange): void;
  MakeSolid(): Standard_Boolean;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): any;
  ErrorOnSurface(): Standard_Real;
  SetIsBuildHistory(theIsBuildHistory: Standard_Boolean): void;
  IsBuildHistory(): Standard_Boolean;
  Profiles(theProfiles: NCollection_List<TopoDS_Shape>): void;
  Spine(): TopoDS_Wire;
  delete(): void;
}

export declare class BRepOffsetAPI_MakeThickSolid extends BRepOffsetAPI_MakeOffsetShape {
  constructor()
  MakeThickSolidBySimple(theS: TopoDS_Shape, theOffsetValue: Standard_Real): void;
  MakeThickSolidByJoin(S: TopoDS_Shape, ClosingFaces: NCollection_List<TopoDS_Shape>, Offset: Standard_Real, Tol: Standard_Real, Mode: BRepOffset_Mode, Intersection: Standard_Boolean, SelfInter: Standard_Boolean, Join: GeomAbs_JoinType, RemoveIntEdges: Standard_Boolean, theRange: Message_ProgressRange): void;
  Build(theRange: Message_ProgressRange): void;
  Modified(S: TopoDS_Shape): any;
  delete(): void;
}

export declare type BRepOffset_Mode = {
  BRepOffset_Skin: {};
  BRepOffset_Pipe: {};
  BRepOffset_RectoVerso: {};
}

export declare class BRepMesh_DiscretRoot extends Standard_Transient {
  SetShape(theShape: TopoDS_Shape): void;
  Shape(): TopoDS_Shape;
  IsDone(): Standard_Boolean;
  Perform(theRange: Message_ProgressRange): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class BRepPrimAPI_MakeSphere extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): GLvoid;
  Sphere(): BRepPrim_Sphere;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeSphere_1 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_2 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_3 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_4 extends BRepPrimAPI_MakeSphere {
    constructor(R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_5 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_6 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_7 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_8 extends BRepPrimAPI_MakeSphere {
    constructor(Center: gp_Pnt, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_9 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_10 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_11 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeSphere_12 extends BRepPrimAPI_MakeSphere {
    constructor(Axis: gp_Ax2, R: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle3: Standard_Real);
  }

export declare class BRepPrimAPI_MakeHalfSpace extends BRepBuilderAPI_MakeShape {
  Solid(): TopoDS_Solid;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeHalfSpace_1 extends BRepPrimAPI_MakeHalfSpace {
    constructor(Face: TopoDS_Face, RefPnt: gp_Pnt);
  }

  export declare class BRepPrimAPI_MakeHalfSpace_2 extends BRepPrimAPI_MakeHalfSpace {
    constructor(Shell: TopoDS_Shell, RefPnt: gp_Pnt);
  }

export declare class BRepPrimAPI_MakeCone extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): GLvoid;
  Cone(): BRepPrim_Cone;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeCone_1 extends BRepPrimAPI_MakeCone {
    constructor(R1: Standard_Real, R2: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCone_2 extends BRepPrimAPI_MakeCone {
    constructor(R1: Standard_Real, R2: Standard_Real, H: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCone_3 extends BRepPrimAPI_MakeCone {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCone_4 extends BRepPrimAPI_MakeCone {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, H: Standard_Real, angle: Standard_Real);
  }

export declare class BRepPrimAPI_MakeRevol extends BRepPrimAPI_MakeSweep {
  Revol(): BRepSweep_Revol;
  Build(theRange: Message_ProgressRange): void;
  FirstShape_1(): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): any;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  FirstShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  LastShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  HasDegenerated(): Standard_Boolean;
  Degenerated(): any;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeRevol_1 extends BRepPrimAPI_MakeRevol {
    constructor(S: TopoDS_Shape, A: gp_Ax1, D: Standard_Real, Copy: Standard_Boolean);
  }

  export declare class BRepPrimAPI_MakeRevol_2 extends BRepPrimAPI_MakeRevol {
    constructor(S: TopoDS_Shape, A: gp_Ax1, Copy: Standard_Boolean);
  }

export declare class BRepPrimAPI_MakeWedge extends BRepBuilderAPI_MakeShape {
  Wedge(): BRepPrim_Wedge;
  Build(theRange: Message_ProgressRange): void;
  Shell(): TopoDS_Shell;
  Solid(): TopoDS_Solid;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeWedge_1 extends BRepPrimAPI_MakeWedge {
    constructor(dx: Standard_Real, dy: Standard_Real, dz: Standard_Real, ltx: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeWedge_2 extends BRepPrimAPI_MakeWedge {
    constructor(Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real, ltx: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeWedge_3 extends BRepPrimAPI_MakeWedge {
    constructor(dx: Standard_Real, dy: Standard_Real, dz: Standard_Real, xmin: Standard_Real, zmin: Standard_Real, xmax: Standard_Real, zmax: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeWedge_4 extends BRepPrimAPI_MakeWedge {
    constructor(Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real, xmin: Standard_Real, zmin: Standard_Real, xmax: Standard_Real, zmax: Standard_Real);
  }

export declare class BRepPrimAPI_MakeSweep extends BRepBuilderAPI_MakeShape {
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  delete(): void;
}

export declare class BRepPrimAPI_MakeTorus extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): GLvoid;
  Torus(): BRepPrim_Torus;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeTorus_1 extends BRepPrimAPI_MakeTorus {
    constructor(R1: Standard_Real, R2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_2 extends BRepPrimAPI_MakeTorus {
    constructor(R1: Standard_Real, R2: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_3 extends BRepPrimAPI_MakeTorus {
    constructor(R1: Standard_Real, R2: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_4 extends BRepPrimAPI_MakeTorus {
    constructor(R1: Standard_Real, R2: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_5 extends BRepPrimAPI_MakeTorus {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_6 extends BRepPrimAPI_MakeTorus {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_7 extends BRepPrimAPI_MakeTorus {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, angle1: Standard_Real, angle2: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeTorus_8 extends BRepPrimAPI_MakeTorus {
    constructor(Axes: gp_Ax2, R1: Standard_Real, R2: Standard_Real, angle1: Standard_Real, angle2: Standard_Real, angle: Standard_Real);
  }

export declare class BRepPrimAPI_MakeOneAxis extends BRepBuilderAPI_MakeShape {
  OneAxis(): GLvoid;
  Build(theRange: Message_ProgressRange): void;
  Face(): TopoDS_Face;
  Shell(): TopoDS_Shell;
  Solid(): TopoDS_Solid;
  delete(): void;
}

export declare class BRepPrimAPI_MakeCylinder extends BRepPrimAPI_MakeOneAxis {
  OneAxis(): GLvoid;
  Cylinder(): BRepPrim_Cylinder;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeCylinder_1 extends BRepPrimAPI_MakeCylinder {
    constructor(R: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCylinder_2 extends BRepPrimAPI_MakeCylinder {
    constructor(R: Standard_Real, H: Standard_Real, Angle: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCylinder_3 extends BRepPrimAPI_MakeCylinder {
    constructor(Axes: gp_Ax2, R: Standard_Real, H: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeCylinder_4 extends BRepPrimAPI_MakeCylinder {
    constructor(Axes: gp_Ax2, R: Standard_Real, H: Standard_Real, Angle: Standard_Real);
  }

export declare class BRepPrimAPI_MakeBox extends BRepBuilderAPI_MakeShape {
  Init_1(theDX: Standard_Real, theDY: Standard_Real, theDZ: Standard_Real): void;
  Init_2(thePnt: gp_Pnt, theDX: Standard_Real, theDY: Standard_Real, theDZ: Standard_Real): void;
  Init_3(thePnt1: gp_Pnt, thePnt2: gp_Pnt): void;
  Init_4(theAxes: gp_Ax2, theDX: Standard_Real, theDY: Standard_Real, theDZ: Standard_Real): void;
  Wedge(): BRepPrim_Wedge;
  Build(theRange: Message_ProgressRange): void;
  Shell(): TopoDS_Shell;
  Solid(): TopoDS_Solid;
  BottomFace(): TopoDS_Face;
  BackFace(): TopoDS_Face;
  FrontFace(): TopoDS_Face;
  LeftFace(): TopoDS_Face;
  RightFace(): TopoDS_Face;
  TopFace(): TopoDS_Face;
  delete(): void;
}

  export declare class BRepPrimAPI_MakeBox_1 extends BRepPrimAPI_MakeBox {
    constructor();
  }

  export declare class BRepPrimAPI_MakeBox_2 extends BRepPrimAPI_MakeBox {
    constructor(dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeBox_3 extends BRepPrimAPI_MakeBox {
    constructor(P: gp_Pnt, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

  export declare class BRepPrimAPI_MakeBox_4 extends BRepPrimAPI_MakeBox {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepPrimAPI_MakeBox_5 extends BRepPrimAPI_MakeBox {
    constructor(Axes: gp_Ax2, dx: Standard_Real, dy: Standard_Real, dz: Standard_Real);
  }

export declare class BRepPrimAPI_MakePrism extends BRepPrimAPI_MakeSweep {
  Prism(): BRepSweep_Prism;
  Build(theRange: Message_ProgressRange): void;
  FirstShape_1(): TopoDS_Shape;
  LastShape_1(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): any;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  FirstShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  LastShape_2(theShape: TopoDS_Shape): TopoDS_Shape;
  delete(): void;
}

  export declare class BRepPrimAPI_MakePrism_1 extends BRepPrimAPI_MakePrism {
    constructor(S: TopoDS_Shape, V: gp_Vec, Copy: Standard_Boolean, Canonize: Standard_Boolean);
  }

  export declare class BRepPrimAPI_MakePrism_2 extends BRepPrimAPI_MakePrism {
    constructor(S: TopoDS_Shape, D: gp_Dir, Inf: Standard_Boolean, Copy: Standard_Boolean, Canonize: Standard_Boolean);
  }

export declare class BRepProj_Projection {
  IsDone(): Standard_Boolean;
  Init(): void;
  More(): Standard_Boolean;
  Next(): void;
  Current(): TopoDS_Wire;
  Shape(): TopoDS_Compound;
  delete(): void;
}

  export declare class BRepProj_Projection_1 extends BRepProj_Projection {
    constructor(Wire: TopoDS_Shape, Shape: TopoDS_Shape, D: gp_Dir);
  }

  export declare class BRepProj_Projection_2 extends BRepProj_Projection {
    constructor(Wire: TopoDS_Shape, Shape: TopoDS_Shape, P: gp_Pnt);
  }

export declare type BRepFill_TypeOfContact = {
  BRepFill_NoContact: {};
  BRepFill_Contact: {};
  BRepFill_ContactOnBorder: {};
}

export declare class BRepFill {
  constructor();
  static Face(Edge1: TopoDS_Edge, Edge2: TopoDS_Edge): TopoDS_Face;
  static Shell(Wire1: TopoDS_Wire, Wire2: TopoDS_Wire): TopoDS_Shell;
  static Axe(Spine: TopoDS_Shape, Profile: TopoDS_Wire, AxeProf: gp_Ax3, ProfOnSpine: Standard_Boolean, Tol: Standard_Real): void;
  static ComputeACR(wire: TopoDS_Wire, ACR: NCollection_Array1<double>): void;
  static InsertACR(wire: TopoDS_Wire, ACRcuts: NCollection_Array1<double>, prec: Standard_Real): TopoDS_Wire;
  delete(): void;
}

export declare type ChFi3d_FilletShape = {
  ChFi3d_Rational: {};
  ChFi3d_QuasiAngular: {};
  ChFi3d_Polynomial: {};
}

export declare class BRepFilletAPI_MakeChamfer extends BRepFilletAPI_LocalOperation {
  constructor(S: TopoDS_Shape)
  Add_1(E: TopoDS_Edge): void;
  Add_2(Dis: Standard_Real, E: TopoDS_Edge): void;
  SetDist(Dis: Standard_Real, IC: Standard_Integer, F: TopoDS_Face): void;
  GetDist(IC: Standard_Integer, Dis: Standard_Real): void;
  Add_3(Dis1: Standard_Real, Dis2: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face): void;
  SetDists(Dis1: Standard_Real, Dis2: Standard_Real, IC: Standard_Integer, F: TopoDS_Face): void;
  Dists(IC: Standard_Integer, Dis1: Standard_Real, Dis2: Standard_Real): void;
  AddDA(Dis: Standard_Real, Angle: Standard_Real, E: TopoDS_Edge, F: TopoDS_Face): void;
  SetDistAngle(Dis: Standard_Real, Angle: Standard_Real, IC: Standard_Integer, F: TopoDS_Face): void;
  GetDistAngle(IC: Standard_Integer, Dis: Standard_Real, Angle: Standard_Real): void;
  SetMode(theMode: ChFiDS_ChamfMode): void;
  IsSymetric(IC: Standard_Integer): Standard_Boolean;
  IsTwoDistances(IC: Standard_Integer): Standard_Boolean;
  IsDistanceAngle(IC: Standard_Integer): Standard_Boolean;
  ResetContour(IC: Standard_Integer): void;
  NbContours(): Standard_Integer;
  Contour(E: TopoDS_Edge): Standard_Integer;
  NbEdges(I: Standard_Integer): Standard_Integer;
  Edge(I: Standard_Integer, J: Standard_Integer): TopoDS_Edge;
  Remove(E: TopoDS_Edge): void;
  Length(IC: Standard_Integer): Standard_Real;
  FirstVertex(IC: Standard_Integer): TopoDS_Vertex;
  LastVertex(IC: Standard_Integer): TopoDS_Vertex;
  Abscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  RelativeAbscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  ClosedAndTangent(IC: Standard_Integer): Standard_Boolean;
  Closed(IC: Standard_Integer): Standard_Boolean;
  Build(theRange: Message_ProgressRange): void;
  Reset(): void;
  Builder(): any;
  Generated(EorV: TopoDS_Shape): any;
  Modified(F: TopoDS_Shape): any;
  IsDeleted(F: TopoDS_Shape): Standard_Boolean;
  Simulate(IC: Standard_Integer): void;
  NbSurf(IC: Standard_Integer): Standard_Integer;
  Sect(IC: Standard_Integer, IS: Standard_Integer): any;
  delete(): void;
}

export declare class BRepFilletAPI_MakeFillet extends BRepFilletAPI_LocalOperation {
  constructor(S: TopoDS_Shape, FShape: ChFi3d_FilletShape)
  SetParams(Tang: Standard_Real, Tesp: Standard_Real, T2d: Standard_Real, TApp3d: Standard_Real, TolApp2d: Standard_Real, Fleche: Standard_Real): void;
  SetContinuity(InternalContinuity: GeomAbs_Shape, AngularTolerance: Standard_Real): void;
  Add_1(E: TopoDS_Edge): void;
  Add_2(Radius: Standard_Real, E: TopoDS_Edge): void;
  Add_3(R1: Standard_Real, R2: Standard_Real, E: TopoDS_Edge): void;
  Add_4(L: any, E: TopoDS_Edge): void;
  Add_5(UandR: NCollection_Array1<gp_Pnt2d>, E: TopoDS_Edge): void;
  SetRadius_1(Radius: Standard_Real, IC: Standard_Integer, IinC: Standard_Integer): void;
  SetRadius_2(R1: Standard_Real, R2: Standard_Real, IC: Standard_Integer, IinC: Standard_Integer): void;
  SetRadius_3(L: any, IC: Standard_Integer, IinC: Standard_Integer): void;
  SetRadius_4(UandR: NCollection_Array1<gp_Pnt2d>, IC: Standard_Integer, IinC: Standard_Integer): void;
  ResetContour(IC: Standard_Integer): void;
  IsConstant_1(IC: Standard_Integer): Standard_Boolean;
  Radius_1(IC: Standard_Integer): Standard_Real;
  IsConstant_2(IC: Standard_Integer, E: TopoDS_Edge): Standard_Boolean;
  Radius_2(IC: Standard_Integer, E: TopoDS_Edge): Standard_Real;
  SetRadius_5(Radius: Standard_Real, IC: Standard_Integer, E: TopoDS_Edge): void;
  SetRadius_6(Radius: Standard_Real, IC: Standard_Integer, V: TopoDS_Vertex): void;
  GetBounds(IC: Standard_Integer, E: TopoDS_Edge, F: Standard_Real, L: Standard_Real): Standard_Boolean;
  GetLaw(IC: Standard_Integer, E: TopoDS_Edge): any;
  SetLaw(IC: Standard_Integer, E: TopoDS_Edge, L: any): void;
  SetFilletShape(FShape: ChFi3d_FilletShape): void;
  GetFilletShape(): ChFi3d_FilletShape;
  NbContours(): Standard_Integer;
  Contour(E: TopoDS_Edge): Standard_Integer;
  NbEdges(I: Standard_Integer): Standard_Integer;
  Edge(I: Standard_Integer, J: Standard_Integer): TopoDS_Edge;
  Remove(E: TopoDS_Edge): void;
  Length(IC: Standard_Integer): Standard_Real;
  FirstVertex(IC: Standard_Integer): TopoDS_Vertex;
  LastVertex(IC: Standard_Integer): TopoDS_Vertex;
  Abscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  RelativeAbscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  ClosedAndTangent(IC: Standard_Integer): Standard_Boolean;
  Closed(IC: Standard_Integer): Standard_Boolean;
  Build(theRange: Message_ProgressRange): void;
  Reset(): void;
  Builder(): any;
  Generated(EorV: TopoDS_Shape): any;
  Modified(F: TopoDS_Shape): any;
  IsDeleted(F: TopoDS_Shape): Standard_Boolean;
  NbSurfaces(): Standard_Integer;
  NewFaces(I: Standard_Integer): any;
  Simulate(IC: Standard_Integer): void;
  NbSurf(IC: Standard_Integer): Standard_Integer;
  Sect(IC: Standard_Integer, IS: Standard_Integer): any;
  NbFaultyContours(): Standard_Integer;
  FaultyContour(I: Standard_Integer): Standard_Integer;
  NbComputedSurfaces(IC: Standard_Integer): Standard_Integer;
  ComputedSurface(IC: Standard_Integer, IS: Standard_Integer): any;
  NbFaultyVertices(): Standard_Integer;
  FaultyVertex(IV: Standard_Integer): TopoDS_Vertex;
  HasResult(): Standard_Boolean;
  BadShape(): TopoDS_Shape;
  StripeStatus(IC: Standard_Integer): ChFiDS_ErrorStatus;
  delete(): void;
}

export declare class BRepFilletAPI_LocalOperation extends BRepBuilderAPI_MakeShape {
  Add(E: TopoDS_Edge): void;
  ResetContour(IC: Standard_Integer): void;
  NbContours(): Standard_Integer;
  Contour(E: TopoDS_Edge): Standard_Integer;
  NbEdges(I: Standard_Integer): Standard_Integer;
  Edge(I: Standard_Integer, J: Standard_Integer): TopoDS_Edge;
  Remove(E: TopoDS_Edge): void;
  Length(IC: Standard_Integer): Standard_Real;
  FirstVertex(IC: Standard_Integer): TopoDS_Vertex;
  LastVertex(IC: Standard_Integer): TopoDS_Vertex;
  Abscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  RelativeAbscissa(IC: Standard_Integer, V: TopoDS_Vertex): Standard_Real;
  ClosedAndTangent(IC: Standard_Integer): Standard_Boolean;
  Closed(IC: Standard_Integer): Standard_Boolean;
  Reset(): void;
  Simulate(IC: Standard_Integer): void;
  NbSurf(IC: Standard_Integer): Standard_Integer;
  Sect(IC: Standard_Integer, IS: Standard_Integer): any;
  delete(): void;
}

export declare class BRepFilletAPI_MakeFillet2d extends BRepBuilderAPI_MakeShape {
  Init_1(F: TopoDS_Face): void;
  Init_2(RefFace: TopoDS_Face, ModFace: TopoDS_Face): void;
  AddFillet(V: TopoDS_Vertex, Radius: Standard_Real): TopoDS_Edge;
  ModifyFillet(Fillet: TopoDS_Edge, Radius: Standard_Real): TopoDS_Edge;
  RemoveFillet(Fillet: TopoDS_Edge): TopoDS_Vertex;
  AddChamfer_1(E1: TopoDS_Edge, E2: TopoDS_Edge, D1: Standard_Real, D2: Standard_Real): TopoDS_Edge;
  AddChamfer_2(E: TopoDS_Edge, V: TopoDS_Vertex, D: Standard_Real, Ang: Standard_Real): TopoDS_Edge;
  ModifyChamfer_1(Chamfer: TopoDS_Edge, E1: TopoDS_Edge, E2: TopoDS_Edge, D1: Standard_Real, D2: Standard_Real): TopoDS_Edge;
  ModifyChamfer_2(Chamfer: TopoDS_Edge, E: TopoDS_Edge, D: Standard_Real, Ang: Standard_Real): TopoDS_Edge;
  RemoveChamfer(Chamfer: TopoDS_Edge): TopoDS_Vertex;
  IsModified(E: TopoDS_Edge): Standard_Boolean;
  FilletEdges(): any;
  NbFillet(): Standard_Integer;
  ChamferEdges(): any;
  NbChamfer(): Standard_Integer;
  Modified(S: TopoDS_Shape): any;
  NbCurves(): Standard_Integer;
  NewEdges(I: Standard_Integer): any;
  HasDescendant(E: TopoDS_Edge): Standard_Boolean;
  DescendantEdge(E: TopoDS_Edge): TopoDS_Edge;
  BasisEdge(E: TopoDS_Edge): TopoDS_Edge;
  Status(): ChFi2d_ConstructionError;
  Build(theRange: Message_ProgressRange): void;
  delete(): void;
}

  export declare class BRepFilletAPI_MakeFillet2d_1 extends BRepFilletAPI_MakeFillet2d {
    constructor();
  }

  export declare class BRepFilletAPI_MakeFillet2d_2 extends BRepFilletAPI_MakeFillet2d {
    constructor(F: TopoDS_Face);
  }

export declare class BRepFeat_Form extends BRepBuilderAPI_MakeShape {
  Modified(F: TopoDS_Shape): any;
  Generated(S: TopoDS_Shape): any;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  FirstShape(): any;
  LastShape(): any;
  NewEdges(): any;
  TgtEdges(): any;
  BasisShapeValid(): void;
  GeneratedShapeValid(): void;
  ShapeFromValid(): void;
  ShapeUntilValid(): void;
  GluedFacesValid(): void;
  SketchFaceValid(): void;
  PerfSelectionValid(): void;
  Curves(S: any): void;
  BarycCurve(): any;
  CurrentStatusError(): BRepFeat_StatusError;
  delete(): void;
}

export declare class BRepFeat_SplitShape extends BRepBuilderAPI_MakeShape {
  Add_1(theEdges: NCollection_Sequence<TopoDS_Shape>): Standard_Boolean;
  Init(S: TopoDS_Shape): void;
  SetCheckInterior(ToCheckInterior: Standard_Boolean): void;
  Add_2(W: TopoDS_Wire, F: TopoDS_Face): void;
  Add_3(E: TopoDS_Edge, F: TopoDS_Face): void;
  Add_4(Comp: TopoDS_Compound, F: TopoDS_Face): void;
  Add_5(E: TopoDS_Edge, EOn: TopoDS_Edge): void;
  DirectLeft(): any;
  Left(): any;
  Right(): any;
  Build(theRange: Message_ProgressRange): void;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  Modified(F: TopoDS_Shape): any;
  delete(): void;
}

  export declare class BRepFeat_SplitShape_1 extends BRepFeat_SplitShape {
    constructor();
  }

  export declare class BRepFeat_SplitShape_2 extends BRepFeat_SplitShape {
    constructor(S: TopoDS_Shape);
  }

export declare class BRepFeat_MakeDPrism extends BRepFeat_Form {
  Init(Sbase: TopoDS_Shape, Pbase: TopoDS_Face, Skface: TopoDS_Face, Angle: Standard_Real, Fuse: Standard_Integer, Modify: Standard_Boolean): void;
  Add(E: TopoDS_Edge, OnFace: TopoDS_Face): void;
  Perform_1(Height: Standard_Real): void;
  Perform_2(Until: TopoDS_Shape): void;
  Perform_3(From: TopoDS_Shape, Until: TopoDS_Shape): void;
  PerformUntilEnd(): void;
  PerformFromEnd(FUntil: TopoDS_Shape): void;
  PerformThruAll(): void;
  PerformUntilHeight(Until: TopoDS_Shape, Height: Standard_Real): void;
  Curves(S: any): void;
  BarycCurve(): any;
  BossEdges(sig: Standard_Integer): void;
  TopEdges(): any;
  LatEdges(): any;
  delete(): void;
}

  export declare class BRepFeat_MakeDPrism_1 extends BRepFeat_MakeDPrism {
    constructor(Sbase: TopoDS_Shape, Pbase: TopoDS_Face, Skface: TopoDS_Face, Angle: Standard_Real, Fuse: Standard_Integer, Modify: Standard_Boolean);
  }

  export declare class BRepFeat_MakeDPrism_2 extends BRepFeat_MakeDPrism {
    constructor();
  }

export declare class LocOpe_DPrism {
  IsDone(): Standard_Boolean;
  Spine(): TopoDS_Shape;
  Profile(): TopoDS_Shape;
  FirstShape(): TopoDS_Shape;
  LastShape(): TopoDS_Shape;
  Shape(): TopoDS_Shape;
  Shapes(S: TopoDS_Shape): any;
  Curves(SCurves: any): void;
  BarycCurve(): any;
  delete(): void;
}

  export declare class LocOpe_DPrism_1 extends LocOpe_DPrism {
    constructor(Spine: TopoDS_Face, Height1: Standard_Real, Height2: Standard_Real, Angle: Standard_Real);
  }

  export declare class LocOpe_DPrism_2 extends LocOpe_DPrism {
    constructor(Spine: TopoDS_Face, Height: Standard_Real, Angle: Standard_Real);
  }

export declare class BRepBndLib {
  constructor();
  static Add(S: TopoDS_Shape, B: Bnd_Box, useTriangulation: Standard_Boolean): void;
  static AddClose(S: TopoDS_Shape, B: Bnd_Box): void;
  static AddOptimal(S: TopoDS_Shape, B: Bnd_Box, useTriangulation: Standard_Boolean, useShapeTolerance: Standard_Boolean): void;
  static AddOBB(theS: TopoDS_Shape, theOBB: Bnd_OBB, theIsTriangulationUsed: Standard_Boolean, theIsOptimal: Standard_Boolean, theIsShapeToleranceUsed: Standard_Boolean): void;
  delete(): void;
}

export declare class BRepClass3d_SolidClassifier extends BRepClass3d_SClassifier {
  Load(S: TopoDS_Shape): void;
  Perform(P: gp_Pnt, Tol: Standard_Real): void;
  PerformInfinitePoint(Tol: Standard_Real): void;
  Destroy(): void;
  delete(): void;
}

  export declare class BRepClass3d_SolidClassifier_1 extends BRepClass3d_SolidClassifier {
    constructor();
  }

  export declare class BRepClass3d_SolidClassifier_2 extends BRepClass3d_SolidClassifier {
    constructor(S: TopoDS_Shape);
  }

  export declare class BRepClass3d_SolidClassifier_3 extends BRepClass3d_SolidClassifier {
    constructor(S: TopoDS_Shape, P: gp_Pnt, Tol: Standard_Real);
  }

export declare class BRepClass3d_SClassifier {
  Perform(S: BRepClass3d_SolidExplorer, P: gp_Pnt, Tol: Standard_Real): void;
  PerformInfinitePoint(S: BRepClass3d_SolidExplorer, Tol: Standard_Real): void;
  Rejected(): Standard_Boolean;
  State(): TopAbs_State;
  IsOnAFace(): Standard_Boolean;
  Face(): TopoDS_Face;
  delete(): void;
}

  export declare class BRepClass3d_SClassifier_1 extends BRepClass3d_SClassifier {
    constructor();
  }

  export declare class BRepClass3d_SClassifier_2 extends BRepClass3d_SClassifier {
    constructor(S: BRepClass3d_SolidExplorer, P: gp_Pnt, Tol: Standard_Real);
  }

export declare class BRepIntCurveSurface_Inter {
  constructor()
  Init_1(theShape: TopoDS_Shape, theCurve: GeomAdaptor_Curve, theTol: Standard_Real): void;
  Init_2(theShape: TopoDS_Shape, theLine: gp_Lin, theTol: Standard_Real): void;
  Load(theShape: TopoDS_Shape, theTol: Standard_Real): void;
  Init_3(theCurve: GeomAdaptor_Curve): void;
  More(): Standard_Boolean;
  Next(): void;
  Point(): IntCurveSurface_IntersectionPoint;
  Pnt(): gp_Pnt;
  U(): Standard_Real;
  V(): Standard_Real;
  W(): Standard_Real;
  State(): TopAbs_State;
  Transition(): IntCurveSurface_TransitionOnCurve;
  Face(): TopoDS_Face;
  delete(): void;
}

export declare class BRepGProp_Face {
  Load_1(F: TopoDS_Face): void;
  VIntegrationOrder(): Standard_Integer;
  NaturalRestriction(): Standard_Boolean;
  GetFace(): TopoDS_Face;
  Value2d(U: Standard_Real): gp_Pnt2d;
  SIntOrder(Eps: Standard_Real): Standard_Integer;
  SVIntSubs(): Standard_Integer;
  SUIntSubs(): Standard_Integer;
  UKnots(Knots: NCollection_Array1<double>): void;
  VKnots(Knots: NCollection_Array1<double>): void;
  LIntOrder(Eps: Standard_Real): Standard_Integer;
  LIntSubs(): Standard_Integer;
  LKnots(Knots: NCollection_Array1<double>): void;
  UIntegrationOrder(): Standard_Integer;
  Bounds(U1: Standard_Real, U2: Standard_Real, V1: Standard_Real, V2: Standard_Real): void;
  Normal(U: Standard_Real, V: Standard_Real, P: gp_Pnt, VNor: gp_Vec): void;
  Load_2(E: TopoDS_Edge): Standard_Boolean;
  FirstParameter(): Standard_Real;
  LastParameter(): Standard_Real;
  IntegrationOrder(): Standard_Integer;
  D12d(U: Standard_Real, P: gp_Pnt2d, V1: gp_Vec2d): void;
  Load_3(IsFirstParam: Standard_Boolean, theIsoType: GeomAbs_IsoType): void;
  GetUKnots_1(theUMin: Standard_Real, theUMax: Standard_Real): any;
  GetUKnots_2(theUMin: Standard_Real, theUMax: Standard_Real, theUKnots: any): void;
  GetTKnots_1(theTMin: Standard_Real, theTMax: Standard_Real): any;
  GetTKnots_2(theTMin: Standard_Real, theTMax: Standard_Real, theTKnots: any): void;
  delete(): void;
}

  export declare class BRepGProp_Face_1 extends BRepGProp_Face {
    constructor(IsUseSpan: Standard_Boolean);
  }

  export declare class BRepGProp_Face_2 extends BRepGProp_Face {
    constructor(F: TopoDS_Face, IsUseSpan: Standard_Boolean);
  }

export declare class BRepGProp {
  constructor();
  static LinearProperties(S: TopoDS_Shape, LProps: GProp_GProps, SkipShared: Standard_Boolean, UseTriangulation: Standard_Boolean): void;
  static SurfaceProperties_1(S: TopoDS_Shape, SProps: GProp_GProps, SkipShared: Standard_Boolean, UseTriangulation: Standard_Boolean): void;
  static SurfaceProperties_2(S: TopoDS_Shape, SProps: GProp_GProps, Eps: Standard_Real, SkipShared: Standard_Boolean): Standard_Real;
  static VolumeProperties_1(S: TopoDS_Shape, VProps: GProp_GProps, OnlyClosed: Standard_Boolean, SkipShared: Standard_Boolean, UseTriangulation: Standard_Boolean): void;
  static VolumeProperties_2(S: TopoDS_Shape, VProps: GProp_GProps, Eps: Standard_Real, OnlyClosed: Standard_Boolean, SkipShared: Standard_Boolean): Standard_Real;
  static VolumePropertiesGK_1(S: TopoDS_Shape, VProps: GProp_GProps, Eps: Standard_Real, OnlyClosed: Standard_Boolean, IsUseSpan: Standard_Boolean, CGFlag: Standard_Boolean, IFlag: Standard_Boolean, SkipShared: Standard_Boolean): Standard_Real;
  static VolumePropertiesGK_2(S: TopoDS_Shape, VProps: GProp_GProps, thePln: gp_Pln, Eps: Standard_Real, OnlyClosed: Standard_Boolean, IsUseSpan: Standard_Boolean, CGFlag: Standard_Boolean, IFlag: Standard_Boolean, SkipShared: Standard_Boolean): Standard_Real;
  delete(): void;
}

export declare class BRepLib {
  constructor();
  static Precision_1(P: Standard_Real): void;
  static Precision_2(): Standard_Real;
  static Plane_1(P: any): void;
  static Plane_2(): any;
  static CheckSameRange(E: TopoDS_Edge, Confusion: Standard_Real): Standard_Boolean;
  static SameRange(E: TopoDS_Edge, Tolerance: Standard_Real): void;
  static BuildCurve3d(E: TopoDS_Edge, Tolerance: Standard_Real, Continuity: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSegment: Standard_Integer): Standard_Boolean;
  static BuildCurves3d_1(S: TopoDS_Shape, Tolerance: Standard_Real, Continuity: GeomAbs_Shape, MaxDegree: Standard_Integer, MaxSegment: Standard_Integer): Standard_Boolean;
  static BuildCurves3d_2(S: TopoDS_Shape): Standard_Boolean;
  static BuildPCurveForEdgeOnPlane_1(theE: TopoDS_Edge, theF: TopoDS_Face): void;
  static BuildPCurveForEdgeOnPlane_2(theE: TopoDS_Edge, theF: TopoDS_Face, aC2D: any, bToUpdate: Standard_Boolean): void;
  static UpdateEdgeTol(E: TopoDS_Edge, MinToleranceRequest: Standard_Real, MaxToleranceToCheck: Standard_Real): Standard_Boolean;
  static UpdateEdgeTolerance(S: TopoDS_Shape, MinToleranceRequest: Standard_Real, MaxToleranceToCheck: Standard_Real): Standard_Boolean;
  static SameParameter_1(theEdge: TopoDS_Edge, Tolerance: Standard_Real): void;
  static SameParameter_2(theEdge: TopoDS_Edge, theTolerance: Standard_Real, theNewTol: Standard_Real, IsUseOldEdge: Standard_Boolean): TopoDS_Edge;
  static SameParameter_3(S: TopoDS_Shape, Tolerance: Standard_Real, forced: Standard_Boolean): void;
  static SameParameter_4(S: TopoDS_Shape, theReshaper: BRepTools_ReShape, Tolerance: Standard_Real, forced: Standard_Boolean): void;
  static UpdateTolerances_1(S: TopoDS_Shape, verifyFaceTolerance: Standard_Boolean): void;
  static UpdateTolerances_2(S: TopoDS_Shape, theReshaper: BRepTools_ReShape, verifyFaceTolerance: Standard_Boolean): void;
  static UpdateInnerTolerances(S: TopoDS_Shape): void;
  static OrientClosedSolid(solid: TopoDS_Solid): Standard_Boolean;
  static ContinuityOfFaces(theEdge: TopoDS_Edge, theFace1: TopoDS_Face, theFace2: TopoDS_Face, theAngleTol: Standard_Real): GeomAbs_Shape;
  static EncodeRegularity_1(S: TopoDS_Shape, TolAng: Standard_Real): void;
  static EncodeRegularity_2(S: TopoDS_Shape, LE: NCollection_List<TopoDS_Shape>, TolAng: Standard_Real): void;
  static EncodeRegularity_3(E: TopoDS_Edge, F1: TopoDS_Face, F2: TopoDS_Face, TolAng: Standard_Real): void;
  static SortFaces(S: TopoDS_Shape, LF: NCollection_List<TopoDS_Shape>): void;
  static ReverseSortFaces(S: TopoDS_Shape, LF: NCollection_List<TopoDS_Shape>): void;
  static EnsureNormalConsistency(S: TopoDS_Shape, theAngTol: Standard_Real, ForceComputeNormals: Standard_Boolean): Standard_Boolean;
  static UpdateDeflection(S: TopoDS_Shape): void;
  static BoundingVertex(theLV: NCollection_List<TopoDS_Shape>, theNewCenter: gp_Pnt, theNewTol: Standard_Real): void;
  static FindValidRange_1(theCurve: Adaptor3d_Curve, theTolE: Standard_Real, theParV1: Standard_Real, thePntV1: gp_Pnt, theTolV1: Standard_Real, theParV2: Standard_Real, thePntV2: gp_Pnt, theTolV2: Standard_Real, theFirst: Standard_Real, theLast: Standard_Real): Standard_Boolean;
  static FindValidRange_2(theEdge: TopoDS_Edge, theFirst: Standard_Real, theLast: Standard_Real): Standard_Boolean;
  static ExtendFace(theF: TopoDS_Face, theExtVal: Standard_Real, theExtUMin: Standard_Boolean, theExtUMax: Standard_Boolean, theExtVMin: Standard_Boolean, theExtVMax: Standard_Boolean, theFExtended: TopoDS_Face): void;
  delete(): void;
}

export declare class BRepLib_FindSurface {
  Init(S: TopoDS_Shape, Tol: Standard_Real, OnlyPlane: Standard_Boolean, OnlyClosed: Standard_Boolean): void;
  Found(): Standard_Boolean;
  Surface(): any;
  Tolerance(): Standard_Real;
  ToleranceReached(): Standard_Real;
  Existed(): Standard_Boolean;
  Location(): TopLoc_Location;
  delete(): void;
}

  export declare class BRepLib_FindSurface_1 extends BRepLib_FindSurface {
    constructor();
  }

  export declare class BRepLib_FindSurface_2 extends BRepLib_FindSurface {
    constructor(S: TopoDS_Shape, Tol: Standard_Real, OnlyPlane: Standard_Boolean, OnlyClosed: Standard_Boolean);
  }

export declare class BRepLib_ToolTriangulatedShape {
  constructor();
  static ComputeNormals_1(theFace: TopoDS_Face, theTris: any): void;
  static ComputeNormals_2(theFace: TopoDS_Face, theTris: any, thePolyConnect: Poly_Connect): void;
  delete(): void;
}

export declare class BRepBuilderAPI_GTransform extends BRepBuilderAPI_ModifyShape {
  Perform(S: TopoDS_Shape, Copy: Standard_Boolean): void;
  Modified(S: TopoDS_Shape): any;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
  delete(): void;
}

  export declare class BRepBuilderAPI_GTransform_1 extends BRepBuilderAPI_GTransform {
    constructor(T: gp_GTrsf);
  }

  export declare class BRepBuilderAPI_GTransform_2 extends BRepBuilderAPI_GTransform {
    constructor(S: TopoDS_Shape, T: gp_GTrsf, Copy: Standard_Boolean);
  }

export declare class BRepBuilderAPI_Transform extends BRepBuilderAPI_ModifyShape {
  Perform(theShape: TopoDS_Shape, theCopyGeom: Standard_Boolean, theCopyMesh: Standard_Boolean): void;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
  Modified(S: TopoDS_Shape): any;
  delete(): void;
}

  export declare class BRepBuilderAPI_Transform_1 extends BRepBuilderAPI_Transform {
    constructor(T: gp_Trsf);
  }

  export declare class BRepBuilderAPI_Transform_2 extends BRepBuilderAPI_Transform {
    constructor(theShape: TopoDS_Shape, theTrsf: gp_Trsf, theCopyGeom: Standard_Boolean, theCopyMesh: Standard_Boolean);
  }

export declare class BRepBuilderAPI_MakeVertex extends BRepBuilderAPI_MakeShape {
  constructor(P: gp_Pnt)
  Vertex(): TopoDS_Vertex;
  delete(): void;
}

export declare class BRepBuilderAPI_MakeEdge extends BRepBuilderAPI_MakeShape {
  Init_1(C: any): void;
  Init_2(C: any, p1: Standard_Real, p2: Standard_Real): void;
  Init_3(C: any, P1: gp_Pnt, P2: gp_Pnt): void;
  Init_4(C: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  Init_5(C: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real): void;
  Init_6(C: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real): void;
  Init_7(C: any, S: any): void;
  Init_8(C: any, S: any, p1: Standard_Real, p2: Standard_Real): void;
  Init_9(C: any, S: any, P1: gp_Pnt, P2: gp_Pnt): void;
  Init_10(C: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex): void;
  Init_11(C: any, S: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real): void;
  Init_12(C: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_EdgeError;
  Edge(): TopoDS_Edge;
  Vertex1(): TopoDS_Vertex;
  Vertex2(): TopoDS_Vertex;
  delete(): void;
}

  export declare class BRepBuilderAPI_MakeEdge_1 extends BRepBuilderAPI_MakeEdge {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeEdge_2 extends BRepBuilderAPI_MakeEdge {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_3 extends BRepBuilderAPI_MakeEdge {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_4 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin);
  }

  export declare class BRepBuilderAPI_MakeEdge_5 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_6 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_7 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Lin, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_8 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ);
  }

  export declare class BRepBuilderAPI_MakeEdge_9 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_10 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_11 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Circ, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_12 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips);
  }

  export declare class BRepBuilderAPI_MakeEdge_13 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_14 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_15 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Elips, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_16 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr);
  }

  export declare class BRepBuilderAPI_MakeEdge_17 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_18 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_19 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Hypr, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_20 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab);
  }

  export declare class BRepBuilderAPI_MakeEdge_21 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_22 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_23 extends BRepBuilderAPI_MakeEdge {
    constructor(L: gp_Parab, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_24 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any);
  }

  export declare class BRepBuilderAPI_MakeEdge_25 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_26 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_27 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_28 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_29 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_30 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any);
  }

  export declare class BRepBuilderAPI_MakeEdge_31 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_32 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any, P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakeEdge_33 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakeEdge_34 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any, P1: gp_Pnt, P2: gp_Pnt, p1: Standard_Real, p2: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeEdge_35 extends BRepBuilderAPI_MakeEdge {
    constructor(L: any, S: any, V1: TopoDS_Vertex, V2: TopoDS_Vertex, p1: Standard_Real, p2: Standard_Real);
  }

export declare class BRepBuilderAPI_MakePolygon extends BRepBuilderAPI_MakeShape {
  Add_1(P: gp_Pnt): void;
  Add_2(V: TopoDS_Vertex): void;
  Added(): Standard_Boolean;
  Close(): void;
  FirstVertex(): TopoDS_Vertex;
  LastVertex(): TopoDS_Vertex;
  IsDone(): Standard_Boolean;
  Edge(): TopoDS_Edge;
  Wire(): TopoDS_Wire;
  delete(): void;
}

  export declare class BRepBuilderAPI_MakePolygon_1 extends BRepBuilderAPI_MakePolygon {
    constructor();
  }

  export declare class BRepBuilderAPI_MakePolygon_2 extends BRepBuilderAPI_MakePolygon {
    constructor(P1: gp_Pnt, P2: gp_Pnt);
  }

  export declare class BRepBuilderAPI_MakePolygon_3 extends BRepBuilderAPI_MakePolygon {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, Close: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakePolygon_4 extends BRepBuilderAPI_MakePolygon {
    constructor(P1: gp_Pnt, P2: gp_Pnt, P3: gp_Pnt, P4: gp_Pnt, Close: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakePolygon_5 extends BRepBuilderAPI_MakePolygon {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex);
  }

  export declare class BRepBuilderAPI_MakePolygon_6 extends BRepBuilderAPI_MakePolygon {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex, V3: TopoDS_Vertex, Close: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakePolygon_7 extends BRepBuilderAPI_MakePolygon {
    constructor(V1: TopoDS_Vertex, V2: TopoDS_Vertex, V3: TopoDS_Vertex, V4: TopoDS_Vertex, Close: Standard_Boolean);
  }

export declare class BRepBuilderAPI_Command {
  IsDone(): Standard_Boolean;
  Check(): void;
  delete(): void;
}

export declare class BRepBuilderAPI_ModifyShape extends BRepBuilderAPI_MakeShape {
  Modified(S: TopoDS_Shape): any;
  ModifiedShape(S: TopoDS_Shape): TopoDS_Shape;
  delete(): void;
}

export declare type BRepBuilderAPI_TransitionMode = {
  BRepBuilderAPI_Transformed: {};
  BRepBuilderAPI_RightCorner: {};
  BRepBuilderAPI_RoundCorner: {};
}

export declare class BRepBuilderAPI_MakeShape extends BRepBuilderAPI_Command {
  Build(theRange: Message_ProgressRange): void;
  Shape(): TopoDS_Shape;
  Generated(S: TopoDS_Shape): any;
  Modified(S: TopoDS_Shape): any;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  delete(): void;
}

export declare class BRepBuilderAPI_Sewing extends Standard_Transient {
  constructor(tolerance: Standard_Real, option1: Standard_Boolean, option2: Standard_Boolean, option3: Standard_Boolean, option4: Standard_Boolean)
  Init(tolerance: Standard_Real, option1: Standard_Boolean, option2: Standard_Boolean, option3: Standard_Boolean, option4: Standard_Boolean): void;
  Load(shape: TopoDS_Shape): void;
  Add(shape: TopoDS_Shape): void;
  Perform(theProgress: Message_ProgressRange): void;
  SewedShape(): TopoDS_Shape;
  SetContext(theContext: any): void;
  GetContext(): any;
  NbFreeEdges(): Standard_Integer;
  FreeEdge(index: Standard_Integer): TopoDS_Edge;
  NbMultipleEdges(): Standard_Integer;
  MultipleEdge(index: Standard_Integer): TopoDS_Edge;
  NbContigousEdges(): Standard_Integer;
  ContigousEdge(index: Standard_Integer): TopoDS_Edge;
  ContigousEdgeCouple(index: Standard_Integer): any;
  IsSectionBound(section: TopoDS_Edge): Standard_Boolean;
  SectionToBoundary(section: TopoDS_Edge): TopoDS_Edge;
  NbDegeneratedShapes(): Standard_Integer;
  DegeneratedShape(index: Standard_Integer): TopoDS_Shape;
  IsDegenerated(shape: TopoDS_Shape): Standard_Boolean;
  IsModified(shape: TopoDS_Shape): Standard_Boolean;
  Modified(shape: TopoDS_Shape): TopoDS_Shape;
  IsModifiedSubShape(shape: TopoDS_Shape): Standard_Boolean;
  ModifiedSubShape(shape: TopoDS_Shape): TopoDS_Shape;
  Dump(): void;
  NbDeletedFaces(): Standard_Integer;
  DeletedFace(index: Standard_Integer): TopoDS_Face;
  WhichFace(theEdg: TopoDS_Edge, index: Standard_Integer): TopoDS_Face;
  SameParameterMode(): Standard_Boolean;
  SetSameParameterMode(SameParameterMode: Standard_Boolean): void;
  Tolerance(): Standard_Real;
  SetTolerance(theToler: Standard_Real): void;
  MinTolerance(): Standard_Real;
  SetMinTolerance(theMinToler: Standard_Real): void;
  MaxTolerance(): Standard_Real;
  SetMaxTolerance(theMaxToler: Standard_Real): void;
  FaceMode(): Standard_Boolean;
  SetFaceMode(theFaceMode: Standard_Boolean): void;
  FloatingEdgesMode(): Standard_Boolean;
  SetFloatingEdgesMode(theFloatingEdgesMode: Standard_Boolean): void;
  LocalTolerancesMode(): Standard_Boolean;
  SetLocalTolerancesMode(theLocalTolerancesMode: Standard_Boolean): void;
  SetNonManifoldMode(theNonManifoldMode: Standard_Boolean): void;
  NonManifoldMode(): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class BRepBuilderAPI_MakeSolid extends BRepBuilderAPI_MakeShape {
  Add(S: TopoDS_Shell): void;
  IsDone(): Standard_Boolean;
  Solid(): TopoDS_Solid;
  IsDeleted(S: TopoDS_Shape): Standard_Boolean;
  delete(): void;
}

  export declare class BRepBuilderAPI_MakeSolid_1 extends BRepBuilderAPI_MakeSolid {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeSolid_2 extends BRepBuilderAPI_MakeSolid {
    constructor(S: TopoDS_CompSolid);
  }

  export declare class BRepBuilderAPI_MakeSolid_3 extends BRepBuilderAPI_MakeSolid {
    constructor(S: TopoDS_Shell);
  }

  export declare class BRepBuilderAPI_MakeSolid_4 extends BRepBuilderAPI_MakeSolid {
    constructor(S1: TopoDS_Shell, S2: TopoDS_Shell);
  }

  export declare class BRepBuilderAPI_MakeSolid_5 extends BRepBuilderAPI_MakeSolid {
    constructor(S1: TopoDS_Shell, S2: TopoDS_Shell, S3: TopoDS_Shell);
  }

  export declare class BRepBuilderAPI_MakeSolid_6 extends BRepBuilderAPI_MakeSolid {
    constructor(So: TopoDS_Solid);
  }

  export declare class BRepBuilderAPI_MakeSolid_7 extends BRepBuilderAPI_MakeSolid {
    constructor(So: TopoDS_Solid, S: TopoDS_Shell);
  }

export declare class BRepBuilderAPI_Copy extends BRepBuilderAPI_ModifyShape {
  Perform(S: TopoDS_Shape, copyGeom: Standard_Boolean, copyMesh: Standard_Boolean): void;
  delete(): void;
}

  export declare class BRepBuilderAPI_Copy_1 extends BRepBuilderAPI_Copy {
    constructor();
  }

  export declare class BRepBuilderAPI_Copy_2 extends BRepBuilderAPI_Copy {
    constructor(S: TopoDS_Shape, copyGeom: Standard_Boolean, copyMesh: Standard_Boolean);
  }

export declare class BRepBuilderAPI_MakeFace extends BRepBuilderAPI_MakeShape {
  Init_1(F: TopoDS_Face): void;
  Init_2(S: any, Bound: Standard_Boolean, TolDegen: Standard_Real): void;
  Init_3(S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, TolDegen: Standard_Real): void;
  Add(W: TopoDS_Wire): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_FaceError;
  Face(): TopoDS_Face;
  delete(): void;
}

  export declare class BRepBuilderAPI_MakeFace_1 extends BRepBuilderAPI_MakeFace {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeFace_2 extends BRepBuilderAPI_MakeFace {
    constructor(F: TopoDS_Face);
  }

  export declare class BRepBuilderAPI_MakeFace_3 extends BRepBuilderAPI_MakeFace {
    constructor(P: gp_Pln);
  }

  export declare class BRepBuilderAPI_MakeFace_4 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cylinder);
  }

  export declare class BRepBuilderAPI_MakeFace_5 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cone);
  }

  export declare class BRepBuilderAPI_MakeFace_6 extends BRepBuilderAPI_MakeFace {
    constructor(S: gp_Sphere);
  }

  export declare class BRepBuilderAPI_MakeFace_7 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Torus);
  }

  export declare class BRepBuilderAPI_MakeFace_8 extends BRepBuilderAPI_MakeFace {
    constructor(S: any, TolDegen: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_9 extends BRepBuilderAPI_MakeFace {
    constructor(P: gp_Pln, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_10 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cylinder, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_11 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cone, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_12 extends BRepBuilderAPI_MakeFace {
    constructor(S: gp_Sphere, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_13 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Torus, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_14 extends BRepBuilderAPI_MakeFace {
    constructor(S: any, UMin: Standard_Real, UMax: Standard_Real, VMin: Standard_Real, VMax: Standard_Real, TolDegen: Standard_Real);
  }

  export declare class BRepBuilderAPI_MakeFace_15 extends BRepBuilderAPI_MakeFace {
    constructor(W: TopoDS_Wire, OnlyPlane: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_16 extends BRepBuilderAPI_MakeFace {
    constructor(P: gp_Pln, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_17 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cylinder, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_18 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Cone, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_19 extends BRepBuilderAPI_MakeFace {
    constructor(S: gp_Sphere, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_20 extends BRepBuilderAPI_MakeFace {
    constructor(C: gp_Torus, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_21 extends BRepBuilderAPI_MakeFace {
    constructor(S: any, W: TopoDS_Wire, Inside: Standard_Boolean);
  }

  export declare class BRepBuilderAPI_MakeFace_22 extends BRepBuilderAPI_MakeFace {
    constructor(F: TopoDS_Face, W: TopoDS_Wire);
  }

export declare class BRepBuilderAPI_MakeWire extends BRepBuilderAPI_MakeShape {
  Add_1(E: TopoDS_Edge): void;
  Add_2(W: TopoDS_Wire): void;
  Add_3(L: NCollection_List<TopoDS_Shape>): void;
  IsDone(): Standard_Boolean;
  Error(): BRepBuilderAPI_WireError;
  Wire(): TopoDS_Wire;
  Edge(): TopoDS_Edge;
  Vertex(): TopoDS_Vertex;
  delete(): void;
}

  export declare class BRepBuilderAPI_MakeWire_1 extends BRepBuilderAPI_MakeWire {
    constructor();
  }

  export declare class BRepBuilderAPI_MakeWire_2 extends BRepBuilderAPI_MakeWire {
    constructor(E: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_3 extends BRepBuilderAPI_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_4 extends BRepBuilderAPI_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge, E3: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_5 extends BRepBuilderAPI_MakeWire {
    constructor(E1: TopoDS_Edge, E2: TopoDS_Edge, E3: TopoDS_Edge, E4: TopoDS_Edge);
  }

  export declare class BRepBuilderAPI_MakeWire_6 extends BRepBuilderAPI_MakeWire {
    constructor(W: TopoDS_Wire);
  }

  export declare class BRepBuilderAPI_MakeWire_7 extends BRepBuilderAPI_MakeWire {
    constructor(W: TopoDS_Wire, E: TopoDS_Edge);
  }

export declare type BRepBuilderAPI_WireError = {
  BRepBuilderAPI_WireDone: {};
  BRepBuilderAPI_EmptyWire: {};
  BRepBuilderAPI_DisconnectedWire: {};
  BRepBuilderAPI_NonManifoldWire: {};
}

export declare type BRepExtrema_SupportType = {
  BRepExtrema_IsVertex: {};
  BRepExtrema_IsOnEdge: {};
  BRepExtrema_IsInFace: {};
}

export declare class BRepExtrema_DistShapeShape {
  SetDeflection(theDeflection: Standard_Real): void;
  LoadS1(Shape1: TopoDS_Shape): void;
  LoadS2(Shape1: TopoDS_Shape): void;
  Perform(theRange: Message_ProgressRange): Standard_Boolean;
  IsDone(): Standard_Boolean;
  NbSolution(): Standard_Integer;
  Value(): Standard_Real;
  InnerSolution(): Standard_Boolean;
  PointOnShape1(N: Standard_Integer): gp_Pnt;
  PointOnShape2(N: Standard_Integer): gp_Pnt;
  SupportTypeShape1(N: Standard_Integer): BRepExtrema_SupportType;
  SupportTypeShape2(N: Standard_Integer): BRepExtrema_SupportType;
  SupportOnShape1(N: Standard_Integer): TopoDS_Shape;
  SupportOnShape2(N: Standard_Integer): TopoDS_Shape;
  ParOnEdgeS1(N: Standard_Integer, t: Standard_Real): void;
  ParOnEdgeS2(N: Standard_Integer, t: Standard_Real): void;
  ParOnFaceS1(N: Standard_Integer, u: Standard_Real, v: Standard_Real): void;
  ParOnFaceS2(N: Standard_Integer, u: Standard_Real, v: Standard_Real): void;
  SetFlag(F: Extrema_ExtFlag): void;
  SetAlgo(A: Extrema_ExtAlgo): void;
  SetMultiThread(theIsMultiThread: Standard_Boolean): void;
  IsMultiThread(): Standard_Boolean;
  delete(): void;
}

  export declare class BRepExtrema_DistShapeShape_1 extends BRepExtrema_DistShapeShape {
    constructor();
  }

  export declare class BRepExtrema_DistShapeShape_2 extends BRepExtrema_DistShapeShape {
    constructor(Shape1: TopoDS_Shape, Shape2: TopoDS_Shape, F: Extrema_ExtFlag, A: Extrema_ExtAlgo, theRange: Message_ProgressRange);
  }

  export declare class BRepExtrema_DistShapeShape_3 extends BRepExtrema_DistShapeShape {
    constructor(Shape1: TopoDS_Shape, Shape2: TopoDS_Shape, theDeflection: Standard_Real, F: Extrema_ExtFlag, A: Extrema_ExtAlgo, theRange: Message_ProgressRange);
  }

export declare class BRepCheck_Analyzer {
  constructor(S: TopoDS_Shape, GeomControls: Standard_Boolean, theIsParallel: Standard_Boolean, theIsExact: Standard_Boolean)
  Init(S: TopoDS_Shape, GeomControls: Standard_Boolean): void;
  SetExactMethod(theIsExact: Standard_Boolean): void;
  IsExactMethod(): Standard_Boolean;
  SetParallel(theIsParallel: Standard_Boolean): void;
  IsParallel(): Standard_Boolean;
  IsValid_1(S: TopoDS_Shape): Standard_Boolean;
  IsValid_2(): Standard_Boolean;
  Result(theSubS: TopoDS_Shape): any;
  delete(): void;
}

export declare class RWGltf_CafWriter extends Standard_Transient {
  constructor(theFile: XCAFDoc_PartId, theIsBinary: Standard_Boolean)
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  CoordinateSystemConverter(): RWMesh_CoordinateSystemConverter;
  ChangeCoordinateSystemConverter(): RWMesh_CoordinateSystemConverter;
  SetCoordinateSystemConverter(theConverter: RWMesh_CoordinateSystemConverter): void;
  IsBinary(): Standard_Boolean;
  TransformationFormat(): RWGltf_WriterTrsfFormat;
  SetTransformationFormat(theFormat: RWGltf_WriterTrsfFormat): void;
  NodeNameFormat(): RWMesh_NameFormat;
  SetNodeNameFormat(theFormat: RWMesh_NameFormat): void;
  MeshNameFormat(): RWMesh_NameFormat;
  SetMeshNameFormat(theFormat: RWMesh_NameFormat): void;
  IsForcedUVExport(): Standard_Boolean;
  SetForcedUVExport(theToForce: Standard_Boolean): void;
  DefaultStyle(): XCAFPrs_Style;
  SetDefaultStyle(theStyle: XCAFPrs_Style): void;
  ToEmbedTexturesInGlb(): Standard_Boolean;
  SetToEmbedTexturesInGlb(theToEmbedTexturesInGlb: Standard_Boolean): void;
  ToMergeFaces(): Standard_Boolean;
  SetMergeFaces(theToMerge: Standard_Boolean): void;
  ToSplitIndices16(): Standard_Boolean;
  SetSplitIndices16(theToSplit: Standard_Boolean): void;
  ToParallel(): Standard_Boolean;
  SetParallel(theToParallel: Standard_Boolean): void;
  CompressionParameters(): RWGltf_DracoParameters;
  SetCompressionParameters(theDracoParameters: RWGltf_DracoParameters): void;
  Perform_1(theDocument: any, theRootLabels: NCollection_Sequence<TDF_Label>, theLabelFilter: NCollection_Map<TCollection_AsciiString>, theFileInfo: NCollection_IndexedDataMap<TCollection_AsciiString, TCollection_AsciiString>, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_2(theDocument: any, theFileInfo: NCollection_IndexedDataMap<TCollection_AsciiString, TCollection_AsciiString>, theProgress: Message_ProgressRange): Standard_Boolean;
  delete(): void;
}

export declare class IGESControl_Reader extends XSControl_Reader {
  SetReadVisible(ReadRoot: Standard_Boolean): void;
  GetReadVisible(): Standard_Boolean;
  IGESModel(): any;
  NbRootsForTransfer(): Standard_Integer;
  PrintTransferInfo(failwarn: IFSelect_PrintFail, mode: IFSelect_PrintCount): void;
  delete(): void;
}

  export declare class IGESControl_Reader_1 extends IGESControl_Reader {
    constructor();
  }

  export declare class IGESControl_Reader_2 extends IGESControl_Reader {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class IGESControl_Controller extends XSControl_Controller {
  constructor(modefnes: Standard_Boolean)
  NewModel(): any;
  ActorRead(model: any): any;
  TransferWriteShape(shape: TopoDS_Shape, FP: any, model: any, modetrans: Standard_Integer, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  static Init(): Standard_Boolean;
  Customise(WS: any): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class APIHeaderSection_MakeHeader {
  Init(nameval: Standard_Character): void;
  IsDone(): Standard_Boolean;
  Apply(model: any): void;
  NewModel(protocol: any): any;
  HasFn(): Standard_Boolean;
  FnValue(): any;
  SetName(aName: any): void;
  Name(): any;
  SetTimeStamp(aTimeStamp: any): void;
  TimeStamp(): any;
  SetAuthor(aAuthor: any): void;
  SetAuthorValue(num: Standard_Integer, aAuthor: any): void;
  Author(): any;
  AuthorValue(num: Standard_Integer): any;
  NbAuthor(): Standard_Integer;
  SetOrganization(aOrganization: any): void;
  SetOrganizationValue(num: Standard_Integer, aOrganization: any): void;
  Organization(): any;
  OrganizationValue(num: Standard_Integer): any;
  NbOrganization(): Standard_Integer;
  SetPreprocessorVersion(aPreprocessorVersion: any): void;
  PreprocessorVersion(): any;
  SetOriginatingSystem(aOriginatingSystem: any): void;
  OriginatingSystem(): any;
  SetAuthorisation(aAuthorisation: any): void;
  Authorisation(): any;
  HasFs(): Standard_Boolean;
  FsValue(): any;
  SetSchemaIdentifiers(aSchemaIdentifiers: any): void;
  SetSchemaIdentifiersValue(num: Standard_Integer, aSchemaIdentifier: any): void;
  SchemaIdentifiers(): any;
  SchemaIdentifiersValue(num: Standard_Integer): any;
  NbSchemaIdentifiers(): Standard_Integer;
  AddSchemaIdentifier(aSchemaIdentifier: any): void;
  HasFd(): Standard_Boolean;
  FdValue(): any;
  SetDescription(aDescription: any): void;
  SetDescriptionValue(num: Standard_Integer, aDescription: any): void;
  Description(): any;
  DescriptionValue(num: Standard_Integer): any;
  NbDescription(): Standard_Integer;
  SetImplementationLevel(aImplementationLevel: any): void;
  ImplementationLevel(): any;
  delete(): void;
}

  export declare class APIHeaderSection_MakeHeader_1 extends APIHeaderSection_MakeHeader {
    constructor(shapetype: Standard_Integer);
  }

  export declare class APIHeaderSection_MakeHeader_2 extends APIHeaderSection_MakeHeader {
    constructor(model: any);
  }

export declare class STEPControl_Controller extends XSControl_Controller {
  constructor()
  NewModel(): any;
  ActorRead(theModel: any): any;
  Customise(WS: any): void;
  TransferWriteShape(shape: TopoDS_Shape, FP: any, model: any, modetrans: Standard_Integer, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  static Init(): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare type STEPControl_StepModelType = {
  STEPControl_AsIs: {};
  STEPControl_ManifoldSolidBrep: {};
  STEPControl_BrepWithVoids: {};
  STEPControl_FacetedBrep: {};
  STEPControl_FacetedBrepAndBrepWithVoids: {};
  STEPControl_ShellBasedSurfaceModel: {};
  STEPControl_GeometricCurveSet: {};
  STEPControl_Hybrid: {};
}

export declare class STEPControl_Writer {
  SetTolerance(Tol: Standard_Real): void;
  UnsetTolerance(): void;
  SetWS(WS: any, scratch: Standard_Boolean): void;
  WS(): any;
  Model(newone: Standard_Boolean): any;
  Transfer_1(sh: TopoDS_Shape, mode: STEPControl_StepModelType, compgraph: Standard_Boolean, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  Transfer_2(sh: TopoDS_Shape, mode: STEPControl_StepModelType, theParams: DESTEP_Parameters, compgraph: Standard_Boolean, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  Write(theFileName: Standard_Character): IFSelect_ReturnStatus;
  PrintStatsTransfer(what: Standard_Integer, mode: Standard_Integer): void;
  CleanDuplicateEntities(): void;
  SetShapeFixParameters_1(theParameters: any): void;
  SetShapeFixParameters_2(theParameters: any): void;
  SetShapeFixParameters_3(theParameters: DE_ShapeFixParameters): void;
  SetShapeFixParameters_4(theParameters: DE_ShapeFixParameters, theAdditionalParameters: any): void;
  GetShapeFixParameters(): any;
  SetShapeProcessFlags(theFlags: any): void;
  GetShapeProcessFlags(): any;
  delete(): void;
}

  export declare class STEPControl_Writer_1 extends STEPControl_Writer {
    constructor();
  }

  export declare class STEPControl_Writer_2 extends STEPControl_Writer {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class STEPControl_Reader extends XSControl_Reader {
  StepModel(): any;
  ReadFile_1(filename: Standard_Character): IFSelect_ReturnStatus;
  ReadFile_2(filename: Standard_Character, theParams: DESTEP_Parameters): IFSelect_ReturnStatus;
  TransferRoot(num: Standard_Integer, theProgress: Message_ProgressRange): Standard_Boolean;
  NbRootsForTransfer(): Standard_Integer;
  FileUnits(theUnitLengthNames: NCollection_Sequence<TCollection_AsciiString>, theUnitAngleNames: NCollection_Sequence<TCollection_AsciiString>, theUnitSolidAngleNames: NCollection_Sequence<TCollection_AsciiString>): void;
  SetSystemLengthUnit(theLengthUnit: Standard_Real): void;
  SystemLengthUnit(): Standard_Real;
  delete(): void;
}

  export declare class STEPControl_Reader_1 extends STEPControl_Reader {
    constructor();
  }

  export declare class STEPControl_Reader_2 extends STEPControl_Reader {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class STEPCAFControl_Writer {
  Init(theWS: any, theScratch: Standard_Boolean): void;
  Write(theFileName: Standard_Character): IFSelect_ReturnStatus;
  Transfer_1(theDoc: any, theMode: STEPControl_StepModelType, theIsMulti: Standard_Character, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_2(theDoc: any, theParams: DESTEP_Parameters, theMode: STEPControl_StepModelType, theIsMulti: Standard_Character, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_3(theLabel: TDF_Label, theMode: STEPControl_StepModelType, theIsMulti: Standard_Character, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_4(theLabel: TDF_Label, theParams: DESTEP_Parameters, theMode: STEPControl_StepModelType, theIsMulti: Standard_Character, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_5(theLabelSeq: NCollection_Sequence<TDF_Label>, theMode: STEPControl_StepModelType, theIsMulti: Standard_Character, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_6(theLabelSeq: NCollection_Sequence<TDF_Label>, theParams: DESTEP_Parameters, theMode: STEPControl_StepModelType, theIsMulti: Standard_Character, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_1(theDoc: any, theFileName: XCAFDoc_PartId, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_2(theDoc: any, theFileName: Standard_Character, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_3(theDoc: any, theFileName: Standard_Character, theParams: DESTEP_Parameters, theProgress: Message_ProgressRange): Standard_Boolean;
  ExternFiles(): any;
  ExternFile_1(theLabel: TDF_Label, theExtFile: any): Standard_Boolean;
  ExternFile_2(theName: Standard_Character, theExtFile: any): Standard_Boolean;
  ChangeWriter(): STEPControl_Writer;
  Writer(): STEPControl_Writer;
  SetColorMode(theColorMode: Standard_Boolean): void;
  GetColorMode(): Standard_Boolean;
  SetNameMode(theNameMode: Standard_Boolean): void;
  GetNameMode(): Standard_Boolean;
  SetLayerMode(theLayerMode: Standard_Boolean): void;
  GetLayerMode(): Standard_Boolean;
  SetPropsMode(thePropsMode: Standard_Boolean): void;
  GetPropsMode(): Standard_Boolean;
  SetMetadataMode(theMetadataMode: Standard_Boolean): void;
  GetMetadataMode(): Standard_Boolean;
  SetSHUOMode(theSHUOMode: Standard_Boolean): void;
  GetSHUOMode(): Standard_Boolean;
  SetDimTolMode(theDimTolMode: Standard_Boolean): void;
  GetDimTolMode(): Standard_Boolean;
  SetMaterialMode(theMaterialMode: Standard_Boolean): void;
  GetMaterialMode(): Standard_Boolean;
  SetVisualMaterialMode(theVisualMaterialMode: Standard_Boolean): void;
  GetVisualMaterialMode(): Standard_Boolean;
  SetCleanDuplicates(theCleanDuplicates: Standard_Boolean): void;
  GetCleanDuplicates(): Standard_Boolean;
  SetShapeFixParameters_1(theParameters: any): void;
  SetShapeFixParameters_2(theParameters: any): void;
  SetShapeFixParameters_3(theParameters: DE_ShapeFixParameters, theAdditionalParameters: any): void;
  GetShapeFixParameters(): any;
  SetShapeProcessFlags(theFlags: any): void;
  GetShapeProcessFlags(): any;
  delete(): void;
}

  export declare class STEPCAFControl_Writer_1 extends STEPCAFControl_Writer {
    constructor();
  }

  export declare class STEPCAFControl_Writer_2 extends STEPCAFControl_Writer {
    constructor(theWS: any, theScratch: Standard_Boolean);
  }

export declare class STEPCAFControl_Controller extends STEPControl_Controller {
  constructor()
  static Init(): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class STEPCAFControl_Reader {
  Init(WS: any, scratch: Standard_Boolean): void;
  ReadFile_1(theFileName: Standard_Character): IFSelect_ReturnStatus;
  ReadFile_2(theFileName: Standard_Character, theParams: DESTEP_Parameters): IFSelect_ReturnStatus;
  NbRootsForTransfer(): Standard_Integer;
  TransferOneRoot(num: Standard_Integer, doc: any, theProgress: Message_ProgressRange): Standard_Boolean;
  Transfer_1(doc: any, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_1(filename: XCAFDoc_PartId, doc: any, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_2(filename: XCAFDoc_PartId, doc: any, theParams: DESTEP_Parameters, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_3(filename: Standard_Character, doc: any, theProgress: Message_ProgressRange): Standard_Boolean;
  Perform_4(filename: Standard_Character, doc: any, theParams: DESTEP_Parameters, theProgress: Message_ProgressRange): Standard_Boolean;
  ExternFiles(): any;
  ExternFile(name: Standard_Character, ef: any): Standard_Boolean;
  ChangeReader(): STEPControl_Reader;
  Reader(): STEPControl_Reader;
  static FindInstance(NAUO: any, STool: any, Tool: STEPConstruct_Tool, ShapeLabelMap: NCollection_DataMap<TopoDS_Shape, TDF_Label, TopTools_ShapeMapHasher>): TDF_Label;
  SetColorMode(colormode: Standard_Boolean): void;
  GetColorMode(): Standard_Boolean;
  SetNameMode(namemode: Standard_Boolean): void;
  GetNameMode(): Standard_Boolean;
  SetLayerMode(layermode: Standard_Boolean): void;
  GetLayerMode(): Standard_Boolean;
  SetPropsMode(propsmode: Standard_Boolean): void;
  GetPropsMode(): Standard_Boolean;
  SetMetaMode(theMetaMode: Standard_Boolean): void;
  GetMetaMode(): Standard_Boolean;
  SetProductMetaMode(theProductMetaMode: Standard_Boolean): void;
  GetProductMetaMode(): Standard_Boolean;
  SetSHUOMode(shuomode: Standard_Boolean): void;
  GetSHUOMode(): Standard_Boolean;
  SetGDTMode(gdtmode: Standard_Boolean): void;
  GetGDTMode(): Standard_Boolean;
  SetMatMode(matmode: Standard_Boolean): void;
  GetMatMode(): Standard_Boolean;
  SetViewMode(viewmode: Standard_Boolean): void;
  GetViewMode(): Standard_Boolean;
  GetShapeLabelMap(): any;
  SetShapeFixParameters_1(theParameters: any): void;
  SetShapeFixParameters_2(theParameters: any): void;
  SetShapeFixParameters_3(theParameters: DE_ShapeFixParameters, theAdditionalParameters: any): void;
  GetShapeFixParameters(): any;
  SetShapeProcessFlags(theFlags: any): void;
  GetShapeProcessFlags(): any;
  delete(): void;
}

  export declare class STEPCAFControl_Reader_1 extends STEPCAFControl_Reader {
    constructor();
  }

  export declare class STEPCAFControl_Reader_2 extends STEPCAFControl_Reader {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class XCAFDoc_ShapeTool extends TDataStd_GenericEmpty {
  constructor()
  static GetID(): Standard_GUID;
  static Set(L: TDF_Label): any;
  IsTopLevel(L: TDF_Label): Standard_Boolean;
  static IsFree(L: TDF_Label): Standard_Boolean;
  static IsShape(L: TDF_Label): Standard_Boolean;
  static IsSimpleShape(L: TDF_Label): Standard_Boolean;
  static IsReference(L: TDF_Label): Standard_Boolean;
  static IsAssembly(L: TDF_Label): Standard_Boolean;
  static IsComponent(L: TDF_Label): Standard_Boolean;
  static IsCompound(L: TDF_Label): Standard_Boolean;
  static IsSubShape_1(L: TDF_Label): Standard_Boolean;
  IsSubShape_2(shapeL: TDF_Label, sub: TopoDS_Shape): Standard_Boolean;
  SearchUsingMap(S: TopoDS_Shape, L: TDF_Label, findWithoutLoc: Standard_Boolean, findSubshape: Standard_Boolean): Standard_Boolean;
  Search(S: TopoDS_Shape, L: TDF_Label, findInstance: Standard_Boolean, findComponent: Standard_Boolean, findSubshape: Standard_Boolean): Standard_Boolean;
  FindShape_1(S: TopoDS_Shape, L: TDF_Label, findInstance: Standard_Boolean): Standard_Boolean;
  FindShape_2(S: TopoDS_Shape, findInstance: Standard_Boolean): TDF_Label;
  static GetShape_1(L: TDF_Label, S: TopoDS_Shape): Standard_Boolean;
  static GetShape_2(L: TDF_Label): TopoDS_Shape;
  static GetOneShape_1(theLabels: NCollection_Sequence<TDF_Label>): TopoDS_Shape;
  GetOneShape_2(): TopoDS_Shape;
  NewShape(): TDF_Label;
  SetShape(L: TDF_Label, S: TopoDS_Shape): void;
  AddShape(S: TopoDS_Shape, makeAssembly: Standard_Boolean, makePrepare: Standard_Boolean): TDF_Label;
  RemoveShape(L: TDF_Label, removeCompletely: Standard_Boolean): Standard_Boolean;
  Init(): void;
  static SetAutoNaming(V: Standard_Boolean): void;
  static AutoNaming(): Standard_Boolean;
  ComputeShapes(L: TDF_Label): void;
  ComputeSimpleShapes(): void;
  GetShapes(Labels: NCollection_Sequence<TDF_Label>): void;
  GetFreeShapes(FreeLabels: NCollection_Sequence<TDF_Label>): void;
  static GetUsers(L: TDF_Label, Labels: NCollection_Sequence<TDF_Label>, getsubchilds: Standard_Boolean): Standard_Integer;
  static GetLocation(L: TDF_Label): TopLoc_Location;
  static GetReferredShape(L: TDF_Label, Label: TDF_Label): Standard_Boolean;
  static NbComponents(L: TDF_Label, getsubchilds: Standard_Boolean): Standard_Integer;
  static GetComponents(L: TDF_Label, Labels: NCollection_Sequence<TDF_Label>, getsubchilds: Standard_Boolean): Standard_Boolean;
  AddComponent_1(assembly: TDF_Label, comp: TDF_Label, Loc: TopLoc_Location): TDF_Label;
  AddComponent_2(assembly: TDF_Label, comp: TopoDS_Shape, expand: Standard_Boolean): TDF_Label;
  RemoveComponent(comp: TDF_Label): void;
  UpdateAssemblies(): void;
  FindSubShape(shapeL: TDF_Label, sub: TopoDS_Shape, L: TDF_Label): Standard_Boolean;
  AddSubShape_1(shapeL: TDF_Label, sub: TopoDS_Shape): TDF_Label;
  AddSubShape_2(shapeL: TDF_Label, sub: TopoDS_Shape, addedSubShapeL: TDF_Label): Standard_Boolean;
  FindMainShapeUsingMap(sub: TopoDS_Shape): TDF_Label;
  FindMainShape(sub: TopoDS_Shape): TDF_Label;
  static GetSubShapes(L: TDF_Label, Labels: NCollection_Sequence<TDF_Label>): Standard_Boolean;
  BaseLabel(): TDF_Label;
  ID(): Standard_GUID;
  static IsExternRef(L: TDF_Label): Standard_Boolean;
  SetExternRefs_1(SHAS: any): TDF_Label;
  SetExternRefs_2(L: TDF_Label, SHAS: any): void;
  static GetExternRefs(L: TDF_Label, SHAS: any): void;
  SetSHUO(Labels: NCollection_Sequence<TDF_Label>, MainSHUOAttr: any): Standard_Boolean;
  static GetSHUO(SHUOLabel: TDF_Label, aSHUOAttr: any): Standard_Boolean;
  static GetAllComponentSHUO(CompLabel: TDF_Label, SHUOAttrs: any): Standard_Boolean;
  static GetSHUOUpperUsage(NextUsageL: TDF_Label, Labels: NCollection_Sequence<TDF_Label>): Standard_Boolean;
  static GetSHUONextUsage(UpperUsageL: TDF_Label, Labels: NCollection_Sequence<TDF_Label>): Standard_Boolean;
  RemoveSHUO(SHUOLabel: TDF_Label): Standard_Boolean;
  FindComponent(theShape: TopoDS_Shape, Labels: NCollection_Sequence<TDF_Label>): Standard_Boolean;
  GetSHUOInstance(theSHUO: any): TopoDS_Shape;
  SetInstanceSHUO(theShape: TopoDS_Shape): any;
  GetAllSHUOInstances(theSHUO: any, theSHUOShapeSeq: NCollection_Sequence<TopoDS_Shape>): Standard_Boolean;
  static FindSHUO(Labels: NCollection_Sequence<TDF_Label>, theSHUOAttr: any): Standard_Boolean;
  SetLocation(theShapeLabel: TDF_Label, theLoc: TopLoc_Location, theRefLabel: TDF_Label): Standard_Boolean;
  Expand(Shape: TDF_Label): Standard_Boolean;
  GetNamedProperties_1(theLabel: TDF_Label, theToCreate: Standard_Boolean): any;
  GetNamedProperties_2(theShape: TopoDS_Shape, theToCreate: Standard_Boolean): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
  delete(): void;
}

export declare class XCAFDoc_DocumentTool extends TDataStd_GenericEmpty {
  constructor()
  static GetID(): Standard_GUID;
  static Set(L: TDF_Label, IsAcces: Standard_Boolean): any;
  static IsXCAFDocument(Doc: any): Standard_Boolean;
  static DocLabel(acces: TDF_Label): TDF_Label;
  static ShapesLabel(acces: TDF_Label): TDF_Label;
  static ColorsLabel(acces: TDF_Label): TDF_Label;
  static LayersLabel(acces: TDF_Label): TDF_Label;
  static DGTsLabel(acces: TDF_Label): TDF_Label;
  static MaterialsLabel(acces: TDF_Label): TDF_Label;
  static ViewsLabel(acces: TDF_Label): TDF_Label;
  static ClippingPlanesLabel(acces: TDF_Label): TDF_Label;
  static NotesLabel(acces: TDF_Label): TDF_Label;
  static VisMaterialLabel(theLabel: TDF_Label): TDF_Label;
  static ShapeTool(acces: TDF_Label): any;
  static CheckShapeTool(theAcces: TDF_Label): Standard_Boolean;
  static ColorTool(acces: TDF_Label): any;
  static CheckColorTool(theAcces: TDF_Label): Standard_Boolean;
  static VisMaterialTool(theLabel: TDF_Label): any;
  static CheckVisMaterialTool(theAcces: TDF_Label): Standard_Boolean;
  static LayerTool(acces: TDF_Label): any;
  static CheckLayerTool(theAcces: TDF_Label): Standard_Boolean;
  static DimTolTool(acces: TDF_Label): any;
  static CheckDimTolTool(theAcces: TDF_Label): Standard_Boolean;
  static MaterialTool(acces: TDF_Label): any;
  static CheckMaterialTool(theAcces: TDF_Label): Standard_Boolean;
  static ViewTool(acces: TDF_Label): any;
  static CheckViewTool(theAcces: TDF_Label): Standard_Boolean;
  static ClippingPlaneTool(acces: TDF_Label): any;
  static CheckClippingPlaneTool(theAcces: TDF_Label): Standard_Boolean;
  static NotesTool(acces: TDF_Label): any;
  static CheckNotesTool(theAcces: TDF_Label): Standard_Boolean;
  static GetLengthUnit_1(theDoc: any, theResut: Standard_Real, theBaseUnit: UnitsMethods_LengthUnit): Standard_Boolean;
  static GetLengthUnit_2(theDoc: any, theResut: Standard_Real): Standard_Boolean;
  static SetLengthUnit_1(theDoc: any, theUnitValue: Standard_Real): void;
  static SetLengthUnit_2(theDoc: any, theUnitValue: Standard_Real, theBaseUnit: UnitsMethods_LengthUnit): void;
  Init(): void;
  ID(): Standard_GUID;
  AfterRetrieval(forceIt: Standard_Boolean): Standard_Boolean;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
  delete(): void;
}

export declare class XCAFDoc_ColorTool extends TDataStd_GenericEmpty {
  constructor()
  static AutoNaming(): Standard_Boolean;
  static SetAutoNaming(theIsAutoNaming: Standard_Boolean): void;
  static Set(L: TDF_Label): any;
  static GetID(): Standard_GUID;
  BaseLabel(): TDF_Label;
  ShapeTool(): any;
  IsColor(lab: TDF_Label): Standard_Boolean;
  static GetColor_1(lab: TDF_Label, col: Quantity_Color): Standard_Boolean;
  static GetColor_2(lab: TDF_Label, col: Quantity_ColorRGBA): Standard_Boolean;
  FindColor_1(col: Quantity_Color, lab: TDF_Label): Standard_Boolean;
  FindColor_2(col: Quantity_ColorRGBA, lab: TDF_Label): Standard_Boolean;
  FindColor_3(col: Quantity_Color): TDF_Label;
  FindColor_4(col: Quantity_ColorRGBA): TDF_Label;
  AddColor_1(col: Quantity_Color): TDF_Label;
  AddColor_2(col: Quantity_ColorRGBA): TDF_Label;
  RemoveColor(lab: TDF_Label): void;
  GetColors(Labels: NCollection_Sequence<TDF_Label>): void;
  SetColor_1(L: TDF_Label, colorL: TDF_Label, type: XCAFDoc_ColorType): void;
  SetColor_2(L: TDF_Label, Color: Quantity_Color, type: XCAFDoc_ColorType): void;
  SetColor_3(L: TDF_Label, Color: Quantity_ColorRGBA, type: XCAFDoc_ColorType): void;
  UnSetColor_1(L: TDF_Label, type: XCAFDoc_ColorType): void;
  IsSet_1(L: TDF_Label, type: XCAFDoc_ColorType): Standard_Boolean;
  static GetColor_3(L: TDF_Label, type: XCAFDoc_ColorType, colorL: TDF_Label): Standard_Boolean;
  static GetColor_4(L: TDF_Label, type: XCAFDoc_ColorType, color: Quantity_Color): Standard_Boolean;
  static GetColor_5(L: TDF_Label, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA): Standard_Boolean;
  SetColor_4(S: TopoDS_Shape, colorL: TDF_Label, type: XCAFDoc_ColorType): Standard_Boolean;
  SetColor_5(S: TopoDS_Shape, Color: Quantity_Color, type: XCAFDoc_ColorType): Standard_Boolean;
  SetColor_6(S: TopoDS_Shape, Color: Quantity_ColorRGBA, type: XCAFDoc_ColorType): Standard_Boolean;
  UnSetColor_2(S: TopoDS_Shape, type: XCAFDoc_ColorType): Standard_Boolean;
  IsSet_2(S: TopoDS_Shape, type: XCAFDoc_ColorType): Standard_Boolean;
  GetColor_6(S: TopoDS_Shape, type: XCAFDoc_ColorType, colorL: TDF_Label): Standard_Boolean;
  GetColor_7(S: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_Color): Standard_Boolean;
  GetColor_8(S: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA): Standard_Boolean;
  static IsVisible(L: TDF_Label): Standard_Boolean;
  SetVisibility(shapeLabel: TDF_Label, isvisible: Standard_Boolean): void;
  IsColorByLayer(L: TDF_Label): Standard_Boolean;
  SetColorByLayer(shapeLabel: TDF_Label, isColorByLayer: Standard_Boolean): void;
  SetInstanceColor_1(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_Color, isCreateSHUO: Standard_Boolean): Standard_Boolean;
  SetInstanceColor_2(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA, isCreateSHUO: Standard_Boolean): Standard_Boolean;
  GetInstanceColor_1(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_Color): Standard_Boolean;
  GetInstanceColor_2(theShape: TopoDS_Shape, type: XCAFDoc_ColorType, color: Quantity_ColorRGBA): Standard_Boolean;
  IsInstanceVisible(theShape: TopoDS_Shape): Standard_Boolean;
  ReverseChainsOfTreeNodes(): Standard_Boolean;
  ID(): Standard_GUID;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  NewEmpty(): any;
  delete(): void;
}

export declare type XCAFDoc_ColorType = {
  XCAFDoc_ColorGen: {};
  XCAFDoc_ColorSurf: {};
  XCAFDoc_ColorCurv: {};
}

export declare class XCAFApp_Application extends TDocStd_Application {
  ResourcesName(): Standard_Character;
  InitDocument(aDoc: any): void;
  static GetApplication(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class RWStl {
  constructor();
  static WriteBinary_1(theMesh: any, thePath: OSD_Path, theProgress: Message_ProgressRange): Standard_Boolean;
  static WriteAscii_1(theMesh: any, thePath: OSD_Path, theProgress: Message_ProgressRange): Standard_Boolean;
  static ReadFile_1(theFile: OSD_Path, theProgress: Message_ProgressRange): any;
  static ReadFile_2(theFile: Standard_Character, theProgress: Message_ProgressRange): any;
  static ReadFile_3(theFile: Standard_Character, theMergeAngle: Standard_Real, theProgress: Message_ProgressRange): any;
  static ReadFile_4(theFile: Standard_Character, theMergeAngle: Standard_Real, theTriangList: any, theProgress: Message_ProgressRange): void;
  static ReadBinary(thePath: OSD_Path, theProgress: Message_ProgressRange): any;
  static ReadAscii(thePath: OSD_Path, theProgress: Message_ProgressRange): any;
  delete(): void;
}

export declare class StlAPI_Reader {
  constructor();
  Read_1(theShape: TopoDS_Shape, theFileName: Standard_Character): Standard_Boolean;
  delete(): void;
}

export declare class StlAPI_Writer {
  constructor()
  ASCIIMode(): Standard_Boolean;
  Write_1(theShape: TopoDS_Shape, theFileName: Standard_Character, theProgress: Message_ProgressRange): Standard_Boolean;
  delete(): void;
}

export declare class MoniTool_TypedValue extends Standard_Transient {
  Name(): Standard_Character;
  ValueType(): MoniTool_ValueType;
  Definition(): XCAFDoc_PartId;
  SetDefinition(deftext: Standard_Character): void;
  AddDef(initext: Standard_Character): Standard_Boolean;
  SetLabel(label: Standard_Character): void;
  Label(): Standard_Character;
  SetMaxLength(max: Standard_Integer): void;
  MaxLength(): Standard_Integer;
  SetIntegerLimit(max: Standard_Boolean, val: Standard_Integer): void;
  IntegerLimit(max: Standard_Boolean, val: Standard_Integer): Standard_Boolean;
  SetRealLimit(max: Standard_Boolean, val: Standard_Real): void;
  RealLimit(max: Standard_Boolean, val: Standard_Real): Standard_Boolean;
  SetUnitDef(def: Standard_Character): void;
  UnitDef(): Standard_Character;
  StartEnum(start: Standard_Integer, match: Standard_Boolean): void;
  AddEnum(v1: Standard_Character, v2: Standard_Character, v3: Standard_Character, v4: Standard_Character, v5: Standard_Character, v6: Standard_Character, v7: Standard_Character, v8: Standard_Character, v9: Standard_Character, v10: Standard_Character): void;
  AddEnumValue(val: Standard_Character, num: Standard_Integer): void;
  EnumDef(startcase: Standard_Integer, endcase: Standard_Integer, match: Standard_Boolean): Standard_Boolean;
  EnumVal(num: Standard_Integer): Standard_Character;
  EnumCase(val: Standard_Character): Standard_Integer;
  SetObjectType(typ: any): void;
  ObjectType(): any;
  SetInterpret(func: MoniTool_ValueInterpret): void;
  HasInterpret(): Standard_Boolean;
  SetSatisfies(func: MoniTool_ValueSatisfies, name: Standard_Character): void;
  SatisfiesName(): Standard_Character;
  IsSetValue(): Standard_Boolean;
  CStringValue(): Standard_Character;
  HStringValue(): any;
  Interpret(hval: any, native: Standard_Boolean): any;
  Satisfies(hval: any): Standard_Boolean;
  ClearValue(): void;
  SetCStringValue(val: Standard_Character): Standard_Boolean;
  SetHStringValue(hval: any): Standard_Boolean;
  IntegerValue(): Standard_Integer;
  SetIntegerValue(ival: Standard_Integer): Standard_Boolean;
  RealValue(): Standard_Real;
  SetRealValue(rval: Standard_Real): Standard_Boolean;
  ObjectValue(): any;
  GetObjectValue(val: any): void;
  SetObjectValue(obj: any): Standard_Boolean;
  ObjectTypeName(): Standard_Character;
  static AddLib(tv: any, def: Standard_Character): Standard_Boolean;
  static Lib(def: Standard_Character): any;
  static FromLib(def: Standard_Character): any;
  static LibList(): any;
  static StaticValue(name: Standard_Character): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class MoniTool_TypedValue_1 extends MoniTool_TypedValue {
    constructor(name: Standard_Character, type: MoniTool_ValueType, init: Standard_Character);
  }

  export declare class MoniTool_TypedValue_2 extends MoniTool_TypedValue {
    constructor(other: any);
  }

export declare class IFSelect_WorkSession extends Standard_Transient {
  constructor()
  SetErrorHandle(toHandle: Standard_Boolean): void;
  ErrorHandle(): Standard_Boolean;
  ShareOut(): any;
  SetShareOut(shareout: any): void;
  SetModeStat(theMode: Standard_Boolean): void;
  GetModeStat(): Standard_Boolean;
  SetLibrary(theLib: any): void;
  WorkLibrary(): any;
  SetProtocol(protocol: any): void;
  Protocol(): any;
  SetSignType(signtype: any): void;
  SignType(): any;
  HasModel(): Standard_Boolean;
  SetModel(model: any, clearpointed: Standard_Boolean): void;
  Model(): any;
  SetLoadedFile(theFileName: Standard_Character): void;
  LoadedFile(): Standard_Character;
  ReadFile(filename: Standard_Character): IFSelect_ReturnStatus;
  NbStartingEntities(): Standard_Integer;
  StartingEntity(num: Standard_Integer): any;
  StartingNumber(ent: any): Standard_Integer;
  NumberFromLabel(val: Standard_Character, afternum: Standard_Integer): Standard_Integer;
  EntityLabel(ent: any): any;
  EntityName(ent: any): any;
  CategoryNumber(ent: any): Standard_Integer;
  CategoryName(ent: any): Standard_Character;
  ValidityName(ent: any): Standard_Character;
  ClearData(mode: Standard_Integer): void;
  ComputeGraph(enforce: Standard_Boolean): Standard_Boolean;
  HGraph(): any;
  Graph(): Interface_Graph;
  Shareds(ent: any): any;
  Sharings(ent: any): any;
  IsLoaded(): Standard_Boolean;
  ComputeCheck(enforce: Standard_Boolean): Standard_Boolean;
  ModelCheckList(complete: Standard_Boolean): Interface_CheckIterator;
  CheckOne(ent: any, complete: Standard_Boolean): Interface_CheckIterator;
  LastRunCheckList(): Interface_CheckIterator;
  MaxIdent(): Standard_Integer;
  Item(id: Standard_Integer): any;
  ItemIdent(item: any): Standard_Integer;
  NamedItem_1(name: Standard_Character): any;
  NamedItem_2(name: any): any;
  NameIdent(name: Standard_Character): Standard_Integer;
  HasName(item: any): Standard_Boolean;
  Name(item: any): any;
  AddItem(item: any, active: Standard_Boolean): Standard_Integer;
  AddNamedItem(name: Standard_Character, item: any, active: Standard_Boolean): Standard_Integer;
  SetActive(item: any, mode: Standard_Boolean): Standard_Boolean;
  RemoveNamedItem(name: Standard_Character): Standard_Boolean;
  RemoveName(name: Standard_Character): Standard_Boolean;
  RemoveItem(item: any): Standard_Boolean;
  ClearItems(): void;
  ItemLabel(id: Standard_Integer): any;
  ItemIdents(type: any): any;
  ItemNames(type: any): any;
  ItemNamesForLabel(label: Standard_Character): any;
  NextIdentForLabel(label: Standard_Character, id: Standard_Integer, mode: Standard_Integer): Standard_Integer;
  NewParamFromStatic(statname: Standard_Character, name: Standard_Character): any;
  IntParam(id: Standard_Integer): any;
  IntValue(it: any): Standard_Integer;
  NewIntParam(name: Standard_Character): any;
  SetIntValue(it: any, val: Standard_Integer): Standard_Boolean;
  TextParam(id: Standard_Integer): any;
  TextValue(par: any): XCAFDoc_PartId;
  NewTextParam(name: Standard_Character): any;
  SetTextValue(par: any, val: Standard_Character): Standard_Boolean;
  Signature(id: Standard_Integer): any;
  SignValue(sign: any, ent: any): Standard_Character;
  Selection(id: Standard_Integer): any;
  EvalSelection(sel: any): Interface_EntityIterator;
  Sources(sel: any): IFSelect_SelectionIterator;
  SelectionResult(sel: any): any;
  SelectionResultFromList(sel: any, list: any): any;
  SetItemSelection(item: any, sel: any): Standard_Boolean;
  ResetItemSelection(item: any): Standard_Boolean;
  ItemSelection(item: any): any;
  SignCounter(id: Standard_Integer): any;
  ComputeCounter(counter: any, forced: Standard_Boolean): Standard_Boolean;
  ComputeCounterFromList(counter: any, list: any, clear: Standard_Boolean): Standard_Boolean;
  AppliedDispatches(): any;
  ClearShareOut(onlydisp: Standard_Boolean): void;
  Dispatch(id: Standard_Integer): any;
  DispatchRank(disp: any): Standard_Integer;
  ModelCopier(): any;
  SetModelCopier(copier: any): void;
  NbFinalModifiers(formodel: Standard_Boolean): Standard_Integer;
  FinalModifierIdents(formodel: Standard_Boolean): any;
  GeneralModifier(id: Standard_Integer): any;
  ModelModifier(id: Standard_Integer): any;
  ModifierRank(item: any): Standard_Integer;
  ChangeModifierRank(formodel: Standard_Boolean, before: Standard_Integer, after: Standard_Integer): Standard_Boolean;
  ClearFinalModifiers(): void;
  SetAppliedModifier(modif: any, item: any): Standard_Boolean;
  ResetAppliedModifier(modif: any): Standard_Boolean;
  UsesAppliedModifier(modif: any): any;
  Transformer(id: Standard_Integer): any;
  RunTransformer(transf: any): Standard_Integer;
  RunModifier(modif: any, copy: Standard_Boolean): Standard_Integer;
  RunModifierSelected(modif: any, sel: any, copy: Standard_Boolean): Standard_Integer;
  NewTransformStandard(copy: Standard_Boolean, name: Standard_Character): any;
  SetModelContent(sel: any, keep: Standard_Boolean): Standard_Boolean;
  FilePrefix(): any;
  DefaultFileRoot(): any;
  FileExtension(): any;
  FileRoot(disp: any): any;
  SetFilePrefix(name: Standard_Character): void;
  SetDefaultFileRoot(name: Standard_Character): Standard_Boolean;
  SetFileExtension(name: Standard_Character): void;
  SetFileRoot(disp: any, name: Standard_Character): Standard_Boolean;
  GiveFileRoot(file: Standard_Character): Standard_Character;
  GiveFileComplete(file: Standard_Character): Standard_Character;
  ClearFile(): void;
  EvaluateFile(): void;
  NbFiles(): Standard_Integer;
  FileModel(num: Standard_Integer): any;
  FileName(num: Standard_Integer): XCAFDoc_PartId;
  BeginSentFiles(record: Standard_Boolean): void;
  SentFiles(): any;
  SendSplit(): Standard_Boolean;
  EvalSplit(): any;
  SentList(count: Standard_Integer): Interface_EntityIterator;
  MaxSendingCount(): Standard_Integer;
  SetRemaining(mode: IFSelect_RemainMode): Standard_Boolean;
  SendAll(filename: Standard_Character, computegraph: Standard_Boolean): IFSelect_ReturnStatus;
  SendSelected(filename: Standard_Character, sel: any, computegraph: Standard_Boolean): IFSelect_ReturnStatus;
  WriteFile_1(filename: Standard_Character): IFSelect_ReturnStatus;
  WriteFile_2(filename: Standard_Character, sel: any): IFSelect_ReturnStatus;
  NbSources(sel: any): Standard_Integer;
  Source(sel: any, num: Standard_Integer): any;
  IsReversedSelectExtract(sel: any): Standard_Boolean;
  ToggleSelectExtract(sel: any): Standard_Boolean;
  SetInputSelection(sel: any, input: any): Standard_Boolean;
  SetControl(sel: any, sc: any, formain: Standard_Boolean): Standard_Boolean;
  CombineAdd(selcomb: any, seladd: any, atnum: Standard_Integer): Standard_Integer;
  CombineRemove(selcomb: any, selrem: any): Standard_Boolean;
  NewSelectPointed(list: any, name: Standard_Character): any;
  SetSelectPointed(sel: any, list: any, mode: Standard_Integer): Standard_Boolean;
  GiveSelection(selname: Standard_Character): any;
  GiveList_1(obj: any): any;
  GiveList_2(first: Standard_Character, second: Standard_Character): any;
  GiveListFromList(selname: Standard_Character, ent: any): any;
  GiveListCombined(l1: any, l2: any, mode: Standard_Integer): any;
  QueryCheckList(chl: Interface_CheckIterator): void;
  QueryCheckStatus(ent: any): Standard_Integer;
  QueryParent(entdad: any, entson: any): Standard_Integer;
  SetParams(params: any, uselist: NCollection_DynamicArray<int>): void;
  TraceStatics(use: Standard_Integer, mode: Standard_Integer): void;
  DumpShare(): void;
  ListItems(label: Standard_Character): void;
  ListFinalModifiers(formodel: Standard_Boolean): void;
  DumpSelection(sel: any): void;
  TraceDumpModel(mode: Standard_Integer): void;
  TraceDumpEntity(ent: any, level: Standard_Integer): void;
  EvaluateSelection(sel: any): void;
  EvaluateDispatch(disp: any, mode: Standard_Integer): void;
  EvaluateComplete(mode: Standard_Integer): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare type IFSelect_ReturnStatus = {
  IFSelect_RetVoid: {};
  IFSelect_RetDone: {};
  IFSelect_RetError: {};
  IFSelect_RetFail: {};
  IFSelect_RetStop: {};
}

export declare class Transfer_TransientProcess extends Transfer_ProcessForTransient {
  constructor(nb: Standard_Integer)
  SetModel(model: any): void;
  Model(): any;
  SetGraph(HG: any): void;
  HasGraph(): Standard_Boolean;
  HGraph(): any;
  Graph(): Interface_Graph;
  SetContext(name: Standard_Character, ctx: any): void;
  GetContext(name: Standard_Character, type: any, ctx: any): Standard_Boolean;
  Context(): any;
  CheckNum(ent: any): Standard_Integer;
  TypedSharings(start: any, type: any): Interface_EntityIterator;
  IsDataLoaded(ent: any): Standard_Boolean;
  IsDataFail(ent: any): Standard_Boolean;
  RootsForTransfer(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Transfer_ProcessForTransient extends Standard_Transient {
  Clear(): void;
  Clean(): void;
  Resize(nb: Standard_Integer): void;
  SetActor(actor: any): void;
  Actor(): any;
  Find(start: any): any;
  IsBound(start: any): Standard_Boolean;
  IsAlreadyUsed(start: any): Standard_Boolean;
  Bind(start: any, binder: any): void;
  Rebind(start: any, binder: any): void;
  Unbind(start: any): Standard_Boolean;
  FindElseBind(start: any): any;
  SetMessenger(messenger: any): void;
  Messenger(): any;
  SetTraceLevel(tracelev: Standard_Integer): void;
  TraceLevel(): Standard_Integer;
  SendFail(start: any, amsg: Message_Msg): void;
  SendWarning(start: any, amsg: Message_Msg): void;
  SendMsg(start: any, amsg: Message_Msg): void;
  AddFail_1(start: any, mess: Standard_Character, orig: Standard_Character): void;
  AddError(start: any, mess: Standard_Character, orig: Standard_Character): void;
  AddFail_2(start: any, amsg: Message_Msg): void;
  AddWarning_1(start: any, mess: Standard_Character, orig: Standard_Character): void;
  AddWarning_2(start: any, amsg: Message_Msg): void;
  Mend(start: any, pref: Standard_Character): void;
  Check(start: any): any;
  BindTransient(start: any, res: any): void;
  FindTransient(start: any): any;
  BindMultiple(start: any): void;
  AddMultiple(start: any, res: any): void;
  FindTypedTransient(start: any, atype: any, val: any): Standard_Boolean;
  GetTypedTransient(binder: any, atype: any, val: any): Standard_Boolean;
  NbMapped(): Standard_Integer;
  Mapped(num: Standard_Integer): any;
  MapIndex(start: any): Standard_Integer;
  MapItem(num: Standard_Integer): any;
  SetRoot(start: any): void;
  SetRootManagement(stat: Standard_Boolean): void;
  NbRoots(): Standard_Integer;
  Root(num: Standard_Integer): any;
  RootItem(num: Standard_Integer): any;
  RootIndex(start: any): Standard_Integer;
  NestingLevel(): Standard_Integer;
  ResetNestingLevel(): void;
  Recognize(start: any): Standard_Boolean;
  Transferring(start: any, theProgress: Message_ProgressRange): any;
  Transfer(start: any, theProgress: Message_ProgressRange): Standard_Boolean;
  SetErrorHandle(err: Standard_Boolean): void;
  ErrorHandle(): Standard_Boolean;
  StartTrace(binder: any, start: any, level: Standard_Integer, mode: Standard_Integer): void;
  IsLooping(alevel: Standard_Integer): Standard_Boolean;
  RootResult(withstart: Standard_Boolean): Transfer_IteratorOfProcessForTransient;
  CompleteResult(withstart: Standard_Boolean): Transfer_IteratorOfProcessForTransient;
  AbnormalResult(): Transfer_IteratorOfProcessForTransient;
  CheckList(erronly: Standard_Boolean): Interface_CheckIterator;
  ResultOne(start: any, level: Standard_Integer, withstart: Standard_Boolean): Transfer_IteratorOfProcessForTransient;
  CheckListOne(start: any, level: Standard_Integer, erronly: Standard_Boolean): Interface_CheckIterator;
  IsCheckListEmpty(start: any, level: Standard_Integer, erronly: Standard_Boolean): Standard_Boolean;
  RemoveResult(start: any, level: Standard_Integer, compute: Standard_Boolean): void;
  CheckNum(start: any): Standard_Integer;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Transfer_ProcessForTransient_1 extends Transfer_ProcessForTransient {
    constructor(nb: Standard_Integer);
  }

  export declare class Transfer_ProcessForTransient_2 extends Transfer_ProcessForTransient {
    constructor(printer: any, nb: Standard_Integer);
  }

export declare class XSControl_Reader {
  SetNorm(norm: Standard_Character): Standard_Boolean;
  SetWS(WS: any, scratch: Standard_Boolean): void;
  WS(): any;
  ReadFile(filename: Standard_Character): IFSelect_ReturnStatus;
  Model(): any;
  GiveList_1(first: Standard_Character, second: Standard_Character): any;
  GiveList_2(first: Standard_Character, ent: any): any;
  NbRootsForTransfer(): Standard_Integer;
  RootForTransfer(num: Standard_Integer): any;
  TransferOneRoot(num: Standard_Integer, theProgress: Message_ProgressRange): Standard_Boolean;
  TransferOne(num: Standard_Integer, theProgress: Message_ProgressRange): Standard_Boolean;
  TransferEntity(start: any, theProgress: Message_ProgressRange): Standard_Boolean;
  TransferList(list: any, theProgress: Message_ProgressRange): Standard_Integer;
  TransferRoots(theProgress: Message_ProgressRange): Standard_Integer;
  ClearShapes(): void;
  NbShapes(): Standard_Integer;
  Shape(num: Standard_Integer): TopoDS_Shape;
  OneShape(): TopoDS_Shape;
  PrintCheckLoad_1(failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintCheckTransfer_1(failsonly: Standard_Boolean, mode: IFSelect_PrintCount): void;
  PrintStatsTransfer_1(what: Standard_Integer, mode: Standard_Integer): void;
  GetStatsTransfer(list: any, nbMapped: Standard_Integer, nbWithResult: Standard_Integer, nbWithFail: Standard_Integer): void;
  SetShapeFixParameters_1(theParameters: any): void;
  SetShapeFixParameters_2(theParameters: any): void;
  SetShapeFixParameters_3(theParameters: DE_ShapeFixParameters, theAdditionalParameters: any): void;
  GetShapeFixParameters(): any;
  SetShapeProcessFlags(theFlags: any): void;
  GetShapeProcessFlags(): any;
  delete(): void;
}

  export declare class XSControl_Reader_1 extends XSControl_Reader {
    constructor();
  }

  export declare class XSControl_Reader_2 extends XSControl_Reader {
    constructor(norm: Standard_Character);
  }

  export declare class XSControl_Reader_3 extends XSControl_Reader {
    constructor(WS: any, scratch: Standard_Boolean);
  }

export declare class XSControl_WorkSession extends IFSelect_WorkSession {
  constructor()
  ClearData(theMode: Standard_Integer): void;
  SelectNorm(theNormName: Standard_Character): Standard_Boolean;
  SetController(theCtl: any): void;
  SelectedNorm(theRsc: Standard_Boolean): Standard_Character;
  NormAdaptor(): any;
  Context(): XSControl_WorkSessionMap;
  SetAllContext(theContext: XSControl_WorkSessionMap): void;
  ClearContext(): void;
  InitTransferReader(theMode: Standard_Integer): void;
  SetTransferReader(theTR: any): void;
  TransferReader(): any;
  MapReader(): any;
  SetMapReader(theTP: any): Standard_Boolean;
  Result(theEnt: any, theMode: Standard_Integer): any;
  TransferReadOne(theEnts: any, theProgress: Message_ProgressRange): Standard_Integer;
  TransferReadRoots(theProgress: Message_ProgressRange): Standard_Integer;
  NewModel(): any;
  TransferWriter(): any;
  SetMapWriter(theFP: any): Standard_Boolean;
  TransferWriteShape(theShape: TopoDS_Shape, theCompGraph: Standard_Boolean, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  TransferWriteCheckList(): Interface_CheckIterator;
  Vars(): any;
  SetVars(theVars: any): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class XSControl_Controller extends Standard_Transient {
  SetNames(theLongName: Standard_Character, theShortName: Standard_Character): void;
  AutoRecord(): void;
  Record(name: Standard_Character): void;
  static Recorded(name: Standard_Character): any;
  Name(rsc: Standard_Boolean): Standard_Character;
  Protocol(): any;
  WorkLibrary(): any;
  NewModel(): any;
  ActorRead(model: any): any;
  ActorWrite(): any;
  SetModeWrite(modemin: Standard_Integer, modemax: Standard_Integer, shape: Standard_Boolean): void;
  SetModeWriteHelp(modetrans: Standard_Integer, help: Standard_Character, shape: Standard_Boolean): void;
  ModeWriteBounds(modemin: Standard_Integer, modemax: Standard_Integer, shape: Standard_Boolean): Standard_Boolean;
  IsModeWrite(modetrans: Standard_Integer, shape: Standard_Boolean): Standard_Boolean;
  ModeWriteHelp(modetrans: Standard_Integer, shape: Standard_Boolean): Standard_Character;
  RecognizeWriteTransient(obj: any, modetrans: Standard_Integer): Standard_Boolean;
  TransferWriteTransient(obj: any, FP: any, model: any, modetrans: Standard_Integer, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  RecognizeWriteShape(shape: TopoDS_Shape, modetrans: Standard_Integer): Standard_Boolean;
  TransferWriteShape(shape: TopoDS_Shape, FP: any, model: any, modetrans: Standard_Integer, theProgress: Message_ProgressRange): IFSelect_ReturnStatus;
  AddSessionItem(theItem: any, theName: Standard_Character, toApply: Standard_Boolean): void;
  SessionItem(theName: Standard_Character): any;
  Customise(WS: any): void;
  AdaptorSession(): any;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Interface_TypedValue extends MoniTool_TypedValue {
  constructor(name: Standard_Character, type: Interface_ParamType, init: Standard_Character)
  Type(): Interface_ParamType;
  static ParamTypeToValueType(typ: Interface_ParamType): MoniTool_ValueType;
  static ValueTypeToParamType(typ: MoniTool_ValueType): Interface_ParamType;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

export declare class Interface_Static extends Interface_TypedValue {
  Family(): Standard_Character;
  SetWild(wildcard: any): void;
  Wild(): any;
  SetUptodate(): void;
  UpdatedStatus(): Standard_Boolean;
  static Init_1(family: Standard_Character, name: Standard_Character, type: Interface_ParamType, init: Standard_Character): Standard_Boolean;
  static Init_2(family: Standard_Character, name: Standard_Character, type: Standard_Character, init: Standard_Character): Standard_Boolean;
  static Static(name: Standard_Character): any;
  static IsPresent(name: Standard_Character): Standard_Boolean;
  static CDef(name: Standard_Character, part: Standard_Character): Standard_Character;
  static IDef(name: Standard_Character, part: Standard_Character): Standard_Integer;
  static IsSet(name: Standard_Character, proper: Standard_Boolean): Standard_Boolean;
  static CVal(name: Standard_Character): Standard_Character;
  static IVal(name: Standard_Character): Standard_Integer;
  static RVal(name: Standard_Character): Standard_Real;
  static SetCVal(name: Standard_Character, val: Standard_Character): Standard_Boolean;
  static SetIVal(name: Standard_Character, val: Standard_Integer): Standard_Boolean;
  static SetRVal(name: Standard_Character, val: Standard_Real): Standard_Boolean;
  static Update(name: Standard_Character): Standard_Boolean;
  static IsUpdated(name: Standard_Character): Standard_Boolean;
  static Items(mode: Standard_Integer, criter: Standard_Character): any;
  static Standards(): void;
  static FillMap(theMap: NCollection_DataMap<TCollection_AsciiString, TCollection_AsciiString>): void;
  static get_type_name(): Standard_Character;
  static get_type_descriptor(): any;
  DynamicType(): any;
  delete(): void;
}

  export declare class Interface_Static_1 extends Interface_Static {
    constructor(family: Standard_Character, name: Standard_Character, type: Interface_ParamType, init: Standard_Character);
  }

  export declare class Interface_Static_2 extends Interface_Static {
    constructor(family: Standard_Character, name: Standard_Character, other: any);
  }

type Standard_Boolean = boolean;
type Standard_Byte = number;
type Standard_Character = number;
type Standard_CString = string;
type Standard_Integer = number;
type Standard_Real = number;
type Standard_ShortReal = number;
type Standard_Size = number;

declare namespace FS {
  interface Lookup {
      path: string;
      node: FSNode;
  }

  interface FSStream {}
  interface FSNode {}
  interface ErrnoError {}

  let ignorePermissions: boolean;
  let trackingDelegate: any;
  let tracking: any;
  let genericErrors: any;

  //
  // paths
  //
  function lookupPath(path: string, opts: any): Lookup;
  function getPath(node: FSNode): string;

  //
  // nodes
  //
  function isFile(mode: number): boolean;
  function isDir(mode: number): boolean;
  function isLink(mode: number): boolean;
  function isChrdev(mode: number): boolean;
  function isBlkdev(mode: number): boolean;
  function isFIFO(mode: number): boolean;
  function isSocket(mode: number): boolean;

  //
  // devices
  //
  function major(dev: number): number;
  function minor(dev: number): number;
  function makedev(ma: number, mi: number): number;
  function registerDevice(dev: number, ops: any): void;

  //
  // core
  //
  function syncfs(populate: boolean, callback: (e: any) => any): void;
  function syncfs(callback: (e: any) => any, populate?: boolean): void;
  function mount(type: any, opts: any, mountpoint: string): any;
  function unmount(mountpoint: string): void;

  function mkdir(path: string, mode?: number): any;
  function mkdev(path: string, mode?: number, dev?: number): any;
  function symlink(oldpath: string, newpath: string): any;
  function rename(old_path: string, new_path: string): void;
  function rmdir(path: string): void;
  function readdir(path: string): any;
  function unlink(path: string): void;
  function readlink(path: string): string;
  function stat(path: string, dontFollow?: boolean): any;
  function lstat(path: string): any;
  function chmod(path: string, mode: number, dontFollow?: boolean): void;
  function lchmod(path: string, mode: number): void;
  function fchmod(fd: number, mode: number): void;
  function chown(path: string, uid: number, gid: number, dontFollow?: boolean): void;
  function lchown(path: string, uid: number, gid: number): void;
  function fchown(fd: number, uid: number, gid: number): void;
  function truncate(path: string, len: number): void;
  function ftruncate(fd: number, len: number): void;
  function utime(path: string, atime: number, mtime: number): void;
  function open(path: string, flags: string, mode?: number, fd_start?: number, fd_end?: number): FSStream;
  function close(stream: FSStream): void;
  function llseek(stream: FSStream, offset: number, whence: number): any;
  function read(stream: FSStream, buffer: ArrayBufferView, offset: number, length: number, position?: number): number;
  function write(
      stream: FSStream,
      buffer: ArrayBufferView,
      offset: number,
      length: number,
      position?: number,
      canOwn?: boolean,
  ): number;
  function allocate(stream: FSStream, offset: number, length: number): void;
  function mmap(
      stream: FSStream,
      buffer: ArrayBufferView,
      offset: number,
      length: number,
      position: number,
      prot: number,
      flags: number,
  ): any;
  function ioctl(stream: FSStream, cmd: any, arg: any): any;
  function readFile(path: string, opts: { encoding: 'binary'; flags?: string }): Uint8Array;
  function readFile(path: string, opts: { encoding: 'utf8'; flags?: string }): string;
  function readFile(path: string, opts?: { flags?: string }): Uint8Array;
  function writeFile(path: string, data: string | ArrayBufferView, opts?: { flags?: string }): void;

  //
  // module-level FS code
  //
  function cwd(): string;
  function chdir(path: string): void;
  function init(
      input: null | (() => number | null),
      output: null | ((c: number) => any),
      error: null | ((c: number) => any),
  ): void;

  function createLazyFile(
      parent: string | FSNode,
      name: string,
      url: string,
      canRead: boolean,
      canWrite: boolean,
  ): FSNode;
  function createPreloadedFile(
      parent: string | FSNode,
      name: string,
      url: string,
      canRead: boolean,
      canWrite: boolean,
      onload?: () => void,
      onerror?: () => void,
      dontCreateFile?: boolean,
      canOwn?: boolean,
  ): void;
  function createDataFile(
      parent: string | FSNode,
      name: string,
      data: ArrayBufferView | string,
      canRead: boolean,
      canWrite: boolean,
      canOwn: boolean,
  ): FSNode;
  interface AnalysisResults {
    isRoot: boolean,
    exists: boolean,
    error: Error,
    name: string,
    path: any,
    object: any,
    parentExists: boolean,
    parentPath: any,
    parentObject: any
  }
  function analyzePath(path: string): AnalysisResults;
}


export type OpenCascadeInstance = {FS: typeof FS} & {
  Quantity_Color: typeof Quantity_Color;
  Quantity_Color_1: typeof Quantity_Color_1;
  Quantity_Color_2: typeof Quantity_Color_2;
  Quantity_Color_3: typeof Quantity_Color_3;
  Quantity_Color_4: typeof Quantity_Color_4;
  Quantity_TypeOfColor: Quantity_TypeOfColor;
  Quantity_ColorRGBA: typeof Quantity_ColorRGBA;
  Quantity_ColorRGBA_1: typeof Quantity_ColorRGBA_1;
  Quantity_ColorRGBA_2: typeof Quantity_ColorRGBA_2;
  Quantity_ColorRGBA_3: typeof Quantity_ColorRGBA_3;
  Quantity_ColorRGBA_4: typeof Quantity_ColorRGBA_4;
  Quantity_ColorRGBA_5: typeof Quantity_ColorRGBA_5;
  Message_Gravity: Message_Gravity;
  Message: typeof Message;
  Message_ProgressRange: typeof Message_ProgressRange;
  Message_ProgressRange_1: typeof Message_ProgressRange_1;
  Message_ProgressRange_2: typeof Message_ProgressRange_2;
  Precision: typeof Precision;
  TCollection_ExtendedString: typeof TCollection_ExtendedString;
  TCollection_ExtendedString_1: typeof TCollection_ExtendedString_1;
  TCollection_ExtendedString_2: typeof TCollection_ExtendedString_2;
  TCollection_ExtendedString_3: typeof TCollection_ExtendedString_3;
  TCollection_ExtendedString_4: typeof TCollection_ExtendedString_4;
  TCollection_ExtendedString_5: typeof TCollection_ExtendedString_5;
  TCollection_ExtendedString_6: typeof TCollection_ExtendedString_6;
  TCollection_ExtendedString_7: typeof TCollection_ExtendedString_7;
  TCollection_ExtendedString_8: typeof TCollection_ExtendedString_8;
  TCollection_ExtendedString_9: typeof TCollection_ExtendedString_9;
  TCollection_ExtendedString_10: typeof TCollection_ExtendedString_10;
  TCollection_ExtendedString_11: typeof TCollection_ExtendedString_11;
  TCollection_ExtendedString_12: typeof TCollection_ExtendedString_12;
  TCollection_ExtendedString_13: typeof TCollection_ExtendedString_13;
  TCollection_ExtendedString_15: typeof TCollection_ExtendedString_15;
  TCollection_HAsciiString: typeof TCollection_HAsciiString;
  TCollection_HAsciiString_1: typeof TCollection_HAsciiString_1;
  TCollection_HAsciiString_2: typeof TCollection_HAsciiString_2;
  TCollection_HAsciiString_3: typeof TCollection_HAsciiString_3;
  TCollection_HAsciiString_4: typeof TCollection_HAsciiString_4;
  TCollection_HAsciiString_5: typeof TCollection_HAsciiString_5;
  TCollection_HAsciiString_6: typeof TCollection_HAsciiString_6;
  TCollection_HAsciiString_7: typeof TCollection_HAsciiString_7;
  TCollection_HAsciiString_8: typeof TCollection_HAsciiString_8;
  TCollection_HAsciiString_9: typeof TCollection_HAsciiString_9;
  TCollection_HAsciiString_10: typeof TCollection_HAsciiString_10;
  TCollection_AsciiString: typeof TCollection_AsciiString;
  TCollection_AsciiString_1: typeof TCollection_AsciiString_1;
  TCollection_AsciiString_2: typeof TCollection_AsciiString_2;
  TCollection_AsciiString_3: typeof TCollection_AsciiString_3;
  TCollection_AsciiString_4: typeof TCollection_AsciiString_4;
  TCollection_AsciiString_5: typeof TCollection_AsciiString_5;
  TCollection_AsciiString_6: typeof TCollection_AsciiString_6;
  TCollection_AsciiString_7: typeof TCollection_AsciiString_7;
  TCollection_AsciiString_8: typeof TCollection_AsciiString_8;
  TCollection_AsciiString_9: typeof TCollection_AsciiString_9;
  TCollection_AsciiString_10: typeof TCollection_AsciiString_10;
  TCollection_AsciiString_11: typeof TCollection_AsciiString_11;
  TCollection_AsciiString_12: typeof TCollection_AsciiString_12;
  TCollection_AsciiString_13: typeof TCollection_AsciiString_13;
  TCollection_AsciiString_14: typeof TCollection_AsciiString_14;
  TCollection_AsciiString_15: typeof TCollection_AsciiString_15;
  StdFail_NotDone: typeof StdFail_NotDone;
  StdFail_NotDone_1: typeof StdFail_NotDone_1;
  StdFail_NotDone_2: typeof StdFail_NotDone_2;
  NCollection_BaseMap: typeof NCollection_BaseMap;
  Standard_ConstructionError: typeof Standard_ConstructionError;
  Standard_ConstructionError_1: typeof Standard_ConstructionError_1;
  Standard_ConstructionError_2: typeof Standard_ConstructionError_2;
  Standard_Transient: typeof Standard_Transient;
  Standard_Transient_1: typeof Standard_Transient_1;
  Standard_Transient_2: typeof Standard_Transient_2;
  Standard_Failure: typeof Standard_Failure;
  Standard_Failure_1: typeof Standard_Failure_1;
  Standard_Failure_2: typeof Standard_Failure_2;
  Standard_Failure_3: typeof Standard_Failure_3;
  Standard_Failure_4: typeof Standard_Failure_4;
  Standard_NoSuchObject: typeof Standard_NoSuchObject;
  Standard_NoSuchObject_1: typeof Standard_NoSuchObject_1;
  Standard_NoSuchObject_2: typeof Standard_NoSuchObject_2;
  Standard_DomainError: typeof Standard_DomainError;
  Standard_DomainError_1: typeof Standard_DomainError_1;
  Standard_DomainError_2: typeof Standard_DomainError_2;
  Standard_TypeMismatch: typeof Standard_TypeMismatch;
  Standard_TypeMismatch_1: typeof Standard_TypeMismatch_1;
  Standard_TypeMismatch_2: typeof Standard_TypeMismatch_2;
  gp_Dir: typeof gp_Dir;
  gp_Dir_1: typeof gp_Dir_1;
  gp_Dir_3: typeof gp_Dir_3;
  gp_Dir_4: typeof gp_Dir_4;
  gp_Dir_5: typeof gp_Dir_5;
  gp_Dir_6: typeof gp_Dir_6;
  gp_Dir_7: typeof gp_Dir_7;
  gp_Hypr: typeof gp_Hypr;
  gp_Hypr_1: typeof gp_Hypr_1;
  gp_Hypr_2: typeof gp_Hypr_2;
  gp_Ax2d: typeof gp_Ax2d;
  gp_Ax2d_1: typeof gp_Ax2d_1;
  gp_Ax2d_2: typeof gp_Ax2d_2;
  gp: typeof gp;
  gp_Dir2d: typeof gp_Dir2d;
  gp_Dir2d_1: typeof gp_Dir2d_1;
  gp_Dir2d_3: typeof gp_Dir2d_3;
  gp_Dir2d_4: typeof gp_Dir2d_4;
  gp_Dir2d_5: typeof gp_Dir2d_5;
  gp_Vec: typeof gp_Vec;
  gp_Vec_1: typeof gp_Vec_1;
  gp_Vec_2: typeof gp_Vec_2;
  gp_Vec_3: typeof gp_Vec_3;
  gp_Vec_4: typeof gp_Vec_4;
  gp_Vec_5: typeof gp_Vec_5;
  gp_Circ: typeof gp_Circ;
  gp_Circ_1: typeof gp_Circ_1;
  gp_Circ_2: typeof gp_Circ_2;
  gp_Lin: typeof gp_Lin;
  gp_Lin_1: typeof gp_Lin_1;
  gp_Lin_2: typeof gp_Lin_2;
  gp_Lin_3: typeof gp_Lin_3;
  gp_Pnt2d: typeof gp_Pnt2d;
  gp_Pnt2d_1: typeof gp_Pnt2d_1;
  gp_Pnt2d_2: typeof gp_Pnt2d_2;
  gp_Pnt2d_3: typeof gp_Pnt2d_3;
  gp_Ax3: typeof gp_Ax3;
  gp_Ax3_1: typeof gp_Ax3_1;
  gp_Ax3_2: typeof gp_Ax3_2;
  gp_Ax3_3: typeof gp_Ax3_3;
  gp_Ax3_5: typeof gp_Ax3_5;
  gp_Trsf: typeof gp_Trsf;
  gp_Trsf_1: typeof gp_Trsf_1;
  gp_Trsf_2: typeof gp_Trsf_2;
  gp_Ax2: typeof gp_Ax2;
  gp_Ax2_1: typeof gp_Ax2_1;
  gp_Ax2_2: typeof gp_Ax2_2;
  gp_Ax2_4: typeof gp_Ax2_4;
  gp_GTrsf: typeof gp_GTrsf;
  gp_GTrsf_1: typeof gp_GTrsf_1;
  gp_GTrsf_2: typeof gp_GTrsf_2;
  gp_GTrsf_3: typeof gp_GTrsf_3;
  gp_Pnt: typeof gp_Pnt;
  gp_Pnt_1: typeof gp_Pnt_1;
  gp_Pnt_2: typeof gp_Pnt_2;
  gp_Pnt_3: typeof gp_Pnt_3;
  gp_Quaternion: typeof gp_Quaternion;
  gp_Quaternion_1: typeof gp_Quaternion_1;
  gp_Quaternion_2: typeof gp_Quaternion_2;
  gp_Quaternion_3: typeof gp_Quaternion_3;
  gp_Quaternion_4: typeof gp_Quaternion_4;
  gp_Quaternion_5: typeof gp_Quaternion_5;
  gp_Quaternion_6: typeof gp_Quaternion_6;
  gp_Circ2d: typeof gp_Circ2d;
  gp_Circ2d_1: typeof gp_Circ2d_1;
  gp_Circ2d_2: typeof gp_Circ2d_2;
  gp_Circ2d_3: typeof gp_Circ2d_3;
  gp_Vec2d: typeof gp_Vec2d;
  gp_Vec2d_1: typeof gp_Vec2d_1;
  gp_Vec2d_2: typeof gp_Vec2d_2;
  gp_Vec2d_3: typeof gp_Vec2d_3;
  gp_Vec2d_4: typeof gp_Vec2d_4;
  gp_Vec2d_5: typeof gp_Vec2d_5;
  gp_EulerSequence: gp_EulerSequence;
  gp_Parab: typeof gp_Parab;
  gp_Parab_1: typeof gp_Parab_1;
  gp_Parab_2: typeof gp_Parab_2;
  gp_Parab_3: typeof gp_Parab_3;
  gp_Ax1: typeof gp_Ax1;
  gp_Ax1_1: typeof gp_Ax1_1;
  gp_Ax1_2: typeof gp_Ax1_2;
  gp_Pln: typeof gp_Pln;
  gp_Pln_1: typeof gp_Pln_1;
  gp_Pln_2: typeof gp_Pln_2;
  gp_Pln_3: typeof gp_Pln_3;
  gp_Pln_4: typeof gp_Pln_4;
  gp_Elips: typeof gp_Elips;
  gp_Elips_1: typeof gp_Elips_1;
  gp_Elips_2: typeof gp_Elips_2;
  gp_Lin2d: typeof gp_Lin2d;
  gp_Lin2d_1: typeof gp_Lin2d_1;
  gp_Lin2d_2: typeof gp_Lin2d_2;
  gp_Lin2d_3: typeof gp_Lin2d_3;
  gp_Lin2d_4: typeof gp_Lin2d_4;
  gp_XYZ: typeof gp_XYZ;
  gp_XYZ_1: typeof gp_XYZ_1;
  gp_XYZ_2: typeof gp_XYZ_2;
  Bnd_Box: typeof Bnd_Box;
  Bnd_Box_1: typeof Bnd_Box_1;
  Bnd_Box_2: typeof Bnd_Box_2;
  Bnd_OBB: typeof Bnd_OBB;
  Bnd_OBB_1: typeof Bnd_OBB_1;
  Bnd_OBB_2: typeof Bnd_OBB_2;
  Bnd_OBB_3: typeof Bnd_OBB_3;
  GeomAbs_CurveType: GeomAbs_CurveType;
  GeomAbs_Shape: GeomAbs_Shape;
  GeomAbs_JoinType: GeomAbs_JoinType;
  GeomAbs_SurfaceType: GeomAbs_SurfaceType;
  Poly_Triangle: typeof Poly_Triangle;
  Poly_Triangle_1: typeof Poly_Triangle_1;
  Poly_Triangle_2: typeof Poly_Triangle_2;
  Poly_Triangulation: typeof Poly_Triangulation;
  Poly_Triangulation_1: typeof Poly_Triangulation_1;
  Poly_Triangulation_2: typeof Poly_Triangulation_2;
  Poly_Triangulation_3: typeof Poly_Triangulation_3;
  Poly_Triangulation_4: typeof Poly_Triangulation_4;
  Poly_Triangulation_5: typeof Poly_Triangulation_5;
  Poly_PolygonOnTriangulation: typeof Poly_PolygonOnTriangulation;
  Poly_PolygonOnTriangulation_1: typeof Poly_PolygonOnTriangulation_1;
  Poly_PolygonOnTriangulation_2: typeof Poly_PolygonOnTriangulation_2;
  Poly_PolygonOnTriangulation_3: typeof Poly_PolygonOnTriangulation_3;
  Poly_Connect: typeof Poly_Connect;
  Poly_Connect_1: typeof Poly_Connect_1;
  Poly_Connect_2: typeof Poly_Connect_2;
  TopLoc_Location: typeof TopLoc_Location;
  TopLoc_Location_1: typeof TopLoc_Location_1;
  TopLoc_Location_2: typeof TopLoc_Location_2;
  TopLoc_Location_3: typeof TopLoc_Location_3;
  TopLoc_Location_4: typeof TopLoc_Location_4;
  TopLoc_Location_5: typeof TopLoc_Location_5;
  GC_MakeArcOfHyperbola: typeof GC_MakeArcOfHyperbola;
  GC_MakeArcOfHyperbola_1: typeof GC_MakeArcOfHyperbola_1;
  GC_MakeArcOfHyperbola_2: typeof GC_MakeArcOfHyperbola_2;
  GC_MakeArcOfHyperbola_3: typeof GC_MakeArcOfHyperbola_3;
  GC_MakeArcOfParabola: typeof GC_MakeArcOfParabola;
  GC_MakeArcOfParabola_1: typeof GC_MakeArcOfParabola_1;
  GC_MakeArcOfParabola_2: typeof GC_MakeArcOfParabola_2;
  GC_MakeArcOfParabola_3: typeof GC_MakeArcOfParabola_3;
  GC_MakeArcOfCircle: typeof GC_MakeArcOfCircle;
  GC_MakeArcOfCircle_1: typeof GC_MakeArcOfCircle_1;
  GC_MakeArcOfCircle_2: typeof GC_MakeArcOfCircle_2;
  GC_MakeArcOfCircle_3: typeof GC_MakeArcOfCircle_3;
  GC_MakeArcOfCircle_4: typeof GC_MakeArcOfCircle_4;
  GC_MakeArcOfCircle_5: typeof GC_MakeArcOfCircle_5;
  GC_Root: typeof GC_Root;
  GC_MakeSegment: typeof GC_MakeSegment;
  GC_MakeSegment_1: typeof GC_MakeSegment_1;
  GC_MakeSegment_2: typeof GC_MakeSegment_2;
  GC_MakeSegment_3: typeof GC_MakeSegment_3;
  GC_MakeSegment_4: typeof GC_MakeSegment_4;
  GC_MakeArcOfEllipse: typeof GC_MakeArcOfEllipse;
  GC_MakeArcOfEllipse_1: typeof GC_MakeArcOfEllipse_1;
  GC_MakeArcOfEllipse_2: typeof GC_MakeArcOfEllipse_2;
  GC_MakeArcOfEllipse_3: typeof GC_MakeArcOfEllipse_3;
  GC_MakeCircle: typeof GC_MakeCircle;
  GC_MakeCircle_1: typeof GC_MakeCircle_1;
  GC_MakeCircle_2: typeof GC_MakeCircle_2;
  GC_MakeCircle_3: typeof GC_MakeCircle_3;
  GC_MakeCircle_4: typeof GC_MakeCircle_4;
  GC_MakeCircle_5: typeof GC_MakeCircle_5;
  GC_MakeCircle_6: typeof GC_MakeCircle_6;
  GC_MakeCircle_7: typeof GC_MakeCircle_7;
  GC_MakeCircle_8: typeof GC_MakeCircle_8;
  GeomLib_IsPlanarSurface: typeof GeomLib_IsPlanarSurface;
  gce_Root: typeof gce_Root;
  gce_MakeLin: typeof gce_MakeLin;
  gce_MakeLin_1: typeof gce_MakeLin_1;
  gce_MakeLin_2: typeof gce_MakeLin_2;
  gce_MakeLin_3: typeof gce_MakeLin_3;
  gce_MakeLin_4: typeof gce_MakeLin_4;
  IntAna2d_AnaIntersection: typeof IntAna2d_AnaIntersection;
  IntAna2d_AnaIntersection_1: typeof IntAna2d_AnaIntersection_1;
  IntAna2d_AnaIntersection_2: typeof IntAna2d_AnaIntersection_2;
  IntAna2d_AnaIntersection_3: typeof IntAna2d_AnaIntersection_3;
  IntAna2d_AnaIntersection_4: typeof IntAna2d_AnaIntersection_4;
  IntAna2d_AnaIntersection_5: typeof IntAna2d_AnaIntersection_5;
  IntAna2d_AnaIntersection_6: typeof IntAna2d_AnaIntersection_6;
  IntAna2d_AnaIntersection_7: typeof IntAna2d_AnaIntersection_7;
  IntAna2d_AnaIntersection_8: typeof IntAna2d_AnaIntersection_8;
  IntAna2d_AnaIntersection_9: typeof IntAna2d_AnaIntersection_9;
  GeomConvert: typeof GeomConvert;
  GeomConvert_BSplineCurveToBezierCurve: typeof GeomConvert_BSplineCurveToBezierCurve;
  GeomConvert_BSplineCurveToBezierCurve_1: typeof GeomConvert_BSplineCurveToBezierCurve_1;
  GeomConvert_BSplineCurveToBezierCurve_2: typeof GeomConvert_BSplineCurveToBezierCurve_2;
  GeomConvert_CompCurveToBSplineCurve: typeof GeomConvert_CompCurveToBSplineCurve;
  GeomConvert_CompCurveToBSplineCurve_1: typeof GeomConvert_CompCurveToBSplineCurve_1;
  GeomConvert_CompCurveToBSplineCurve_2: typeof GeomConvert_CompCurveToBSplineCurve_2;
  GCPnts_QuasiUniformDeflection: typeof GCPnts_QuasiUniformDeflection;
  GCPnts_QuasiUniformDeflection_1: typeof GCPnts_QuasiUniformDeflection_1;
  GCPnts_QuasiUniformDeflection_2: typeof GCPnts_QuasiUniformDeflection_2;
  GCPnts_QuasiUniformDeflection_3: typeof GCPnts_QuasiUniformDeflection_3;
  GCPnts_QuasiUniformDeflection_4: typeof GCPnts_QuasiUniformDeflection_4;
  GCPnts_QuasiUniformDeflection_5: typeof GCPnts_QuasiUniformDeflection_5;
  GCPnts_AbscissaPoint: typeof GCPnts_AbscissaPoint;
  GCPnts_AbscissaPoint_1: typeof GCPnts_AbscissaPoint_1;
  GCPnts_AbscissaPoint_2: typeof GCPnts_AbscissaPoint_2;
  GCPnts_AbscissaPoint_3: typeof GCPnts_AbscissaPoint_3;
  GCPnts_AbscissaPoint_4: typeof GCPnts_AbscissaPoint_4;
  GCPnts_AbscissaPoint_5: typeof GCPnts_AbscissaPoint_5;
  GCPnts_AbscissaPoint_6: typeof GCPnts_AbscissaPoint_6;
  GCPnts_AbscissaPoint_7: typeof GCPnts_AbscissaPoint_7;
  GCPnts_AbscissaPoint_8: typeof GCPnts_AbscissaPoint_8;
  GCPnts_AbscissaPoint_9: typeof GCPnts_AbscissaPoint_9;
  GCPnts_UniformDeflection: typeof GCPnts_UniformDeflection;
  GCPnts_UniformDeflection_1: typeof GCPnts_UniformDeflection_1;
  GCPnts_UniformDeflection_2: typeof GCPnts_UniformDeflection_2;
  GCPnts_UniformDeflection_3: typeof GCPnts_UniformDeflection_3;
  GCPnts_UniformDeflection_4: typeof GCPnts_UniformDeflection_4;
  GCPnts_UniformDeflection_5: typeof GCPnts_UniformDeflection_5;
  GCPnts_TangentialDeflection: typeof GCPnts_TangentialDeflection;
  GCPnts_TangentialDeflection_1: typeof GCPnts_TangentialDeflection_1;
  GCPnts_TangentialDeflection_2: typeof GCPnts_TangentialDeflection_2;
  GCPnts_TangentialDeflection_3: typeof GCPnts_TangentialDeflection_3;
  GCPnts_TangentialDeflection_4: typeof GCPnts_TangentialDeflection_4;
  GCPnts_TangentialDeflection_5: typeof GCPnts_TangentialDeflection_5;
  GeomProjLib: typeof GeomProjLib;
  GProp_GProps: typeof GProp_GProps;
  GProp_GProps_1: typeof GProp_GProps_1;
  GProp_GProps_2: typeof GProp_GProps_2;
  BRepTools_WireExplorer: typeof BRepTools_WireExplorer;
  BRepTools_WireExplorer_1: typeof BRepTools_WireExplorer_1;
  BRepTools_WireExplorer_2: typeof BRepTools_WireExplorer_2;
  BRepTools_WireExplorer_3: typeof BRepTools_WireExplorer_3;
  BRepTools_ReShape: typeof BRepTools_ReShape;
  BRepTools: typeof BRepTools;
  TopoDS_Shape: typeof TopoDS_Shape;
  TopoDS_CompSolid: typeof TopoDS_CompSolid;
  TopoDS_TEdge: typeof TopoDS_TEdge;
  TopoDS_Face: typeof TopoDS_Face;
  TopoDS_Solid: typeof TopoDS_Solid;
  TopoDS_Shell: typeof TopoDS_Shell;
  TopoDS_Compound: typeof TopoDS_Compound;
  TopoDS_Edge: typeof TopoDS_Edge;
  TopoDS_Iterator: typeof TopoDS_Iterator;
  TopoDS_Iterator_1: typeof TopoDS_Iterator_1;
  TopoDS_Iterator_2: typeof TopoDS_Iterator_2;
  TopoDS_Wire: typeof TopoDS_Wire;
  TopoDS_TShape: typeof TopoDS_TShape;
  TopoDS_Vertex: typeof TopoDS_Vertex;
  TopoDS_Builder: typeof TopoDS_Builder;
  BRep_Tool: typeof BRep_Tool;
  BRep_TEdge: typeof BRep_TEdge;
  BRep_Builder: typeof BRep_Builder;
  BRepAdaptor_Surface: typeof BRepAdaptor_Surface;
  BRepAdaptor_Surface_1: typeof BRepAdaptor_Surface_1;
  BRepAdaptor_Surface_2: typeof BRepAdaptor_Surface_2;
  BRepAdaptor_Curve: typeof BRepAdaptor_Curve;
  BRepAdaptor_Curve_1: typeof BRepAdaptor_Curve_1;
  BRepAdaptor_Curve_2: typeof BRepAdaptor_Curve_2;
  BRepAdaptor_Curve_3: typeof BRepAdaptor_Curve_3;
  BRepAdaptor_CompCurve: typeof BRepAdaptor_CompCurve;
  BRepAdaptor_CompCurve_1: typeof BRepAdaptor_CompCurve_1;
  BRepAdaptor_CompCurve_2: typeof BRepAdaptor_CompCurve_2;
  BRepAdaptor_CompCurve_3: typeof BRepAdaptor_CompCurve_3;
  BRepLProp: typeof BRepLProp;
  TopExp_Explorer: typeof TopExp_Explorer;
  TopExp_Explorer_1: typeof TopExp_Explorer_1;
  TopExp_Explorer_2: typeof TopExp_Explorer_2;
  TopExp: typeof TopExp;
  TopTools_ShapeMapHasher: typeof TopTools_ShapeMapHasher;
  BinTools: typeof BinTools;
  Adaptor2d_Curve2d: typeof Adaptor2d_Curve2d;
  Geom2dAdaptor_Curve: typeof Geom2dAdaptor_Curve;
  Geom2dAdaptor_Curve_1: typeof Geom2dAdaptor_Curve_1;
  Geom2dAdaptor_Curve_2: typeof Geom2dAdaptor_Curve_2;
  Geom2dAdaptor_Curve_3: typeof Geom2dAdaptor_Curve_3;
  Geom2d_Line: typeof Geom2d_Line;
  Geom2d_Line_1: typeof Geom2d_Line_1;
  Geom2d_Line_2: typeof Geom2d_Line_2;
  Geom2d_Line_3: typeof Geom2d_Line_3;
  Geom2d_Point: typeof Geom2d_Point;
  Geom2d_Conic: typeof Geom2d_Conic;
  Geom2d_CartesianPoint: typeof Geom2d_CartesianPoint;
  Geom2d_CartesianPoint_1: typeof Geom2d_CartesianPoint_1;
  Geom2d_CartesianPoint_2: typeof Geom2d_CartesianPoint_2;
  Geom2d_TrimmedCurve: typeof Geom2d_TrimmedCurve;
  Geom2d_Circle: typeof Geom2d_Circle;
  Geom2d_Circle_1: typeof Geom2d_Circle_1;
  Geom2d_Circle_2: typeof Geom2d_Circle_2;
  Geom2d_Circle_3: typeof Geom2d_Circle_3;
  Geom2d_BoundedCurve: typeof Geom2d_BoundedCurve;
  Geom2d_Geometry: typeof Geom2d_Geometry;
  Geom2d_Curve: typeof Geom2d_Curve;
  Geom_OffsetSurface: typeof Geom_OffsetSurface;
  Geom_OffsetSurface_1: typeof Geom_OffsetSurface_1;
  Geom_OffsetSurface_2: typeof Geom_OffsetSurface_2;
  Geom_BezierSurface: typeof Geom_BezierSurface;
  Geom_BezierSurface_1: typeof Geom_BezierSurface_1;
  Geom_BezierSurface_2: typeof Geom_BezierSurface_2;
  Geom_BezierSurface_3: typeof Geom_BezierSurface_3;
  Geom_TrimmedCurve: typeof Geom_TrimmedCurve;
  Geom_BoundedSurface: typeof Geom_BoundedSurface;
  Geom_Conic: typeof Geom_Conic;
  Geom_Surface: typeof Geom_Surface;
  Geom_ConicalSurface: typeof Geom_ConicalSurface;
  Geom_ConicalSurface_1: typeof Geom_ConicalSurface_1;
  Geom_ConicalSurface_2: typeof Geom_ConicalSurface_2;
  Geom_CylindricalSurface: typeof Geom_CylindricalSurface;
  Geom_CylindricalSurface_1: typeof Geom_CylindricalSurface_1;
  Geom_CylindricalSurface_2: typeof Geom_CylindricalSurface_2;
  Geom_ElementarySurface: typeof Geom_ElementarySurface;
  Geom_BezierCurve: typeof Geom_BezierCurve;
  Geom_BezierCurve_1: typeof Geom_BezierCurve_1;
  Geom_BezierCurve_2: typeof Geom_BezierCurve_2;
  Geom_BezierCurve_3: typeof Geom_BezierCurve_3;
  Geom_Curve: typeof Geom_Curve;
  Geom_BSplineCurve: typeof Geom_BSplineCurve;
  Geom_BSplineCurve_1: typeof Geom_BSplineCurve_1;
  Geom_BSplineCurve_2: typeof Geom_BSplineCurve_2;
  Geom_BSplineCurve_3: typeof Geom_BSplineCurve_3;
  Geom_Plane: typeof Geom_Plane;
  Geom_Plane_1: typeof Geom_Plane_1;
  Geom_Plane_2: typeof Geom_Plane_2;
  Geom_Plane_3: typeof Geom_Plane_3;
  Geom_Plane_4: typeof Geom_Plane_4;
  Geom_BoundedCurve: typeof Geom_BoundedCurve;
  Geom_Geometry: typeof Geom_Geometry;
  Geom_RectangularTrimmedSurface: typeof Geom_RectangularTrimmedSurface;
  Geom_RectangularTrimmedSurface_1: typeof Geom_RectangularTrimmedSurface_1;
  Geom_RectangularTrimmedSurface_2: typeof Geom_RectangularTrimmedSurface_2;
  Geom_Line: typeof Geom_Line;
  Geom_Line_1: typeof Geom_Line_1;
  Geom_Line_2: typeof Geom_Line_2;
  Geom_Line_3: typeof Geom_Line_3;
  Geom_Circle: typeof Geom_Circle;
  Geom_Circle_1: typeof Geom_Circle_1;
  Geom_Circle_2: typeof Geom_Circle_2;
  TopAbs_ShapeEnum: TopAbs_ShapeEnum;
  TopAbs_Orientation: TopAbs_Orientation;
  GeomAdaptor_TransformedSurface: typeof GeomAdaptor_TransformedSurface;
  GeomAdaptor_TransformedSurface_1: typeof GeomAdaptor_TransformedSurface_1;
  GeomAdaptor_TransformedSurface_2: typeof GeomAdaptor_TransformedSurface_2;
  GeomAdaptor_TransformedSurface_3: typeof GeomAdaptor_TransformedSurface_3;
  GeomAdaptor_TransformedCurve: typeof GeomAdaptor_TransformedCurve;
  GeomAdaptor_TransformedCurve_1: typeof GeomAdaptor_TransformedCurve_1;
  GeomAdaptor_TransformedCurve_2: typeof GeomAdaptor_TransformedCurve_2;
  GeomAdaptor_TransformedCurve_3: typeof GeomAdaptor_TransformedCurve_3;
  GeomAdaptor_Curve: typeof GeomAdaptor_Curve;
  GeomAdaptor_Curve_1: typeof GeomAdaptor_Curve_1;
  GeomAdaptor_Curve_2: typeof GeomAdaptor_Curve_2;
  GeomAdaptor_Curve_3: typeof GeomAdaptor_Curve_3;
  GeomAdaptor_Surface: typeof GeomAdaptor_Surface;
  GeomAdaptor_Surface_1: typeof GeomAdaptor_Surface_1;
  GeomAdaptor_Surface_2: typeof GeomAdaptor_Surface_2;
  GeomAdaptor_Surface_3: typeof GeomAdaptor_Surface_3;
  Adaptor3d_Surface: typeof Adaptor3d_Surface;
  Adaptor3d_Curve: typeof Adaptor3d_Curve;
  Handle_Geom2d_Line: typeof Handle_Geom2d_Line;
  Handle_Geom2d_Line_1: typeof Handle_Geom2d_Line_1;
  Handle_Geom2d_Line_2: typeof Handle_Geom2d_Line_2;
  Handle_Geom2d_Line_3: typeof Handle_Geom2d_Line_3;
  Handle_Geom2d_Line_4: typeof Handle_Geom2d_Line_4;
  Handle_Geom_Conic: typeof Handle_Geom_Conic;
  Handle_Geom_Conic_1: typeof Handle_Geom_Conic_1;
  Handle_Geom_Conic_2: typeof Handle_Geom_Conic_2;
  Handle_Geom_Conic_3: typeof Handle_Geom_Conic_3;
  Handle_Geom_Conic_4: typeof Handle_Geom_Conic_4;
  Handle_Geom_BoundedSurface: typeof Handle_Geom_BoundedSurface;
  Handle_Geom_BoundedSurface_1: typeof Handle_Geom_BoundedSurface_1;
  Handle_Geom_BoundedSurface_2: typeof Handle_Geom_BoundedSurface_2;
  Handle_Geom_BoundedSurface_3: typeof Handle_Geom_BoundedSurface_3;
  Handle_Geom_BoundedSurface_4: typeof Handle_Geom_BoundedSurface_4;
  Handle_STEPCAFControl_Controller: typeof Handle_STEPCAFControl_Controller;
  Handle_STEPCAFControl_Controller_1: typeof Handle_STEPCAFControl_Controller_1;
  Handle_STEPCAFControl_Controller_2: typeof Handle_STEPCAFControl_Controller_2;
  Handle_STEPCAFControl_Controller_3: typeof Handle_STEPCAFControl_Controller_3;
  Handle_STEPCAFControl_Controller_4: typeof Handle_STEPCAFControl_Controller_4;
  Handle_Geom_OffsetSurface: typeof Handle_Geom_OffsetSurface;
  Handle_Geom_OffsetSurface_1: typeof Handle_Geom_OffsetSurface_1;
  Handle_Geom_OffsetSurface_2: typeof Handle_Geom_OffsetSurface_2;
  Handle_Geom_OffsetSurface_3: typeof Handle_Geom_OffsetSurface_3;
  Handle_Geom_OffsetSurface_4: typeof Handle_Geom_OffsetSurface_4;
  Handle_GeomFill_CorrectedFrenet: typeof Handle_GeomFill_CorrectedFrenet;
  Handle_GeomFill_CorrectedFrenet_1: typeof Handle_GeomFill_CorrectedFrenet_1;
  Handle_GeomFill_CorrectedFrenet_2: typeof Handle_GeomFill_CorrectedFrenet_2;
  Handle_GeomFill_CorrectedFrenet_3: typeof Handle_GeomFill_CorrectedFrenet_3;
  Handle_GeomFill_CorrectedFrenet_4: typeof Handle_GeomFill_CorrectedFrenet_4;
  Handle_Interface_TypedValue: typeof Handle_Interface_TypedValue;
  Handle_Interface_TypedValue_1: typeof Handle_Interface_TypedValue_1;
  Handle_Interface_TypedValue_2: typeof Handle_Interface_TypedValue_2;
  Handle_Interface_TypedValue_3: typeof Handle_Interface_TypedValue_3;
  Handle_Interface_TypedValue_4: typeof Handle_Interface_TypedValue_4;
  Handle_Geom_CylindricalSurface: typeof Handle_Geom_CylindricalSurface;
  Handle_Geom_CylindricalSurface_1: typeof Handle_Geom_CylindricalSurface_1;
  Handle_Geom_CylindricalSurface_2: typeof Handle_Geom_CylindricalSurface_2;
  Handle_Geom_CylindricalSurface_3: typeof Handle_Geom_CylindricalSurface_3;
  Handle_Geom_CylindricalSurface_4: typeof Handle_Geom_CylindricalSurface_4;
  Handle_TDataStd_GenericExtString: typeof Handle_TDataStd_GenericExtString;
  Handle_TDataStd_GenericExtString_1: typeof Handle_TDataStd_GenericExtString_1;
  Handle_TDataStd_GenericExtString_2: typeof Handle_TDataStd_GenericExtString_2;
  Handle_TDataStd_GenericExtString_3: typeof Handle_TDataStd_GenericExtString_3;
  Handle_TDataStd_GenericExtString_4: typeof Handle_TDataStd_GenericExtString_4;
  Handle_Geom_ElementarySurface: typeof Handle_Geom_ElementarySurface;
  Handle_Geom_ElementarySurface_1: typeof Handle_Geom_ElementarySurface_1;
  Handle_Geom_ElementarySurface_2: typeof Handle_Geom_ElementarySurface_2;
  Handle_Geom_ElementarySurface_3: typeof Handle_Geom_ElementarySurface_3;
  Handle_Geom_ElementarySurface_4: typeof Handle_Geom_ElementarySurface_4;
  Handle_Font_SystemFont: typeof Handle_Font_SystemFont;
  Handle_Font_SystemFont_1: typeof Handle_Font_SystemFont_1;
  Handle_Font_SystemFont_2: typeof Handle_Font_SystemFont_2;
  Handle_Font_SystemFont_3: typeof Handle_Font_SystemFont_3;
  Handle_Font_SystemFont_4: typeof Handle_Font_SystemFont_4;
  Handle_ShapeCustom_RestrictionParameters: typeof Handle_ShapeCustom_RestrictionParameters;
  Handle_ShapeCustom_RestrictionParameters_1: typeof Handle_ShapeCustom_RestrictionParameters_1;
  Handle_ShapeCustom_RestrictionParameters_2: typeof Handle_ShapeCustom_RestrictionParameters_2;
  Handle_ShapeCustom_RestrictionParameters_3: typeof Handle_ShapeCustom_RestrictionParameters_3;
  Handle_ShapeCustom_RestrictionParameters_4: typeof Handle_ShapeCustom_RestrictionParameters_4;
  Handle_GeomFill_Frenet: typeof Handle_GeomFill_Frenet;
  Handle_GeomFill_Frenet_1: typeof Handle_GeomFill_Frenet_1;
  Handle_GeomFill_Frenet_2: typeof Handle_GeomFill_Frenet_2;
  Handle_GeomFill_Frenet_3: typeof Handle_GeomFill_Frenet_3;
  Handle_GeomFill_Frenet_4: typeof Handle_GeomFill_Frenet_4;
  Handle_Geom2d_Curve: typeof Handle_Geom2d_Curve;
  Handle_Geom2d_Curve_1: typeof Handle_Geom2d_Curve_1;
  Handle_Geom2d_Curve_2: typeof Handle_Geom2d_Curve_2;
  Handle_Geom2d_Curve_3: typeof Handle_Geom2d_Curve_3;
  Handle_Geom2d_Curve_4: typeof Handle_Geom2d_Curve_4;
  Handle_ShapeFix_Root: typeof Handle_ShapeFix_Root;
  Handle_ShapeFix_Root_1: typeof Handle_ShapeFix_Root_1;
  Handle_ShapeFix_Root_2: typeof Handle_ShapeFix_Root_2;
  Handle_ShapeFix_Root_3: typeof Handle_ShapeFix_Root_3;
  Handle_ShapeFix_Root_4: typeof Handle_ShapeFix_Root_4;
  Handle_ShapeFix_Wireframe: typeof Handle_ShapeFix_Wireframe;
  Handle_ShapeFix_Wireframe_1: typeof Handle_ShapeFix_Wireframe_1;
  Handle_ShapeFix_Wireframe_2: typeof Handle_ShapeFix_Wireframe_2;
  Handle_ShapeFix_Wireframe_3: typeof Handle_ShapeFix_Wireframe_3;
  Handle_ShapeFix_Wireframe_4: typeof Handle_ShapeFix_Wireframe_4;
  Handle_ShapeFix_Face: typeof Handle_ShapeFix_Face;
  Handle_ShapeFix_Face_1: typeof Handle_ShapeFix_Face_1;
  Handle_ShapeFix_Face_2: typeof Handle_ShapeFix_Face_2;
  Handle_ShapeFix_Face_3: typeof Handle_ShapeFix_Face_3;
  Handle_ShapeFix_Face_4: typeof Handle_ShapeFix_Face_4;
  Handle_CDM_Document: typeof Handle_CDM_Document;
  Handle_CDM_Document_1: typeof Handle_CDM_Document_1;
  Handle_CDM_Document_2: typeof Handle_CDM_Document_2;
  Handle_CDM_Document_3: typeof Handle_CDM_Document_3;
  Handle_CDM_Document_4: typeof Handle_CDM_Document_4;
  Handle_TDocStd_Document: typeof Handle_TDocStd_Document;
  Handle_TDocStd_Document_1: typeof Handle_TDocStd_Document_1;
  Handle_TDocStd_Document_2: typeof Handle_TDocStd_Document_2;
  Handle_TDocStd_Document_3: typeof Handle_TDocStd_Document_3;
  Handle_TDocStd_Document_4: typeof Handle_TDocStd_Document_4;
  Handle_GeomAdaptor_Curve: typeof Handle_GeomAdaptor_Curve;
  Handle_GeomAdaptor_Curve_1: typeof Handle_GeomAdaptor_Curve_1;
  Handle_GeomAdaptor_Curve_2: typeof Handle_GeomAdaptor_Curve_2;
  Handle_GeomAdaptor_Curve_3: typeof Handle_GeomAdaptor_Curve_3;
  Handle_GeomAdaptor_Curve_4: typeof Handle_GeomAdaptor_Curve_4;
  Handle_TCollection_HAsciiString: typeof Handle_TCollection_HAsciiString;
  Handle_TCollection_HAsciiString_1: typeof Handle_TCollection_HAsciiString_1;
  Handle_TCollection_HAsciiString_2: typeof Handle_TCollection_HAsciiString_2;
  Handle_TCollection_HAsciiString_3: typeof Handle_TCollection_HAsciiString_3;
  Handle_TCollection_HAsciiString_4: typeof Handle_TCollection_HAsciiString_4;
  Handle_Geom_BoundedCurve: typeof Handle_Geom_BoundedCurve;
  Handle_Geom_BoundedCurve_1: typeof Handle_Geom_BoundedCurve_1;
  Handle_Geom_BoundedCurve_2: typeof Handle_Geom_BoundedCurve_2;
  Handle_Geom_BoundedCurve_3: typeof Handle_Geom_BoundedCurve_3;
  Handle_Geom_BoundedCurve_4: typeof Handle_Geom_BoundedCurve_4;
  Handle_Interface_Static: typeof Handle_Interface_Static;
  Handle_Interface_Static_1: typeof Handle_Interface_Static_1;
  Handle_Interface_Static_2: typeof Handle_Interface_Static_2;
  Handle_Interface_Static_3: typeof Handle_Interface_Static_3;
  Handle_Interface_Static_4: typeof Handle_Interface_Static_4;
  Handle_Geom2d_Circle: typeof Handle_Geom2d_Circle;
  Handle_Geom2d_Circle_1: typeof Handle_Geom2d_Circle_1;
  Handle_Geom2d_Circle_2: typeof Handle_Geom2d_Circle_2;
  Handle_Geom2d_Circle_3: typeof Handle_Geom2d_Circle_3;
  Handle_Geom2d_Circle_4: typeof Handle_Geom2d_Circle_4;
  Handle_BRepMesh_IncrementalMesh: typeof Handle_BRepMesh_IncrementalMesh;
  Handle_BRepMesh_IncrementalMesh_1: typeof Handle_BRepMesh_IncrementalMesh_1;
  Handle_BRepMesh_IncrementalMesh_2: typeof Handle_BRepMesh_IncrementalMesh_2;
  Handle_BRepMesh_IncrementalMesh_3: typeof Handle_BRepMesh_IncrementalMesh_3;
  Handle_BRepMesh_IncrementalMesh_4: typeof Handle_BRepMesh_IncrementalMesh_4;
  Handle_TopoDS_TEdge: typeof Handle_TopoDS_TEdge;
  Handle_TopoDS_TEdge_1: typeof Handle_TopoDS_TEdge_1;
  Handle_TopoDS_TEdge_2: typeof Handle_TopoDS_TEdge_2;
  Handle_TopoDS_TEdge_3: typeof Handle_TopoDS_TEdge_3;
  Handle_TopoDS_TEdge_4: typeof Handle_TopoDS_TEdge_4;
  Handle_Font_FontMgr: typeof Handle_Font_FontMgr;
  Handle_Font_FontMgr_1: typeof Handle_Font_FontMgr_1;
  Handle_Font_FontMgr_2: typeof Handle_Font_FontMgr_2;
  Handle_Font_FontMgr_3: typeof Handle_Font_FontMgr_3;
  Handle_Font_FontMgr_4: typeof Handle_Font_FontMgr_4;
  Handle_BRepAdaptor_CompCurve: typeof Handle_BRepAdaptor_CompCurve;
  Handle_BRepAdaptor_CompCurve_1: typeof Handle_BRepAdaptor_CompCurve_1;
  Handle_BRepAdaptor_CompCurve_2: typeof Handle_BRepAdaptor_CompCurve_2;
  Handle_BRepAdaptor_CompCurve_3: typeof Handle_BRepAdaptor_CompCurve_3;
  Handle_BRepAdaptor_CompCurve_4: typeof Handle_BRepAdaptor_CompCurve_4;
  Handle_TDataStd_GenericEmpty: typeof Handle_TDataStd_GenericEmpty;
  Handle_TDataStd_GenericEmpty_1: typeof Handle_TDataStd_GenericEmpty_1;
  Handle_TDataStd_GenericEmpty_2: typeof Handle_TDataStd_GenericEmpty_2;
  Handle_TDataStd_GenericEmpty_3: typeof Handle_TDataStd_GenericEmpty_3;
  Handle_TDataStd_GenericEmpty_4: typeof Handle_TDataStd_GenericEmpty_4;
  Handle_BRepMesh_DiscretRoot: typeof Handle_BRepMesh_DiscretRoot;
  Handle_BRepMesh_DiscretRoot_1: typeof Handle_BRepMesh_DiscretRoot_1;
  Handle_BRepMesh_DiscretRoot_2: typeof Handle_BRepMesh_DiscretRoot_2;
  Handle_BRepMesh_DiscretRoot_3: typeof Handle_BRepMesh_DiscretRoot_3;
  Handle_BRepMesh_DiscretRoot_4: typeof Handle_BRepMesh_DiscretRoot_4;
  Handle_BRepBuilderAPI_Sewing: typeof Handle_BRepBuilderAPI_Sewing;
  Handle_BRepBuilderAPI_Sewing_1: typeof Handle_BRepBuilderAPI_Sewing_1;
  Handle_BRepBuilderAPI_Sewing_2: typeof Handle_BRepBuilderAPI_Sewing_2;
  Handle_BRepBuilderAPI_Sewing_3: typeof Handle_BRepBuilderAPI_Sewing_3;
  Handle_BRepBuilderAPI_Sewing_4: typeof Handle_BRepBuilderAPI_Sewing_4;
  Handle_Geom_BezierSurface: typeof Handle_Geom_BezierSurface;
  Handle_Geom_BezierSurface_1: typeof Handle_Geom_BezierSurface_1;
  Handle_Geom_BezierSurface_2: typeof Handle_Geom_BezierSurface_2;
  Handle_Geom_BezierSurface_3: typeof Handle_Geom_BezierSurface_3;
  Handle_Geom_BezierSurface_4: typeof Handle_Geom_BezierSurface_4;
  Handle_Geom2d_CartesianPoint: typeof Handle_Geom2d_CartesianPoint;
  Handle_Geom2d_CartesianPoint_1: typeof Handle_Geom2d_CartesianPoint_1;
  Handle_Geom2d_CartesianPoint_2: typeof Handle_Geom2d_CartesianPoint_2;
  Handle_Geom2d_CartesianPoint_3: typeof Handle_Geom2d_CartesianPoint_3;
  Handle_Geom2d_CartesianPoint_4: typeof Handle_Geom2d_CartesianPoint_4;
  Handle_Adaptor2d_Curve2d: typeof Handle_Adaptor2d_Curve2d;
  Handle_Adaptor2d_Curve2d_1: typeof Handle_Adaptor2d_Curve2d_1;
  Handle_Adaptor2d_Curve2d_2: typeof Handle_Adaptor2d_Curve2d_2;
  Handle_Adaptor2d_Curve2d_3: typeof Handle_Adaptor2d_Curve2d_3;
  Handle_Adaptor2d_Curve2d_4: typeof Handle_Adaptor2d_Curve2d_4;
  Handle_Geom_Line: typeof Handle_Geom_Line;
  Handle_Geom_Line_1: typeof Handle_Geom_Line_1;
  Handle_Geom_Line_2: typeof Handle_Geom_Line_2;
  Handle_Geom_Line_3: typeof Handle_Geom_Line_3;
  Handle_Geom_Line_4: typeof Handle_Geom_Line_4;
  Handle_BRepAdaptor_Surface: typeof Handle_BRepAdaptor_Surface;
  Handle_BRepAdaptor_Surface_1: typeof Handle_BRepAdaptor_Surface_1;
  Handle_BRepAdaptor_Surface_2: typeof Handle_BRepAdaptor_Surface_2;
  Handle_BRepAdaptor_Surface_3: typeof Handle_BRepAdaptor_Surface_3;
  Handle_BRepAdaptor_Surface_4: typeof Handle_BRepAdaptor_Surface_4;
  Handle_Geom_Geometry: typeof Handle_Geom_Geometry;
  Handle_Geom_Geometry_1: typeof Handle_Geom_Geometry_1;
  Handle_Geom_Geometry_2: typeof Handle_Geom_Geometry_2;
  Handle_Geom_Geometry_3: typeof Handle_Geom_Geometry_3;
  Handle_Geom_Geometry_4: typeof Handle_Geom_Geometry_4;
  Handle_RWGltf_CafWriter: typeof Handle_RWGltf_CafWriter;
  Handle_RWGltf_CafWriter_1: typeof Handle_RWGltf_CafWriter_1;
  Handle_RWGltf_CafWriter_2: typeof Handle_RWGltf_CafWriter_2;
  Handle_RWGltf_CafWriter_3: typeof Handle_RWGltf_CafWriter_3;
  Handle_RWGltf_CafWriter_4: typeof Handle_RWGltf_CafWriter_4;
  Handle_ShapeFix_Solid: typeof Handle_ShapeFix_Solid;
  Handle_ShapeFix_Solid_1: typeof Handle_ShapeFix_Solid_1;
  Handle_ShapeFix_Solid_2: typeof Handle_ShapeFix_Solid_2;
  Handle_ShapeFix_Solid_3: typeof Handle_ShapeFix_Solid_3;
  Handle_ShapeFix_Solid_4: typeof Handle_ShapeFix_Solid_4;
  Handle_TopoDS_TShape: typeof Handle_TopoDS_TShape;
  Handle_TopoDS_TShape_1: typeof Handle_TopoDS_TShape_1;
  Handle_TopoDS_TShape_2: typeof Handle_TopoDS_TShape_2;
  Handle_TopoDS_TShape_3: typeof Handle_TopoDS_TShape_3;
  Handle_TopoDS_TShape_4: typeof Handle_TopoDS_TShape_4;
  Handle_GeomFill_TrihedronLaw: typeof Handle_GeomFill_TrihedronLaw;
  Handle_GeomFill_TrihedronLaw_1: typeof Handle_GeomFill_TrihedronLaw_1;
  Handle_GeomFill_TrihedronLaw_2: typeof Handle_GeomFill_TrihedronLaw_2;
  Handle_GeomFill_TrihedronLaw_3: typeof Handle_GeomFill_TrihedronLaw_3;
  Handle_GeomFill_TrihedronLaw_4: typeof Handle_GeomFill_TrihedronLaw_4;
  Handle_TDocStd_Application: typeof Handle_TDocStd_Application;
  Handle_TDocStd_Application_1: typeof Handle_TDocStd_Application_1;
  Handle_TDocStd_Application_2: typeof Handle_TDocStd_Application_2;
  Handle_TDocStd_Application_3: typeof Handle_TDocStd_Application_3;
  Handle_TDocStd_Application_4: typeof Handle_TDocStd_Application_4;
  Handle_Geom2d_BoundedCurve: typeof Handle_Geom2d_BoundedCurve;
  Handle_Geom2d_BoundedCurve_1: typeof Handle_Geom2d_BoundedCurve_1;
  Handle_Geom2d_BoundedCurve_2: typeof Handle_Geom2d_BoundedCurve_2;
  Handle_Geom2d_BoundedCurve_3: typeof Handle_Geom2d_BoundedCurve_3;
  Handle_Geom2d_BoundedCurve_4: typeof Handle_Geom2d_BoundedCurve_4;
  Handle_HLRBRep_InternalAlgo: typeof Handle_HLRBRep_InternalAlgo;
  Handle_HLRBRep_InternalAlgo_1: typeof Handle_HLRBRep_InternalAlgo_1;
  Handle_HLRBRep_InternalAlgo_2: typeof Handle_HLRBRep_InternalAlgo_2;
  Handle_HLRBRep_InternalAlgo_3: typeof Handle_HLRBRep_InternalAlgo_3;
  Handle_HLRBRep_InternalAlgo_4: typeof Handle_HLRBRep_InternalAlgo_4;
  Handle_XSControl_Controller: typeof Handle_XSControl_Controller;
  Handle_XSControl_Controller_1: typeof Handle_XSControl_Controller_1;
  Handle_XSControl_Controller_2: typeof Handle_XSControl_Controller_2;
  Handle_XSControl_Controller_3: typeof Handle_XSControl_Controller_3;
  Handle_XSControl_Controller_4: typeof Handle_XSControl_Controller_4;
  Handle_GeomAdaptor_Surface: typeof Handle_GeomAdaptor_Surface;
  Handle_GeomAdaptor_Surface_1: typeof Handle_GeomAdaptor_Surface_1;
  Handle_GeomAdaptor_Surface_2: typeof Handle_GeomAdaptor_Surface_2;
  Handle_GeomAdaptor_Surface_3: typeof Handle_GeomAdaptor_Surface_3;
  Handle_GeomAdaptor_Surface_4: typeof Handle_GeomAdaptor_Surface_4;
  Handle_STEPControl_Controller: typeof Handle_STEPControl_Controller;
  Handle_STEPControl_Controller_1: typeof Handle_STEPControl_Controller_1;
  Handle_STEPControl_Controller_2: typeof Handle_STEPControl_Controller_2;
  Handle_STEPControl_Controller_3: typeof Handle_STEPControl_Controller_3;
  Handle_STEPControl_Controller_4: typeof Handle_STEPControl_Controller_4;
  Handle_Geom2d_TrimmedCurve: typeof Handle_Geom2d_TrimmedCurve;
  Handle_Geom2d_TrimmedCurve_1: typeof Handle_Geom2d_TrimmedCurve_1;
  Handle_Geom2d_TrimmedCurve_2: typeof Handle_Geom2d_TrimmedCurve_2;
  Handle_Geom2d_TrimmedCurve_3: typeof Handle_Geom2d_TrimmedCurve_3;
  Handle_Geom2d_TrimmedCurve_4: typeof Handle_Geom2d_TrimmedCurve_4;
  Handle_BRepTools_ReShape: typeof Handle_BRepTools_ReShape;
  Handle_BRepTools_ReShape_1: typeof Handle_BRepTools_ReShape_1;
  Handle_BRepTools_ReShape_2: typeof Handle_BRepTools_ReShape_2;
  Handle_BRepTools_ReShape_3: typeof Handle_BRepTools_ReShape_3;
  Handle_BRepTools_ReShape_4: typeof Handle_BRepTools_ReShape_4;
  Handle_Transfer_TransientProcess: typeof Handle_Transfer_TransientProcess;
  Handle_Transfer_TransientProcess_1: typeof Handle_Transfer_TransientProcess_1;
  Handle_Transfer_TransientProcess_2: typeof Handle_Transfer_TransientProcess_2;
  Handle_Transfer_TransientProcess_3: typeof Handle_Transfer_TransientProcess_3;
  Handle_Transfer_TransientProcess_4: typeof Handle_Transfer_TransientProcess_4;
  Handle_Geom2d_Conic: typeof Handle_Geom2d_Conic;
  Handle_Geom2d_Conic_1: typeof Handle_Geom2d_Conic_1;
  Handle_Geom2d_Conic_2: typeof Handle_Geom2d_Conic_2;
  Handle_Geom2d_Conic_3: typeof Handle_Geom2d_Conic_3;
  Handle_Geom2d_Conic_4: typeof Handle_Geom2d_Conic_4;
  Handle_Adaptor3d_Surface: typeof Handle_Adaptor3d_Surface;
  Handle_Adaptor3d_Surface_1: typeof Handle_Adaptor3d_Surface_1;
  Handle_Adaptor3d_Surface_2: typeof Handle_Adaptor3d_Surface_2;
  Handle_Adaptor3d_Surface_3: typeof Handle_Adaptor3d_Surface_3;
  Handle_Adaptor3d_Surface_4: typeof Handle_Adaptor3d_Surface_4;
  Handle_IGESControl_Controller: typeof Handle_IGESControl_Controller;
  Handle_IGESControl_Controller_1: typeof Handle_IGESControl_Controller_1;
  Handle_IGESControl_Controller_2: typeof Handle_IGESControl_Controller_2;
  Handle_IGESControl_Controller_3: typeof Handle_IGESControl_Controller_3;
  Handle_IGESControl_Controller_4: typeof Handle_IGESControl_Controller_4;
  Handle_ShapeFix_Shape: typeof Handle_ShapeFix_Shape;
  Handle_ShapeFix_Shape_1: typeof Handle_ShapeFix_Shape_1;
  Handle_ShapeFix_Shape_2: typeof Handle_ShapeFix_Shape_2;
  Handle_ShapeFix_Shape_3: typeof Handle_ShapeFix_Shape_3;
  Handle_ShapeFix_Shape_4: typeof Handle_ShapeFix_Shape_4;
  Handle_Geom_ConicalSurface: typeof Handle_Geom_ConicalSurface;
  Handle_Geom_ConicalSurface_1: typeof Handle_Geom_ConicalSurface_1;
  Handle_Geom_ConicalSurface_2: typeof Handle_Geom_ConicalSurface_2;
  Handle_Geom_ConicalSurface_3: typeof Handle_Geom_ConicalSurface_3;
  Handle_Geom_ConicalSurface_4: typeof Handle_Geom_ConicalSurface_4;
  Handle_XCAFApp_Application: typeof Handle_XCAFApp_Application;
  Handle_XCAFApp_Application_1: typeof Handle_XCAFApp_Application_1;
  Handle_XCAFApp_Application_2: typeof Handle_XCAFApp_Application_2;
  Handle_XCAFApp_Application_3: typeof Handle_XCAFApp_Application_3;
  Handle_XCAFApp_Application_4: typeof Handle_XCAFApp_Application_4;
  Handle_IFSelect_WorkSession: typeof Handle_IFSelect_WorkSession;
  Handle_IFSelect_WorkSession_1: typeof Handle_IFSelect_WorkSession_1;
  Handle_IFSelect_WorkSession_2: typeof Handle_IFSelect_WorkSession_2;
  Handle_IFSelect_WorkSession_3: typeof Handle_IFSelect_WorkSession_3;
  Handle_IFSelect_WorkSession_4: typeof Handle_IFSelect_WorkSession_4;
  Handle_Geom_Plane: typeof Handle_Geom_Plane;
  Handle_Geom_Plane_1: typeof Handle_Geom_Plane_1;
  Handle_Geom_Plane_2: typeof Handle_Geom_Plane_2;
  Handle_Geom_Plane_3: typeof Handle_Geom_Plane_3;
  Handle_Geom_Plane_4: typeof Handle_Geom_Plane_4;
  Handle_GeomAdaptor_TransformedSurface: typeof Handle_GeomAdaptor_TransformedSurface;
  Handle_GeomAdaptor_TransformedSurface_1: typeof Handle_GeomAdaptor_TransformedSurface_1;
  Handle_GeomAdaptor_TransformedSurface_2: typeof Handle_GeomAdaptor_TransformedSurface_2;
  Handle_GeomAdaptor_TransformedSurface_3: typeof Handle_GeomAdaptor_TransformedSurface_3;
  Handle_GeomAdaptor_TransformedSurface_4: typeof Handle_GeomAdaptor_TransformedSurface_4;
  Handle_XSControl_WorkSession: typeof Handle_XSControl_WorkSession;
  Handle_XSControl_WorkSession_1: typeof Handle_XSControl_WorkSession_1;
  Handle_XSControl_WorkSession_2: typeof Handle_XSControl_WorkSession_2;
  Handle_XSControl_WorkSession_3: typeof Handle_XSControl_WorkSession_3;
  Handle_XSControl_WorkSession_4: typeof Handle_XSControl_WorkSession_4;
  Handle_ShapeFix_Wire: typeof Handle_ShapeFix_Wire;
  Handle_ShapeFix_Wire_1: typeof Handle_ShapeFix_Wire_1;
  Handle_ShapeFix_Wire_2: typeof Handle_ShapeFix_Wire_2;
  Handle_ShapeFix_Wire_3: typeof Handle_ShapeFix_Wire_3;
  Handle_ShapeFix_Wire_4: typeof Handle_ShapeFix_Wire_4;
  Handle_Geom_RectangularTrimmedSurface: typeof Handle_Geom_RectangularTrimmedSurface;
  Handle_Geom_RectangularTrimmedSurface_1: typeof Handle_Geom_RectangularTrimmedSurface_1;
  Handle_Geom_RectangularTrimmedSurface_2: typeof Handle_Geom_RectangularTrimmedSurface_2;
  Handle_Geom_RectangularTrimmedSurface_3: typeof Handle_Geom_RectangularTrimmedSurface_3;
  Handle_Geom_RectangularTrimmedSurface_4: typeof Handle_Geom_RectangularTrimmedSurface_4;
  Handle_CDF_Application: typeof Handle_CDF_Application;
  Handle_CDF_Application_1: typeof Handle_CDF_Application_1;
  Handle_CDF_Application_2: typeof Handle_CDF_Application_2;
  Handle_CDF_Application_3: typeof Handle_CDF_Application_3;
  Handle_CDF_Application_4: typeof Handle_CDF_Application_4;
  Handle_HLRBRep_Algo: typeof Handle_HLRBRep_Algo;
  Handle_HLRBRep_Algo_1: typeof Handle_HLRBRep_Algo_1;
  Handle_HLRBRep_Algo_2: typeof Handle_HLRBRep_Algo_2;
  Handle_HLRBRep_Algo_3: typeof Handle_HLRBRep_Algo_3;
  Handle_HLRBRep_Algo_4: typeof Handle_HLRBRep_Algo_4;
  Handle_BRep_TEdge: typeof Handle_BRep_TEdge;
  Handle_BRep_TEdge_1: typeof Handle_BRep_TEdge_1;
  Handle_BRep_TEdge_2: typeof Handle_BRep_TEdge_2;
  Handle_BRep_TEdge_3: typeof Handle_BRep_TEdge_3;
  Handle_BRep_TEdge_4: typeof Handle_BRep_TEdge_4;
  Handle_Geom2d_Point: typeof Handle_Geom2d_Point;
  Handle_Geom2d_Point_1: typeof Handle_Geom2d_Point_1;
  Handle_Geom2d_Point_2: typeof Handle_Geom2d_Point_2;
  Handle_Geom2d_Point_3: typeof Handle_Geom2d_Point_3;
  Handle_Geom2d_Point_4: typeof Handle_Geom2d_Point_4;
  Handle_StdPrs_BRepFont: typeof Handle_StdPrs_BRepFont;
  Handle_StdPrs_BRepFont_1: typeof Handle_StdPrs_BRepFont_1;
  Handle_StdPrs_BRepFont_2: typeof Handle_StdPrs_BRepFont_2;
  Handle_StdPrs_BRepFont_3: typeof Handle_StdPrs_BRepFont_3;
  Handle_StdPrs_BRepFont_4: typeof Handle_StdPrs_BRepFont_4;
  Handle_CDM_Application: typeof Handle_CDM_Application;
  Handle_CDM_Application_1: typeof Handle_CDM_Application_1;
  Handle_CDM_Application_2: typeof Handle_CDM_Application_2;
  Handle_CDM_Application_3: typeof Handle_CDM_Application_3;
  Handle_CDM_Application_4: typeof Handle_CDM_Application_4;
  Handle_MoniTool_TypedValue: typeof Handle_MoniTool_TypedValue;
  Handle_MoniTool_TypedValue_1: typeof Handle_MoniTool_TypedValue_1;
  Handle_MoniTool_TypedValue_2: typeof Handle_MoniTool_TypedValue_2;
  Handle_MoniTool_TypedValue_3: typeof Handle_MoniTool_TypedValue_3;
  Handle_MoniTool_TypedValue_4: typeof Handle_MoniTool_TypedValue_4;
  Handle_Geom2d_Geometry: typeof Handle_Geom2d_Geometry;
  Handle_Geom2d_Geometry_1: typeof Handle_Geom2d_Geometry_1;
  Handle_Geom2d_Geometry_2: typeof Handle_Geom2d_Geometry_2;
  Handle_Geom2d_Geometry_3: typeof Handle_Geom2d_Geometry_3;
  Handle_Geom2d_Geometry_4: typeof Handle_Geom2d_Geometry_4;
  Handle_Adaptor3d_Curve: typeof Handle_Adaptor3d_Curve;
  Handle_Adaptor3d_Curve_1: typeof Handle_Adaptor3d_Curve_1;
  Handle_Adaptor3d_Curve_2: typeof Handle_Adaptor3d_Curve_2;
  Handle_Adaptor3d_Curve_3: typeof Handle_Adaptor3d_Curve_3;
  Handle_Adaptor3d_Curve_4: typeof Handle_Adaptor3d_Curve_4;
  Handle_TDF_Attribute: typeof Handle_TDF_Attribute;
  Handle_TDF_Attribute_1: typeof Handle_TDF_Attribute_1;
  Handle_TDF_Attribute_2: typeof Handle_TDF_Attribute_2;
  Handle_TDF_Attribute_3: typeof Handle_TDF_Attribute_3;
  Handle_TDF_Attribute_4: typeof Handle_TDF_Attribute_4;
  Handle_ShapeUpgrade_UnifySameDomain: typeof Handle_ShapeUpgrade_UnifySameDomain;
  Handle_ShapeUpgrade_UnifySameDomain_1: typeof Handle_ShapeUpgrade_UnifySameDomain_1;
  Handle_ShapeUpgrade_UnifySameDomain_2: typeof Handle_ShapeUpgrade_UnifySameDomain_2;
  Handle_ShapeUpgrade_UnifySameDomain_3: typeof Handle_ShapeUpgrade_UnifySameDomain_3;
  Handle_ShapeUpgrade_UnifySameDomain_4: typeof Handle_ShapeUpgrade_UnifySameDomain_4;
  Handle_Geom2dAdaptor_Curve: typeof Handle_Geom2dAdaptor_Curve;
  Handle_Geom2dAdaptor_Curve_1: typeof Handle_Geom2dAdaptor_Curve_1;
  Handle_Geom2dAdaptor_Curve_2: typeof Handle_Geom2dAdaptor_Curve_2;
  Handle_Geom2dAdaptor_Curve_3: typeof Handle_Geom2dAdaptor_Curve_3;
  Handle_Geom2dAdaptor_Curve_4: typeof Handle_Geom2dAdaptor_Curve_4;
  Handle_GeomAdaptor_TransformedCurve: typeof Handle_GeomAdaptor_TransformedCurve;
  Handle_GeomAdaptor_TransformedCurve_1: typeof Handle_GeomAdaptor_TransformedCurve_1;
  Handle_GeomAdaptor_TransformedCurve_2: typeof Handle_GeomAdaptor_TransformedCurve_2;
  Handle_GeomAdaptor_TransformedCurve_3: typeof Handle_GeomAdaptor_TransformedCurve_3;
  Handle_GeomAdaptor_TransformedCurve_4: typeof Handle_GeomAdaptor_TransformedCurve_4;
  Handle_BRepAdaptor_Curve: typeof Handle_BRepAdaptor_Curve;
  Handle_BRepAdaptor_Curve_1: typeof Handle_BRepAdaptor_Curve_1;
  Handle_BRepAdaptor_Curve_2: typeof Handle_BRepAdaptor_Curve_2;
  Handle_BRepAdaptor_Curve_3: typeof Handle_BRepAdaptor_Curve_3;
  Handle_BRepAdaptor_Curve_4: typeof Handle_BRepAdaptor_Curve_4;
  CDF_Application: typeof CDF_Application;
  CDM_Document: typeof CDM_Document;
  CDM_Application: typeof CDM_Application;
  TDF_Attribute: typeof TDF_Attribute;
  TDF_Label: typeof TDF_Label;
  TDataStd_Name: typeof TDataStd_Name;
  TDataStd_GenericEmpty: typeof TDataStd_GenericEmpty;
  TDataStd_GenericExtString: typeof TDataStd_GenericExtString;
  TDocStd_Document: typeof TDocStd_Document;
  TDocStd_Application: typeof TDocStd_Application;
  Font_FontAspect: Font_FontAspect;
  Font_FontMgr: typeof Font_FontMgr;
  Font_SystemFont: typeof Font_SystemFont;
  Graphic3d_HorizontalTextAlignment: Graphic3d_HorizontalTextAlignment;
  Graphic3d_VerticalTextAlignment: Graphic3d_VerticalTextAlignment;
  StdPrs_BRepTextBuilder: typeof StdPrs_BRepTextBuilder;
  StdPrs_BRepFont: typeof StdPrs_BRepFont;
  StdPrs_BRepFont_1: typeof StdPrs_BRepFont_1;
  StdPrs_BRepFont_2: typeof StdPrs_BRepFont_2;
  StdPrs_BRepFont_3: typeof StdPrs_BRepFont_3;
  StdPrs_ToolTriangulatedShape: typeof StdPrs_ToolTriangulatedShape;
  GeomFill_CorrectedFrenet: typeof GeomFill_CorrectedFrenet;
  GeomFill_CorrectedFrenet_1: typeof GeomFill_CorrectedFrenet_1;
  GeomFill_CorrectedFrenet_2: typeof GeomFill_CorrectedFrenet_2;
  GeomFill_Frenet: typeof GeomFill_Frenet;
  GeomFill_TrihedronLaw: typeof GeomFill_TrihedronLaw;
  GeomAPI: typeof GeomAPI;
  GeomAPI_PointsToBSplineSurface: typeof GeomAPI_PointsToBSplineSurface;
  GeomAPI_PointsToBSplineSurface_1: typeof GeomAPI_PointsToBSplineSurface_1;
  GeomAPI_PointsToBSplineSurface_2: typeof GeomAPI_PointsToBSplineSurface_2;
  GeomAPI_PointsToBSplineSurface_3: typeof GeomAPI_PointsToBSplineSurface_3;
  GeomAPI_PointsToBSplineSurface_4: typeof GeomAPI_PointsToBSplineSurface_4;
  GeomAPI_PointsToBSplineSurface_5: typeof GeomAPI_PointsToBSplineSurface_5;
  GeomAPI_Interpolate: typeof GeomAPI_Interpolate;
  GeomAPI_Interpolate_1: typeof GeomAPI_Interpolate_1;
  GeomAPI_Interpolate_2: typeof GeomAPI_Interpolate_2;
  GeomAPI_IntSS: typeof GeomAPI_IntSS;
  GeomAPI_IntSS_1: typeof GeomAPI_IntSS_1;
  GeomAPI_IntSS_2: typeof GeomAPI_IntSS_2;
  GeomAPI_PointsToBSpline: typeof GeomAPI_PointsToBSpline;
  GeomAPI_PointsToBSpline_1: typeof GeomAPI_PointsToBSpline_1;
  GeomAPI_PointsToBSpline_2: typeof GeomAPI_PointsToBSpline_2;
  GeomAPI_PointsToBSpline_3: typeof GeomAPI_PointsToBSpline_3;
  GeomAPI_PointsToBSpline_4: typeof GeomAPI_PointsToBSpline_4;
  GeomAPI_PointsToBSpline_5: typeof GeomAPI_PointsToBSpline_5;
  GeomAPI_ProjectPointOnCurve: typeof GeomAPI_ProjectPointOnCurve;
  GeomAPI_ProjectPointOnCurve_1: typeof GeomAPI_ProjectPointOnCurve_1;
  GeomAPI_ProjectPointOnCurve_2: typeof GeomAPI_ProjectPointOnCurve_2;
  GeomAPI_ProjectPointOnCurve_3: typeof GeomAPI_ProjectPointOnCurve_3;
  GeomAPI_IntCS: typeof GeomAPI_IntCS;
  GeomAPI_IntCS_1: typeof GeomAPI_IntCS_1;
  GeomAPI_IntCS_2: typeof GeomAPI_IntCS_2;
  GeomAPI_ExtremaCurveCurve: typeof GeomAPI_ExtremaCurveCurve;
  GeomAPI_ExtremaCurveCurve_1: typeof GeomAPI_ExtremaCurveCurve_1;
  GeomAPI_ExtremaCurveCurve_2: typeof GeomAPI_ExtremaCurveCurve_2;
  GeomAPI_ExtremaCurveCurve_3: typeof GeomAPI_ExtremaCurveCurve_3;
  GeomAPI_ProjectPointOnSurf: typeof GeomAPI_ProjectPointOnSurf;
  GeomAPI_ProjectPointOnSurf_1: typeof GeomAPI_ProjectPointOnSurf_1;
  GeomAPI_ProjectPointOnSurf_2: typeof GeomAPI_ProjectPointOnSurf_2;
  GeomAPI_ProjectPointOnSurf_3: typeof GeomAPI_ProjectPointOnSurf_3;
  GeomAPI_ProjectPointOnSurf_4: typeof GeomAPI_ProjectPointOnSurf_4;
  GeomAPI_ProjectPointOnSurf_5: typeof GeomAPI_ProjectPointOnSurf_5;
  Geom2dAPI_InterCurveCurve: typeof Geom2dAPI_InterCurveCurve;
  Geom2dAPI_InterCurveCurve_1: typeof Geom2dAPI_InterCurveCurve_1;
  Geom2dAPI_InterCurveCurve_2: typeof Geom2dAPI_InterCurveCurve_2;
  Geom2dAPI_InterCurveCurve_3: typeof Geom2dAPI_InterCurveCurve_3;
  Geom2dAPI_ProjectPointOnCurve: typeof Geom2dAPI_ProjectPointOnCurve;
  Geom2dAPI_ProjectPointOnCurve_1: typeof Geom2dAPI_ProjectPointOnCurve_1;
  Geom2dAPI_ProjectPointOnCurve_2: typeof Geom2dAPI_ProjectPointOnCurve_2;
  Geom2dAPI_ProjectPointOnCurve_3: typeof Geom2dAPI_ProjectPointOnCurve_3;
  Geom2dGcc_Lin2dTanObl: typeof Geom2dGcc_Lin2dTanObl;
  Geom2dGcc_Lin2dTanObl_1: typeof Geom2dGcc_Lin2dTanObl_1;
  Geom2dGcc_Lin2dTanObl_2: typeof Geom2dGcc_Lin2dTanObl_2;
  Geom2dGcc_Circ2d3Tan: typeof Geom2dGcc_Circ2d3Tan;
  Geom2dGcc_Circ2d3Tan_1: typeof Geom2dGcc_Circ2d3Tan_1;
  Geom2dGcc_Circ2d3Tan_2: typeof Geom2dGcc_Circ2d3Tan_2;
  Geom2dGcc_Circ2d3Tan_3: typeof Geom2dGcc_Circ2d3Tan_3;
  Geom2dGcc_Circ2d3Tan_4: typeof Geom2dGcc_Circ2d3Tan_4;
  Geom2dGcc_Circ2d2TanOn: typeof Geom2dGcc_Circ2d2TanOn;
  Geom2dGcc_Circ2d2TanOn_1: typeof Geom2dGcc_Circ2d2TanOn_1;
  Geom2dGcc_Circ2d2TanOn_2: typeof Geom2dGcc_Circ2d2TanOn_2;
  Geom2dGcc_Circ2d2TanOn_3: typeof Geom2dGcc_Circ2d2TanOn_3;
  Geom2dGcc_Circ2dTanCen: typeof Geom2dGcc_Circ2dTanCen;
  Geom2dGcc_Circ2d2TanRad: typeof Geom2dGcc_Circ2d2TanRad;
  Geom2dGcc_Circ2d2TanRad_1: typeof Geom2dGcc_Circ2d2TanRad_1;
  Geom2dGcc_Circ2d2TanRad_2: typeof Geom2dGcc_Circ2d2TanRad_2;
  Geom2dGcc_Circ2d2TanRad_3: typeof Geom2dGcc_Circ2d2TanRad_3;
  Geom2dGcc_QualifiedCurve: typeof Geom2dGcc_QualifiedCurve;
  Geom2dGcc_Lin2d2Tan: typeof Geom2dGcc_Lin2d2Tan;
  Geom2dGcc_Lin2d2Tan_1: typeof Geom2dGcc_Lin2d2Tan_1;
  Geom2dGcc_Lin2d2Tan_2: typeof Geom2dGcc_Lin2d2Tan_2;
  Geom2dGcc_Lin2d2Tan_3: typeof Geom2dGcc_Lin2d2Tan_3;
  Geom2dGcc_Lin2d2Tan_4: typeof Geom2dGcc_Lin2d2Tan_4;
  Geom2dGcc_Circ2dTanOnRad: typeof Geom2dGcc_Circ2dTanOnRad;
  Geom2dGcc_Circ2dTanOnRad_1: typeof Geom2dGcc_Circ2dTanOnRad_1;
  Geom2dGcc_Circ2dTanOnRad_2: typeof Geom2dGcc_Circ2dTanOnRad_2;
  GccEnt_Position: GccEnt_Position;
  HLRBRep_Algo: typeof HLRBRep_Algo;
  HLRBRep_Algo_1: typeof HLRBRep_Algo_1;
  HLRBRep_Algo_2: typeof HLRBRep_Algo_2;
  HLRBRep_HLRToShape: typeof HLRBRep_HLRToShape;
  HLRBRep_InternalAlgo: typeof HLRBRep_InternalAlgo;
  HLRBRep_InternalAlgo_1: typeof HLRBRep_InternalAlgo_1;
  HLRBRep_InternalAlgo_2: typeof HLRBRep_InternalAlgo_2;
  HLRAlgo_Projector: typeof HLRAlgo_Projector;
  HLRAlgo_Projector_1: typeof HLRAlgo_Projector_1;
  HLRAlgo_Projector_2: typeof HLRAlgo_Projector_2;
  HLRAlgo_Projector_3: typeof HLRAlgo_Projector_3;
  HLRAlgo_Projector_4: typeof HLRAlgo_Projector_4;
  HLRAlgo_Projector_5: typeof HLRAlgo_Projector_5;
  ShapeUpgrade_UnifySameDomain: typeof ShapeUpgrade_UnifySameDomain;
  ShapeUpgrade_UnifySameDomain_1: typeof ShapeUpgrade_UnifySameDomain_1;
  ShapeUpgrade_UnifySameDomain_2: typeof ShapeUpgrade_UnifySameDomain_2;
  ShapeAnalysis_Curve: typeof ShapeAnalysis_Curve;
  ShapeAnalysis_FreeBounds: typeof ShapeAnalysis_FreeBounds;
  ShapeAnalysis_FreeBounds_1: typeof ShapeAnalysis_FreeBounds_1;
  ShapeAnalysis_FreeBounds_2: typeof ShapeAnalysis_FreeBounds_2;
  ShapeAnalysis_FreeBounds_3: typeof ShapeAnalysis_FreeBounds_3;
  ShapeAnalysis_Edge: typeof ShapeAnalysis_Edge;
  ShapeCustom_RestrictionParameters: typeof ShapeCustom_RestrictionParameters;
  ShapeCustom: typeof ShapeCustom;
  ShapeFix_Wire: typeof ShapeFix_Wire;
  ShapeFix_Wire_1: typeof ShapeFix_Wire_1;
  ShapeFix_Wire_2: typeof ShapeFix_Wire_2;
  ShapeFix_Solid: typeof ShapeFix_Solid;
  ShapeFix_Solid_1: typeof ShapeFix_Solid_1;
  ShapeFix_Solid_2: typeof ShapeFix_Solid_2;
  ShapeFix_Wireframe: typeof ShapeFix_Wireframe;
  ShapeFix_Wireframe_1: typeof ShapeFix_Wireframe_1;
  ShapeFix_Wireframe_2: typeof ShapeFix_Wireframe_2;
  ShapeFix_Shape: typeof ShapeFix_Shape;
  ShapeFix_Shape_1: typeof ShapeFix_Shape_1;
  ShapeFix_Shape_2: typeof ShapeFix_Shape_2;
  ShapeFix_Face: typeof ShapeFix_Face;
  ShapeFix_Face_1: typeof ShapeFix_Face_1;
  ShapeFix_Face_2: typeof ShapeFix_Face_2;
  ShapeFix_Root: typeof ShapeFix_Root;
  BOPAlgo_ToolsProvider: typeof BOPAlgo_ToolsProvider;
  BOPAlgo_ToolsProvider_1: typeof BOPAlgo_ToolsProvider_1;
  BOPAlgo_ToolsProvider_2: typeof BOPAlgo_ToolsProvider_2;
  BOPAlgo_Splitter: typeof BOPAlgo_Splitter;
  BOPAlgo_Splitter_1: typeof BOPAlgo_Splitter_1;
  BOPAlgo_Splitter_2: typeof BOPAlgo_Splitter_2;
  BOPAlgo_Builder: typeof BOPAlgo_Builder;
  BOPAlgo_Builder_1: typeof BOPAlgo_Builder_1;
  BOPAlgo_Builder_2: typeof BOPAlgo_Builder_2;
  BOPAlgo_BuilderShape: typeof BOPAlgo_BuilderShape;
  BOPAlgo_Options: typeof BOPAlgo_Options;
  BOPAlgo_Options_1: typeof BOPAlgo_Options_1;
  BOPAlgo_Options_2: typeof BOPAlgo_Options_2;
  BOPAlgo_GlueEnum: BOPAlgo_GlueEnum;
  BOPAlgo_Algo: typeof BOPAlgo_Algo;
  BRepAlgoAPI_Section: typeof BRepAlgoAPI_Section;
  BRepAlgoAPI_Section_1: typeof BRepAlgoAPI_Section_1;
  BRepAlgoAPI_Section_2: typeof BRepAlgoAPI_Section_2;
  BRepAlgoAPI_Section_3: typeof BRepAlgoAPI_Section_3;
  BRepAlgoAPI_Section_4: typeof BRepAlgoAPI_Section_4;
  BRepAlgoAPI_Section_5: typeof BRepAlgoAPI_Section_5;
  BRepAlgoAPI_Section_6: typeof BRepAlgoAPI_Section_6;
  BRepAlgoAPI_Section_7: typeof BRepAlgoAPI_Section_7;
  BRepAlgoAPI_Section_8: typeof BRepAlgoAPI_Section_8;
  BRepAlgoAPI_Fuse: typeof BRepAlgoAPI_Fuse;
  BRepAlgoAPI_Fuse_1: typeof BRepAlgoAPI_Fuse_1;
  BRepAlgoAPI_Fuse_2: typeof BRepAlgoAPI_Fuse_2;
  BRepAlgoAPI_Fuse_3: typeof BRepAlgoAPI_Fuse_3;
  BRepAlgoAPI_Fuse_4: typeof BRepAlgoAPI_Fuse_4;
  BRepAlgoAPI_Cut: typeof BRepAlgoAPI_Cut;
  BRepAlgoAPI_Cut_1: typeof BRepAlgoAPI_Cut_1;
  BRepAlgoAPI_Cut_2: typeof BRepAlgoAPI_Cut_2;
  BRepAlgoAPI_Cut_3: typeof BRepAlgoAPI_Cut_3;
  BRepAlgoAPI_Cut_4: typeof BRepAlgoAPI_Cut_4;
  BRepAlgoAPI_BooleanOperation: typeof BRepAlgoAPI_BooleanOperation;
  BRepAlgoAPI_BooleanOperation_1: typeof BRepAlgoAPI_BooleanOperation_1;
  BRepAlgoAPI_BooleanOperation_2: typeof BRepAlgoAPI_BooleanOperation_2;
  BRepAlgoAPI_Common: typeof BRepAlgoAPI_Common;
  BRepAlgoAPI_Common_1: typeof BRepAlgoAPI_Common_1;
  BRepAlgoAPI_Common_2: typeof BRepAlgoAPI_Common_2;
  BRepAlgoAPI_Common_3: typeof BRepAlgoAPI_Common_3;
  BRepAlgoAPI_Common_4: typeof BRepAlgoAPI_Common_4;
  BRepAlgoAPI_Splitter: typeof BRepAlgoAPI_Splitter;
  BRepAlgoAPI_Splitter_1: typeof BRepAlgoAPI_Splitter_1;
  BRepAlgoAPI_Splitter_2: typeof BRepAlgoAPI_Splitter_2;
  BRepOffsetAPI_MakeFilling: typeof BRepOffsetAPI_MakeFilling;
  BRepOffsetAPI_MakeOffsetShape: typeof BRepOffsetAPI_MakeOffsetShape;
  BRepOffsetAPI_MakePipe: typeof BRepOffsetAPI_MakePipe;
  BRepOffsetAPI_MakePipe_1: typeof BRepOffsetAPI_MakePipe_1;
  BRepOffsetAPI_MakePipe_2: typeof BRepOffsetAPI_MakePipe_2;
  BRepOffsetAPI_DraftAngle: typeof BRepOffsetAPI_DraftAngle;
  BRepOffsetAPI_DraftAngle_1: typeof BRepOffsetAPI_DraftAngle_1;
  BRepOffsetAPI_DraftAngle_2: typeof BRepOffsetAPI_DraftAngle_2;
  BRepOffsetAPI_ThruSections: typeof BRepOffsetAPI_ThruSections;
  BRepOffsetAPI_MakeOffset: typeof BRepOffsetAPI_MakeOffset;
  BRepOffsetAPI_MakeOffset_1: typeof BRepOffsetAPI_MakeOffset_1;
  BRepOffsetAPI_MakeOffset_2: typeof BRepOffsetAPI_MakeOffset_2;
  BRepOffsetAPI_MakeOffset_3: typeof BRepOffsetAPI_MakeOffset_3;
  BRepOffsetAPI_MakePipeShell: typeof BRepOffsetAPI_MakePipeShell;
  BRepOffsetAPI_MakeThickSolid: typeof BRepOffsetAPI_MakeThickSolid;
  BRepOffset_Mode: BRepOffset_Mode;
  BRepMesh_DiscretRoot: typeof BRepMesh_DiscretRoot;
  BRepPrimAPI_MakeSphere: typeof BRepPrimAPI_MakeSphere;
  BRepPrimAPI_MakeSphere_1: typeof BRepPrimAPI_MakeSphere_1;
  BRepPrimAPI_MakeSphere_2: typeof BRepPrimAPI_MakeSphere_2;
  BRepPrimAPI_MakeSphere_3: typeof BRepPrimAPI_MakeSphere_3;
  BRepPrimAPI_MakeSphere_4: typeof BRepPrimAPI_MakeSphere_4;
  BRepPrimAPI_MakeSphere_5: typeof BRepPrimAPI_MakeSphere_5;
  BRepPrimAPI_MakeSphere_6: typeof BRepPrimAPI_MakeSphere_6;
  BRepPrimAPI_MakeSphere_7: typeof BRepPrimAPI_MakeSphere_7;
  BRepPrimAPI_MakeSphere_8: typeof BRepPrimAPI_MakeSphere_8;
  BRepPrimAPI_MakeSphere_9: typeof BRepPrimAPI_MakeSphere_9;
  BRepPrimAPI_MakeSphere_10: typeof BRepPrimAPI_MakeSphere_10;
  BRepPrimAPI_MakeSphere_11: typeof BRepPrimAPI_MakeSphere_11;
  BRepPrimAPI_MakeSphere_12: typeof BRepPrimAPI_MakeSphere_12;
  BRepPrimAPI_MakeHalfSpace: typeof BRepPrimAPI_MakeHalfSpace;
  BRepPrimAPI_MakeHalfSpace_1: typeof BRepPrimAPI_MakeHalfSpace_1;
  BRepPrimAPI_MakeHalfSpace_2: typeof BRepPrimAPI_MakeHalfSpace_2;
  BRepPrimAPI_MakeCone: typeof BRepPrimAPI_MakeCone;
  BRepPrimAPI_MakeCone_1: typeof BRepPrimAPI_MakeCone_1;
  BRepPrimAPI_MakeCone_2: typeof BRepPrimAPI_MakeCone_2;
  BRepPrimAPI_MakeCone_3: typeof BRepPrimAPI_MakeCone_3;
  BRepPrimAPI_MakeCone_4: typeof BRepPrimAPI_MakeCone_4;
  BRepPrimAPI_MakeRevol: typeof BRepPrimAPI_MakeRevol;
  BRepPrimAPI_MakeRevol_1: typeof BRepPrimAPI_MakeRevol_1;
  BRepPrimAPI_MakeRevol_2: typeof BRepPrimAPI_MakeRevol_2;
  BRepPrimAPI_MakeWedge: typeof BRepPrimAPI_MakeWedge;
  BRepPrimAPI_MakeWedge_1: typeof BRepPrimAPI_MakeWedge_1;
  BRepPrimAPI_MakeWedge_2: typeof BRepPrimAPI_MakeWedge_2;
  BRepPrimAPI_MakeWedge_3: typeof BRepPrimAPI_MakeWedge_3;
  BRepPrimAPI_MakeWedge_4: typeof BRepPrimAPI_MakeWedge_4;
  BRepPrimAPI_MakeSweep: typeof BRepPrimAPI_MakeSweep;
  BRepPrimAPI_MakeTorus: typeof BRepPrimAPI_MakeTorus;
  BRepPrimAPI_MakeTorus_1: typeof BRepPrimAPI_MakeTorus_1;
  BRepPrimAPI_MakeTorus_2: typeof BRepPrimAPI_MakeTorus_2;
  BRepPrimAPI_MakeTorus_3: typeof BRepPrimAPI_MakeTorus_3;
  BRepPrimAPI_MakeTorus_4: typeof BRepPrimAPI_MakeTorus_4;
  BRepPrimAPI_MakeTorus_5: typeof BRepPrimAPI_MakeTorus_5;
  BRepPrimAPI_MakeTorus_6: typeof BRepPrimAPI_MakeTorus_6;
  BRepPrimAPI_MakeTorus_7: typeof BRepPrimAPI_MakeTorus_7;
  BRepPrimAPI_MakeTorus_8: typeof BRepPrimAPI_MakeTorus_8;
  BRepPrimAPI_MakeOneAxis: typeof BRepPrimAPI_MakeOneAxis;
  BRepPrimAPI_MakeCylinder: typeof BRepPrimAPI_MakeCylinder;
  BRepPrimAPI_MakeCylinder_1: typeof BRepPrimAPI_MakeCylinder_1;
  BRepPrimAPI_MakeCylinder_2: typeof BRepPrimAPI_MakeCylinder_2;
  BRepPrimAPI_MakeCylinder_3: typeof BRepPrimAPI_MakeCylinder_3;
  BRepPrimAPI_MakeCylinder_4: typeof BRepPrimAPI_MakeCylinder_4;
  BRepPrimAPI_MakeBox: typeof BRepPrimAPI_MakeBox;
  BRepPrimAPI_MakeBox_1: typeof BRepPrimAPI_MakeBox_1;
  BRepPrimAPI_MakeBox_2: typeof BRepPrimAPI_MakeBox_2;
  BRepPrimAPI_MakeBox_3: typeof BRepPrimAPI_MakeBox_3;
  BRepPrimAPI_MakeBox_4: typeof BRepPrimAPI_MakeBox_4;
  BRepPrimAPI_MakeBox_5: typeof BRepPrimAPI_MakeBox_5;
  BRepPrimAPI_MakePrism: typeof BRepPrimAPI_MakePrism;
  BRepPrimAPI_MakePrism_1: typeof BRepPrimAPI_MakePrism_1;
  BRepPrimAPI_MakePrism_2: typeof BRepPrimAPI_MakePrism_2;
  BRepProj_Projection: typeof BRepProj_Projection;
  BRepProj_Projection_1: typeof BRepProj_Projection_1;
  BRepProj_Projection_2: typeof BRepProj_Projection_2;
  BRepFill_TypeOfContact: BRepFill_TypeOfContact;
  BRepFill: typeof BRepFill;
  ChFi3d_FilletShape: ChFi3d_FilletShape;
  BRepFilletAPI_MakeChamfer: typeof BRepFilletAPI_MakeChamfer;
  BRepFilletAPI_MakeFillet: typeof BRepFilletAPI_MakeFillet;
  BRepFilletAPI_LocalOperation: typeof BRepFilletAPI_LocalOperation;
  BRepFilletAPI_MakeFillet2d: typeof BRepFilletAPI_MakeFillet2d;
  BRepFilletAPI_MakeFillet2d_1: typeof BRepFilletAPI_MakeFillet2d_1;
  BRepFilletAPI_MakeFillet2d_2: typeof BRepFilletAPI_MakeFillet2d_2;
  BRepFeat_Form: typeof BRepFeat_Form;
  BRepFeat_SplitShape: typeof BRepFeat_SplitShape;
  BRepFeat_SplitShape_1: typeof BRepFeat_SplitShape_1;
  BRepFeat_SplitShape_2: typeof BRepFeat_SplitShape_2;
  BRepFeat_MakeDPrism: typeof BRepFeat_MakeDPrism;
  BRepFeat_MakeDPrism_1: typeof BRepFeat_MakeDPrism_1;
  BRepFeat_MakeDPrism_2: typeof BRepFeat_MakeDPrism_2;
  LocOpe_DPrism: typeof LocOpe_DPrism;
  LocOpe_DPrism_1: typeof LocOpe_DPrism_1;
  LocOpe_DPrism_2: typeof LocOpe_DPrism_2;
  BRepBndLib: typeof BRepBndLib;
  BRepClass3d_SolidClassifier: typeof BRepClass3d_SolidClassifier;
  BRepClass3d_SolidClassifier_1: typeof BRepClass3d_SolidClassifier_1;
  BRepClass3d_SolidClassifier_2: typeof BRepClass3d_SolidClassifier_2;
  BRepClass3d_SolidClassifier_3: typeof BRepClass3d_SolidClassifier_3;
  BRepClass3d_SClassifier: typeof BRepClass3d_SClassifier;
  BRepClass3d_SClassifier_1: typeof BRepClass3d_SClassifier_1;
  BRepClass3d_SClassifier_2: typeof BRepClass3d_SClassifier_2;
  BRepIntCurveSurface_Inter: typeof BRepIntCurveSurface_Inter;
  BRepGProp_Face: typeof BRepGProp_Face;
  BRepGProp_Face_1: typeof BRepGProp_Face_1;
  BRepGProp_Face_2: typeof BRepGProp_Face_2;
  BRepGProp: typeof BRepGProp;
  BRepLib: typeof BRepLib;
  BRepLib_FindSurface: typeof BRepLib_FindSurface;
  BRepLib_FindSurface_1: typeof BRepLib_FindSurface_1;
  BRepLib_FindSurface_2: typeof BRepLib_FindSurface_2;
  BRepLib_ToolTriangulatedShape: typeof BRepLib_ToolTriangulatedShape;
  BRepBuilderAPI_GTransform: typeof BRepBuilderAPI_GTransform;
  BRepBuilderAPI_GTransform_1: typeof BRepBuilderAPI_GTransform_1;
  BRepBuilderAPI_GTransform_2: typeof BRepBuilderAPI_GTransform_2;
  BRepBuilderAPI_Transform: typeof BRepBuilderAPI_Transform;
  BRepBuilderAPI_Transform_1: typeof BRepBuilderAPI_Transform_1;
  BRepBuilderAPI_Transform_2: typeof BRepBuilderAPI_Transform_2;
  BRepBuilderAPI_MakeVertex: typeof BRepBuilderAPI_MakeVertex;
  BRepBuilderAPI_MakeEdge: typeof BRepBuilderAPI_MakeEdge;
  BRepBuilderAPI_MakeEdge_1: typeof BRepBuilderAPI_MakeEdge_1;
  BRepBuilderAPI_MakeEdge_2: typeof BRepBuilderAPI_MakeEdge_2;
  BRepBuilderAPI_MakeEdge_3: typeof BRepBuilderAPI_MakeEdge_3;
  BRepBuilderAPI_MakeEdge_4: typeof BRepBuilderAPI_MakeEdge_4;
  BRepBuilderAPI_MakeEdge_5: typeof BRepBuilderAPI_MakeEdge_5;
  BRepBuilderAPI_MakeEdge_6: typeof BRepBuilderAPI_MakeEdge_6;
  BRepBuilderAPI_MakeEdge_7: typeof BRepBuilderAPI_MakeEdge_7;
  BRepBuilderAPI_MakeEdge_8: typeof BRepBuilderAPI_MakeEdge_8;
  BRepBuilderAPI_MakeEdge_9: typeof BRepBuilderAPI_MakeEdge_9;
  BRepBuilderAPI_MakeEdge_10: typeof BRepBuilderAPI_MakeEdge_10;
  BRepBuilderAPI_MakeEdge_11: typeof BRepBuilderAPI_MakeEdge_11;
  BRepBuilderAPI_MakeEdge_12: typeof BRepBuilderAPI_MakeEdge_12;
  BRepBuilderAPI_MakeEdge_13: typeof BRepBuilderAPI_MakeEdge_13;
  BRepBuilderAPI_MakeEdge_14: typeof BRepBuilderAPI_MakeEdge_14;
  BRepBuilderAPI_MakeEdge_15: typeof BRepBuilderAPI_MakeEdge_15;
  BRepBuilderAPI_MakeEdge_16: typeof BRepBuilderAPI_MakeEdge_16;
  BRepBuilderAPI_MakeEdge_17: typeof BRepBuilderAPI_MakeEdge_17;
  BRepBuilderAPI_MakeEdge_18: typeof BRepBuilderAPI_MakeEdge_18;
  BRepBuilderAPI_MakeEdge_19: typeof BRepBuilderAPI_MakeEdge_19;
  BRepBuilderAPI_MakeEdge_20: typeof BRepBuilderAPI_MakeEdge_20;
  BRepBuilderAPI_MakeEdge_21: typeof BRepBuilderAPI_MakeEdge_21;
  BRepBuilderAPI_MakeEdge_22: typeof BRepBuilderAPI_MakeEdge_22;
  BRepBuilderAPI_MakeEdge_23: typeof BRepBuilderAPI_MakeEdge_23;
  BRepBuilderAPI_MakeEdge_24: typeof BRepBuilderAPI_MakeEdge_24;
  BRepBuilderAPI_MakeEdge_25: typeof BRepBuilderAPI_MakeEdge_25;
  BRepBuilderAPI_MakeEdge_26: typeof BRepBuilderAPI_MakeEdge_26;
  BRepBuilderAPI_MakeEdge_27: typeof BRepBuilderAPI_MakeEdge_27;
  BRepBuilderAPI_MakeEdge_28: typeof BRepBuilderAPI_MakeEdge_28;
  BRepBuilderAPI_MakeEdge_29: typeof BRepBuilderAPI_MakeEdge_29;
  BRepBuilderAPI_MakeEdge_30: typeof BRepBuilderAPI_MakeEdge_30;
  BRepBuilderAPI_MakeEdge_31: typeof BRepBuilderAPI_MakeEdge_31;
  BRepBuilderAPI_MakeEdge_32: typeof BRepBuilderAPI_MakeEdge_32;
  BRepBuilderAPI_MakeEdge_33: typeof BRepBuilderAPI_MakeEdge_33;
  BRepBuilderAPI_MakeEdge_34: typeof BRepBuilderAPI_MakeEdge_34;
  BRepBuilderAPI_MakeEdge_35: typeof BRepBuilderAPI_MakeEdge_35;
  BRepBuilderAPI_MakePolygon: typeof BRepBuilderAPI_MakePolygon;
  BRepBuilderAPI_MakePolygon_1: typeof BRepBuilderAPI_MakePolygon_1;
  BRepBuilderAPI_MakePolygon_2: typeof BRepBuilderAPI_MakePolygon_2;
  BRepBuilderAPI_MakePolygon_3: typeof BRepBuilderAPI_MakePolygon_3;
  BRepBuilderAPI_MakePolygon_4: typeof BRepBuilderAPI_MakePolygon_4;
  BRepBuilderAPI_MakePolygon_5: typeof BRepBuilderAPI_MakePolygon_5;
  BRepBuilderAPI_MakePolygon_6: typeof BRepBuilderAPI_MakePolygon_6;
  BRepBuilderAPI_MakePolygon_7: typeof BRepBuilderAPI_MakePolygon_7;
  BRepBuilderAPI_Command: typeof BRepBuilderAPI_Command;
  BRepBuilderAPI_ModifyShape: typeof BRepBuilderAPI_ModifyShape;
  BRepBuilderAPI_TransitionMode: BRepBuilderAPI_TransitionMode;
  BRepBuilderAPI_MakeShape: typeof BRepBuilderAPI_MakeShape;
  BRepBuilderAPI_Sewing: typeof BRepBuilderAPI_Sewing;
  BRepBuilderAPI_MakeSolid: typeof BRepBuilderAPI_MakeSolid;
  BRepBuilderAPI_MakeSolid_1: typeof BRepBuilderAPI_MakeSolid_1;
  BRepBuilderAPI_MakeSolid_2: typeof BRepBuilderAPI_MakeSolid_2;
  BRepBuilderAPI_MakeSolid_3: typeof BRepBuilderAPI_MakeSolid_3;
  BRepBuilderAPI_MakeSolid_4: typeof BRepBuilderAPI_MakeSolid_4;
  BRepBuilderAPI_MakeSolid_5: typeof BRepBuilderAPI_MakeSolid_5;
  BRepBuilderAPI_MakeSolid_6: typeof BRepBuilderAPI_MakeSolid_6;
  BRepBuilderAPI_MakeSolid_7: typeof BRepBuilderAPI_MakeSolid_7;
  BRepBuilderAPI_Copy: typeof BRepBuilderAPI_Copy;
  BRepBuilderAPI_Copy_1: typeof BRepBuilderAPI_Copy_1;
  BRepBuilderAPI_Copy_2: typeof BRepBuilderAPI_Copy_2;
  BRepBuilderAPI_MakeFace: typeof BRepBuilderAPI_MakeFace;
  BRepBuilderAPI_MakeFace_1: typeof BRepBuilderAPI_MakeFace_1;
  BRepBuilderAPI_MakeFace_2: typeof BRepBuilderAPI_MakeFace_2;
  BRepBuilderAPI_MakeFace_3: typeof BRepBuilderAPI_MakeFace_3;
  BRepBuilderAPI_MakeFace_4: typeof BRepBuilderAPI_MakeFace_4;
  BRepBuilderAPI_MakeFace_5: typeof BRepBuilderAPI_MakeFace_5;
  BRepBuilderAPI_MakeFace_6: typeof BRepBuilderAPI_MakeFace_6;
  BRepBuilderAPI_MakeFace_7: typeof BRepBuilderAPI_MakeFace_7;
  BRepBuilderAPI_MakeFace_8: typeof BRepBuilderAPI_MakeFace_8;
  BRepBuilderAPI_MakeFace_9: typeof BRepBuilderAPI_MakeFace_9;
  BRepBuilderAPI_MakeFace_10: typeof BRepBuilderAPI_MakeFace_10;
  BRepBuilderAPI_MakeFace_11: typeof BRepBuilderAPI_MakeFace_11;
  BRepBuilderAPI_MakeFace_12: typeof BRepBuilderAPI_MakeFace_12;
  BRepBuilderAPI_MakeFace_13: typeof BRepBuilderAPI_MakeFace_13;
  BRepBuilderAPI_MakeFace_14: typeof BRepBuilderAPI_MakeFace_14;
  BRepBuilderAPI_MakeFace_15: typeof BRepBuilderAPI_MakeFace_15;
  BRepBuilderAPI_MakeFace_16: typeof BRepBuilderAPI_MakeFace_16;
  BRepBuilderAPI_MakeFace_17: typeof BRepBuilderAPI_MakeFace_17;
  BRepBuilderAPI_MakeFace_18: typeof BRepBuilderAPI_MakeFace_18;
  BRepBuilderAPI_MakeFace_19: typeof BRepBuilderAPI_MakeFace_19;
  BRepBuilderAPI_MakeFace_20: typeof BRepBuilderAPI_MakeFace_20;
  BRepBuilderAPI_MakeFace_21: typeof BRepBuilderAPI_MakeFace_21;
  BRepBuilderAPI_MakeFace_22: typeof BRepBuilderAPI_MakeFace_22;
  BRepBuilderAPI_MakeWire: typeof BRepBuilderAPI_MakeWire;
  BRepBuilderAPI_MakeWire_1: typeof BRepBuilderAPI_MakeWire_1;
  BRepBuilderAPI_MakeWire_2: typeof BRepBuilderAPI_MakeWire_2;
  BRepBuilderAPI_MakeWire_3: typeof BRepBuilderAPI_MakeWire_3;
  BRepBuilderAPI_MakeWire_4: typeof BRepBuilderAPI_MakeWire_4;
  BRepBuilderAPI_MakeWire_5: typeof BRepBuilderAPI_MakeWire_5;
  BRepBuilderAPI_MakeWire_6: typeof BRepBuilderAPI_MakeWire_6;
  BRepBuilderAPI_MakeWire_7: typeof BRepBuilderAPI_MakeWire_7;
  BRepBuilderAPI_WireError: BRepBuilderAPI_WireError;
  BRepExtrema_SupportType: BRepExtrema_SupportType;
  BRepExtrema_DistShapeShape: typeof BRepExtrema_DistShapeShape;
  BRepExtrema_DistShapeShape_1: typeof BRepExtrema_DistShapeShape_1;
  BRepExtrema_DistShapeShape_2: typeof BRepExtrema_DistShapeShape_2;
  BRepExtrema_DistShapeShape_3: typeof BRepExtrema_DistShapeShape_3;
  BRepCheck_Analyzer: typeof BRepCheck_Analyzer;
  RWGltf_CafWriter: typeof RWGltf_CafWriter;
  IGESControl_Reader: typeof IGESControl_Reader;
  IGESControl_Reader_1: typeof IGESControl_Reader_1;
  IGESControl_Reader_2: typeof IGESControl_Reader_2;
  IGESControl_Controller: typeof IGESControl_Controller;
  APIHeaderSection_MakeHeader: typeof APIHeaderSection_MakeHeader;
  APIHeaderSection_MakeHeader_1: typeof APIHeaderSection_MakeHeader_1;
  APIHeaderSection_MakeHeader_2: typeof APIHeaderSection_MakeHeader_2;
  STEPControl_Controller: typeof STEPControl_Controller;
  STEPControl_StepModelType: STEPControl_StepModelType;
  STEPControl_Writer: typeof STEPControl_Writer;
  STEPControl_Writer_1: typeof STEPControl_Writer_1;
  STEPControl_Writer_2: typeof STEPControl_Writer_2;
  STEPControl_Reader: typeof STEPControl_Reader;
  STEPControl_Reader_1: typeof STEPControl_Reader_1;
  STEPControl_Reader_2: typeof STEPControl_Reader_2;
  STEPCAFControl_Writer: typeof STEPCAFControl_Writer;
  STEPCAFControl_Writer_1: typeof STEPCAFControl_Writer_1;
  STEPCAFControl_Writer_2: typeof STEPCAFControl_Writer_2;
  STEPCAFControl_Controller: typeof STEPCAFControl_Controller;
  STEPCAFControl_Reader: typeof STEPCAFControl_Reader;
  STEPCAFControl_Reader_1: typeof STEPCAFControl_Reader_1;
  STEPCAFControl_Reader_2: typeof STEPCAFControl_Reader_2;
  XCAFDoc_ShapeTool: typeof XCAFDoc_ShapeTool;
  XCAFDoc_DocumentTool: typeof XCAFDoc_DocumentTool;
  XCAFDoc_ColorTool: typeof XCAFDoc_ColorTool;
  XCAFDoc_ColorType: XCAFDoc_ColorType;
  XCAFApp_Application: typeof XCAFApp_Application;
  RWStl: typeof RWStl;
  StlAPI_Reader: typeof StlAPI_Reader;
  StlAPI_Writer: typeof StlAPI_Writer;
  MoniTool_TypedValue: typeof MoniTool_TypedValue;
  MoniTool_TypedValue_1: typeof MoniTool_TypedValue_1;
  MoniTool_TypedValue_2: typeof MoniTool_TypedValue_2;
  IFSelect_WorkSession: typeof IFSelect_WorkSession;
  IFSelect_ReturnStatus: IFSelect_ReturnStatus;
  Transfer_TransientProcess: typeof Transfer_TransientProcess;
  Transfer_ProcessForTransient: typeof Transfer_ProcessForTransient;
  Transfer_ProcessForTransient_1: typeof Transfer_ProcessForTransient_1;
  Transfer_ProcessForTransient_2: typeof Transfer_ProcessForTransient_2;
  XSControl_Reader: typeof XSControl_Reader;
  XSControl_Reader_1: typeof XSControl_Reader_1;
  XSControl_Reader_2: typeof XSControl_Reader_2;
  XSControl_Reader_3: typeof XSControl_Reader_3;
  XSControl_WorkSession: typeof XSControl_WorkSession;
  XSControl_Controller: typeof XSControl_Controller;
  Interface_TypedValue: typeof Interface_TypedValue;
  Interface_Static: typeof Interface_Static;
  Interface_Static_1: typeof Interface_Static_1;
  Interface_Static_2: typeof Interface_Static_2;
};

declare function init(): Promise<OpenCascadeInstance>;

export default init;
