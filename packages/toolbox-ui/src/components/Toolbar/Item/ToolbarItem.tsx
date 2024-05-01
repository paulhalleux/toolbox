import { LucideIcon } from "lucide-react";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { clsx } from "clsx";
import { Tooltip } from "../../Tooltip";

type ToolbarItemProps = {
  label?: string;
} & ComponentPropsWithoutRef<"button"> &
  ({ icon: LucideIcon } | PropsWithChildren<{ icon?: never }>);

export function ToolbarItem({
  icon: Icon,
  children,
  label,
  className,
  ...rest
}: ToolbarItemProps) {
  return (
    <Tooltip placement="right" delay={500}>
      <Tooltip.Trigger asChild>
        <button
          className={clsx(
            "h-8 w-8 rounded flex items-center justify-center hover:bg-secondary active:bg-active",
            className,
          )}
          aria-labelledby={label}
          {...rest}
        >
          {Icon ? <Icon size={16} /> : children}
        </button>
      </Tooltip.Trigger>
      {label && <Tooltip.Content>{label}</Tooltip.Content>}
    </Tooltip>
  );
}