import React from "react";
import { Routes, Route } from "react-router-dom";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

const Dashboard = ({ logout }) => {
  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* Watchlist */}
        <div className="col-12 col-lg-4 border-end">
          <WatchList />
        </div>

        {/* Dashboard */}
        <div className="col-12 col-lg-8">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps btn={logout} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
