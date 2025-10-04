import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home Page</Link> */}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              DashBoard Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
