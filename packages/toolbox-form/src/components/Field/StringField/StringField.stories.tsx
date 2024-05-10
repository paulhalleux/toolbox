import { Meta, StoryObj } from "@storybook/react";
import { WithCenteredContent, WithColorScheme } from "@toolbox/ui";
import { Field } from "../Field";
import { Form } from "../../Form";
import { WithReactHookForm } from "../../../storybook-decorators/react-hook-form";

const meta: Meta<typeof Field.String> = {
  decorators: [
    WithReactHookForm,
    (Story) => (
      <div className="w-full p-6">
        <Form>
          <Story />
        </Form>
      </div>
    ),
    WithCenteredContent,
    WithColorScheme,
  ],
  title: "Fields/String",
  component: Field.String,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const String: Story = {
  args: {
    name: "string",
    label: "String field",
    hideLabel: false,
  },
};
