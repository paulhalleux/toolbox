import { tv, VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  base: "flex items-center justify-center rounded focus-visible:outline-none focus-visible:border-focus",
  variants: {
    size: {
      sm: "h-6 px-2",
      md: "h-7 px-3",
      lg: "h-8 px-4",
    },
    variant: {
      default: "bg-secondary border border-base",
    },
    icon: {
      true: "aspect-square p-1",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    icon: false,
  },
});

export type ButtonVariant = VariantProps<typeof buttonStyles>;
