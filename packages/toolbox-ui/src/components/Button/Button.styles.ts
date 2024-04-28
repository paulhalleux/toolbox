import { tv, VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  base: "flex items-center justify-center rounded px-4",
  variants: {
    size: {
      sm: "h-6 text-sm",
      md: "h-8 text-sm",
      lg: "h-9 text-sm",
    },
    variant: {
      default: "bg-secondary border border-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type ButtonVariant = VariantProps<typeof buttonStyles>;
