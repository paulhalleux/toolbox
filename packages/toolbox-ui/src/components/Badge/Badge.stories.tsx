import { Badge } from "./Badge";
import { Meta, StoryObj } from "@storybook/react";
import { badgeStyles } from "./Badge.styles";
import {
  WithCenteredContent,
  WithColorScheme,
} from "../../storybook-decorators";

const meta: Meta<typeof Badge> = {
  decorators: [WithCenteredContent, WithColorScheme],
  title: "Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: Object.keys(badgeStyles.variants.variant),
    },
    type: {
      control: {
        type: "select",
      },
      options: Object.keys(badgeStyles.variants.type),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
    type: "default",
  },
};
