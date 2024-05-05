import { Meta, StoryObj } from "@storybook/react";
import { WithCenteredContent, WithColorScheme } from "@toolbox/ui";
import { Field } from "../Field";

const meta: Meta<typeof Field.String> = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
    WithCenteredContent,
    WithColorScheme,
  ],
  title: "Fields/String",
  component: Field.String,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const String: Story = {
  args: {
    label: "String field",
    hideLabel: false,
  },
};
