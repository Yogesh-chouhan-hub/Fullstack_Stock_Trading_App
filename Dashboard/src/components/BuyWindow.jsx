import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const BuyWindow = ({ stock, close }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(stock.price);

  const margin = (Number(qty) * Number(price)).toFixed(2);

  const handleBuyBtn = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/newOrder`, {
        name: stock.name,
        qty: Number(qty),
        price: Number(price),
        mode: "BUY",
      });

      alert("Order placed successfully!");
      close();
    } catch (err) {
      console.error(err);
      alert("Failed to place order.");
    }
  };

  return (
    <div className="buy-overlay" onClick={close}>
      <div
        className="buy-window shadow-lg rounded-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="buy-header">
          <h4 className="mb-0">{stock.name}</h4>
        </div>

        <div className="buy-body">
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <label className="form-label">Quantity</label>

              <input
                className="form-control"
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-6">
              <label className="form-label">Price</label>

              <input
                className="form-control"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="buy-footer mt-4">
            <p className="fw-semibold">
              Margin Required:
              <span className="text-primary"> ₹ {margin}</span>
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <button
                className="btn btn-primary flex-fill"
                onClick={handleBuyBtn}
              >
                Buy
              </button>

              <button
                className="btn btn-outline-secondary flex-fill"
                onClick={close}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyWindow;
