import React, { useEffect, useState } from "react";
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { backgroundColor } from "@mui/system";

const Holdings = () => {
  const [allHolding, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get("http://localhost:3010/allHoldings");
        setAllHoldings(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHoldings();
  }, []);

  const labels = allHolding.map((subArray) => {
    return subArray["name"];
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHolding.map((stock) => {
          return stock.price;
        }),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: 'Dataset 1',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <div className="holdings">
      <h3>Holdings ({allHolding.length})</h3>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Instruments</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Cur. Val</th>
              <th>P&L</th>
              <th>Net Chg</th>
              <th>Day Chg</th>
            </tr>
          </thead>

          <tbody>
            {allHolding.map((val, idx) => {
              const currentValue = Number(val.qty) * Number(val.price);
              const investment = Number(val.qty) * Number(val.avg);
              const pnl = currentValue - investment;

              return (
                <tr key={idx}>
                  <td>{val.name}</td>
                  <td>{val.qty}</td>
                  <td>₹{Number(val.avg).toFixed(2)}</td>
                  <td>₹{Number(val.price).toFixed(2)}</td>
                  <td>₹{currentValue.toFixed(2)}</td>

                  <td className={pnl >= 0 ? "text-success" : "text-danger"}>
                    ₹{pnl.toFixed(2)}
                  </td>

                  <td
                    className={
                      val.net?.startsWith("+") ? "text-success" : "text-danger"
                    }
                  >
                    {val.net}
                  </td>

                  <td
                    className={
                      val.day?.startsWith("+") ? "text-success" : "text-danger"
                    }
                  >
                    {val.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <VerticalGraph data={data} />
    </div>
  );
};

export default Holdings;
