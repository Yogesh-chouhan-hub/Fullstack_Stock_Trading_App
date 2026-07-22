import React from "react";

const Funds = () => {
  return (
    <div className="container py-4">
      {/* Top Section */}
      <div className="row align-items-center mb-4">
        {/* Left Text */}
        <div className="col-12 col-lg-6 mb-3 mb-lg-0">
          <p className="text-muted mb-0">
            Instant, zero-cost fund transfers with UPI
          </p>
        </div>

        {/* Right Buttons */}
        <div className="col-12 col-lg-6">
          <div className="d-flex flex-column flex-sm-row justify-content-lg-end gap-2">
            <button className="btn btn-primary">Add Funds</button>

            <button className="btn btn-outline-primary">Withdraw</button>
          </div>
        </div>
      </div>

      {/* Equity Heading */}
      <div className="row">
        <div className="col">
          <h5 className="text-muted fw-semibold">Equity</h5>
        </div>
      </div>
    </div>
  );
};

export default Funds;
