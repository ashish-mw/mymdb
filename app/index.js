require("dotenv").config();
const express = require("express");
const app = express();
const config = require("./config");

// CRUD
// POST GET PUT/PATCH DELETE
app.post("/", (req, res, next) => {
  res.send({
    message: "POST endpoint for /",
  });
});

app.get("/", (req, res, next) => {
  res.send({
    message: "GET endpoint for /",
  });
});

app.use((req, res, next) => {
  return res.status(404).send({
    message: "Route not found",
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
