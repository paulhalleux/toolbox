import { PresetsConfig } from "tailwindcss/types/config";
import { DesignTokenGroup, tokenLibrary } from "@toolbox/design-tokens";

function toTailwind(group: DesignTokenGroup) {
  return Object.entries(group).reduce((acc, [key, value]) => {
    if (typeof value === "object" && !("$kind" in value)) {
      return {
        ...acc,
        [key]: toTailwind(value),
      };
    }

    return {
      ...acc,
      [key]: `var(--${value.$name})`,
    };
  }, {});
}

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".storybook/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primitive: toTailwind(tokenLibrary.tokens.primitive.colors),
    },
    extend: {
      backgroundColor: {
        DEFAULT: "var(--color-container-base)",
        base: "var(--color-container-base)",
        secondary: "var(--color-container-secondary)",
      },
      textColor: {
        DEFAULT: "var(--color-text-base)",
      },
      borderColor: {
        base: "var(--color-border-base)",
        secondary: "var(--color-border-secondary)",
      },
    },
  },
} as PresetsConfig;
