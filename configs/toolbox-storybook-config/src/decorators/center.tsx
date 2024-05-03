import { Decorator } from "@storybook/react";

export const Center: Decorator = (Story) => (
  <div className="flex items-center justify-center h-full w-full">
    <Story />
  </div>
);
