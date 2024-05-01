import { tv, VariantProps } from "tailwind-variants";

export const badgeStyles = tv({
  base: "inline-flex items-center justify-center rounded",
  variants: {
    type: {
      tight: "h-4 px-1",
      default: "h-5 px-1",
    },
    variant: {
      default: "bg-secondary border border-base",
    },
  },
  defaultVariants: {
    variant: "default",
    type: "default",
  },
});

export type BadgeVariant = VariantProps<typeof badgeStyles>;
