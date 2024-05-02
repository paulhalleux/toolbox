import { createBrowserRouter } from "react-router-dom";
import { HomeRoute } from "./HomeRoute";
import { BuilderRoute } from "./BuilderRoute";
import { MainLayout } from "../layouts";

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomeRoute,
      },
      {
        path: "/builder",
        Component: BuilderRoute,
      },
    ],
  },
]);
