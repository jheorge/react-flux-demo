import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStye = { color: "orange" };
  return (
    <nav>
      <NavLink activeStyle={activeStye} to="/" exact>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeStye} to="/courses">
        Courses
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeStye} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
