import { ComponentPropsWithoutRef } from "react";
import { inputStyles, InputVariant } from "./Input.styles";
import { Text } from "../Text";
import { clsx } from "clsx";

type InputProps = Omit<ComponentPropsWithoutRef<"input">, keyof InputVariant> &
  InputVariant;

export function Input({ className, size, disabled, ...props }: InputProps) {
  const classes = inputStyles({ size, disabled, className });
  return (
    <Text asChild type="content-x-small">
      <input
        className={clsx(classes, "w-full")}
        disabled={disabled}
        {...props}
      />
    </Text>
  );
}
