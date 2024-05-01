import { type Meta, type StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";
import { Button } from "../Button";
import { Center } from "../../../.storybook/decorators/center";

const meta: Meta<typeof Tooltip> = {
  decorators: [Center],
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {},
    open: { control: false },
    onOpenChange: { control: false },
    initialOpen: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    placement: "top",
  },
  render: ({ placement }) => (
    <Tooltip placement={placement}>
      <Tooltip.Trigger>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Tooltip content</Tooltip.Content>
    </Tooltip>
  ),
};