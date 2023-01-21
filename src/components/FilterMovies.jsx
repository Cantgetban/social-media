async function FilterMovies(setMovies) {
  var MovieName = document.getElementById("f1").value;
  var Actors = document.getElementById("f2").value;
  var Genres = document.getElementById("f3").value;
  var Language = document.getElementById("f4").value;
  var Director = document.getElementById("f5").value;
  var Budget = document.getElementById("f6").value;
  var Popularity = document.getElementById("f7").value;
  var RecommendedByMe = document.getElementById("by_me").checked;
  var RecommendedToMe = document.getElementById("to_me").checked;
  var filters = {};

  filters["adultFilter"] = { isActive: false, isAdult: false };
  filters["revenueFilter"] = { isActive: false, from: 30, to: 3000000 };
  if (Budget === "") {
    filters["budgetFilter"] = { isActive: false, from: 30, to: 21000000 };
  } else {
    filters["budgetFilter"] = {
      isActive: true,
      from: Budget,
      to: 999999999999999,
    };
  }
  if (Language === "") {
    filters["languageFilter"] = { isActive: false, language: "en" };
  } else {
    filters["languageFilter"] = { isActive: true, language: Language };
  }
  if (Actors === "") {
    filters["actorFilter"] = { isActive: false, actor: "Harold Weed" };
  } else {
    filters["actorFilter"] = { isActive: true, actor: Actors };
  }
  if (Director === "") {
    filters["directorFilter"] = { isActive: false, director: "George Lucas" };
  } else {
    filters["directorFilter"] = { isActive: true, director: Director };
  }
  if (Popularity === "") {
    filters["popularityFilter"] = { isActive: false, from: 0, to: 30 };
  } else {
    filters["popularityFilter"] = {
      isActive: true,
      from: Popularity,
      to: 9999999999999,
    };
  }
  if (MovieName === "") {
    filters["titleFilter"] = { isActive: false, title: "something" };
  } else {
    filters["titleFilter"] = { isActive: true, title: MovieName };
  }
  if (Genres === "") {
    filters["genreFilter"] = { isActive: false, genre: "Action" };
  } else {
    filters["genreFilter"] = { isActive: true, genre: Genres };
  }
  if (RecommendedByMe === false) {
    filters["recommendedToUserFilter"] = { isActive: false };
  } else {
    filters["recommendedToUserFilter"] = { isActive: true };
  }
  if (RecommendedToMe === false) {
    filters["userRecommendedToOtherFilter"] = { isActive: false };
  } else {
    filters["userRecommendedToOtherFilter"] = { isActive: true };
  }
  await fetch("http://localhost:8080/movies/", {
    credentials: "include",
    method: "POST",
    body: JSON.stringify({
      idToStartFrom: 1,
      isBackwards: false,
      numMovies: 200,
      filters: filters,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("succ");
      console.log(data);
      setMovies(data);
    })
    .catch((err) => {
      console.log("ERROR");
      console.log(err.message);
    });
}
export default FilterMovies;
