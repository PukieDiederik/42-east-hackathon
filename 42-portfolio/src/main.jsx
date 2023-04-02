import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Home } from "./componets/home/home";
import ErrorPage from "./componets/Error/error";
import { ContextUserProvider } from "./context/contextUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:loginId",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextUserProvider>
      <RouterProvider router={router} />
    </ContextUserProvider>
  </React.StrictMode>
);
