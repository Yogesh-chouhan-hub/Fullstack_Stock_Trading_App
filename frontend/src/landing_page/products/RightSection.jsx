import React from "react";

const RightSection = ({ imageUrl, rsTitle, rsDes }) => {
  return (
    <div className="container-fluid mt-5 mb-5 p-5">
      <div className="row">
        <div className="col-6 p-5">
          <h2 className="mb-3">{rsTitle}</h2>
          <p>{rsDes}</p>
          <a href="">Learn more →</a>
        </div>
        <div className="col-6">
          <img src={imageUrl} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
