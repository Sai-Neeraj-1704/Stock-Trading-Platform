import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

function Signup() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
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
        "http://localhost:3002/auth/signup",
        formData
      );

      login(
        response.data.user,
        response.data.token
      );

      navigate("/");

    } catch (err) {

  console.log(err);

  console.log(err.response);

  alert(
    JSON.stringify(
      err.response?.data || err.message
    )
  );

}

  };

  return (

    <div className="container mt-5 mb-5">

      <div
        className="card mx-auto shadow"
        style={{ maxWidth: "500px" }}
      >

        <div className="card-body p-5">

          <h2 className="text-center mb-4">
            Create Account
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">

              <label>
                Username
              </label>

              <input
                type="text"
                className="form-control"
                name="username"
                required
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">

              <label>
                Email
              </label>

              <input
                type="email"
                className="form-control"
                name="email"
                required
                onChange={handleChange}
              />

            </div>

            <div className="mb-3">

              <label>
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
            >
              Signup
            </button>

          </form>

          <div className="mt-3 text-center">

            Already have an account?

            <Link
              to="/login"
              className="ms-2"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Signup;