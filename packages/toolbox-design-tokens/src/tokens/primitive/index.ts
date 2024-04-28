import { colors } from "./colors";
import { DesignTokenGroup } from "../../types";
import { fontSize } from "./font-size";
import { fontFamily } from "./font-family";
import { fontWeight } from "./font-weight";
import { lineHeight } from "./line-height";

export const primitive = {
  colors,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
} satisfies DesignTokenGroup;
