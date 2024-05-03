import { Form } from "./Form";
import { Meta, StoryObj } from "@storybook/react";
import { Center } from "@toolbox/storybook-config";

const meta: Meta<typeof Form> = {
  decorators: [Center],
  title: "Form",
  component: Form,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Form",
    variant: "default",
    type: "default",
  },
};
