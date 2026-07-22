import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [summary, setSummary] = useState({
    holdings: 0,
    positions: 0,
    orders: 0,
    buyOrders: 0,
    sellOrders: 0,
    investment: 0,
    currentValue: 0,
    pnl: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [holdingsRes, positionsRes, ordersRes] = await Promise.all([
          axios.get("http://localhost:3010/allHoldings"),
          axios.get("http://localhost:3010/allPositions"),
          axios.get("http://localhost:3010/allOrders"),
        ]);

        const holdings = holdingsRes.data;
        const positions = positionsRes.data;
        const orders = ordersRes.data;

        let investment = 0;
        let currentValue = 0;

        holdings.forEach((stock) => {
          investment += Number(stock.avg) * Number(stock.qty);
          currentValue += Number(stock.price) * Number(stock.qty);
        });

        const pnl = currentValue - investment;

        const buyOrders = orders.filter((order) => order.mode === "BUY").length;

        const sellOrders = orders.filter(
          (order) => order.mode === "SELL",
        ).length;

        setSummary({
          holdings: holdings.length,
          positions: positions.length,
          orders: orders.length,
          buyOrders,
          sellOrders,
          investment,
          currentValue,
          pnl,
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const cards = [
    {
      title: "Total Holdings",
      value: summary.holdings,
      color: "primary",
    },
    {
      title: "Total Positions",
      value: summary.positions,
      color: "warning",
    },
    {
      title: "Total Orders",
      value: summary.orders,
      color: "info",
    },
    {
      title: "Portfolio Value",
      value: `₹${summary.currentValue.toFixed(2)}`,
      color: "success",
    },
  ];

  return (
    <div className="container-fluid py-4">
      <h2 className="fw-bold mb-4">Dashboard Summary</h2>

      <div className="row g-4">
        {cards.map((card, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div
              className={`card border-start border-5 border-${card.color} shadow-sm`}
            >
              <div className="card-body">
                <h6 className="text-muted">{card.title}</h6>
                <h3 className={`text-${card.color}`}>{card.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-5 shadow-sm">
        <div className="card-header fw-bold">Portfolio Overview</div>

        <div className="card-body">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h6 className="text-muted">Total Investment</h6>
              <h4>₹{summary.investment.toFixed(2)}</h4>
            </div>

            <div className="col-md-4 mb-4">
              <h6 className="text-muted">Current Portfolio Value</h6>
              <h4>₹{summary.currentValue.toFixed(2)}</h4>
            </div>

            <div className="col-md-4 mb-4">
              <h6 className="text-muted">Total Profit / Loss</h6>

              <h4 className={summary.pnl >= 0 ? "text-success" : "text-danger"}>
                ₹{summary.pnl.toFixed(2)}
              </h4>
            </div>

            <div className="col-md-4">
              <h6 className="text-muted">Buy Orders</h6>

              <h4 className="text-success">{summary.buyOrders}</h4>
            </div>

            <div className="col-md-4">
              <h6 className="text-muted">Sell Orders</h6>

              <h4 className="text-danger">{summary.sellOrders}</h4>
            </div>

            <div className="col-md-4">
              <h6 className="text-muted">Net Position</h6>

              <h4>{summary.positions}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
