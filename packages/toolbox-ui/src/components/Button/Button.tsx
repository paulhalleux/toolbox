import { ComponentPropsWithoutRef } from "react";
import { buttonStyles, ButtonVariant } from "./Button.styles";
import { Text } from "../Text";

type ButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  keyof ButtonVariant
> &
  ButtonVariant;

export function Button({
  size,
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = buttonStyles({ size, icon, className });
  return (
    <button className={classes} {...props}>
      {typeof children === "string" ? (
        <Text type="text-xs">{children}</Text>
      ) : (
        children
      )}
    </button>
  );
}
