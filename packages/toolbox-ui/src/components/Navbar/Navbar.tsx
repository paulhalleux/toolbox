import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import { NavbarBrand } from "./Brand";

type NavbarProps = ComponentPropsWithoutRef<"div">;

export function Navbar({ className, children, ...props }: NavbarProps) {
  return (
    <div
      className={clsx(
        "bg-base h-10 w-full border-b border-base p-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Navbar.Brand = NavbarBrand;
