import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleDashboardClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    window.location.href = "http://localhost:3000";
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-lg-0">

            {/* About */}
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>

            {/* Product */}
            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>

            {/* Pricing */}
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>

            {/* Support */}
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>

            {/* Dashboard Always Visible */}
            <li className="nav-item">
              <button
                className="nav-link btn border-0"
                onClick={handleDashboardClick}
              >
                Dashboard
              </button>
            </li>

            {/* Not Logged In */}
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">
                    Signup
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* Logged In User Dropdown */}
                <li className="nav-item dropdown">

                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={(e) => e.preventDefault()}
                  >
                    {user.username}
                  </a>

                  <ul className="dropdown-menu dropdown-menu-end">

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/profile"
                      >
                        Profile
                      </Link>
                    </li>

                    <li>
                      <button
                        className="dropdown-item"
                        onClick={handleDashboardClick}
                      >
                        Dashboard
                      </button>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <button
                        className="dropdown-item"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>

                  </ul>

                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;