import get from "lodash/get";
import { tokenLibrary } from "../tokens";
import { FlattenTokenKeys, FlattenTokenValues } from "../types/utils";

type TokenLibrary = typeof tokenLibrary;
type TokenKeys = FlattenTokenKeys<TokenLibrary>;
type TokenValues = FlattenTokenValues<TokenLibrary>;

/**
 * Get a design token value by its key.
 * @param token - The token key.
 * @returns The token value.
 */
export function token<K extends TokenKeys>(token: K): TokenValues[K] {
  return get(tokenLibrary, token);
}
