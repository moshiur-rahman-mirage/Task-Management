import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Mytask from "../pages/Mytask/Mytask";
import Privateroutes from "./PrivateRoute";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element:<Home />,
      },
      {
        path: "/TASK MANAGEMENT",
        element:<Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Privateroutes><Dashboard /></Privateroutes>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/mytask",
        element: <Mytask />,
      },
    ],
  },
]);

export default Router;
