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
  active?: boolean;
  showDragIndicator?: boolean;
  direction: "horizontal" | "vertical";
}) {
  const [dragging, setDragging] = useState(false);

  return (
    <BasePanelResizeHandle
      onDragging={setDragging}
      className={clsx(
        "relative",
        {
          "border-r": direction === "horizontal",
          "border-b": direction === "vertical",
          "border-base": !dragging,
          "border-primitive-blue-600": dragging,
        },
        className,
      )}
      {...rest}
    >
      {showDragIndicator && (
        <div
          className={clsx(
            "absolute z-20 rounded-sm border pointer-events-none",
            indicatorClasses[direction],
            {
              "bg-secondary border-secondary": !dragging,
              "bg-primitive-blue-600 border-primitive-blue-400": dragging,
            },
          )}
        />
      )}
    </BasePanelResizeHandle>
  );
}
