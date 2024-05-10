import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { Text } from "@toolbox/ui";
import { FieldError } from "../FieldError";

const FieldProps = ["label", "hideLabel"] as const;
export type FieldPropsKeys = (typeof FieldProps)[number];

export type CommonFieldProps<Value> = {
  name: string;
  value?: Value;
  onChange?: (event: React.ChangeEvent) => void;
  valid?: boolean;
  error?: FieldErrors | undefined;
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
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <div className="flex flex-col gap-1">
            {!hideLabel && (
              <div className="flex justify-between items-center gap-4">
                <Text
                  as="label"
                  type="text-xs"
                  htmlFor={name}
                  className="shrink-0"
                >
                  {label}
                </Text>
                <FieldError
                  hasError={fieldState.invalid}
                  message={fieldState.error?.message}
                />
              </div>
            )}
            <Input
              {...(props as unknown as InputProps & CommonFieldProps<Value>)}
              {...field}
              valid={!fieldState.invalid}
              error={fieldState.error}
              onChange={(event) => {
                field.onChange(event);
                props.onChange?.(event);
              }}
            />
          </div>
        )}
      />
    );
  };
}
