import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navigation from "components/Navigation";
import Home from "routes/Home";
import Transactions from "routes/Transactions";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Navigation />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
