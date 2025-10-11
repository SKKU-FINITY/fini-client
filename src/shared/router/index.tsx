import { createBrowserRouter } from "react-router-dom";
import { PATH } from "./path";
import HomePage from "../../pages/home/home-page";
import LoginPage from "../../pages/login/login-page";
import ErrorPage from "../../pages/error/error-page";

export const router = createBrowserRouter([
  { path: PATH.HOME, element: <HomePage /> },
  { path: PATH.LOGIN, element: <LoginPage /> },
  { path: PATH.ERROR, element: <ErrorPage /> },
]);
