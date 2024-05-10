import { ComponentPropsWithoutRef } from "react";
import { inputStyles, InputVariant } from "./Input.styles";
import { Text } from "../Text";
import { clsx } from "clsx";

type InputProps = Omit<ComponentPropsWithoutRef<"input">, keyof InputVariant> &
  InputVariant;

export function Input({
  className,
  size,
  disabled,
  state = "default",
  ...props
}: InputProps) {
  const classes = inputStyles({ size, disabled, state, className });
  return (
    <Text asChild type="text-xs">
      <input
        className={clsx(classes, "w-full")}
        disabled={disabled}
        {...props}
      />
    </Text>
  );
}
