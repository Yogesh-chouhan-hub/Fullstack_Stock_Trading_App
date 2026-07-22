import React from "react";

const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center">
        <div className="col-12">
          <img src="/homeHero.png" alt="Hero" className="img-fluid mb-5" />
        </div>

        <div className="col-lg-8">
          <h1 className="display-5 fw-bold">Invest in Everything</h1>

          <p className="lead text-muted mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more.
          </p>

          <button className="btn btn-primary btn-lg px-5">Sign Up Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
