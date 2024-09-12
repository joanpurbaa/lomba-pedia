import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DetailLomba from "./pages/DetailLomba";
import UnggahLomba from "./pages/UnggahLomba";
import NotFoundPage from "./pages/NotFoundPage";
import "./index.css";
import { Flowbite } from "flowbite-react";
import axios from "axios";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <DetailLomba />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/unggah",
    element: <UnggahLomba />,
  },
]);
const customTheme = {
  button: {
    color: {
      default: "bg-blue-600 bg-opacity-30 border border-blue-600 text-blue-500",
      daftar: "bg-blue-600 text-white",
    },
  },
};

createRoot(document.getElementById("root")).render(
  <Flowbite theme={{ theme: customTheme }}>
    <RouterProvider router={router} />
  </Flowbite>
);
