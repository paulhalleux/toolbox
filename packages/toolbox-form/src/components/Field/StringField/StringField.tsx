import { ComponentProps } from "react";
import { Input } from "@toolbox/ui";
import { CommonFieldProps, FieldPropsKeys } from "../Field";

export type StringFieldProps = Omit<
  ComponentProps<typeof Input>,
  FieldPropsKeys
> & {
  type?: "text" | "password";
} & CommonFieldProps<string>;

export function StringField({
  type = "text",
  name,
  onChange,
  ...props
}: StringFieldProps) {
  return (
    <Input
      {...props}
      type={type}
      name={name}
      id={name}
      onChange={(event) => {
        onChange?.(event.target.value);
      }}
    />
  );
}
