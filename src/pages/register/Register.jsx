import React from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/.");
  };

  const RegisterAccount = () => {
    var userName = document.getElementById("RegisterUserName").value;
    var Password = document.getElementById("RegisterPassword").value;
    fetch("http://localhost:8080/api/users/createUser", {
      method: "PUT",
      body: JSON.stringify({
        name: userName,
        password: Password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        if (data.status === 200) routeChange();
        if (data.status === 400) {
          document.getElementById("registerfail").innerHTML =
            "user already exists";
        }
      })
      .catch((err) => {
        console.log("register Failed");
        console.log(err.message);
      });
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Movie</h3>
          <h2 className="loginLogo1">Register</h2>
          <span className="loginDesc">
            Connect with friends and share movies on Social-Movie
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              className="loginInput"
              id="RegisterUserName"
            />
            <input
              placeholder="Password"
              className="loginInput"
              id="RegisterPassword"
            />
            <div id="registerfail"></div>
            <button className="loginButton" onClick={RegisterAccount}>
              Sign up
            </button>
            <button className="loginRgisterButton" onClick={routeChange}>
              Log into account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
