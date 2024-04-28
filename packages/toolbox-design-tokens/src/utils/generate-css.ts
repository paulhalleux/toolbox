import { ThemedVariableList, CssVariable } from "./themed-variable-list";
import {
  DesignToken,
  DesignTokenKind,
  TokenReference,
  ValuedToken,
} from "../types";
import { TokenLibrary } from "../token-library";

/**
 * Generate CSS variables from design tokens
 * @param tokenLibrary The design token library
 * @returns The CSS variables
 */
export const generateCss = async (tokenLibrary: TokenLibrary<any>) => {
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
      value: getTokenValue(token, flattenedTokens),
      name: token.$name,
    };
    return [variable];
  }

  return Object.entries(token.$themeValues).map(([theme, value]) => {
    return {
      theme: theme,
      value: getTokenValue(value, flattenedTokens),
      name: token.$name,
    };
  });
}

/**
 * Get the value of a token
 * @param value The token value
 * @param flattenedTokens The design token library
 * @returns The token value
 */
function getTokenValue<Kind extends DesignTokenKind>(
  value: ValuedToken<Kind, string | number | object | TokenReference>,
  flattenedTokens: Record<string, DesignToken>,
): string {
  if (typeof value.$value === "object") {
    switch (value.$kind) {
      case DesignTokenKind.Color:
        return getTokenValue(
          value.$value as ValuedToken<DesignTokenKind.Color, string>,
          flattenedTokens,
        );
      default:
        return "";
    }
  }

  const stringValue = value.$value.toString();
  if (stringValue.startsWith("$ref:")) {
    const reference = stringValue.replace("$ref:", "");
    return getTokenValue(flattenedTokens[reference] as any, flattenedTokens);
  }

  switch (value.$kind) {
    case DesignTokenKind.Size:
      return stringValue.endsWith("px") ? stringValue : `${stringValue}px`;
    default:
      return stringValue;
  }
}
