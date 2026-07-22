import React, { useState } from "react";

const Apps = ({ btn }) => {
  return (
    <div className=" my-4 py-4 d-flex justify-content-center align-items-center">
      <button className="btn btn-primary" onClick={() => btn()}>
        Logout
      </button>
    </div>
  );
};

export default Apps;
