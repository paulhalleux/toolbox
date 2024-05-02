import { PanelGroup } from "@toolbox/ui";
import { Sidebar } from "../Sidebar";
import { Canvas } from "../Canvas";
import { Controls } from "../Controls";

export function BuilderWorkspace() {
  return (
    <PanelGroup direction="horizontal" id="workspace">
      <PanelGroup.Panel defaultSize={15} maxSize={20} minSize={12}>
        <Sidebar />
      </PanelGroup.Panel>
      <PanelGroup.Handle direction="horizontal" />
      <PanelGroup.Panel>
        <Canvas />
      </PanelGroup.Panel>
      <PanelGroup.Handle direction="horizontal" />
      <PanelGroup.Panel defaultSize={15} maxSize={20} minSize={12}>
        <Controls />
      </PanelGroup.Panel>
    </PanelGroup>
  );
}
