import "./feed.css";
import Movie from "../movie/movie";
import React from "react";

export default function Feed(props) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        {props.movies.map((m) => (
          <Movie key={m.id} post={m} />
        ))}
      </div>
    </div>
  );
}
