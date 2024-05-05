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
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = buttonStyles({ size, icon, className });
  return (
    <Text type="text-xs" className="font-black" asChild>
      <button className={classes} type={type} {...props}>
        {children}
      </button>
    </Text>
  );
}
