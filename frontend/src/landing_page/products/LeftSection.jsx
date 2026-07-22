import React from "react";

const LeftSection = ({ imageUrl, lsTitle, lsDes }) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-5">
        {/* Left Image */}
        <div className="col-12 col-lg-6 text-center">
          <img src={imageUrl} alt={lsTitle} className="img-fluid" />
        </div>

        {/* Right Content */}
        <div className="col-12 col-lg-6">
          <h2 className="fw-bold mb-3">{lsTitle}</h2>

          <p className="text-muted mb-4">{lsDes}</p>

          {/* Links */}
          <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
            <a href="#" className="text-decoration-none fw-semibold">
              Try demo →
            </a>

            <a href="#" className="text-decoration-none fw-semibold">
              Learn more →
            </a>
          </div>

          {/* Store Buttons */}
          <div className="d-flex flex-wrap gap-3">
            <img
              src="/googlePlayBadge.svg"
              alt="Google Play"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />

            <img
              src="/appstoreBadge.svg"
              alt="App Store"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
