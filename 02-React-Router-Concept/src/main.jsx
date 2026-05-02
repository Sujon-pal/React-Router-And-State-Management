import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./component/root/Root.jsx";
import HomePage from "./component/pages/HomePage.jsx";
import Product from "./component/pages/Product.jsx";
import ProductDetails from "./component/pages/ProductDetails.jsx";
import User from "./component/pages/User.jsx";
import UserDetails from "./component/pages/UserDetails.jsx";
import ErrorPage from "./component/pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "product",
        Component: Product,
      },
      {
        path: "ProductDetails",
        Component: ProductDetails,
      },
      {
        path: "user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User,
      },
      {
        path: "user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails,
      },
      // {
      //   path:'*',
      //   Component : ErrorPage
      // }
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
