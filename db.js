const { users, movies, ratings } = require("./models");

/**
 * Search for a user from the users array
 * @param {searchFilter} searchFilter - filter object.
 * @param {string} searchFilter.username - username to do search by.
 * @param {string} searchFilter.userId - id to do search by.
 * @returns {Object|undefined}
 */
const findUser = ({ username, userId }) => {
  // console.log("in find user");
  // console.log(typeof username);
  // return users.find(function (u) {
  //   return u.username === username;
  // });
  return users.find((u) => u.username === username || u.id === userId);
};

/**
 * Gets who created a movie and its rating
 */
const findMovieInfo = ({ movieId }) => {
  // console.log("in find movie");
  // console.log(typeof movieId);
  const movie = movies.find((m) => m.id === movieId);
  if (movie) {
    const user = findUser({ userId: movie.createdByUser });
    movie.createdByUser = user;
  }
  return movie;
};

module.exports = {
  findUser,
  findMovieInfo,
};
