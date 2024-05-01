import { tv, VariantProps } from "tailwind-variants";

export const textStyles = tv({
  base: "text",
  variants: {},
});

export type TextVariant = VariantProps<typeof textStyles>;
