import { DesignTokenGroup } from "../types";
import { primitive } from "./primitive";
import { TokenLibrary } from "../token-library";

export const designTokens = {
  primitive,
} satisfies DesignTokenGroup;

export const tokenLibrary = TokenLibrary.create(designTokens);
