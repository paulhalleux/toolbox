import { PanelGroup } from "./PanelGroup";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PanelGroup> = {
  title: "PanelGroup",
  component: PanelGroup,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    children: [
      <PanelGroup.Panel
        key="1"
        size={1}
        className="flex items-center justify-center"
      >
        Panel 1
      </PanelGroup.Panel>,
      <PanelGroup.Handle direction="horizontal" showDragIndicator />,
      <PanelGroup.Panel
        key="2"
        size={2}
        className="flex items-center justify-center"
      >
        Panel 2
      </PanelGroup.Panel>,
    ],
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    children: [
      <PanelGroup.Panel
        key="1"
        size={1}
        className="flex items-center justify-center"
      >
        Panel 1
      </PanelGroup.Panel>,
      <PanelGroup.Handle direction="vertical" showDragIndicator />,
      <PanelGroup.Panel
        key="2"
        size={2}
        className="flex items-center justify-center"
      >
        Panel 2
      </PanelGroup.Panel>,
    ],
  },
};

export const Nested: Story = {
  args: {
    direction: "horizontal",
    children: [
      <PanelGroup.Panel
        key="1"
        size={100}
        className="flex items-center justify-center"
      >
        Panel 1
      </PanelGroup.Panel>,
      <PanelGroup.Handle direction="horizontal" showDragIndicator />,
      <PanelGroup.Panel key="2" size={200}>
        <PanelGroup key="2" direction="vertical">
          <PanelGroup.Panel
            key="1"
            size={100}
            className="flex items-center justify-center"
          >
            Panel 2.1
          </PanelGroup.Panel>
          <PanelGroup.Handle direction="vertical" showDragIndicator />
          <PanelGroup.Panel
            key="2"
            size={200}
            className="flex items-center justify-center"
          >
            Panel 2.2
          </PanelGroup.Panel>
        </PanelGroup>
      </PanelGroup.Panel>,
    ],
  },
};
