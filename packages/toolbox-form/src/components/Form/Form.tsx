import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";

type FormProps = ComponentPropsWithoutRef<"form">;

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form className={clsx("w-full", className)} {...props}>
      {children}
    </form>
  );
}
