import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Layout";
import BeerTypes from "./routes/beertypes";
import ErrorPage from "./routes/errorpage";
import Beerhistory from "./routes/beerhistory";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./routes/mainpage";
import Homebrewing from "./routes/Homebrewing";
import Beercraft from "./routes/beercraft";
import Beermatch from "./routes/beermatch";

const router = createBrowserRouter([
  {
    //The new pages are added here:
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
        path: "/Beerhistory",
        element: <Beerhistory />,
      },
      {
        path: "/beercraft",
        element: <Beercraft />,
      },
      {
        path: "/beermatch",
        element: <Beermatch />,
      },
      {
        path: "/Homebrewing",
        element: <Homebrewing />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
