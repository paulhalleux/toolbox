import { DesignTokenGroup, DesignTokenKind } from "../../../types";
import { gray } from "./gray";
import { indigo } from "./indigot";

/**
 * Primary color tokens
 */
export const colors = {
  gray,
  indigo,
  white: {
    $kind: DesignTokenKind.Color,
    $name: "primitive-color-white",
    $value: "#ffffff",
    $version: "1.0.0",
  },
  black: {
    $kind: DesignTokenKind.Color,
    $name: "primitive-color-black",
    $value: "#000000",
    $version: "1.0.0",
  },
} satisfies DesignTokenGroup;
