import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] =
    useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(
      !isProfileDropdownOpen
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    window.location.href =
      "http://localhost:3001";
  };

  const menuClass = "menu";
  const activeMenuClass =
    "menu selected";

  return (
    <div className="menu-container">
      <img
        src="logo.png"
        alt="logo"
        style={{ width: "50px" }}
      />

      <div className="menus">
        <ul>
          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/"
              onClick={() =>
                handleMenuClick(0)
              }
            >
              <p
                className={
                  selectedMenu === 0
                    ? activeMenuClass
                    : menuClass
                }
              >
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/orders"
              onClick={() =>
                handleMenuClick(1)
              }
            >
              <p
                className={
                  selectedMenu === 1
                    ? activeMenuClass
                    : menuClass
                }
              >
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/holdings"
              onClick={() =>
                handleMenuClick(2)
              }
            >
              <p
                className={
                  selectedMenu === 2
                    ? activeMenuClass
                    : menuClass
                }
              >
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/positions"
              onClick={() =>
                handleMenuClick(3)
              }
            >
              <p
                className={
                  selectedMenu === 3
                    ? activeMenuClass
                    : menuClass
                }
              >
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/funds"
              onClick={() =>
                handleMenuClick(4)
              }
            >
              <p
                className={
                  selectedMenu === 4
                    ? activeMenuClass
                    : menuClass
                }
              >
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/apps"
              onClick={() =>
                handleMenuClick(5)
              }
            >
              <p
                className={
                  selectedMenu === 5
                    ? activeMenuClass
                    : menuClass
                }
              >
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        <div
          className="profile"
          onClick={
            handleProfileClick
          }
          style={{
            cursor: "pointer",
          }}
        >
          <div className="avatar">
            {user?.username
              ?.charAt(0)
              ?.toUpperCase() || "G"}
          </div>

          <p className="username">
            {user?.username ||
              "Guest"}
          </p>
        </div>

        {isProfileDropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "65px",
              right: "20px",
              backgroundColor:
                "#fff",
              border:
                "1px solid #ddd",
              borderRadius: "8px",
              boxShadow:
                "0px 2px 8px rgba(0,0,0,0.15)",
              minWidth: "180px",
              zIndex: 9999,
            }}
          >
            <div
              style={{
                padding: "12px",
                fontWeight: "bold",
                borderBottom:
                  "1px solid #eee",
              }}
            >
              {user?.username}
            </div>

            <button
              style={{
                width: "100%",
                border: "none",
                background:
                  "transparent",
                padding: "12px",
                textAlign: "left",
                cursor: "pointer",
              }}
              onClick={() =>
                (window.location.href =
                  "http://localhost:3001/profile")
              }
            >
              Profile
            </button>

            <button
              style={{
                width: "100%",
                border: "none",
                background:
                  "transparent",
                padding: "12px",
                textAlign: "left",
                cursor: "pointer",
                color: "red",
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;