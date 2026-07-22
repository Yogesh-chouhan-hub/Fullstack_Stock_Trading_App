import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Menu = ({ detail }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom px-3">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand fs-3" to="/">
          🦄
        </NavLink>

        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link activeOpt" : "nav-link menuOpt"
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? "nav-link activeOpt" : "nav-link menuOpt"
                }
              >
                Orders
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/holdings"
                className={({ isActive }) =>
                  isActive ? "nav-link activeOpt" : "nav-link menuOpt"
                }
              >
                Holdings
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/positions"
                className={({ isActive }) =>
                  isActive ? "nav-link activeOpt" : "nav-link menuOpt"
                }
              >
                Positions
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/funds"
                className={({ isActive }) =>
                  isActive ? "nav-link activeOpt" : "nav-link menuOpt"
                }
              >
                Funds
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive ? "nav-link activeOpt" : "nav-link menuOpt"
                }
              >
                Settings
              </NavLink>
            </li>

            {/* Profile */}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <div className="profile-circle">
                {detail?.charAt(0).toUpperCase()}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
