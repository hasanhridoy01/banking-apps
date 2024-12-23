import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import AccountType from "../pages/AccountType/AccountType";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
