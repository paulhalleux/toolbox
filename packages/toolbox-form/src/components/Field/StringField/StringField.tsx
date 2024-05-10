import { ComponentProps } from "react";
import { Input } from "@toolbox/ui";
import { CommonFieldProps, FieldPropsKeys } from "../create-field";

export type StringFieldProps = Omit<
  ComponentProps<typeof Input>,
  FieldPropsKeys
> & {
  type?: "text" | "password";
} & CommonFieldProps<string>;

export function StringField(props: StringFieldProps) {
  return <Input {...props} id={props.name} name={props.name} />;
}
