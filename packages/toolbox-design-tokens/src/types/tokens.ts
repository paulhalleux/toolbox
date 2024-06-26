import { FlattenTokenKeys } from "./utils";

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
  LineHeight = "line-height",

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
export type ValuedToken<
  Kind extends DesignTokenKind,
  ValueType,
  Referencable extends Record<string, unknown> = Record<string, unknown>,
> = {
  $kind: Kind;
  $value: ValueType | TokenReference<Referencable>;
};

/**
 * Themed token
 * ---------------------
 * A themed token is a design token with theme values.
 */
export type ThemedToken<
  Kind extends DesignTokenKind,
  ValueType,
  Referencable extends Record<string, unknown> = Record<string, unknown>,
> = {
  $kind: Kind;
  $themeValues: {
    [theme: string]: ValueType | TokenReference<Referencable>;
  };
};

/**
 * Referenced token
 * ---------------------
 * A referenced token is a design token that references another design token.
 */
export type TokenReference<
  Referencable extends Record<string, unknown> = Record<string, unknown>,
  Kind extends DesignTokenKind = DesignTokenKind,
> = `$ref:${FlattenTokenKeys<Referencable, Kind>}`;

/**
 * Design token
 * ---------------------
 * A design token is a design token base with a value and a kind.
 */
export type Token<
  Kind extends DesignTokenKind,
  ValueType,
  Referencable extends Record<string, unknown>,
> =
  | ValuedToken<Kind, ValueType, Referencable>
  | ThemedToken<Kind, ValueType, Referencable>;

/**
 * Color design token
 * ---------------------
 * A color design token is a design token that represents a color value.
 * @example { $kind: "color", $value: "#000000" }
 */
export type ColorDesignToken<
  Referencable extends Record<string, unknown> = Record<string, unknown>,
> = Token<DesignTokenKind.Color, string, Referencable>;
/**
 * Opacity design token
 * ---------------------
 * An opacity design token is a design token that represents an opacity value.
 * @example { $kind: "opacity", $value: 0.5 }
 */
export type OpacityDesignToken<
  Referencable extends Record<string, unknown> = Record<string, unknown>,
> = Token<DesignTokenKind.Opacity, number, Referencable>;

/**
 * Duration design token
 * ---------------------
 * A duration design token is a design token that represents a duration value.
 * @example { $kind: "duration", $value: 300 }
 * @example { $kind: "duration", $value: "300ms" }
 */
export type DurationDesignToken<Referencable extends Record<string, unknown>> =
  Token<DesignTokenKind.Duration, number | string, Referencable>;

/**
 * Font family design token
 * ---------------------
 * A font family design token is a design token that represents a font family value.
 * @example { $kind: "font-family", $value: "Arial" }
 */
export type FontFamilyDesignToken<
  Referencable extends Record<string, unknown>,
> = Token<DesignTokenKind.FontFamily, string, Referencable>;

/**
 * Font weight design token
 * ---------------------
 * A font weight design token is a design token that represents a font weight value.
 * @example { $kind: "font-weight", $value: 400 }
 * @example { $kind: "font-weight", $value: "400" }
 */
export type FontWeightDesignToken<
  Referencable extends Record<string, unknown>,
> = Token<DesignTokenKind.FontWeight, number | string, Referencable>;

/**
 * Line height design token
 * ---------------------
 * A line height design token is a design token that represents a line height value.
 * @example { $kind: "line-height", $value: 24 }
 * @example { $kind: "line-height", $value: "24px" }
 */
export type LineHeightDesignToken<
  Referencable extends Record<string, unknown>,
> = Token<DesignTokenKind.LineHeight, number | string, Referencable>;

/**
 * Size design token
 * ---------------------
 * A size design token is a design token that represents a size value.
 * @example { $kind: "size", $value: 16 }
 * @example { $kind: "size", $value: "16px" }
 */
export type SizeDesignToken<
  Referencable extends Record<string, unknown> = Record<string, unknown>,
> = Token<DesignTokenKind.Size, number | string, Referencable>;

/**
 * Shadow design token
 * ---------------------
 * A shadow design token is a design token that represents a shadow value.
 * @example { $kind: "shadow", $value: { x: 0, y: 4, blur: 8, spread: 0, color: "#000000" } }
 */
export type ShadowDesignToken<
  Referencable extends Record<string, unknown> = Record<string, unknown>,
> = Token<
  DesignTokenKind.Shadow,
  {
    x: number | TokenReference<Referencable, DesignTokenKind.Size>;
    y: number | TokenReference<Referencable, DesignTokenKind.Size>;
    blur: number | TokenReference<Referencable, DesignTokenKind.Size>;
    spread: number | TokenReference<Referencable, DesignTokenKind.Size>;
    color: TokenReference<Referencable, DesignTokenKind.Color>;
  },
  Referencable
>;

/**
 * Gradient design token
 * ---------------------
 * A gradient design token is a design token that represents a gradient value.
 * @example { $kind: "gradient", $value: { type: "linear", angle: 45, stops: [{ color: "#000000", position: 0 }, { color: "#FFFFFF", position: 1 }] } }
 */
export type GradientDesignToken<Referencable extends Record<string, unknown>> =
  Token<
    DesignTokenKind.Gradient,
    {
      type: "linear" | "radial";
      angle?: number;
      stops: Array<{
        color: string | TokenReference<Referencable, DesignTokenKind.Color>;
        position: number;
      }>;
    },
    Referencable
  >;

/**
 * Border design token
 * ---------------------
 * A border design token is a design token that represents a border value.
 * @example { $kind: "border", $value: { width: 1, style: "solid", color: "#000000" } }
 */
export type BorderDesignToken<
  Referencable extends Record<string, unknown> = Record<string, unknown>,
> = Token<
  DesignTokenKind.Border,
  {
    width: number | string | TokenReference<Referencable, DesignTokenKind.Size>;
    style: "solid" | "dashed" | "dotted";
    color: string | TokenReference<Referencable, DesignTokenKind.Color>;
  },
  Referencable
>;

/**
 * Typography design token
 * ---------------------
 * A font design token is a design token that represents a font value.
 * @example { $kind: "typography", $value: { family: "Arial", size: 16, weight: 400, lineHeight: 24 } }
 */
export type TypographyDesignToken<
  Referencable extends Record<string, unknown> = Record<string, unknown>,
> = Token<
  DesignTokenKind.Typography,
  {
    family: TokenReference<Referencable, DesignTokenKind.FontFamily>;
    size: TokenReference<Referencable, DesignTokenKind.Size>;
    lineHeight?: TokenReference<Referencable, DesignTokenKind.LineHeight>;
    weight?: TokenReference<Referencable, DesignTokenKind.FontWeight>;
    style?: "normal" | "italic" | "oblique" | "none";
    variant?: "normal" | "small-caps" | "none";
  },
  Referencable
>;

/**
 * Breakpoint design token
 * ---------------------
 * A breakpoint design token is a design token that represents a breakpoint value.
 * @example { $kind: "breakpoint", $value: { min: 0, max: 600 } }
 * @example { $kind: "breakpoint", $value: { min: "0px", max: "600px" } }
 */
export type BreakpointDesignToken<
  Referencable extends Record<string, unknown>,
> = Token<
  DesignTokenKind.Breakpoint,
  {
    min?: TokenReference<Referencable, DesignTokenKind.Size>;
    max?: TokenReference<Referencable, DesignTokenKind.Size>;
  },
  Referencable
>;

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
export type DesignToken<
  Referencable extends Record<string, unknown> = Record<string, unknown>,
> = DesignTokenBase &
  (
    | SizeDesignToken<Referencable>
    | ColorDesignToken<Referencable>
    | OpacityDesignToken<Referencable>
    | DurationDesignToken<Referencable>
    | FontFamilyDesignToken<Referencable>
    | FontWeightDesignToken<Referencable>
    | LineHeightDesignToken<Referencable>
    | ShadowDesignToken<Referencable>
    | GradientDesignToken<Referencable>
    | BorderDesignToken<Referencable>
    | TypographyDesignToken<Referencable>
    | BreakpointDesignToken<Referencable>
  );

/**
 * Design token group
 * ---------------------
 * A design token group is an object of key-value pairs where the value is a design token or another design token group.
 */
export type DesignTokenGroup<
  Referencable extends Record<string, unknown> = Record<string, unknown>,
> = {
  [key: string]: DesignToken<Referencable> | DesignTokenGroup<Referencable>;
};
