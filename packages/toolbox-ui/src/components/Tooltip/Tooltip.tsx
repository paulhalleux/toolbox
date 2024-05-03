import { clsx } from "clsx";
import omit from "lodash/omit";
import React from "react";

import {
  Popover,
  type PopoverProps,
  type PopoverTriggerProps,
} from "../Popover";
import { Text } from "../Text";

export function Tooltip({
  children,
  ...options
}: Omit<PopoverProps, "triggerType" | "triggerOnFocus">) {
  return (
    <Popover {...options} triggerType="hover" triggerOnFocus>
      {children}
    </Popover>
  );
}

Tooltip.Trigger = React.forwardRef<HTMLElement, PopoverTriggerProps>(
  function TooltipTrigger({ children, ...props }, propRef) {
    return (
      <Popover.Trigger ref={propRef} {...omit(props, ["ref"])}>
        {children}
      </Popover.Trigger>
    );
  },
);

Tooltip.Content = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function TooltipContent({ children, className, ...props }, propRef) {
  if (!children) return null;
  return (
    <Popover.Content
      ref={propRef}
      className={clsx("border border-base rounded bg-secondary p-1", className)}
      {...omit(props, ["ref"])}
    >
      <Text type="text-xs">{children}</Text>
    </Popover.Content>
  );
});
