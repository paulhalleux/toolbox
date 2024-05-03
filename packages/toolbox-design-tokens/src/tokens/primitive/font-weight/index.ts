import { DesignTokenGroup, DesignTokenKind } from "../../../types";

export const fontWeight = {
  regular: {
    $kind: DesignTokenKind.FontWeight,
    $name: "primitive-font-weight-regular",
    $value: 400,
    $version: "1.0.0",
  },
  medium: {
    $kind: DesignTokenKind.FontWeight,
    $name: "primitive-font-weight-medium",
    $value: 500,
    $version: "1.0.0",
  },
  semibold: {
    $kind: DesignTokenKind.FontWeight,
    $name: "primitive-font-weight-semibold",
    $value: 600,
    $version: "1.0.0",
  },
  bold: {
    $kind: DesignTokenKind.FontWeight,
    $name: "primitive-font-weight-bold",
    $value: 700,
    $version: "1.0.0",
  },
} satisfies DesignTokenGroup;
