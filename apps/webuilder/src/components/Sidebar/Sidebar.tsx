import { ContentSidebar } from "./ContentSidebar";
import { ComponentsSidebar } from "./ComponentsSidebar";
import { TabType } from "../../types";
import { useAppStore } from "../../state/app-store";

const Selector = {
  [TabType.Content]: ContentSidebar,
  [TabType.Components]: ComponentsSidebar,
};

export function Sidebar() {
  const { tab } = useAppStore();
  const Component = Selector[tab];
  return <Component />;
}
