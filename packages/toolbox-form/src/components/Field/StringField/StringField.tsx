import { ComponentProps } from "react";
import { Input } from "@toolbox/ui";
import { CommonFieldProps, FieldPropsKeys } from "../create-field";

export type StringFieldProps = Omit<
  ComponentProps<typeof Input>,
  FieldPropsKeys
> & {
  type?: "text" | "password";
} & CommonFieldProps<string>;

export function StringField({ name, valid, ...props }: StringFieldProps) {
  return (
    <Input
      {...props}
      id={name}
      name={name}
      state={valid ? undefined : "error"}
    />
  );
}
