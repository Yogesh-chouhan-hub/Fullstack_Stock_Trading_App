import React from "react";
import "./Table.css";

const Currency = () => {
  return (
    <div className="container py-4">
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>Currency Futures</th>
              <th>Currency Options</th>
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
              <td>No STT</td>
              <td>No STT</td>
            </tr>

            <tr>
              <td>Transaction Charges</td>
              <td>NSE: 0.00035% | BSE: 0.00045%</td>
              <td>NSE: 0.0311% | BSE: 0.001%</td>
            </tr>

            <tr>
              <td>GST</td>
              <td>18% on (Brokerage + SEBI + Transaction Charges)</td>
              <td>18% on (Brokerage + SEBI + Transaction Charges)</td>
            </tr>

            <tr>
              <td>SEBI Charges</td>
              <td>₹10/crore</td>
              <td>₹10/crore</td>
            </tr>

            <tr>
              <td>Stamp Charges</td>
              <td>0.0001% or ₹10/crore (Buy Side)</td>
              <td>0.0001% or ₹10/crore (Buy Side)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Currency;
