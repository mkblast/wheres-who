import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Level from "./components/Level";
import Leaderboard from "./components/Leaderboard";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/levels/:id",
      element: <Level />,
      errorElement: <ErrorPage />
    },
    {
      path: "/leaderboard",
      element: <Leaderboard />,
      errorElement: <ErrorPage />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
