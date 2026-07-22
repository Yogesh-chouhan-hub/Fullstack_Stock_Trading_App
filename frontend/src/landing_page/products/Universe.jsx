import React from "react";

const Universe = () => {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="row text-center mb-5">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-6 fw-bold mb-3">The Zerodha Universe</h1>

          <p className="lead text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="row g-5 text-center">
        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid mb-3"
            style={{ maxHeight: "70px" }}
          />
          <p className="text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-3"
            style={{ maxHeight: "70px" }}
          />
          <p className="text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="/tijori.svg"
            alt="Tijori"
            className="img-fluid mb-3"
            style={{ maxHeight: "70px" }}
          />
          <p className="text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        {/* Card 4 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-3"
            style={{ maxHeight: "70px" }}
          />
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        {/* Card 5 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-3"
            style={{ maxHeight: "70px" }}
          />
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks and ETFs.
          </p>
        </div>

        {/* Card 6 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src="/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-3"
            style={{ maxHeight: "70px" }}
          />
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="row mt-5">
        <div className="col text-center">
          <button className="btn btn-primary btn-lg px-5">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Universe;
