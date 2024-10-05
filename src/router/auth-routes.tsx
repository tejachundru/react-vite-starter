import Login from "@/pages/auth/login";

const AuthRoutes = {
  path: "/auth",
  children: [
    {
      path: "login",
      element: <Login />,
    },
  ],
};

export default AuthRoutes;
