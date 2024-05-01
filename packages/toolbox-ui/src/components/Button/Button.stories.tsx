import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { buttonStyles } from "./Button.styles";
import { Center } from "../../../.storybook/decorators/center";

const meta: Meta<typeof Button> = {
  decorators: [Center],
  title: "Button",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: Object.keys(buttonStyles.variants.size),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "md",
  },
};