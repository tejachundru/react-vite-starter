import Home from "@/pages/home/home";

const UserRoutes = {
  path: "/",
  children: [
    {
      path: "",
      element: <Home />,
    },
  ],
};

export default UserRoutes;
