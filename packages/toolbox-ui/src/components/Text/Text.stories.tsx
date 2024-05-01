import { Text, TypographyType } from "./Text";
import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <div className="flex flex-col gap-24 p-16 overflow-auto">
        {TypographyType.map((variant) => (
          <div className="flex items-start flex-col gap-2">
            <Badge>{variant}</Badge>
            <Text key={variant} type={variant} {...args}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
        ))}
      </div>
    );
  },
};
