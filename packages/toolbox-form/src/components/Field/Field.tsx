import { StringField } from "./StringField";
import React from "react";
import { Text } from "@toolbox/ui";

const FieldProps = ["", "label", "hideLabel", "value", "onChange"] as const;
export type FieldPropsKeys = (typeof FieldProps)[number];

export type CommonFieldProps<Value> = {
  name: string;
  value?: Value;
  onChange?: (value: Value) => void;
};

export type FieldProps<Value, InputProps extends CommonFieldProps<Value>> = {
  label?: string;
  hideLabel?: boolean;
} & InputProps;

export const Field = {
  String: createField(StringField),
};

/**
 * HOC to create a field component.
 */
export function createField<Value, InputProps extends CommonFieldProps<Value>>(
  Input: React.ComponentType<InputProps & CommonFieldProps<Value>>,
) {
  return function FieldComponent({
    label,
    hideLabel,
    value,
    onChange,
    name,
    ...props
  }: FieldProps<Value, InputProps>) {
    return (
      <div className="flex flex-col gap-0.5">
        {!hideLabel && (
          <Text as="label" type="text-xs" htmlFor={name}>
            {label}
          </Text>
        )}
        <Input
          {...(props as InputProps & CommonFieldProps<Value>)}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };
}
