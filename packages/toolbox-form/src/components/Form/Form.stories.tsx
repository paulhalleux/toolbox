import { Form as _Form } from "./Form";
import { Meta, StoryObj } from "@storybook/react";
import { WithCenteredContent, WithColorScheme } from "@toolbox/ui";
import { Field } from "../Field";

const meta: Meta<typeof _Form> = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
    WithCenteredContent,
    WithColorScheme,
  ],
  title: "Components/Form",
  component: _Form,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {
  args: {
    children: [<Field.String name="name" label="Name" />],
    variant: "default",
    type: "default",
  },
};
