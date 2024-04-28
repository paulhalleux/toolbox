import { Panel as BasePanel, PanelProps } from "react-resizable-panels";

export function Panel({ children, ...rest }: PanelProps) {
  return <BasePanel {...rest}>{children}</BasePanel>;
}
