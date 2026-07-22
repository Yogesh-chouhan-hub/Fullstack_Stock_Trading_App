import React from "react";

const Stats = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        {/* Left Section */}
        <div className="col-12 col-lg-6">
          <h1 className="fw-bold mb-5">Trust with confidence</h1>

          <h4>Customer-first always</h4>

          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h4>No spam or gimmicks</h4>

          <p className="text-muted">
            No spam, gimmicks, gamification, or annoying push notifications.
            High-quality apps that you use at your own pace.
          </p>

          <h4>The Zerodha universe</h4>

          <p className="text-muted">
            Not just an app, but a complete ecosystem. Our investments in 30+
            fintech startups offer services tailored to your needs.
          </p>

          <h4>Do better with money</h4>

          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions—we help you make better financial decisions.
          </p>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src="/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
          />

          <div className="row g-3">
            <div className="col-12 col-md-6">
              <a href="#" className="text-decoration-none fw-semibold">
                Explore our products →
              </a>
            </div>

            <div className="col-12 col-md-6">
              <a href="#" className="text-decoration-none fw-semibold">
                Try Kite →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
