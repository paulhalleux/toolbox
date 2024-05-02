type NavbarLogoProps = {
  src: string;
  alt: string;
};

export function NavbarLogo({ src, alt }: NavbarLogoProps) {
  return <img src={src} alt={alt} className="h-4" />;
}
