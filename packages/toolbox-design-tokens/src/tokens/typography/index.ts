import { DesignTokenGroup, DesignTokenKind } from "../../types";
import { primitive } from "../primitive";

export const typography = {
  content: {
    small: {
      $kind: DesignTokenKind.Typography,
      $value: {
        family: "$ref:primitive.fontFamily.sans",
        size: "$ref:primitive.fontSize.sm",
        weight: "$ref:primitive.fontWeight.normal",
        lineHeight: "$ref:primitive.lineHeight.base",
      },
      $name: "typography-content-small",
      $version: "1.0.0",
    },
    base: {
      $kind: DesignTokenKind.Typography,
      $value: {
        family: "$ref:primitive.fontFamily.sans",
        size: "$ref:primitive.fontSize.md",
        weight: "$ref:primitive.fontWeight.normal",
        lineHeight: "$ref:primitive.lineHeight.base",
      },
      $name: "typography-content-base",
      $version: "1.0.0",
    },
    large: {
      $kind: DesignTokenKind.Typography,
      $value: {
        family: "$ref:primitive.fontFamily.sans",
        size: "$ref:primitive.fontSize.lg",
        weight: "$ref:primitive.fontWeight.normal",
        lineHeight: "$ref:primitive.lineHeight.base",
      },
      $name: "typography-content-large",
      $version: "1.0.0",
    },
  },
  heading: {
    h1: {
      $kind: DesignTokenKind.Typography,
      $value: {
        family: "$ref:primitive.fontFamily.sans",
        size: "$ref:primitive.fontSize.4xl",
        weight: "$ref:primitive.fontWeight.bold",
        lineHeight: "$ref:primitive.lineHeight.base",
      },
      $name: "typography-heading-h1",
      $version: "1.0.0",
    },
    h2: {
      $kind: DesignTokenKind.Typography,
      $value: {
        family: "$ref:primitive.fontFamily.sans",
        size: "$ref:primitive.fontSize.3xl",
        weight: "$ref:primitive.fontWeight.bold",
        lineHeight: "$ref:primitive.lineHeight.base",
      },
      $name: "typography-heading-h2",
      $version: "1.0.0",
    },
    h3: {
      $kind: DesignTokenKind.Typography,
      $value: {
        family: "$ref:primitive.fontFamily.sans",
        size: "$ref:primitive.fontSize.2xl",
        weight: "$ref:primitive.fontWeight.bold",
        lineHeight: "$ref:primitive.lineHeight.base",
      },
      $name: "typography-heading-h3",
      $version: "1.0.0",
    },
    h4: {
      $kind: DesignTokenKind.Typography,
      $value: {
        family: "$ref:primitive.fontFamily.sans",
        size: "$ref:primitive.fontSize.xl",
        weight: "$ref:primitive.fontWeight.bold",
        lineHeight: "$ref:primitive.lineHeight.base",
      },
      $name: "typography-heading-h4",
      $version: "1.0.0",
    },
    h5: {
      $kind: DesignTokenKind.Typography,
      $value: {
        family: "$ref:primitive.fontFamily.sans",
        size: "$ref:primitive.fontSize.lg",
        weight: "$ref:primitive.fontWeight.bold",
        lineHeight: "$ref:primitive.lineHeight.base",
      },
      $name: "typography-heading-h5",
      $version: "1.0.0",
    },
    h6: {
      $kind: DesignTokenKind.Typography,
      $value: {
        family: "$ref:primitive.fontFamily.sans",
        size: "$ref:primitive.fontSize.md",
        weight: "$ref:primitive.fontWeight.bold",
        lineHeight: "$ref:primitive.lineHeight.base",
      },
      $name: "typography-heading-h6",
      $version: "1.0.0",
    },
  },
  code: {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.mono",
      size: "$ref:primitive.fontSize.sm",
      weight: "$ref:primitive.fontWeight.normal",
      lineHeight: "$ref:primitive.lineHeight.base",
    },
    $name: "typography-code",
    $version: "1.0.0",
  },
} satisfies DesignTokenGroup<{
  primitive: typeof primitive;
}>;
