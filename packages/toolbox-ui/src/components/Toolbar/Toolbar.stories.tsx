import { Meta, StoryObj } from "@storybook/react";
import { Toolbar } from "./Toolbar";
import {
  ComponentIcon,
  LayersIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

const meta: Meta<typeof Toolbar> = {
  title: "Toolbar",
  component: Toolbar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Toolbar.Item key="1" icon={LayersIcon} label="Item1" />,
      <Toolbar.Item key="2" icon={ComponentIcon} label="Item2" />,
      <Toolbar.Separator key="12" />,
      <Toolbar.Item key="3" icon={SettingsIcon} label="Item3" />,
      <Toolbar.Item
        key="35"
        icon={UserIcon}
        className="mt-auto"
        label="Item3"
      />,
    ],
  },
};
