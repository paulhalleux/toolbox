import { DesignTokenGroup } from "../types";
import { TokenLibrary } from "../token-library";
import { primitive } from "./primitive";
import { typography } from "./typography";
import { colors } from "./colors";

export const designTokens = {
  primitive,
  typography,
  colors,
} satisfies DesignTokenGroup;

export const tokenLibrary = TokenLibrary.create(designTokens);
