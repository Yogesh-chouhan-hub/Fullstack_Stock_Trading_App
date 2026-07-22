import React from "react";

const Team = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">People</h1>

      <div className="row align-items-center g-5">
        {/* Left Section */}
        <div className="col-12 col-lg-5 text-center">
          <img
            src="/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle mb-4"
            style={{ maxWidth: "300px", width: "80%" }}
          />

          <h2 className="h4 mb-1">Nithin Kamath</h2>
          <p className="text-muted">Founder & CEO</p>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-7 text-muted">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
