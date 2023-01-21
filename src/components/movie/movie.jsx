import React, { useState } from "react";
import "./movie.css";

export default function Post({ post }) {
  const RecommendMovie = (post) => {
    let user = prompt("Please enter the user name");
    fetch("http://localhost:8080/movies/recommend", {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        movieId: post.movieId,
        userName2: user,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          alert("Movie recommended successfully");
        } else {
          alert("Unfortunately couldn't recommend the movie");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  let genres = "";
  let actors = "";
  let overview = post.overview;
  for (var i = 0; i < 5; i++) {
    if (post.genres[i] !== undefined) genres = genres + post.genres[i] + ", ";
    if (post.actors[i] !== undefined) actors = actors + post.actors[i] + ", ";
  }
  genres = genres.slice(0, -2);
  actors = actors.slice(0, -2) + "...";
  if (overview.length > 300) overview = overview.slice(0, 300) + "...";
  return (
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div className="Recommend" onClick={() => RecommendMovie(post)}>
            Recommend
          </div>
          <div class="content">
            <span class="stars"></span>
            <div class="overview">
              <b>Overview</b>: {overview}
            </div>
            <div class="overview">
              <b>Genres</b>: {genres}
            </div>
            <div class="overview">
              <b>Actors</b>: {actors}
            </div>
            <div class="overview">
              <b>Director</b>: {post.directors}
            </div>
            <div class="overview">
              <b>Language</b>: {post.language}
            </div>
          </div>
        </div>
        <div class="face face2">
          <h2>{post.title}</h2>
        </div>
      </div>
    </div>
  );
}
