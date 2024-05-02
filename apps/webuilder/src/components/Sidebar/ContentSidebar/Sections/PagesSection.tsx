import { Button, Tree } from "@toolbox/ui";
import { SidebarSectionWrapper } from "../../../SidebarSectionWrapper";
import { useContentStore } from "../../../../state/content-store";
import { Page } from "../../../../types";
import { useMemo } from "react";
import { PlusIcon } from "lucide-react";
import { pushModal } from "../../..";

export function PagesSection() {
  const content = useContentStore();

  const tree = useMemo(() => buildTree(content.pages), [content.pages]);

  const onNodeSelect = (node: { id: string }) => {
    content.setSelectedPageId(node.id);
  };

  const onNodeToggle = (node: { id: string }) => {
    content.togglePage(node.id);
  };

  return (
    <SidebarSectionWrapper
      title="Pages"
      addon={
        <Button icon size="sm" onClick={() => pushModal("CreatePageModal")}>
          <PlusIcon size={12} />
        </Button>
      }
    >
      <Tree
        expandedNodes={content.expandedPages}
        selectedNodes={content.selectedPageId ? [content.selectedPageId] : []}
        onNodeToggle={onNodeToggle}
        onNodeClick={onNodeSelect}
        data={tree}
      />
    </SidebarSectionWrapper>
  );
}

/**
 * Build a tree structure from a list of pages
 * @param pages List of pages
 * @returns Tree structure
 */
function buildTree(pages: Page[]) {
  return pages.map((page) => ({
    id: page.id,
    name: page.title,
    children: page.children ? buildTree(page.children) : [],
  }));
}
