import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import GameListing from "./pages/GameListing";
import GameSingle from "./pages/GameSingle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <GameListing /> },
      { path: "/games/:id", element: <GameSingle /> },
    ],
  },
]);

export default router;
