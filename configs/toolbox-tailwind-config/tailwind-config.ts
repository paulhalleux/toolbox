import { PresetsConfig } from "tailwindcss/types/config";
import { tokenLibrary } from "@toolbox/design-tokens";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".storybook/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /(text|font|leading)-.*/,
    },
  ],
  theme: {
    colors: {
      base: tokenLibrary.toCSSVar("colors.base"),
      reverse: tokenLibrary.toCSSVar("colors.reverse"),
    },
    fontFamily: {
      sans: tokenLibrary.toCSSVar("primitive.fontFamily.sans"),
      serif: tokenLibrary.toCSSVar("primitive.fontFamily.serif"),
      mono: tokenLibrary.toCSSVar("primitive.fontFamily.mono"),
    },
    fontSize: {
      "size-text-xs": tokenLibrary.toCSSVar("primitive.fontSize.xs"),
      "size-text-sm": tokenLibrary.toCSSVar("primitive.fontSize.sm"),
      "size-text-md": tokenLibrary.toCSSVar("primitive.fontSize.md"),
      "size-text-lg": tokenLibrary.toCSSVar("primitive.fontSize.lg"),
      "size-text-xl": tokenLibrary.toCSSVar("primitive.fontSize.xl"),
      "size-display-xs": tokenLibrary.toCSSVar("primitive.fontSize.display-xs"),
      "size-display-sm": tokenLibrary.toCSSVar("primitive.fontSize.display-sm"),
      "size-display-md": tokenLibrary.toCSSVar("primitive.fontSize.display-md"),
      "size-display-lg": tokenLibrary.toCSSVar("primitive.fontSize.display-lg"),
      "size-display-xl": tokenLibrary.toCSSVar("primitive.fontSize.display-xl"),
      "size-display-xxl": tokenLibrary.toCSSVar(
        "primitive.fontSize.display-xxl",
      ),
    },
    lineHeight: {
      "line-height-text-xs": tokenLibrary.toCSSVar("primitive.lineHeight.xs"),
      "line-height-text-sm": tokenLibrary.toCSSVar("primitive.lineHeight.sm"),
      "line-height-text-md": tokenLibrary.toCSSVar("primitive.lineHeight.md"),
      "line-height-text-lg": tokenLibrary.toCSSVar("primitive.lineHeight.lg"),
      "line-height-text-xl": tokenLibrary.toCSSVar("primitive.lineHeight.xl"),
      "line-height-display-xs": tokenLibrary.toCSSVar(
        "primitive.lineHeight.display-xs",
      ),
      "line-height-display-sm": tokenLibrary.toCSSVar(
        "primitive.lineHeight.display-sm",
      ),
      "line-height-display-md": tokenLibrary.toCSSVar(
        "primitive.lineHeight.display-md",
      ),
      "line-height-display-lg": tokenLibrary.toCSSVar(
        "primitive.lineHeight.display-lg",
      ),
      "line-height-display-xl": tokenLibrary.toCSSVar(
        "primitive.lineHeight.display-xl",
      ),
      "line-height-display-xxl": tokenLibrary.toCSSVar(
        "primitive.lineHeight.display-xxl",
      ),
    },
    fontWeight: {
      "weight-regular": tokenLibrary.toCSSVar("primitive.fontWeight.regular"),
      "weight-medium": tokenLibrary.toCSSVar("primitive.fontWeight.medium"),
      "weight-semibold": tokenLibrary.toCSSVar("primitive.fontWeight.semibold"),
      "weight-bold": tokenLibrary.toCSSVar("primitive.fontWeight.bold"),
    },
    extend: {
      backgroundColor: {
        base: tokenLibrary.toCSSVar("colors.surface.base"),
        secondary: tokenLibrary.toCSSVar("colors.surface.secondary"),
        hover: tokenLibrary.toCSSVar("colors.surface.hover"),
      },
      textColor: {
        base: tokenLibrary.toCSSVar("colors.text.base"),
        secondary: tokenLibrary.toCSSVar("colors.text.secondary"),
        error: tokenLibrary.toCSSVar("colors.text.error"),
      },
      borderColor: {
        base: tokenLibrary.toCSSVar("colors.border.base"),
        focus: tokenLibrary.toCSSVar("colors.border.focus"),
        error: tokenLibrary.toCSSVar("colors.border.error"),
      },
    },
  },
} as PresetsConfig;
