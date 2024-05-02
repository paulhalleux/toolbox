import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import { NavbarLogo } from "./Logo";

type NavbarProps = ComponentPropsWithoutRef<"div">;

export function Navbar({ className, children, ...props }: NavbarProps) {
  return (
    <div
      className={clsx("h-10 w-full border-b border-base p-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

Navbar.Logo = NavbarLogo;
