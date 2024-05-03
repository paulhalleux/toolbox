import { DesignTokenGroup, DesignTokenKind } from "../../types";
import { ReferencableDesignTokens } from "../primitive";

export const typography = {
  "text-xs": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.xs",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.xs",
    },
    $name: "typography-text-xs",
    $version: "1.0.0",
  },
  "text-sm": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.sm",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.sm",
    },
    $name: "typography-text-sm",
    $version: "1.0.0",
  },
  "text-md": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.md",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.md",
    },
    $name: "typography-text-md",
    $version: "1.0.0",
  },
  "text-lg": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.lg",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.lg",
    },
    $name: "typography-text-lg",
    $version: "1.0.0",
  },
  "text-xl": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.xl",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.xl",
    },
    $name: "typography-text-xl",
    $version: "1.0.0",
  },
  "display-xs": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.display-xs",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.display-xs",
    },
    $name: "typography-display-xs",
    $version: "1.0.0",
  },
  "display-sm": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.display-sm",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.display-sm",
    },
    $name: "typography-display-sm",
    $version: "1.0.0",
  },
  "display-md": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.display-md",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.display-md",
    },
    $name: "typography-display-md",
    $version: "1.0.0",
  },
  "display-lg": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.display-lg",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.display-lg",
    },
    $name: "typography-display-lg",
    $version: "1.0.0",
  },
  "display-xl": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.display-xl",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.display-xl",
    },
    $name: "typography-display-xl",
    $version: "1.0.0",
  },
  "display-xxl": {
    $kind: DesignTokenKind.Typography,
    $value: {
      family: "$ref:primitive.fontFamily.sans",
      size: "$ref:primitive.fontSize.display-xxl",
      weight: "$ref:primitive.fontWeight.regular",
      lineHeight: "$ref:primitive.lineHeight.display-xxl",
    },
    $name: "typography-display-xxl",
    $version: "1.0.0",
  },
} satisfies DesignTokenGroup<ReferencableDesignTokens>;
