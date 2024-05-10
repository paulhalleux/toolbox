import { createForm, Form } from "@toolbox/form";
import { z } from "zod";

const CreatePageSchema = z.object({
  name: z.string().min(1),
  route: z.string().min(1),
  parentId: z.string().optional(),
});

type CreatePageFormProps = {
  id: string;
};

export const CreatePageForm = createForm(
  ({ form, Field }) => {
    return function ({ id }: CreatePageFormProps) {
      return (
        <Form id={id} onSubmit={form.handleSubmit(console.log)}>
          <Field.String
            label="Name"
            name="name"
            control={form.control}
            placeholder="eg. Home"
          />
          <Field.String
            label="Route"
            name="route"
            control={form.control}
            placeholder="eg. /home"
          />
          <Field.String
            label="Parent page"
            name="parentId"
            control={form.control}
          />
        </Form>
      );
    };
  },
  {
    schema: CreatePageSchema,
  },
);
