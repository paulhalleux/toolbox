import type { StorybookConfig } from "@storybook/react-vite";
import * as fs from "node:fs";
import * as path from "node:path";

const customConfig = fs.existsSync(`${process.cwd()}/storybook.config.js`)
  ? require(`${process.cwd()}/storybook.config.js`).default
  : undefined;

const config: StorybookConfig = {
  stories: [
    `${process.cwd()}/src/**/*.mdx`,
    `${process.cwd()}/src/**/*.stories.@(js|jsx|mjs|ts|tsx)`,
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["./public"],
  previewHead: (config) =>
    customConfig?.injectPreviewCss
      ? `
  ${config}
  <style data-vite-dev-id="${path.join(process.cwd(), customConfig.injectPreviewCss)}">
    ${fs.readFileSync(path.join(process.cwd(), customConfig.injectPreviewCss), "utf-8")}
  </style>
  `
      : config,
};

export default config;
