import { Outlet } from "react-router";
import { Button, Navbar, ThemeProvider } from "@toolbox/ui";
import { useState } from "react";

export function MainLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen flex flex-col">
        <Navbar className="flex items-center justify-between">
          <Navbar.Logo src="/logo.svg" alt="logo" />
          <Button
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Toggle Theme
          </Button>
        </Navbar>
        <div className="grow">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}
