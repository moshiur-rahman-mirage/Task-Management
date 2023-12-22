import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Mytask from "../pages/Mytask/Mytask";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/mytask",
        element: <Mytask />,
      },
    ],
  },
]);

export default Router;
