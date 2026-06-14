import React,
{
  useState,
  useEffect,
} from "react";

import axios from "axios";

function Profile() {

  const [user, setUser] =
    useState(null);

  const [formData, setFormData] =
    useState({
      username: "",
      email: "",
    });

  useEffect(() => {

    const storedUser =
      JSON.parse(
        localStorage.getItem("user")
      );

    if (storedUser) {

      setUser(storedUser);

      setFormData({
        username:
          storedUser.username,
        email:
          storedUser.email,
      });

    }

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        const response =
          await axios.put(
            "http://localhost:3002/auth/profile",
            formData,
            {
              headers: {
                Authorization:
                  token,
              },
            }
          );

        localStorage.setItem(
          "user",
          JSON.stringify(
            response.data.user
          )
        );

        alert(
          "Profile Updated"
        );

      } catch (err) {

        alert(
          err.response?.data
            ?.message ||
            "Update Failed"
        );

      }
    };

  return (

    <div className="container mt-5 mb-5">
      <div className="card p-5">

        <h2>
          Profile Settings
        </h2>

        <hr />

        <form
          onSubmit={
            handleSubmit
          }
        >

          <div className="mb-3">

            <label>
              Username
            </label>

            <input
              type="text"
              name="username"
              className="form-control"
              value={
                formData.username
              }
              onChange={
                handleChange
              }
            />

          </div>

          <div className="mb-3">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
            />

          </div>

          <button
            className="btn btn-primary"
          >
            Save Changes
          </button>

        </form>

      </div>

    </div>
  );
}

export default Profile;