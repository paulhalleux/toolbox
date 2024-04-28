import {
  PanelGroup as BasePanelGroup,
  PanelGroupProps,
} from "react-resizable-panels";
import { Panel } from "./Panel";
import { Handle } from "./Handle";
import { clsx } from "clsx";

export function PanelGroup({ children, className, ...rest }: PanelGroupProps) {
  return (
    <BasePanelGroup className={clsx("h-full", className)} {...rest}>
      {children}
    </BasePanelGroup>
  );
}

PanelGroup.Panel = Panel;
PanelGroup.Handle = Handle;
