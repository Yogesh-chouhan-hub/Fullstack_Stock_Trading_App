import React from "react";
import "./Table.css";

const Commodity = () => {
  return (
    <div className="container py-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>Commodity Futures</th>
              <th>Commodity Options</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>0.03% or ₹20/executed order (whichever is lower)</td>
              <td>₹20/executed order</td>
            </tr>

            <tr>
              <td>STT/CTT</td>
              <td>0.01% on sell side (Non-Agri)</td>
              <td>0.05% on sell side</td>
            </tr>

            <tr>
              <td>Transaction Charges</td>
              <td>MCX: 0.0021% | NSE: 0.0001%</td>
              <td>MCX: 0.0418% | NSE: 0.001%</td>
            </tr>

            <tr>
              <td>GST</td>
              <td>18% on (Brokerage + SEBI + Transaction Charges)</td>
              <td>18% on (Brokerage + SEBI + Transaction Charges)</td>
            </tr>

            <tr>
              <td>SEBI Charges</td>
              <td>
                Agri: ₹1/crore
                <br />
                Non-Agri: ₹10/crore
              </td>
              <td>₹10/crore</td>
            </tr>

            <tr>
              <td>Stamp Charges</td>
              <td>0.002% or ₹200/crore (Buy Side)</td>
              <td>0.003% or ₹300/crore (Buy Side)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Commodity;
