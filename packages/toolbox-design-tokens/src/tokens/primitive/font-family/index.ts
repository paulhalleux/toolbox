import { DesignTokenGroup, DesignTokenKind } from "../../../types";

export const fontFamily = {
  sans: {
    $kind: DesignTokenKind.FontFamily,
    $name: "primitive-font-family-sans",
    $value: "Inter, sans-serif",
    $version: "1.0.0",
  },
  mono: {
    $kind: DesignTokenKind.FontFamily,
    $name: "primitive-font-family-mono",
    $value: "Menlo, monospace",
    $version: "1.0.0",
  },
  serif: {
    $kind: DesignTokenKind.FontFamily,
    $name: "primitive-font-family-serif",
    $value: "Georgia, serif",
    $version: "1.0.0",
  },
} satisfies DesignTokenGroup;
