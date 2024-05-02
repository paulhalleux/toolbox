import { PropsWithChildren } from "react";
import { Text } from "@toolbox/ui";

type SidebarSectionWrapperProps = PropsWithChildren<{
  title: string;
  addon?: React.ReactNode;
}>;

export function SidebarSectionWrapper({
  title,
  children,
  addon,
}: SidebarSectionWrapperProps) {
  return (
    <section className="flex flex-col h-full">
      <Text
        type="heading-h6"
        className="px-3 py-2 shrink-0 select-none flex justify-between"
      >
        {title} {addon}
      </Text>
      <div className="overflow-auto min-h-0">{children}</div>
    </section>
  );
}
