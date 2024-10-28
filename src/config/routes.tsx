import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Academy from "../pages/Academy/Academy";
import Analysis from "../pages/Analysis/Analysis";
import FreeHomes from "../pages/FreeHomes/FreeHomes";
import NewsFeed from "../pages/NewsFeed/NewsFeed";

export const routes = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "academy", element: <Academy /> },
      { path: "analysis", element: <Analysis /> },
      { path: "free-homes", element: <FreeHomes /> },
      { path: "news-feed", element: <NewsFeed /> },
    ],
  },
];