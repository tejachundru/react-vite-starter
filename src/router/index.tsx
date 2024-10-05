import NotFoundPage from "@/pages/not-found";
import AuthRoutes from "@/router/auth-routes";
import UserRoutes from "@/router/user-routes";
import type React from "react";
import { useRoutes } from "react-router-dom";

const NotFoundRoute = {
  path: "*",
  element: <NotFoundPage />,
};

export const Router: React.FC = () => {
  const routes = useRoutes([AuthRoutes, UserRoutes, NotFoundRoute]);
  return routes;
};

export default Router;
