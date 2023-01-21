import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import "./Home.css";
import React, { useState, useEffect } from "react";
import { dummyMovies } from "../../dummyData.js";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  return (
    <>
      <Topbar location={location} />
      <div className="homeContainer">
        <Sidebar setMovies={setMovies} />
        <Feed movies={movies} />
      </div>
    </>
  );
}
