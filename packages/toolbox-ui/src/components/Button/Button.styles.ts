import { tv, VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  base: "flex items-center justify-center rounded focus:outline-none focus:ring-1 focus:ring-base",
  variants: {
    size: {
      sm: "h-6 text-sm px-2",
      md: "h-8 text-sm px-3",
      lg: "h-9 text-sm px-4",
    },
    variant: {
      default:
        "bg-secondary border border-base hover:bg-hover active:bg-active text-text",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type ButtonVariant = VariantProps<typeof buttonStyles>;
