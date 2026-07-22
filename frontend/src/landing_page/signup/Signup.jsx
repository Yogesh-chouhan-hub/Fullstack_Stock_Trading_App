import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:5174/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <h2 className="text-center fw-bold mb-4">Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              className="form-control form-control-lg"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>

          <button className="btn btn-primary btn-lg w-100 rounded-3">
            Create Account
          </button>

          <p className="text-center text-muted mt-4 mb-0">
            Already have an account?
            <Link to="/login" className="text-decoration-none fw-semibold">
              Login
            </Link>
          </p>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
