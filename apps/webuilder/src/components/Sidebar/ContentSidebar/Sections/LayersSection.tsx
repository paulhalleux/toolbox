import { Tree } from "@toolbox/ui";
import { useLayersStore } from "../../../../state/content-store";
import { PageLayer } from "../../../../types";
import { useMemo } from "react";
import { SidebarSection } from "../../../SidebarSection";

export function LayersSection() {
  const layers = useLayersStore();

  const tree = useMemo(() => buildTree(layers.layers), [layers.layers]);

  const onNodeSelect = (node: { id: string }) => {
    layers.setSelectedLayerId(node.id);
  };

  const onNodeToggle = (node: { id: string }) => {
    layers.toggleLayer(node.id);
  };

  return (
    <SidebarSection title="Layers">
      {!layers.page ? (
        <div className="text-center text-gray-500">No page selected</div>
      ) : (
        <Tree
          expandedNodes={layers.expandedLayers}
          selectedNodes={layers.selectedLayerId ? [layers.selectedLayerId] : []}
          onNodeToggle={onNodeToggle}
          onNodeClick={onNodeSelect}
          data={tree}
        />
      )}
    </SidebarSection>
  );
}

/**
 * Build a tree structure from a list of layers
 * @param layers List of layers
 * @returns Tree structure
 */
function buildTree(layers: PageLayer[]) {
  return layers.map((page) => ({
    id: page.id,
    name: page.name,
    children: page.children ? buildTree(page.children) : [],
  }));
}
