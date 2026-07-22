import React from "react";

const Hero = () => {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="row text-center mb-5">
        <div className="col">
          <h1 className="display-6 fw-bold">Charges</h1>
          <p className="lead text-muted">List of all charges and taxes</p>
        </div>
      </div>

      {/* Cards */}
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4 text-center">
          <img
            src="/pricing0.svg"
            alt="Free Equity Delivery"
            className="img-fluid mb-4"
            style={{ maxHeight: "160px" }}
          />

          <h3 className="h4 fw-bold">Free equity delivery</h3>

          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0
            brokerage.
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 text-center">
          <img
            src="/other-trades.svg"
            alt="Intraday and F&O"
            className="img-fluid mb-4"
            style={{ maxHeight: "160px" }}
          />

          <h3 className="h4 fw-bold">Intraday and F&O trades</h3>

          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order across
            equity, currency, and commodity trades.
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 text-center">
          <img
            src="/pricing0.svg"
            alt="Free Direct Mutual Funds"
            className="img-fluid mb-4"
            style={{ maxHeight: "160px" }}
          />

          <h3 className="h4 fw-bold">Free direct MF</h3>

          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0
            commissions and DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
