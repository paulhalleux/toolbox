import { ToolbarItem } from "./Item";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { clsx } from "clsx";
import { ToolbarSeparator } from "./Separator";

type ToolbarProps = PropsWithChildren<ComponentPropsWithoutRef<"div">>;

export function Toolbar({ children, className, ...rest }: ToolbarProps) {
  return (
    <div
      className={clsx(
        "bg-base h-full w-10 border-r border-base p-1 flex flex-col gap-1",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Toolbar.Item = ToolbarItem;
Toolbar.Separator = ToolbarSeparator;
