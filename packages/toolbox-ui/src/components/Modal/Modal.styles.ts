import { tv, VariantProps } from "tailwind-variants";

export const modalStyles = tv({
  base: "bg-base border border-base rounded-lg w-full min-w-[min(100%,_400px)] max-h-[calc(100vh_-_48px)] shadow-md",
  variants: {
    size: {
      small: "w-[400px]",
      default: "w-[500px]",
      large: "w-[600px]",
      full: "w-full",
    },
  },
  defaultVariants: {
    size: "default",
    position: "center",
  },
});

export type ModalVariant = VariantProps<typeof modalStyles>;
