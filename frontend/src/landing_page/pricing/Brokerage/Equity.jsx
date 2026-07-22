import React from "react";
import "./Table.css";

const Equity = () => {
  return (
    <div className="container py-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>Equity Delivery</th>
              <th>Equity Intraday</th>
              <th>F&O Futures</th>
              <th>F&O Options</th>
            </tr>
          </thead>

          <tbody>{/* Your existing rows remain exactly the same */}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Equity;
