import React from "react";
import "./topbar.css";
import { useNavigate } from "react-router-dom";

export default function Topbar(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/.");
  };
  const logout = () => {
    fetch("http://localhost:8080/api/users/logout", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        routeChange();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social Movie</span>
      </div>
      <div className="topbarCentre">
        <span className="logo">
          Welcome {props.location.state.name}, share your favorite movies with
          your friends!
        </span>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks"></div>
        <div className="topbarIcons" onClick={logout}>
          Logout
        </div>
      </div>
    </div>
  );
}
