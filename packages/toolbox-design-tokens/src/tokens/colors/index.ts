import { DesignTokenGroup, DesignTokenKind } from "../../types";
import { ReferencableDesignTokens } from "../primitive";

export const colors = {
  container: {
    base: {
      $kind: DesignTokenKind.Color,
      $name: "color-container-base",
      $themeValues: {
        light: "$ref:primitive.colors.white",
        dark: "$ref:primitive.colors.zinc.900",
      },
      $version: "1.0.0",
    },
    secondary: {
      $kind: DesignTokenKind.Color,
      $name: "color-container-secondary",
      $themeValues: {
        light: "$ref:primitive.colors.zinc.200",
        dark: "$ref:primitive.colors.zinc.800",
      },
      $version: "1.0.0",
    },
  },
  text: {
    base: {
      $kind: DesignTokenKind.Color,
      $name: "color-text-base",
      $themeValues: {
        light: "$ref:primitive.colors.black",
        dark: "$ref:primitive.colors.white",
      },
      $version: "1.0.0",
    },
  },
  border: {
    base: {
      $kind: DesignTokenKind.Color,
      $name: "color-border-base",
      $themeValues: {
        light: "$ref:primitive.colors.zinc.300",
        dark: "$ref:primitive.colors.zinc.800",
      },
      $version: "1.0.0",
    },
    secondary: {
      $kind: DesignTokenKind.Color,
      $name: "color-border-secondary",
      $themeValues: {
        light: "$ref:primitive.colors.zinc.300",
        dark: "$ref:primitive.colors.zinc.700",
      },
      $version: "1.0.0",
    },
  },
} satisfies DesignTokenGroup<ReferencableDesignTokens>;
