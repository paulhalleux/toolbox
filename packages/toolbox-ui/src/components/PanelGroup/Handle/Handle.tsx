import {
  PanelResizeHandle as BasePanelResizeHandle,
  PanelResizeHandleProps,
} from "react-resizable-panels";
import { clsx } from "clsx";
import { useState } from "react";

const indicatorClasses = {
  horizontal:
    "w-[7px] h-6 cursor-ew-resize translate-x-[-50%] translate-y-[-50%] top-[50%]",
  vertical:
    "w-6 h-[7px] cursor-ns-resize translate-x-[-50%] translate-y-[-50%] left-[50%]",
};

export function Handle({
  className,
  showDragIndicator,
  direction,
  ...rest
}: Omit<PanelResizeHandleProps, "children"> & {
  showDragIndicator?: boolean;
  direction: "horizontal" | "vertical";
}) {
  const [dragging, setDragging] = useState(false);

  return (
    <BasePanelResizeHandle
      onDragging={setDragging}
      className={clsx(
        "group relative focus:outline-none focus:border-focus",
        {
          "border-r": direction === "horizontal",
          "border-b": direction === "vertical",
          "border-base": !dragging,
          "border-focus": dragging,
        },
        className,
      )}
      {...rest}
    >
      {showDragIndicator && (
        <div
          className={clsx(
            "bg-secondary absolute z-20 rounded-sm border border-base pointer-events-none group-focus:border-focus",
            indicatorClasses[direction],
            {
              "border-secondary": !dragging,
              "border-focus": dragging,
            },
          )}
        />
      )}
    </BasePanelResizeHandle>
  );
}
