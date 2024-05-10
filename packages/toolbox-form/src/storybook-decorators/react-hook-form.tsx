import { FC, ReactNode, VFC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Decorator } from "@storybook/react";

const StorybookFormProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(() => {})}>{children}</form>
    </FormProvider>
  );
};

export const WithReactHookForm: Decorator = (Story: FC) => (
  <StorybookFormProvider>
    <Story />
  </StorybookFormProvider>
);
