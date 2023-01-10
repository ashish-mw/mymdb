require("dotenv").config();

// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING); // Example for postgres

const db = require("./models");

async function insertAMovie() {
  // create a movie as a user
  const moviePayload = {
    createdByUser: "3f16cb37-b615-4999-9c69-523b3e3de3dc",
    name: "The Matrix",
    genre: "sci-fi",
    language: "English",
    yearOfRelease: 1998,
  };

  return db.movie.create(moviePayload);
}

async function findMovie({ id }) {
  return db.movie.findOne({
    where: {
      id,
    },
  });
}

async function updateMovie() {
  const movieId = "609f0181-086d-43dc-9f3a-e2c6fe0c2af1";
  const updatePayload = {
    name: "The Matrix Reloaded III",
  };
  return db.movie.update(updatePayload, {
    where: {
      id: movieId,
    },
  });
}

async function deleteMovie({ id }) {
  return db.movie.destroy({
    where: {
      id,
    },
  });
}

async function fetchMovieWithInfo({ id }) {
  return db.movie.findOne({
    where: {
      id,
    },
    // raw: true,
    include: [
      {
        model: db.user,
        as: "createdUserInfo",
      },
    ],
  });
}

async function main() {
  try {
    // C
    // const newMovie = await insertAMovie();
    // console.log(newMovie);

    // R
    // const found = await findMovie({
    //   id: "609f0181-086d-43dc-9f3a-e2c6fe0c2af1",
    // });
    // console.log(found);

    // U
    // const updatedMovie = await updateMovie();
    // console.log(updatedMovie);

    // D
    // const deletedMovie = await deleteMovie({
    //   id: "609f0181-086d-43dc-9f3a-e2c6fe0c2af1",
    // });
    // console.log(deletedMovie);

    const movieInfo = await fetchMovieWithInfo({
      id: "374ec076-c7e3-4dbe-800b-460a1bd28fc0",
    });

    const movieObj = JSON.parse(JSON.stringify(movieInfo));
    const rating = 4.5;
    movieObj.rating = rating;
    console.log(movieObj);

    process.exit(0);
  } catch (error) {
    console.log(error);
  }
}

main();
