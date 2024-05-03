import { Navbar } from "./Navbar";
import { Meta, StoryObj } from "@storybook/react";
import { WithColorScheme } from "../../storybook-decorators";

const meta: Meta<typeof Navbar> = {
  decorators: [WithColorScheme],
  title: "Navbar",
  component: Navbar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
