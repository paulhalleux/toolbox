import { DesignTokenGroup, DesignTokenKind } from "../../../types";
import { blue } from "./blue";
import { red } from "./red";
import { zinc } from "./zinc";
import { orange } from "./orange";
import { yellow } from "./yellow";
import { green } from "./green";
import { lime } from "./lime";
import { emerald } from "./emerald";
import { teal } from "./teal";
import { sky } from "./sky";
import { purple } from "./purple";
import { pink } from "./pink";
import { fuchsia } from "./fuschia";

/**
 * Primary color tokens
 */
export const colors = {
  zinc,
  red,
  orange,
  yellow,
  lime,
  green,
  emerald,
  teal,
  sky,
  blue,
  purple,
  fuchsia,
  pink,
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
