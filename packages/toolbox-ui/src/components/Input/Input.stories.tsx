import { Input } from "./Input";
import { Meta, StoryObj } from "@storybook/react";
import { Center } from "../../../.storybook/decorators/center";
import { inputStyles } from "./Input.styles";

const meta: Meta<typeof Input> = {
  decorators: [(Story) => <div className="w-72">{Story()}</div>, Center],
  title: "Input",
  component: Input,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: Object.keys(inputStyles.variants.size),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "default",
    placeholder: "Input placeholder",
    disabled: false,
  },
};
