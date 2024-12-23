import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import AccountType from "../pages/AccountType/AccountType";
import Home from "../pages/Home/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "accoutType",
        element: <AccountType />,
      },
    ],
  },
]);
