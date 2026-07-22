import React from "react";

const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8">
          <h1 className="display-5 fw-bold mb-3">Zerodha Products</h1>

          <p className="lead text-muted mb-3">
            Sleek, modern, and intuitive trading platform
          </p>

          <a
            href="#"
            className="text-decoration-none fw-semibold border-bottom pb-2"
          >
            Check out our investment offerings →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
