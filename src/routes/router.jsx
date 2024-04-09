import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root/Root";
import Home from "../pages/home/Home";
import Error from "../pages/error/Error";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import EstateDetails from "../pages/estate-details/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import ListedEstate from "../pages/listed-estate/ListedEstate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch("/data/estates.json"),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/estates",
        element: (
          <PrivateRoute>
            <ListedEstate></ListedEstate>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
