import { DesignTokenGroup, DesignTokenKind } from "../../types";
import { ReferencableDesignTokens } from "../primitive";

export const colors = {
  base: {
    $kind: DesignTokenKind.Color,
    $name: "color-base",
    $themeValues: {
      light: "$ref:primitive.colors.white",
      dark: "$ref:primitive.colors.gray.900",
    },
    $version: "1.0.0",
  },
  reverse: {
    $kind: DesignTokenKind.Color,
    $name: "color-reverse",
    $themeValues: {
      light: "$ref:primitive.colors.gray.900",
      dark: "$ref:primitive.colors.white",
    },
    $version: "1.0.0",
  },
  border: {
    base: {
      $kind: DesignTokenKind.Color,
      $name: "color-border-base",
      $themeValues: {
        light: "$ref:primitive.colors.gray.300",
        dark: "$ref:primitive.colors.gray.700",
      },
      $version: "1.0.0",
    },
    focus: {
      $kind: DesignTokenKind.Color,
      $name: "color-border-focus",
      $themeValues: {
        light: "$ref:primitive.colors.indigo.500",
        dark: "$ref:primitive.colors.indigo.300",
      },
      $version: "1.0.0",
    },
  },
  surface: {
    base: {
      $kind: DesignTokenKind.Color,
      $name: "color-surface-base",
      $themeValues: {
        light: "$ref:primitive.colors.white",
        dark: "$ref:primitive.colors.gray.900",
      },
      $version: "1.0.0",
    },
    secondary: {
      $kind: DesignTokenKind.Color,
      $name: "color-surface-secondary",
      $themeValues: {
        light: "$ref:primitive.colors.gray.050",
        dark: "$ref:primitive.colors.gray.800",
      },
      $version: "1.0.0",
    },
  },
  text: {
    base: {
      $kind: DesignTokenKind.Color,
      $name: "color-text-base",
      $themeValues: {
        light: "$ref:primitive.colors.gray.900",
        dark: "$ref:primitive.colors.white",
      },
      $version: "1.0.0",
    },
    secondary: {
      $kind: DesignTokenKind.Color,
      $name: "color-text-secondary",
      $themeValues: {
        light: "$ref:primitive.colors.gray.500",
        dark: "$ref:primitive.colors.gray.400",
      },
      $version: "1.0.0",
    },
  },
} satisfies DesignTokenGroup<ReferencableDesignTokens>;
