import React from "react";

const Pricing = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        {/* Left Content */}
        <div className="col-12 col-lg-5">
          <h1 className="fw-bold mb-3">Unbeatable pricing</h1>

          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="text-decoration-none fw-semibold">
            See pricing →
          </a>
        </div>

        {/* Right Cards */}
        <div className="col-12 col-lg-7">
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="border rounded-3 p-4 text-center h-100 shadow-sm">
                <h1 className="display-5 fw-bold">₹0</h1>

                <p className="text-muted mb-0">
                  Free equity delivery and
                  <br />
                  direct mutual funds.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="border rounded-3 p-4 text-center h-100 shadow-sm">
                <h1 className="display-5 fw-bold">₹20</h1>

                <p className="text-muted mb-0">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
