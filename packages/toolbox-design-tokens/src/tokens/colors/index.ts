import { DesignTokenGroup, DesignTokenKind } from "../../types";
import { ReferencableDesignTokens } from "../primitive";

export const colors = {
  focus: {
    $kind: DesignTokenKind.Color,
    $name: "color-focus",
    $themeValues: {
      light: "$ref:primitive.colors.blue.500",
      dark: "$ref:primitive.colors.blue.500",
    },
    $version: "1.0.0",
  },
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
        light: "$ref:primitive.colors.zinc.100",
        dark: "$ref:primitive.colors.zinc.800",
      },
      $version: "1.0.0",
    },
    active: {
      $kind: DesignTokenKind.Color,
      $name: "color-container-active",
      $themeValues: {
        light: "$ref:primitive.colors.zinc.100",
        dark: "$ref:primitive.colors.zinc.1000",
      },
      $version: "1.0.0",
    },
    hover: {
      $kind: DesignTokenKind.Color,
      $name: "color-container-hover",
      $themeValues: {
        light: "$ref:primitive.colors.white",
        dark: "$ref:primitive.colors.zinc.900",
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
        dark: "$ref:primitive.colors.zinc.700",
      },
      $version: "1.0.0",
    },
    secondary: {
      $kind: DesignTokenKind.Color,
      $name: "color-border-secondary",
      $themeValues: {
        light: "$ref:primitive.colors.zinc.400",
        dark: "$ref:primitive.colors.zinc.600",
      },
      $version: "1.0.0",
    },
  },
} satisfies DesignTokenGroup<ReferencableDesignTokens>;
