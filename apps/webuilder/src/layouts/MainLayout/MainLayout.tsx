import { Outlet } from "react-router";
import { Navbar } from "@toolbox/ui";

export function MainLayout() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar className="h-10 w-full border border-b border-base flex items-center p-2">
        <Navbar.Logo src="/logo.svg" alt="logo" />
      </Navbar>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
