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

  /**
   * Get a CSS variable reference for a design token
   * @param key - The token key
   * @returns The CSS variable reference
   */
  toTailwindCSS<T extends FlattenTokenKeys<LibraryType>>(key: T): string {
    const token = this.get(key);
    return `var(--${token.$name})`;
  }

  /**
   * Convert the design tokens to a Tailwind CSS structure
   * @param selector - A function to select the design token group
   */
  toTailwindCSSGroup(selector: (library: LibraryType) => DesignTokenGroup) {
    const tokens = selector(this.tokens);
    return this.#createTailwindStructure(tokens);
  }

  /**
   * Create a Tailwind CSS structure for the design tokens
   * @param group - The design token group
   * @returns The Tailwind CSS structure
   */
  #createTailwindStructure(group: DesignTokenGroup) {
    return Object.entries(group).reduce((acc, [key, value]) => {
      if (typeof value === "object" && !("$kind" in value)) {
        return {
          ...acc,
          [key]: this.#createTailwindStructure(value),
        };
      }

      return {
        ...acc,
        [key]: `var(--${value.$name})`,
      };
    }, {});
  }
}
