import { Toolbar } from "@toolbox/ui";
import { ComponentIcon, LayersIcon, SettingsIcon } from "lucide-react";
import { useAppStore } from "../../../state/app-store";
import { TabType } from "../../../types";

export function BuilderToolbar() {
  const { tab, setTab } = useAppStore();

  const onPluginSelected = (tab: TabType) => () => {
    setTab(tab);
  };

  return (
    <Toolbar className="flex-grow-0">
      <Toolbar.Item
        icon={LayersIcon}
        label="Layers"
        onClick={onPluginSelected(TabType.Content)}
        active={tab === TabType.Content}
      />
      <Toolbar.Item
        icon={ComponentIcon}
        label="Components"
        onClick={onPluginSelected(TabType.Components)}
        active={tab === TabType.Components}
      />
      <Toolbar.Separator />
      <Toolbar.Item icon={SettingsIcon} label="Settings" />
    </Toolbar>
  );
}
