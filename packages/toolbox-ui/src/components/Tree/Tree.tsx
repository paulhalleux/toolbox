import { ComponentPropsWithoutRef, useId } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { clsx } from "clsx";
import { Text } from "../Text";

export type TreeNode = {
  id: string;
  name: string;
  children?: TreeNode[];
};

type TreeProps = Omit<ComponentPropsWithoutRef<"ul">, "children"> & {
  data: TreeNode[] | TreeNode;
  onNodeClick?: (
    node: TreeNode,
    event: React.MouseEvent<HTMLElement> | null,
  ) => void;
  onNodeToggle?: (
    node: TreeNode,
    event: React.MouseEvent<HTMLElement> | null,
  ) => void;
  expandedNodes?: string[];
  selectedNodes?: string[];

  // Internal use only
  __internal_flatTree?: TreeNode[];
  __internal_deepness?: number;
  __internal_treeId?: string;
};

export function Tree({
  data,
  onNodeClick,
  onNodeToggle,
  expandedNodes,
  selectedNodes,
  className,
  __internal_flatTree,
  __internal_deepness = 0,
  __internal_treeId,
  ...props
}: TreeProps) {
  const treeId = __internal_treeId ?? useId();
  const tree = Array.isArray(data) ? data : [data];
  const flatTree =
    __internal_flatTree || flattenTree(tree, expandedNodes ?? []) || [];

  const onToggle =
    (node: TreeNode) => (e: React.MouseEvent<HTMLElement> | null) => {
      e?.stopPropagation();
      onNodeToggle?.(node, e);
    };

  const onClick =
    (node: TreeNode) => (e: React.MouseEvent<HTMLElement> | null) => {
      e?.stopPropagation();
      onNodeClick?.(node, e);
    };

  const onKeydown =
    (node: TreeNode) => (e: React.KeyboardEvent<HTMLElement>) => {
      const isExpanded = expandedNodes?.includes(node.id);

      if (e.key === "Enter") {
        onNodeClick?.(node, null);
      } else if (e.key === "ArrowRight" && !isExpanded) {
        onToggle(node)(null);
      } else if (e.key === "ArrowLeft" && isExpanded) {
        onToggle(node)(null);
      } else if (e.key === "ArrowDown") {
        const nextItem = e.currentTarget.getAttribute("data-next-item");
        const nextElement = document.querySelector(
          `[data-item-id="${treeId}-${nextItem}"]`,
        ) as HTMLElement;
        nextElement?.focus();
      } else if (e.key === "ArrowUp") {
        const prevItem = e.currentTarget.getAttribute("data-prev-item");
        const prevElement = document.querySelector(
          `[data-item-id="${treeId}-${prevItem}"]`,
        ) as HTMLElement;
        prevElement?.focus();
      }
    };

  const getNextItem = (node: TreeNode) => {
    const index = flatTree.findIndex((n) => n.id === node.id);
    return flatTree[(index + 1) % flatTree.length];
  };

  const getPrevItem = (node: TreeNode) => {
    const index = flatTree.findIndex((n) => n.id === node.id);
    return flatTree[(index - 1 + flatTree.length) % flatTree.length];
  };

  return (
    <ul className={clsx("flex flex-col", className)} {...props} role="tree">
      {tree.map((node) => {
        const isExpanded = expandedNodes?.includes(node.id);
        const ChevronIcon = isExpanded ? ChevronDown : ChevronRight;
        return (
          <li
            tabIndex={-1}
            key={node.id}
            onClick={onClick(node)}
            onDoubleClick={onToggle(node)}
            role="treeitem"
          >
            <div
              tabIndex={0}
              onKeyDown={onKeydown(node)}
              data-item-id={`${treeId}-${node.id}`}
              data-next-item={getNextItem(node)?.id}
              data-prev-item={getPrevItem(node)?.id}
              className={clsx(
                "flex items-center hover:bg-secondary !outline-none border border-[transparent] focus-visible:border-primitive-blue-500",
                {
                  "bg-secondary": selectedNodes?.includes(node.id),
                },
              )}
              style={{
                paddingLeft: `${__internal_deepness * 24}px`,
                cursor: onNodeClick ? "pointer" : "default",
              }}
            >
              <div className="h-8 w-8 shrink-0">
                {node.children && node.children.length > 0 && (
                  <button
                    tabIndex={-1}
                    className="w-full h-full flex items-center justify-center"
                    onClick={onToggle(node)}
                  >
                    <ChevronIcon size={16} />
                  </button>
                )}
              </div>
              <Text type="content-x-small" className="select-none">
                {node.name}
              </Text>
            </div>
            {node.children && isExpanded && (
              <Tree
                data={node.children}
                expandedNodes={expandedNodes}
                onNodeToggle={onNodeToggle}
                onNodeClick={onNodeClick}
                selectedNodes={selectedNodes}
                __internal_flatTree={flatTree}
                __internal_deepness={__internal_deepness + 1}
                __internal_treeId={treeId}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Flattens a tree structure into a flat array
 * @param tree The tree to flatten
 * @param expandedNodes The expanded nodes
 * @param acc The accumulator
 * @returns The flattened tree
 */
function flattenTree(
  tree: TreeNode[],
  expandedNodes: string[],
  acc: TreeNode[] = [],
) {
  tree.forEach((node) => {
    acc.push(node);
    if (node.children && expandedNodes.includes(node.id)) {
      flattenTree(node.children, expandedNodes, acc);
    }
  });
  return acc;
}
