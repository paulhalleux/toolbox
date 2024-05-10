import { StringField } from "./StringField";
import { CommonFieldProps, createField } from "./create-field";
import React, { ComponentProps } from "react";
import { AdditionalFields } from "../Form";

export const createFieldComponent = <
  FieldName extends string | number | symbol,
  TCustomFields extends AdditionalFields = AdditionalFields,
>(
  additionalFields?: Record<
    string,
    React.ComponentType<unknown & CommonFieldProps<unknown>>
  >,
) => ({
  String: createField<FieldName, ComponentProps<typeof StringField>>(
    StringField,
  ),
  ...Object.entries(additionalFields ?? {}).reduce(
    (fields, [name, Field]) => ({
      ...fields,
      [name]: createField<FieldName, ComponentProps<typeof Field>>(Field),
    }),
    {} as Record<
      keyof TCustomFields,
      ReturnType<
        typeof createField<
          FieldName,
          ComponentProps<TCustomFields[keyof TCustomFields]>
        >
      >
    >,
  ),
});

export const Field = createFieldComponent();
