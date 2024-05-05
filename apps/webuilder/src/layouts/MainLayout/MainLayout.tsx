import { Outlet } from "react-router";
import { Button, Navbar, ThemeProvider } from "@toolbox/ui";
import { Logo } from "../../components/Logo";
import { MoonIcon, SunIcon } from "lucide-react";
import { useLocalStorage } from "react-use";

export function MainLayout() {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">(
    "webuilder_theme_local",
    "light",
  );

  return (
    <ThemeProvider theme={theme ?? "light"}>
      <div className="h-screen flex flex-col">
        <Navbar className="flex items-center justify-between">
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Button
            icon
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <MoonIcon size={14} /> : <SunIcon size={14} />}
          </Button>
        </Navbar>
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}
