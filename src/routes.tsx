import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GameListing from "./pages/GameListing";
import GameSingle from "./pages/GameSingle";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/game-hub",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <GameListing /> },
      { path: "/game-hub/games/:slug", element: <GameSingle /> },
    ],
  },
]);

export default router;
