import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
