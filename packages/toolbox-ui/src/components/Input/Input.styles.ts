import { tv, VariantProps } from "tailwind-variants";

export const inputStyles = tv({
  base: "w-full items-center justify-center rounded border border-base bg-base focus:outline-none focus:border-focus",
  variants: {
    size: {
      small: "h-7 px-2",
      default: "h-8 px-2",
    },
    disabled: {
      true: "opacity-75 cursor-not-allowed bg-secondary",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export type InputVariant = VariantProps<typeof inputStyles>;
