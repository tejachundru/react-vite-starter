import { lazyLoad } from "@/lib/lazyload";

// code splitted routes
const Home = lazyLoad(() => import("@/pages/home/home"));

// if code splitting is not needed
// import Home from "@/pages/home/home";

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
