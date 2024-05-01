import { ComponentPropsWithoutRef } from "react";
import { badgeStyles, BadgeVariant } from "./Badge.styles";
import { Text } from "../Text";

type BadgeProps = Omit<ComponentPropsWithoutRef<"span">, keyof BadgeVariant> &
  BadgeVariant;

export function Badge({ type, className, children, ...props }: BadgeProps) {
  const classes = badgeStyles({ type, className });
  return (
    <span className={classes} {...props}>
      <Text as="span" type="content-x-small">
        {children}
      </Text>
    </span>
  );
}
