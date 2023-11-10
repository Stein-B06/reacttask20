import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BeerTypes from "./routes/beertypes";
import ErrorPage from "./routes/errorpage";
import AboutPage from "./routes/aboutpage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./routes/mainpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "beer-types",
        element: <BeerTypes></BeerTypes>,
      },
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
