import { type Meta, type StoryObj } from "@storybook/react";

import { Tooltip } from "./Tooltip";
import { Button } from "../Button";
import { Center } from "@toolbox/storybook-config";
import { PortalTarget } from "../Portal";

const meta: Meta<typeof Tooltip> = {
  decorators: [Center],
  title: "Tooltip",
  component: Tooltip,
  argTypes: {
    placement: {
      control: {
        type: "select",
      },
      options: [
        "top",
        "right",
        "bottom",
        "left",
        "top-start",
        "top-end",
        "right-start",
        "right-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
      ],
    },
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
    <PortalTarget>
      <Tooltip placement={placement}>
        <Tooltip.Trigger>
          <Button>Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Tooltip content</Tooltip.Content>
      </Tooltip>
    </PortalTarget>
  ),
};
