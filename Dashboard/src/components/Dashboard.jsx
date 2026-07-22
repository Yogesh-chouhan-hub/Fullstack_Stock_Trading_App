import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <div className="row">
        <div className="col-4 border px-0">
          <WatchList />
        </div>
        <div className="col-8 border px-0">
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
