import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./component/root/Root.jsx";
import HomePage from "./component/pages/HomePage.jsx";
import Product from "./component/pages/Product.jsx";
import ProductDetails from "./component/pages/ProductDetails.jsx";
import User from "./component/pages/User.jsx";

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
        path:'ProductDetails',
        Component: ProductDetails
      },
      {
        path:'user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: User
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);