import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/./register");
  };
  const moveToFeed = () => {
    var userName = document.getElementById("LoginUserName").value;
    var Password = document.getElementById("LoginPassword").value;
    fetch("http://localhost:8080/api/users/login", {
      credentials: "include",
      method: "PUT",
      body: JSON.stringify({
        user_id: null,
        name: userName,
        password: Password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        if (data.status === 200) {
          navigate("/./feed", {
            state: {
              name: userName,
            },
          });
        } else {
          document.getElementById("loginfail").innerHTML =
            "user doesn't exist or password incorrect";
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Movie</h3>
          <h2 className="loginLogo1">Login</h2>
          <span className="loginDesc">
            Connect with friends and share movies on Social-Movie
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              className="loginInput"
              id="LoginUserName"
            />
            <input
              placeholder="Password"
              className="loginInput"
              id="LoginPassword"
            />
            <div id="loginfail"></div>
            <button className="loginButton" onClick={moveToFeed}>
              Log In
            </button>
            <button className="loginRgisterButton" onClick={routeChange}>
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
