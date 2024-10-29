// Dashboard routes
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Academy from "../pages/Dashboard/Academy/Academy";
import Analysis from "../pages/Dashboard/Analysis/Analysis";
import FreeHomes from "../pages/Dashboard/FreeHomes/FreeHomes";
import NewsFeed from "../pages/Dashboard/NewsFeed/NewsFeed";

import Profile from "../pages/Dashboard/profile/Profile";
import Details from "../pages/Dashboard/profile/Details/Details";
import Settings from "../pages/Dashboard/profile/Settings/Settings";

// Root routes
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Root/Home/home";

// Auth routes
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "academy", element: <Academy /> },
      { path: "analysis", element: <Analysis /> },
      { path: "free-homes", element: <FreeHomes /> },
      { path: "news-feed", element: <NewsFeed /> },
      {
        path: "profile",
        element: <Profile />,
        children: [
          { path: "details", element: <Details /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
];
