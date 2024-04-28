import { ComponentPropsWithoutRef } from "react";
import { buttonStyles, ButtonVariant } from "./Button.styles";

type ButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  keyof ButtonVariant
> &
  ButtonVariant;

export function Button({ size, className, ...props }: ButtonProps) {
  const classes = buttonStyles({ size, className });
  return <button className={classes} {...props} />;
}
