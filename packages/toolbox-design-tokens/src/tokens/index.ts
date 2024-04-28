import { DesignTokenGroup } from "../types";
import { TokenLibrary } from "../token-library";
import { primitive } from "./primitive";
import { typography } from "./typography";

export const designTokens = {
  primitive,
  typography,
} satisfies DesignTokenGroup;

export const tokenLibrary = TokenLibrary.create(designTokens);
