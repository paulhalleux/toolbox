import { DesignTokenKind, DesignTokenGroup } from "../../../types";

export const lineHeight = {
  none: {
    $kind: DesignTokenKind.LineHeight,
    $name: "primitive-line-height-none",
    $value: 1,
    $version: "1.0.0",
  },
  tight: {
    $kind: DesignTokenKind.LineHeight,
    $name: "primitive-line-height-tight",
    $value: 1.25,
    $version: "1.0.0",
  },
  base: {
    $kind: DesignTokenKind.LineHeight,
    $name: "primitive-line-height-base",
    $value: 1.5,
    $version: "1.0.0",
  },
  loose: {
    $kind: DesignTokenKind.LineHeight,
    $name: "primitive-line-height-loose",
    $value: 2,
    $version: "1.0.0",
  },
} satisfies DesignTokenGroup;
