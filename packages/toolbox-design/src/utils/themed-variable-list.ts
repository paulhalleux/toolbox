export type CssVariable = {
  theme: string;
  name: string;
  value: string;
};

export class ThemedVariableList {
  static DefaultTheme = "global";
  #variables = new Map<string, CssVariable[]>();

  /**
   * Add a variable to a theme
   * @param theme The theme of the variable
   * @param variable The variable to add
   */
  addVariable(theme: string, variable: CssVariable) {
    if (!this.#variables.has(theme)) {
      this.#variables.set(theme, []);
    }
    this.#variables.get(theme)?.push(variable);
  }
  /**
   * Stringify the variables
   * @returns The stringified variables
   */
  stringify(): string {
    let css = "";

    for (const [theme, variables] of this.#variables.entries()) {
      if (theme === ThemedVariableList.DefaultTheme) {
        css += ":root {\n";
      } else {
        css += `[data-theme="${theme}"] {\n`;
      }

      for (const variable of variables) {
        css += `  --${variable.name}: ${variable.value};\n`;
      }

      css += "}\n";
    }

    return css;
  }
}
