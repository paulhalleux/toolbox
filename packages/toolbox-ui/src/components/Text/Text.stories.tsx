import { Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { useState } from "react";
import { designTokens } from "@toolbox/design-tokens";
import { WithColorScheme } from "../../storybook-decorators";

const meta: Meta<typeof Text> = {
  decorators: [WithColorScheme],
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
        {Object.keys(designTokens.typography).map((variant) => (
          <div className="flex items-start flex-col gap-2">
            <Badge>{variant}</Badge>
            <Text key={variant} type={variant as any} {...args}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
          </div>
        ))}
      </div>
    );
  },
};

export const Editable: Story = {
  render: (args) => {
    const [content, setContent] = useState(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    );

    return (
      <div className="p-24 w-full flex flex-col items-start gap-2">
        <Badge>Editable text</Badge>
        <Text editable onEdit={setContent} {...args}>
          {content}
        </Text>
      </div>
    );
  },
};
