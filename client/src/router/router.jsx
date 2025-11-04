import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Shop from "../Pages/Shop/Shop";
import ProductDetails, { productLoder } from "../Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "shop",
        Component: Shop,
      },
      {
        path : 'prodcuts/:id',
        Component : ProductDetails ,
        loader : productLoder,
      }
    ],
  },
]);

export default router;
