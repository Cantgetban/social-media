import React from "react";
import Filters from "../Filters/Filters";
import "./sidebar.css";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="topbarCentre"></div>
        <div className="filters"> Filters</div>
        <hr className="sidebarHr" />
        <Filters setMovies={props.setMovies} />
      </div>
    </div>
  );
}
