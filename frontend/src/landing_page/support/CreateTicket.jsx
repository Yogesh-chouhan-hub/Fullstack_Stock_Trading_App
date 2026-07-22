import React from "react";

const CreateTicket = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col m-4 d-flex justify-content-between">
          <h3>Support Portal</h3>
          <button className="btn btn-primary">My tickets</button>
        </div>
        <div className="row m-0 p-0">
          <div className="col m-4 ">
            <input
              type="text"
              placeholder="Eg: How do i open my account, how do i activate F&Q..."
              style={{
                width: "100%",
                padding: "0.8rem",
                paddingLeft: "1.3rem",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
