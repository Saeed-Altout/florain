import { NavLink } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <NavLink to={"/dashboard/profile/details"}>Details</NavLink>
      <NavLink to={"/dashboard/profile/settings"}>Settings</NavLink>
    </div>
  );
}
