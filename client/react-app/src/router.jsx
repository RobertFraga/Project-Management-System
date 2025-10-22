import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
]);
