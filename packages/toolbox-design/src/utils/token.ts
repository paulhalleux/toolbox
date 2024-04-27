import { FlattenTokenKeys, FlattenTokenValues } from "../types/utils";
import { tokenLibrary } from "../tokens";
import get from "lodash/get";

type TokenKey = FlattenTokenKeys<typeof tokenLibrary>;
type TokenValue = FlattenTokenValues<typeof tokenLibrary>;

/**
 * Get a token value by its key
 * @param key - The token key
 * @returns The token value
 */
export function token<T extends TokenKey>(key: T): TokenValue[T] {
  return get(tokenLibrary, key) as TokenValue[T];
}
