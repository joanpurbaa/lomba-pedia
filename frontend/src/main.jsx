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
    errorElement: <NotFoundPage />,
  },
  {
    path: "/detail",
    element: <DetailLomba />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/unggah",
    element: <UnggahLomba />,
    errorElement: <NotFoundPage />,
  },
]);

const customTheme = {
  button: {
    color: {
      primary: "bg-blue-600 text-white",
      secondary: "bg-blue-600 bg-opacity-30 border border-blue-600 text-blue-500",
    },
  },
  textInput: {
    field: {
      input: {
        colors: {
          default:
            "border-transparent text-zinc-900 focus:border-transparent focus:ring-transparent",
        },
      },
    },
  },
  textarea: {
    colors: {
      default:
        "border-transparent text-zinc-900 focus:border-transparent focus:ring-transparent",
    },
  },
};

createRoot(document.getElementById("root")).render(
  <Flowbite theme={{ theme: customTheme }}>
    <RouterProvider router={router} />
  </Flowbite>
);
