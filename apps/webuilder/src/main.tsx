import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "@toolbox/ui";
import { ModalProvider } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <ThemeProvider theme="light">
        <RouterProvider router={router} />
      </ThemeProvider>
    </ModalProvider>
  </React.StrictMode>,
);
