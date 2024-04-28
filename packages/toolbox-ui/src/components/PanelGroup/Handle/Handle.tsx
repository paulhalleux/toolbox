import {
  PanelResizeHandle as BasePanelResizeHandle,
  PanelResizeHandleProps,
} from "react-resizable-panels";
import { clsx } from "clsx";
import { useState } from "react";

const indicatorClasses = {
  horizontal:
    "w-2.5 h-6 cursor-ew-resize translate-x-[-50%] translate-y-[-50%] top-[50%]",
  vertical:
    "w-6 h-2.5 cursor-ns-resize translate-x-[-50%] translate-y-[-50%] left-[50%]",
};

export function Handle({
  className,
  showDragIndicator,
  direction,
  active,
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
        "relative border",
        {
          "w-[1px]": direction === "horizontal",
          "h-[1px]": direction === "vertical",
          "border-base": !dragging && !active,
          "border-primitive-blue-600": dragging || active,
        },
        className,
      )}
      {...rest}
    >
      {showDragIndicator && (
        <div
          className={clsx(
            "absolute z-20 rounded-sm border",
            indicatorClasses[direction],
            {
              "bg-secondary border-secondary": !dragging && !active,
              "bg-primitive-blue-600 border-primitive-blue-400":
                dragging || active,
            },
          )}
        />
      )}
    </BasePanelResizeHandle>
  );
}
