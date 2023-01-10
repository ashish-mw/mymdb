const { findUser, findMovieInfo } = require("./db");

// const user = findUser({
//   username: "jake",
// });

// console.log(user);

const movie = findMovieInfo({
  movieId: "1673326904913",
});
console.log(movie);
