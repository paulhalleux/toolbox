import { PropsWithChildren } from "react";

type NavbarLogoProps =
  | {
      src: string;
      alt: string;
    }
  | PropsWithChildren;

export function NavbarBrand(props: NavbarLogoProps) {
  if ("src" in props) {
    const { src, alt } = props;
    return <img src={src} alt={alt} className="h-4" />;
  }
  return <>{props.children}</>;
}
