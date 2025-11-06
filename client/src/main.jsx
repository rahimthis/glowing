import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";

// style for react slice
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import style swiper
import "swiper/css";
import "swiper/css/pagination";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="roboto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
