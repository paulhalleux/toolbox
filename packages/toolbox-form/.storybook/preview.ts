import type { Preview } from "@storybook/react";
import { WithColorScheme } from "./decorators/with-color-scheme";

import "../src/index.css";
import "./preview.css";

const preview: Preview = {
  decorators: [WithColorScheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
};

export const globalTypes = {
  scheme: {
    name: "Scheme",
    description: "Select the color scheme or compare them",
    defaultValue: "compare",
    toolbar: {
      icon: "mirror",
      items: [
        { value: "compare", title: "Compare" },
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      dynamicTitle: true,
    },
  },
};

export default preview;
