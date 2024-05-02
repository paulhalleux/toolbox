import { LayersSection, PagesSection } from "./Sections";
import { PanelGroup } from "@toolbox/ui";

export function ContentSidebar() {
  return (
    <PanelGroup direction="vertical">
      <PanelGroup.Panel defaultSize={20} minSize={20}>
        <PagesSection />
      </PanelGroup.Panel>
      <PanelGroup.Handle direction="vertical" />
      <PanelGroup.Panel minSize={40}>
        <LayersSection />
      </PanelGroup.Panel>
    </PanelGroup>
  );
}
