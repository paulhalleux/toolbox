import { Modal } from "./Modal";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../Button";
import { Text } from "../Text";
import { modalStyles } from "./Modal.styles";
import { Center } from "@toolbox/storybook-config";

const meta: Meta<typeof Modal> = {
  decorators: [Center],
  title: "Modal",
  component: Modal,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: Object.keys(modalStyles.variants.size),
    },
    position: {
      control: {
        type: "select",
      },
      options: ["center", "top", "bottom"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "default",
    position: "center",
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          className="flex flex-col gap-4 p-4"
          {...args}
        >
          <Text>Create a new profile</Text>
          <div className="h-36 w-full border border-base rounded bg-secondary" />
          <div className="flex justify-end space-x-2">
            <Button onClick={() => setOpen(false)}>Close</Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </div>
        </Modal>
      </div>
    );
  },
};
