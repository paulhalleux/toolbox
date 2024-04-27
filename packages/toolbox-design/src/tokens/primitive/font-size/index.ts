import { DesignTokenKind, DesignTokenLibrary } from "../../../types";

export const fontSize = {
  xs: {
    $kind: DesignTokenKind.Size,
    $name: "primitive-font-size-xs",
    $value: 12,
    $version: "1.0.0",
  },
  sm: {
    $kind: DesignTokenKind.Size,
    $name: "primitive-font-size-sm",
    $value: 14,
    $version: "1.0.0",
  },
  md: {
    $kind: DesignTokenKind.Size,
    $name: "primitive-font-size-md",
    $value: 16,
    $version: "1.0.0",
  },
  lg: {
    $kind: DesignTokenKind.Size,
    $name: "primitive-font-size-lg",
    $value: 18,
    $version: "1.0.0",
  },
  xl: {
    $kind: DesignTokenKind.Size,
    $name: "primitive-font-size-xl",
    $value: 20,
    $version: "1.0.0",
  },
  "2xl": {
    $kind: DesignTokenKind.Size,
    $name: "primitive-font-size-2xl",
    $value: 24,
    $version: "1.0.0",
  },
  "3xl": {
    $kind: DesignTokenKind.Size,
    $name: "primitive-font-size-3xl",
    $value: 32,
    $version: "1.0.0",
  },
  "4xl": {
    $kind: DesignTokenKind.Size,
    $name: "primitive-font-size-4xl",
    $value: 40,
    $version: "1.0.0",
  },
} satisfies DesignTokenLibrary;
