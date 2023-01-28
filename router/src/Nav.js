import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <NavLink to="/">Home Link</NavLink>
      <NavLink to="/about">About Link</NavLink>
      <NavLink to="/career">Career Link</NavLink>
    </div>
  );
}

export default Nav;
