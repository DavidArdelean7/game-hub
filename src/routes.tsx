import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GameListing from "./pages/GameListing";
import GameSingle from "./pages/GameSingle";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <GameListing /> },
      { path: "/games/:slug", element: <GameSingle /> },
    ],
  },
]);

export default router;
