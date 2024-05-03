import { type Meta, type StoryObj } from "@storybook/react";

import { Popover } from "./Popover";
import { Button } from "../Button";
import { Text } from "../Text";
import { Center } from "@toolbox/storybook-config";
import { PortalTarget } from "../Portal";

const meta: Meta<typeof Popover> = {
  decorators: [Center],
  title: "Popover",
  component: Popover,
  argTypes: {
    placement: {},
    triggerType: {},
    triggerOnFocus: {},
    open: { control: false },
    onOpenChange: { control: false },
    initialOpen: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    placement: "bottom-start",
    triggerType: "click",
    triggerOnFocus: true,
  },
  render: function Render({ placement, triggerType, triggerOnFocus }) {
    return (
      <PortalTarget>
        <Popover
          placement={placement}
          triggerType={triggerType}
          triggerOnFocus={triggerOnFocus}
        >
          <Popover.Trigger>
            <Button>{triggerType} me</Button>
          </Popover.Trigger>
          <Popover.Content className="w-[480px]">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi
              asperiores autem consectetur consequatur cumque distinctio eos
              eveniet exercitationem impedit ipsum iure, laudantium libero
              magnam modi molestiae molestias numquam officia officiis optio
              perferendis possimus quam quisquam quos ratione sequi sint sit
              suscipit temporibus veritatis vitae voluptate voluptatibus
              voluptatum. Dolor, vel.
            </Text>
          </Popover.Content>
        </Popover>
      </PortalTarget>
    );
  },
};
