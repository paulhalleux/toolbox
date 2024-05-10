import { PropsWithChildren } from "react";
import { Text } from "@toolbox/ui";

type SidebarSectionProps = PropsWithChildren<{
  title: string;
  addon?: React.ReactNode;
}>;

export function SidebarSection({
  title,
  children,
  addon,
}: SidebarSectionProps) {
  return (
    <section className="flex flex-col h-full">
      <Text
        type="text-xs"
        className="px-3 py-2 shrink-0 select-none flex justify-between"
      >
        {title} {addon}
      </Text>
      <div className="overflow-auto min-h-0">{children}</div>
    </section>
  );
}
