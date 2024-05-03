import { tv, VariantProps } from "tailwind-variants";

export const textStyles = tv({
  variants: {},
});

export type TextVariant = VariantProps<typeof textStyles>;
