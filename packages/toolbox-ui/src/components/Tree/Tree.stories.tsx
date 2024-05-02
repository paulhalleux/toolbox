import { Tree } from "./Tree";
import { Meta, StoryObj } from "@storybook/react";
import { Center } from "../../../.storybook/decorators/center";
import { useState } from "react";

const meta: Meta<typeof Tree> = {
  decorators: [
    (Story) => (
      <div className="border border-base w-[50%] h-[50%]">
        <Story />
      </div>
    ),
    Center,
  ],
  title: "Tree",
  component: Tree,
  argTypes: {
    __internal_deepness: {
      table: {
        disable: true,
      },
    },
    __internal_treeId: {
      table: {
        disable: true,
      },
    },
    __internal_flatTree: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [expandedNodes, setExpandedNodes] = useState<string[]>([]);
    const [selectedNodes, setSelectedNodes] = useState<string[]>([]);

    return (
      <Tree
        {...args}
        expandedNodes={expandedNodes}
        onNodeToggle={(node) => {
          setExpandedNodes((prev) =>
            prev.includes(node.id)
              ? prev.filter((id) => id !== node.id)
              : [...prev, node.id],
          );
        }}
        onNodeClick={(node) => {
          setSelectedNodes([node.id]);
        }}
        selectedNodes={selectedNodes}
      />
    );
  },
  args: {
    data: [
      {
        id: "1",
        name: "Parent 1",
        children: [
          {
            id: "2",
            name: "Child 1",
          },
          {
            id: "3",
            name: "Child 2",
            children: [
              {
                id: "4",
                name: "Grandchild 1",
              },
              {
                id: "5",
                name: "Grandchild 2",
              },
            ],
          },
        ],
      },
      {
        id: "6",
        name: "Parent 2",
        children: [
          {
            id: "7",
            name: "Child 3",
          },
          {
            id: "8",
            name: "Child 4",
          },
        ],
      },
    ],
  },
};
