import { NavLink } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

export const RedirectButton = () => {
  return (
    <NavLink
      to={"/dashboard"}
      style={{
        width: "fit-content",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <FaChevronLeft size={15} style={{ marginRight: "10px" }} />
      <p className="text-[#fff] text-lg">Back to Home</p>
    </NavLink>
  );
};
