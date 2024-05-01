import { PresetsConfig } from "tailwindcss/types/config";
import { tokenLibrary } from "@toolbox/design-tokens";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".storybook/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primitive: tokenLibrary.toTailwindCSSGroup(
        (library) => library.primitive.colors,
      ),
    },
    extend: {
      backgroundColor: tokenLibrary.toTailwindCSSGroup(
        (library) => library.colors.container,
      ),
      textColor: tokenLibrary.toTailwindCSSGroup(
        (library) => library.colors.text,
      ),
      borderColor: tokenLibrary.toTailwindCSSGroup(
        (library) => library.colors.border,
      ),
      ringColor: {
        base: tokenLibrary.toTailwindCSS("colors.focus"),
      },
    },
  },
} as PresetsConfig;
