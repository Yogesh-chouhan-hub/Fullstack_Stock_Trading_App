import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  console.log(allOrders);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        let res = await axios.get(`${import.meta.env.VITE_API_URL}/allOrders`);
        setAllOrders(res.data);
        console.log(allOrders);
      } catch (error) {
        alert("Fail to fetch Orders");
      }
    };
    fetchOrders();
  }, []);
  return (
    <div className="col text-center mt-4">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any order.</p>
          <button className="btn btn-primary ">Get Started</button>
        </div>
      ) : (
        <div>
          <h2>Orders</h2>
          <div className="orders-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((val, idx) => {
                  return (
                    <tr key={idx}>
                      <td>{val.name}</td>
                      <td>{val.qty}</td>
                      <td>{val.mode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
