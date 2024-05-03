import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { buttonStyles } from "./Button.styles";
import { PlusIcon } from "lucide-react";
import {
  WithCenteredContent,
  WithColorScheme,
} from "../../storybook-decorators";

const meta: Meta<typeof Button> = {
  decorators: [WithCenteredContent, WithColorScheme],
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

export const Icon: Story = {
  args: {
    children: <PlusIcon size={12} />,
    size: "md",
    icon: true,
  },
};
