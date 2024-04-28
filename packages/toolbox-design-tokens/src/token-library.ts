import { DesignToken, DesignTokenGroup } from "./types";
import { flattenTokens } from "./utils/tokens";
import { FlattenTokenKeys, FlattenTokenValues } from "./types/utils";
import { generateCss } from "./utils/generate-css";

/**
 * Token library
 * ---------------------
 * A token library is a collection of design tokens and methods to access them.
 */
export class TokenLibrary<LibraryType extends DesignTokenGroup> {
  readonly #tokens: LibraryType;
  readonly #flattenedTokens: Record<string, DesignToken> = {};

  private constructor(tokens: LibraryType) {
    this.#tokens = tokens;
    this.#flattenedTokens = flattenTokens(tokens);
  }

  /**
   * Create a token library
   * @param tokens
   */
  static create<LibraryType extends DesignTokenGroup>(
    tokens: LibraryType,
  ): TokenLibrary<LibraryType> {
    return new TokenLibrary<LibraryType>(tokens);
  }

  /**
   * Get the design tokens
   * @returns The design tokens
   */
  get tokens(): LibraryType {
    return this.#tokens;
  }

  /**
   * Get the flattened design tokens
   * @returns The flattened design tokens
   */
  get flattenedTokens(): Record<string, DesignToken> {
    return this.#flattenedTokens;
  }

  /**
   * Get a token by its key
   * @param key - The token key
   * @returns The token
   */
  get<T extends FlattenTokenKeys<LibraryType>>(
    key: T,
  ): FlattenTokenValues<LibraryType>[T] {
    const token = this.#flattenedTokens[
      key
    ] as FlattenTokenValues<LibraryType>[T];
    if (!token) {
      throw new Error(`Token not found: ${key}`);
    }

    if (
      "$value" in token &&
      typeof token.$value === "string" &&
      token.$value.startsWith("$ref:")
    ) {
      return this.get(token.$value.replace("$ref:", "") as T);
    }

    return token;
  }

  /**
   * Get the CSS variables for the design tokens
   * @returns The CSS variable as a string
   */
  toCSS() {
    return generateCss(this);
  }
}
