import { ComponentPropsWithoutRef, ElementType, useState } from "react";
import { textStyles, TextVariant } from "./Text.styles";
import { clsx } from "clsx";
import { AsChild } from "../AsChild";

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
  editable?: boolean;
  onEdit?: (newValue: string) => void;
  editInputClassName?: string;
  asChild?: boolean;
} & TextVariant;

export function Text<Element extends ElementType = "p">({
  className,
  type = "content-base",
  as,
  editable,
  editInputClassName,
  onEdit,
  asChild,
  ...props
}: TextProps<Element>) {
  const Component = as || "p";
  const classes = textStyles({ className });

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(() => {
    if (typeof props.children === "string") {
      return props.children;
    }

    return "";
  });

  if (asChild)
    return (
      <AsChild
        {...props}
        className={classes}
        style={{
          font: `var(--typography-${type})`,
          ...props.style,
        }}
      />
    );

  if (typeof props.children !== "string" && editable) {
    throw new Error(
      "Text component with editable prop must have a single string child",
    );
  }

  if (editing) {
    return (
      <input
        className={clsx(
          "bg-base outline-none w-full rounded border border-primitive-blue-600 px-1.5 py-1",
          classes,
          editInputClassName,
        )}
        style={{
          font: `var(--typography-${type})`,
        }}
        autoFocus
        onBlur={(event) => {
          setEditing(false);
          onEdit?.(event.target.value);
        }}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    );
  }

  return (
    <Component
      className={clsx("text text-base", classes)}
      onDoubleClick={(event) => {
        if (!editable) return;
        event.stopPropagation();
        setEditing(true);
        setText(props.children as string);
      }}
      {...props}
      style={{
        font: `var(--typography-${type})`,
        ...props.style,
      }}
    />
  );
}
