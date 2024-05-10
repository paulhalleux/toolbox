/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ComponentType } from "react";
import { z } from "zod";
import { useForm, UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { UseFormProps } from "react-hook-form/dist/types";
import { createFieldComponent } from "../Field/Field";
import { CommonFieldProps } from "../Field";

export type AdditionalFields = Record<
  string,
  React.ComponentType<unknown & CommonFieldProps<unknown>>
>;

type FormBuilderArgs<
  FormValues extends FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
  TCustomFields extends AdditionalFields = AdditionalFields,
> = {
  Field: ReturnType<
    typeof createFieldComponent<keyof FormValues, TCustomFields>
  >;
  form: UseFormReturn<FormValues, TContext, TTransformedValues>;
};

type FormBuilder<
  FormValues extends FieldValues,
  FormProps,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
  TCustomFields extends AdditionalFields = AdditionalFields,
> = (
  args: FormBuilderArgs<
    FormValues,
    TContext,
    TTransformedValues,
    TCustomFields
  >,
) => ComponentType<FormProps>;

export function createForm<
  TSchema extends z.Schema,
  FormProps extends Record<string, unknown>,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
  FormValues extends FieldValues = z.infer<TSchema>,
  TCustomFields extends AdditionalFields = AdditionalFields,
>(
  formBuilder: FormBuilder<
    FormValues,
    FormProps,
    TContext,
    TTransformedValues,
    TCustomFields
  >,
  options: {
    schema: TSchema;
    customFields?: TCustomFields;
  } & UseFormProps<FormValues, TContext>,
) {
  const Field = createFieldComponent<keyof FormValues, TCustomFields>(
    options.customFields,
  );

  return function Form(props: FormProps) {
    const form = useForm<FormValues, TContext, TTransformedValues>({
      resolver: zodResolver(options.schema),
      ...options,
    });

    const FormComponent = formBuilder({
      Field,
      form,
    });

    return <FormComponent {...props} />;
  };
}
