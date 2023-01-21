import React from "react";
import "./filters.css";
import FilterMovies from "../FilterMovies";
export default function Filters(props) {
  return (
    <>
      <form>
        <label>Movie Name</label>
        <div></div>
        <input
          type="text"
          name="name"
          placeholder="name of the movie"
          className="filterInput"
          id="f1"
        />
      </form>
      <form className="filterTitle">
        <label>Actors</label>
        <div></div>
        <input
          type="text"
          name="actors"
          placeholder="name of actor in the movie"
          className="filterInput"
          id="f2"
        />
      </form>
      <form className="filterTitle">
        <label>Genres</label>
        <div></div>
        <input
          type="text"
          name="genres"
          placeholder="Animation | Comedy | Family | Adventure | Romance | Action | Crime | etc"
          className="filterInput"
          id="f3"
        />
      </form>
      <form className="filterTitle">
        <label>Language</label>
        <div></div>
        <input
          type="text"
          name="language"
          placeholder="en | es | fr | de | ko | pl | ja | zh | da | he | etc"
          className="filterInput"
          id="f4"
        />
      </form>
      <form className="filterTitle">
        <label>Director</label>
        <div></div>
        <input
          type="text"
          name="director"
          placeholder="director of the movie"
          className="filterInput"
          id="f5"
        />
      </form>
      <form className="filterTitle">
        <label>Budget</label>
        <div></div>
        <input
          type="text"
          name="budget"
          placeholder="budget from"
          className="filterInput"
          id="f6"
        />
      </form>
      <form className="filterTitle">
        <label>Popularity</label>
        <div></div>
        <input
          type="text"
          name="popularity"
          placeholder="popularity from"
          className="filterInput"
          id="f7"
        />
      </form>
      <form className="filterTitle">
        <label>Recommended</label>
        <div></div>
        <span className="f8">
          <input
            type="checkbox"
            id="to_me"
            classname="ToMe"
            name="interest"
            value="coding"
          />
          <label for="coding">By me</label>
          <input
            type="checkbox"
            id="by_me"
            classname="ByMe"
            name="interest"
            value="music"
          />
          <label for="music">To me</label>
        </span>
      </form>
      <div className="submitButt">
        <button
          type="button"
          className="submitButton"
          onClick={() => FilterMovies(props.setMovies)}
        >
          Filter
        </button>
      </div>
    </>
  );
}
