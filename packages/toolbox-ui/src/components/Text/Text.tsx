import { ComponentPropsWithoutRef, ElementType, useState } from "react";
import { clsx } from "clsx";
import { AsChild } from "../AsChild";
import { designTokens } from "@toolbox/design-tokens";

type TextProps<Element extends ElementType> =
  ComponentPropsWithoutRef<Element> & {
    type?: keyof typeof designTokens.typography;
    as?: Element;
    editable?: boolean;
    onEdit?: (newValue: string) => void;
    editInputClassName?: string;
    asChild?: boolean;
  };

export function Text<Element extends ElementType = "p">({
  className,
  type = "text-xs",
  as,
  editable,
  editInputClassName,
  onEdit,
  asChild,
  ...props
}: TextProps<Element>) {
  const Component = as || "p";
  const classes = clsx(
    `leading-line-height-${type}`,
    `text-size-${type}`,
    `font-weight-${type}`,
    className,
  );

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(() => {
    if (typeof props.children === "string") {
      return props.children;
    }

    return "";
  });

  if (asChild) return <AsChild {...props} className={classes} />;

  if (typeof props.children !== "string" && editable) {
    throw new Error(
      "Text component with editable prop must have a single string child",
    );
  }

  if (editing) {
    return (
      <input
        className={clsx(
          "bg-base outline-none w-full rounded border border-focus px-1.5 py-1",
          classes,
          editInputClassName,
        )}
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
      className={classes}
      onDoubleClick={(event) => {
        if (!editable) return;
        event.stopPropagation();
        setEditing(true);
        setText(props.children as string);
      }}
      {...props}
    />
  );
}
