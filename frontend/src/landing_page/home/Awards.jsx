import React from "react";

const Awards = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        {/* Left Image */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src="/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-12 col-lg-6">
          <h1 className="fw-bold">Largest stock broker in India</h1>

          <p className="mt-4 text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row mt-4">
            <div className="col-12 col-sm-6">
              <ul>
                <li>Futures & Options</li>
                <li>Commodity Derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>

            <div className="col-12 col-sm-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct Mutual Funds</li>
                <li>Bonds & Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src="/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4 mb-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
