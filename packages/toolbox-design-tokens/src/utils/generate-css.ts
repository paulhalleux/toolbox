import { CssVariable, ThemedVariableList } from "./themed-variable-list";
import { DesignToken, DesignTokenKind } from "../types";
import { TokenLibrary } from "../token-library";

/**
 * Generate CSS variables from design tokens
 * @param tokenLibrary The design token library
 * @returns The CSS variables
 */
export const generateCss = (tokenLibrary: TokenLibrary<any>) => {
  const variables = new ThemedVariableList();

  for (const token of Object.values(tokenLibrary.flattenedTokens)) {
    const cssVariables = getCssVariables(token, tokenLibrary.flattenedTokens);
    cssVariables.forEach((variable) =>
      variables.addVariable(variable.theme, variable),
    );
  }

  return variables.stringify();
};

/**
 * Get the CSS variable for a design token
 * @param token The design token
 * @param flattenedTokens The design token library
 * @returns The CSS variable
 */
function getCssVariables(
  token: DesignToken,
  flattenedTokens: Record<string, DesignToken>,
): CssVariable[] {
  if ("$value" in token) {
    const variable = {
      theme: "global",
      value: getTokenValue(token.$kind, token.$value, flattenedTokens),
      name: token.$name,
    };
    return [variable];
  }

  return Object.entries(token.$themeValues).map(([theme, value]) => {
    return {
      theme: theme,
      value: getTokenValue(token.$kind, value, flattenedTokens),
      name: token.$name,
    };
  });
}

/**
 * Get the value of a token
 * @param tokenKind The kind of token
 * @param value The token value
 * @param flattenedTokens The design token library
 * @returns The token value
 */
function getTokenValue(
  tokenKind: DesignTokenKind,
  value: any,
  flattenedTokens: Record<string, DesignToken>,
): string {
  if (typeof value === "string" && value.startsWith("$ref:")) {
    const ref = value.replace("$ref:", "");
    const token = flattenedTokens[ref];
    if (!token || !("$value" in token || "$themeValues" in token)) {
      throw new Error(`Token ${ref} not found`);
    }
    return "var(--" + token.$name + ")";
  } else if (typeof value === "string" || typeof value === "number") {
    const stringValue = String(value);

    if (tokenKind === DesignTokenKind.Color) {
      return stringValue;
    } else if (tokenKind === DesignTokenKind.Size) {
      return stringValue.endsWith("px") ? stringValue : `${stringValue}px`;
    }

    return stringValue;
  } else if (typeof value === "object") {
    if (tokenKind === DesignTokenKind.Typography) {
      return `${value.style ?? ""} ${value.variant ?? ""} ${getTokenValue(
        DesignTokenKind.FontWeight,
        value.weight,
        flattenedTokens,
      )} ${getTokenValue(
        DesignTokenKind.Size,
        value.size,
        flattenedTokens,
      )} / ${getTokenValue(
        DesignTokenKind.Size,
        value.lineHeight,
        flattenedTokens,
      )} ${getTokenValue(
        DesignTokenKind.FontFamily,
        value.family,
        flattenedTokens,
      )}`
        .replace(/\s+/g, " ")
        .trim();
    } else if (tokenKind === DesignTokenKind.Shadow) {
      return `${getTokenValue(
        DesignTokenKind.Size,
        value.x,
        flattenedTokens,
      )} ${getTokenValue(
        DesignTokenKind.Size,
        value.y,
        flattenedTokens,
      )} ${getTokenValue(
        DesignTokenKind.Size,
        value.blur,
        flattenedTokens,
      )} ${getTokenValue(
        DesignTokenKind.Size,
        value.spread,
        flattenedTokens,
      )} ${getTokenValue(DesignTokenKind.Color, value.color, flattenedTokens)}`;
    } else if (tokenKind === DesignTokenKind.Gradient) {
      return `${value.type}(${value.angle ?? 0}deg, ${value.stops
        .map(
          (stop) =>
            `${getTokenValue(DesignTokenKind.Color, stop.color, flattenedTokens)} ${stop.position}%`,
        )
        .join(", ")})`;
    } else if (tokenKind === DesignTokenKind.Border) {
      return `${getTokenValue(DesignTokenKind.Size, value.width, flattenedTokens)} ${value.style} ${getTokenValue(
        DesignTokenKind.Color,
        value.color,
        flattenedTokens,
      )}`;
    } else if (tokenKind === DesignTokenKind.Breakpoint) {
      return `(min-width: ${getTokenValue(
        DesignTokenKind.Size,
        value.min,
        flattenedTokens,
      )} and max-width: ${getTokenValue(
        DesignTokenKind.Size,
        value.max,
        flattenedTokens,
      )})`;
    }
  }

  return `"NOT IMPLEMENTED"`;
}
