/**
 * Design token kind
 * ---------------------
 * A design token kind is a string that represents the type of design token.
 */
export enum DesignTokenKind {
  // Simple tokens
  Color = "color",
  Spacing = "spacing",
  Radius = "radius",
  Opacity = "opacity",
  Duration = "duration",
  FontFamily = "font-family",
  FontWeight = "font-weight",

  // Composite tokens
  FontSize = "font-size",
  Shadow = "shadow",
  Gradient = "gradient",
  Border = "border",
  Font = "font",
  Breakpoint = "breakpoint",
}

/**
 * Design token reference
 * ---------------------
 * A design token reference is a reference to a design token.
 * The reference can be used to refer to a design token in another design token.
 * @example { $ref: "tokens.color.primary" }
 */
export type DesignTokenReference = (library: DesignTokenLibrary) => DesignToken;

/**
 * Color design token
 * ---------------------
 * A color design token is a design token that represents a color value.
 * @example { $kind: "color", $value: "#000000" }
 */
export type ColorDesignToken = {
  $kind: DesignTokenKind.Color;
  $value: string;
};

/**
 * Spacing design token
 * ---------------------
 * A spacing design token is a design token that represents a spacing value.
 * @example { $kind: "spacing", $value: 8 }
 * @example { $kind: "spacing", $value: "8px" }
 */
export type SpacingDesignToken = {
  $kind: DesignTokenKind.Spacing;
  $value: number | string;
};

/**
 * Radius design token
 * ---------------------
 * A radius design token is a design token that represents a radius value.
 * @example { $kind: "radius", $value: 4 }
 * @example { $kind: "radius", $value: "4px" }
 */
export type RadiusDesignToken = {
  $kind: DesignTokenKind.Radius;
  $value: number | string;
};

/**
 * Opacity design token
 * ---------------------
 * An opacity design token is a design token that represents an opacity value.
 * @example { $kind: "opacity", $value: 0.5 }
 */
export type OpacityDesignToken = {
  $kind: DesignTokenKind.Opacity;
  $value: number | string;
};

/**
 * Duration design token
 * ---------------------
 * A duration design token is a design token that represents a duration value.
 * @example { $kind: "duration", $value: 300 }
 * @example { $kind: "duration", $value: "300ms" }
 */
export type DurationDesignToken = {
  $kind: DesignTokenKind.Duration;
  $value: number | string;
};

/**
 * Font family design token
 * ---------------------
 * A font family design token is a design token that represents a font family value.
 * @example { $kind: "font-family", $value: "Arial" }
 */
export type FontFamilyDesignToken = {
  $kind: DesignTokenKind.FontFamily;
  $value: string;
};

/**
 * Font weight design token
 * ---------------------
 * A font weight design token is a design token that represents a font weight value.
 * @example { $kind: "font-weight", $value: 400 }
 * @example { $kind: "font-weight", $value: "400" }
 */
export type FontWeightDesignToken = {
  $kind: DesignTokenKind.FontWeight;
  $value: number | string;
};

/**
 * Design token simple value
 * ---------------------
 * A design token simple value is a string or a number.
 */
export type SimpleDesignToken =
  | ColorDesignToken
  | SpacingDesignToken
  | RadiusDesignToken
  | OpacityDesignToken
  | DurationDesignToken
  | FontFamilyDesignToken
  | FontWeightDesignToken;

/**
 * Font size design token
 * ---------------------
 * A font size design token is a design token that represents a font size value.
 * @example { $kind: "font-size", $value: { size: 16, lineHeight: 24 } }
 */
export type FontSizeDesignToken = {
  $kind: DesignTokenKind.FontSize;
  $value: {
    size: number | string;
    lineHeight: number | string;
  };
};

/**
 * Shadow design token
 * ---------------------
 * A shadow design token is a design token that represents a shadow value.
 * @example { $kind: "shadow", $value: { x: 0, y: 4, blur: 8, spread: 0, color: "#000000" } }
 */
export type ShadowDesignToken = {
  $kind: DesignTokenKind.Shadow;
  $value: {
    x: number;
    y: number;
    blur: number;
    spread: number;
    color: string | DesignTokenReference;
  };
};

/**
 * Gradient design token
 * ---------------------
 * A gradient design token is a design token that represents a gradient value.
 * @example { $kind: "gradient", $value: { type: "linear", angle: 45, stops: [{ color: "#000000", position: 0 }, { color: "#FFFFFF", position: 1 }] } }
 */
export type GradientDesignToken = {
  $kind: DesignTokenKind.Gradient;
  $value: {
    type: "linear" | "radial";
    angle?: number;
    stops: Array<{
      color: string | DesignTokenReference;
      position: number;
    }>;
  };
};

/**
 * Border design token
 * ---------------------
 * A border design token is a design token that represents a border value.
 * @example { $kind: "border", $value: { width: 1, style: "solid", color: "#000000" } }
 */
export type BorderDesignToken = {
  $kind: DesignTokenKind.Border;
  $value: {
    width: number | string;
    style: "solid" | "dashed" | "dotted";
    color: string | DesignTokenReference;
  };
};

/**
 * Font design token
 * ---------------------
 * A font design token is a design token that represents a font value.
 * @example { $kind: "font", $value: { family: "Arial", size: 16, weight: 400, lineHeight: 24 } }
 */
export type FontDesignToken = {
  $kind: DesignTokenKind.Font;
  $value: {
    family: DesignTokenReference;
    size: DesignTokenReference;
    weight: DesignTokenReference;
  };
};

/**
 * Breakpoint design token
 * ---------------------
 * A breakpoint design token is a design token that represents a breakpoint value.
 * @example { $kind: "breakpoint", $value: { min: 0, max: 600 } }
 * @example { $kind: "breakpoint", $value: { min: "0px", max: "600px" } }
 */
export type BreakpointDesignToken = {
  $kind: DesignTokenKind.Breakpoint;
  $value: {
    min?: number | string | DesignTokenReference;
    max?: number | string | DesignTokenReference;
  };
};

/**
 * Composite design token
 * ---------------------
 * A composite design token is a design token where the value is composed of multiple values.
 */
export type CompositeDesignToken =
  | FontSizeDesignToken
  | ShadowDesignToken
  | GradientDesignToken
  | BorderDesignToken
  | FontDesignToken
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
  [key: string]: DesignToken | DesignTokenLibrary;
};
