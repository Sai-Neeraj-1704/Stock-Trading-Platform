import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/auth/login",
        formData
      );

      login(
        response.data.user,
        response.data.token
      );

      alert("Login Successful");

      navigate("/");

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="container mt-5 mb-5">

      <div
        className="card shadow mx-auto"
        style={{
          maxWidth: "500px",
          borderRadius: "15px",
        }}
      >

        <div className="card-body p-5">

          <div className="text-center mb-4">

            <img
              src="/media/images/logo.svg"
              alt="Zerodha"
              style={{ width: "180px" }}
            />

            <h2 className="mt-4">
              Welcome Back
            </h2>

            <p className="text-muted">
              Login to access your portfolio
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
                name="email"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                name="password"
                required
                onChange={handleChange}
              />
            </div>

            <button
              className="btn btn-primary w-100"
              type="submit"
            >
              Login
            </button>

          </form>

          <div className="text-center mt-4">

            <p>
              Don't have an account?
            </p>

            <Link
              to="/signup"
              className="btn btn-outline-primary"
            >
              Create Account
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;