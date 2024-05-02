import { cloneElement, isValidElement, PropsWithChildren } from "react";
import { clsx } from "clsx";

type AsChildProps = PropsWithChildren & Record<string, unknown>;

export function AsChild({ children, ...rest }: AsChildProps) {
  if (isValidElement(children))
    return cloneElement<any>(children, {
      ...rest,
      className: clsx(
        children.props.className,
        "className" in rest && typeof rest.className === "string"
          ? rest.className
          : "",
      ),
      style: {
        ...children.props.style,
        ...("style" in rest && typeof rest.style === "object"
          ? rest.style
          : {}),
      },
    });
  return children;
}
