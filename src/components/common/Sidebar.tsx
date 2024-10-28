import { Link, useLocation } from "react-router-dom";

import { UserButton } from "../UserButton";
import { cn } from "../../lib/utils";

export const Sidebar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "/icons/dashboard.svg",
    },
    {
      name: "Academy",
      path: "/dashboard/academy",
      icon: "/icons/academy.svg",
    },
    {
      name: "Analysis",
      path: "/dashboard/analysis",
      icon: "/icons/analysis.svg",
    },
    {
      name: "Free Homes",
      path: "/dashboard/free-homes",
      icon: "/icons/free-homes.svg",
    },
    {
      name: "News Feed",
      path: "/dashboard/news-feed",
      icon: "/icons/news-feed.svg",
    },
  ];

  return (
    <aside className="hidden min-w-fit bg-[#fff] lg:flex items-start py-6 rounded-l-2xl overflow-y-auto [&::-webkit-scrollbar]:w-[2px] [&::-webkit-scrollbar-thumb]:bg-main">
      <nav className="h-full flex flex-col justify-between items-center gap-y-10">
        <Link to="/dashboard">
          <img
            src="/images/logo-dark.png"
            alt="logo"
            className="w-[55px] h-[33px] object-contain"
          />
        </Link>

        <ul className="flex flex-col gap-y-6 flex-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={cn(
                  "flex flex-col justify-center items-center p-4 rounded-2xl gap-y-3 hover:bg-secondary transition-all group",
                  pathname === link.path && "bg-secondary"
                )}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-[24px] h-[24px] object-contain"
                />
                <span
                  className={cn(
                    "text-primary font-fraunces font-semibold text-sm group-hover:text-main transition-all",
                    pathname === link.path && "text-main"
                  )}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <UserButton />
      </nav>
    </aside>
  );
};
