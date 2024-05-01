import { Decorator } from "@storybook/react";

export const Center: Decorator = (Story) => (
  <div className="flex items-center h-full">
    <Story />
  </div>
);
