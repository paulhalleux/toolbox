import { create } from "@storybook/theming/create";
// @ts-ignore
import Logo from "./logo.svg";

export const theme = create({
  base: "light",
  brandTitle: "Toolbox UI",
  brandUrl: "#",
  brandImage: Logo,

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#e4e4e4",
  appBorderRadius: 4,

  // Text colors
  textColor: "#0D0D0D",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#0D0D0D",
  barHoverColor: "#0D0D0D",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#e4e4e4",
  inputTextColor: "#0D0D0D",
  inputBorderRadius: 2,

  colorSecondary: "#474747",
});
