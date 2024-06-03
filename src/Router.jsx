import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Level from "./components/Level";
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
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
