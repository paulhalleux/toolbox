import { DesignTokenKind, DesignTokenGroup } from "../../../types";

export const fontWeight = {
  thin: {
    $kind: DesignTokenKind.FontWeight,
    $name: "primitive-font-weight-thin",
    $value: 100,
    $version: "1.0.0",
  },
  extralight: {
    $kind: DesignTokenKind.FontWeight,
    $name: "primitive-font-weight-extralight",
    $value: 200,
    $version: "1.0.0",
  },
  light: {
    $kind: DesignTokenKind.FontWeight,
    $name: "primitive-font-weight-light",
    $value: 300,
    $version: "1.0.0",
  },
  normal: {
    $kind: DesignTokenKind.FontWeight,
    $name: "primitive-font-weight-normal",
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
  extrabold: {
    $kind: DesignTokenKind.FontWeight,
    $name: "primitive-font-weight-extrabold",
    $value: 800,
    $version: "1.0.0",
  },
  black: {
    $kind: DesignTokenKind.FontWeight,
    $name: "primitive-font-weight-black",
    $value: 900,
    $version: "1.0.0",
  },
} satisfies DesignTokenGroup;
