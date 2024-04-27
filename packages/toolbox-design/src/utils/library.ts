import { DesignToken, DesignTokenLibrary } from "../types";

/**
 * Flatten a design token library into a flat object
 * @param library - The design token library to flatten
 * @param prefix - The prefix to add to the keys
 * @returns The flattened design token library
 */
export function flattenLibrary(
  library: DesignTokenLibrary,
  prefix = "",
): Record<string, DesignToken> {
  return Object.keys(library).reduce<Record<string, DesignToken>>(
    (acc, key) => {
      const value = library[key];
      if ("$kind" in value) {
        return { ...acc, [`${prefix}${key}`]: value as DesignToken };
      } else {
        return { ...acc, ...flattenLibrary(value, `${prefix}${key}.`) };
      }
    },
    {},
  );
}
