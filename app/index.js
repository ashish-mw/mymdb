require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const config = require("./config");

const movieController = require("./controllers/movie.controller");

app.use(morgan("tiny"));

// CRUD
// POST GET PUT/PATCH DELETE
app.use("/movies", movieController);

// 404
app.use((req, res, next) => {
  return res.status(404).send({
    message: "Route not found",
  });
});

// error handlers
app.use((err, req, res, next) => {
  console.log(err);
  return res.status(500).send({
    message: "Internal server error",
  });
});

// start the server
app.listen(config.appPort, (err) => {
  if (err) {
    console.log(`Cant run ${config.appName} on ${config.appPort}`);
    console.log(err);
    process.exit(1);
  }
  console.log(`${config.appName} running on port ${config.appPort}`);
});
