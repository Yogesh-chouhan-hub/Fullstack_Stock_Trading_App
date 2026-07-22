import React from "react";
import Menu from "./Menu";
import "../App.css";

const TopBar = ({ user }) => {
  return (
    <div className="container-fluid border-bottom">
      <div className="row align-items-center">
        {/* Market Data */}
        <div className="col-12 col-lg-4 border-end">
          <div className="d-flex justify-content-center justify-content-lg-around py-2 flex-wrap">
            <div className="menuOpt m-2">
              NIFTY
              <span className="text-danger ms-2">100.2</span>
            </div>

            <div className="menuOpt m-2">
              SENSEX
              <span className="text-danger ms-2">100.2</span>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="col-12 col-lg-8">
          <Menu detail={user} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
