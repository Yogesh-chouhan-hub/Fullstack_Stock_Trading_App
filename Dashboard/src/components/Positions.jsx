import React, { useState, useEffect } from "react";
import axios from "axios";
// import { positions } from "../data/data";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await axios.get("http://localhost:3010/allPositions");
        setAllPositions(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPositions();
  }, []);
  return (
    <div className="holdings">
      <h3>Positions ({allPositions.length})</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th className="text-end">Qty.</th>
              <th className="text-end">Avg.</th>
              <th className="text-end">LTP</th>
              <th className="text-end">P&L</th>
              <th className="text-end">Net Chg.</th>
              <th className="text-end">Day Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((val, idx) => {
              const pnl = (Number(val.price) - Number(val.avg)) * val.qty;

              return (
                <tr key={idx}>
                  <td>{val.name}</td>
                  <td className="text-end">{Number(val.qty)}</td>
                  <td className="text-end">₹{Number(val.avg).toFixed(2)}</td>
                  <td className="text-end">₹{Number(val.price).toFixed(2)}</td>

                  <td
                    className={`text-end ${
                      Number(pnl) >= 0 ? "text-success" : "text-danger"
                    }`}
                  >
                    ₹{Number(pnl).toFixed(2)}
                  </td>

                  <td
                    className={`text-end ${
                      val.net?.startsWith("+") ? "text-success" : "text-danger"
                    }`}
                  >
                    {val.net}
                  </td>

                  <td
                    className={`text-end ${
                      val.day?.startsWith("+") ? "text-success" : "text-danger"
                    }`}
                  >
                    {val.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
