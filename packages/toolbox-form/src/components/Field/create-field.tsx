import React from "react";
import { Control, Controller } from "react-hook-form";
import { Text } from "@toolbox/ui";

const FieldProps = ["label", "hideLabel"] as const;
export type FieldPropsKeys = (typeof FieldProps)[number];

export type CommonFieldProps<Value> = {
  name: string;
  value?: Value;
  onChange?: (event: React.ChangeEvent) => void;
};

export type FieldProps<Value, InputProps extends CommonFieldProps<Value>> = {
  label?: string;
  hideLabel?: boolean;
  control: Control<any>;
} & InputProps;

/**
 * HOC to create a field component.
 */
export function createField<
  FieldName extends string | number | symbol,
  InputProps extends CommonFieldProps<Value>,
  Value = any,
>(Input: React.ComponentType<InputProps & CommonFieldProps<Value>>) {
  return function FieldComponent({
    label,
    hideLabel,
    name,
    control,
    ...props
  }: FieldProps<Value, InputProps> & {
    name: FieldName;
  }) {
    return (
      <div className="flex flex-col gap-1">
        {!hideLabel && (
          <Text as="label" type="text-xs" htmlFor={name}>
            {label}
          </Text>
        )}
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...(props as unknown as InputProps & CommonFieldProps<Value>)}
                {...field}
                onChange={(event) => {
                  field.onChange(event);
                  props.onChange?.(event);
                }}
              />
              {fieldState.invalid && (
                <Text type="text-xs" className="text-red-500">
                  {fieldState.error?.message}
                </Text>
              )}
            </>
          )}
        />
      </div>
    );
  };
}
