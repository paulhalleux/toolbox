import { ComponentPropsWithoutRef, ElementType } from "react";
import { textStyles, TextVariant } from "./Text.styles";

export const TypographyType = [
  "code",
  "content-x-small",
  "content-small",
  "content-base",
  "content-large",
  "heading-h1",
  "heading-h2",
  "heading-h3",
  "heading-h4",
  "heading-h5",
  "heading-h6",
] as const;

type TextProps<Element extends ElementType> = Omit<
  ComponentPropsWithoutRef<Element>,
  keyof TextVariant
> & {
  type?: (typeof TypographyType)[number];
  as?: Element;
} & TextVariant;

export function Text<Element extends ElementType = "p">({
  className,
  type = "content-base",
  as,
  ...props
}: TextProps<Element>) {
  const Component = as || "p";
  const classes = textStyles({ className });
  return (
    <Component
      className={classes}
      {...props}
      style={{
        font: `var(--typography-${type})`,
      }}
    />
  );
}
