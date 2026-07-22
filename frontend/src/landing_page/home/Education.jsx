import React from "react";

const Education = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        {/* Left Image */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src="/education.svg"
            alt="Education"
            className="img-fluid"
            style={{ maxWidth: "500px", width: "100%" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-12 col-lg-6">
          <h2 className="fw-bold mb-4">Free and open market education</h2>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the
            world, covering everything from the basics to advanced trading.
          </p>

          <a href="#" className="text-decoration-none fw-semibold">
            Varsity →
          </a>

          <p className="text-muted mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>

          <a href="#" className="text-decoration-none fw-semibold">
            TradingQ&A →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
