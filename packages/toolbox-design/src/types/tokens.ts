/**
 * Design token kind
 * ---------------------
 * A design token kind is a string that represents the type of design token.
 */
export enum DesignTokenKind {
  // Simple tokens
  Size = "size",
  Color = "color",
  Opacity = "opacity",
  Duration = "duration",
  FontFamily = "font-family",
  FontWeight = "font-weight",

  // Composite tokens
  Shadow = "shadow",
  Gradient = "gradient",
  Border = "border",
  Breakpoint = "breakpoint",
  Typography = "typography",
}

/**
 * Valued token
 * ---------------------
 * A valued token is a design token with a single value.
 */
export type ValuedToken<Kind extends DesignTokenKind, ValueType> = {
  $kind: Kind;
  $value: ValueType | DesignTokenReference<Kind>;
};

/**
 * Themed token
 * ---------------------
 * A themed token is a design token with theme values.
 */
export type ThemedToken<Kind extends DesignTokenKind, ValueType> = {
  $kind: Kind;
  $themeValues: {
    [theme: string]: ValueType | DesignTokenReference<Kind>;
  };
};

/**
 * Design token
 * ---------------------
 * A design token is a design token base with a value and a kind.
 */
export type Token<Kind extends DesignTokenKind, ValueType> =
  | ValuedToken<Kind, ValueType>
  | ThemedToken<Kind, ValueType>;

/**
 * Design token reference
 * ---------------------
 * A design token reference is a reference to a design token.
 * The reference can be used to refer to a design token in another design token.
 * @example { $ref: "tokens.color.primary" }
 */
export type DesignTokenReference<Kind extends DesignTokenKind> = (
  library: DesignTokenLibrary,
) => ValuedToken<Kind, string | number | object>;

/**
 * Color design token
 * ---------------------
 * A color design token is a design token that represents a color value.
 * @example { $kind: "color", $value: "#000000" }
 */
export type ColorDesignToken = Token<DesignTokenKind.Color, string>;
/**
 * Opacity design token
 * ---------------------
 * An opacity design token is a design token that represents an opacity value.
 * @example { $kind: "opacity", $value: 0.5 }
 */
export type OpacityDesignToken = Token<DesignTokenKind.Opacity, number>;

/**
 * Duration design token
 * ---------------------
 * A duration design token is a design token that represents a duration value.
 * @example { $kind: "duration", $value: 300 }
 * @example { $kind: "duration", $value: "300ms" }
 */
export type DurationDesignToken = Token<
  DesignTokenKind.Duration,
  number | string
>;

/**
 * Font family design token
 * ---------------------
 * A font family design token is a design token that represents a font family value.
 * @example { $kind: "font-family", $value: "Arial" }
 */
export type FontFamilyDesignToken = Token<DesignTokenKind.FontFamily, string>;

/**
 * Font weight design token
 * ---------------------
 * A font weight design token is a design token that represents a font weight value.
 * @example { $kind: "font-weight", $value: 400 }
 * @example { $kind: "font-weight", $value: "400" }
 */
export type FontWeightDesignToken = Token<
  DesignTokenKind.FontWeight,
  number | string
>;

/**
 * Size design token
 * ---------------------
 * A size design token is a design token that represents a size value.
 * @example { $kind: "size", $value: 16 }
 * @example { $kind: "size", $value: "16px" }
 */
export type SizeDesignToken = Token<DesignTokenKind.Size, number | string>;

/**
 * Design token simple value
 * ---------------------
 * A design token simple value is a string or a number.
 */
export type SimpleDesignToken =
  | SizeDesignToken
  | ColorDesignToken
  | OpacityDesignToken
  | DurationDesignToken
  | FontFamilyDesignToken
  | FontWeightDesignToken;

/**
 * Shadow design token
 * ---------------------
 * A shadow design token is a design token that represents a shadow value.
 * @example { $kind: "shadow", $value: { x: 0, y: 4, blur: 8, spread: 0, color: "#000000" } }
 */
export type ShadowDesignToken = Token<
  DesignTokenKind.Shadow,
  {
    x: number | DesignTokenReference<DesignTokenKind.Size>;
    y: number | DesignTokenReference<DesignTokenKind.Size>;
    blur: number | DesignTokenReference<DesignTokenKind.Size>;
    spread: number | DesignTokenReference<DesignTokenKind.Size>;
    color: DesignTokenReference<DesignTokenKind.Color>;
  }
>;

/**
 * Gradient design token
 * ---------------------
 * A gradient design token is a design token that represents a gradient value.
 * @example { $kind: "gradient", $value: { type: "linear", angle: 45, stops: [{ color: "#000000", position: 0 }, { color: "#FFFFFF", position: 1 }] } }
 */
export type GradientDesignToken = Token<
  DesignTokenKind.Gradient,
  {
    type: "linear" | "radial";
    angle?: number | DesignTokenReference<DesignTokenKind.Size>;
    stops: Array<{
      color: string | DesignTokenReference<DesignTokenKind.Color>;
      position: number | DesignTokenReference<DesignTokenKind.Size>;
    }>;
  }
>;

/**
 * Border design token
 * ---------------------
 * A border design token is a design token that represents a border value.
 * @example { $kind: "border", $value: { width: 1, style: "solid", color: "#000000" } }
 */
export type BorderDesignToken = Token<
  DesignTokenKind.Border,
  {
    width: number | string | DesignTokenReference<DesignTokenKind.Size>;
    style: "solid" | "dashed" | "dotted";
    color: string | DesignTokenReference<DesignTokenKind.Color>;
  }
>;

/**
 * Typography design token
 * ---------------------
 * A font design token is a design token that represents a font value.
 * @example { $kind: "typography", $value: { family: "Arial", size: 16, weight: 400, lineHeight: 24 } }
 */
export type TypographyDesignToken = Token<
  DesignTokenKind.Typography,
  {
    family: DesignTokenReference<DesignTokenKind.FontFamily>;
    size: DesignTokenReference<DesignTokenKind.Size>;
    lineHeight: DesignTokenReference<DesignTokenKind.Size>;
    weight: DesignTokenReference<DesignTokenKind.FontWeight>;
  }
>;

/**
 * Breakpoint design token
 * ---------------------
 * A breakpoint design token is a design token that represents a breakpoint value.
 * @example { $kind: "breakpoint", $value: { min: 0, max: 600 } }
 * @example { $kind: "breakpoint", $value: { min: "0px", max: "600px" } }
 */
export type BreakpointDesignToken = Token<
  DesignTokenKind.Breakpoint,
  {
    min?: DesignTokenReference<DesignTokenKind.Size>;
    max?: DesignTokenReference<DesignTokenKind.Size>;
  }
>;

/**
 * Composite design token
 * ---------------------
 * A composite design token is a design token where the value is composed of multiple values.
 */
export type CompositeDesignToken =
  | ShadowDesignToken
  | GradientDesignToken
  | BorderDesignToken
  | TypographyDesignToken
  | BreakpointDesignToken;

/**
 * Design token base
 * ---------------------
 * Base properties of a design token.
 */
export type DesignTokenBase = {
  /* The name of the design token */
  $name: string;
  /* The version when the design token was introduced */
  $version: string;
  /* The comment of the design token */
  $comment?: string;
  /* The deprecated information of the design token */
  $deprecated?: {
    version: string;
    replacement?: string;
  };
};

/**
 * Design token
 * ---------------------
 * A design token is a design token base with a value and a kind.
 */
export type DesignToken = DesignTokenBase &
  (SimpleDesignToken | CompositeDesignToken);

/**
 * Design token library
 * ---------------------
 * A design token library is an object of key-value pairs where the value is a design token or another design token library.
 */
export type DesignTokenLibrary = {
  primitive: PrimitiveDesignTokenLibrary;
  [key: string]: DesignToken | Omit<DesignTokenLibrary, "primitive">;
};

/**
 * Primary design token
 * ---------------------
 * A primary design token is a design token that is a simple design token.
 */
export type PrimitiveDesignToken = DesignTokenBase & SimpleDesignToken;

/**
 * Primitive design token library
 * ---------------------
 * A primitive design token library is an object of key-value pairs where the value is a simple design token or another primitive design token library.
 */
export type PrimitiveDesignTokenLibrary = {
  [key: string]: PrimitiveDesignToken | PrimitiveDesignTokenLibrary;
};
