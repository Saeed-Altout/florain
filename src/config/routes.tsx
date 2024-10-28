import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/home";

import Dashboard from "../pages/Dashboard/Dashboard";
import Academy from "../pages/Academy/Academy";
import Analysis from "../pages/Analysis/Analysis";
import FreeHomes from "../pages/FreeHomes/FreeHomes";
import NewsFeed from "../pages/NewsFeed/NewsFeed";

import Profile from "../pages/profile/Profile";
import Details from "../pages/profile/Details";
import Settings from "../pages/profile/Settings";

export const routes = [
  {
    path: "/",
    element: <Home />,
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
];
