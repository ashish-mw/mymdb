const express = require("express");

const db = require("../models");

const router = express.Router();

router.post("/", (req, res, next) => {
  try {
    res.send({
      message: "POST endpoint for /",
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allMovies = await db.movie.findAll({});
    res.send(allMovies);
  } catch (error) {
    return next(error);
  }
});

router.get("/:movieId", async (req, res, next) => {
  try {
    const movieInfo = await db.movie.findOne({
      where: {
        id: req.params.movieId,
      },
      include: [
        {
          model: db.user,
          as: "createdUserInfo",
        },
      ],
    });
    res.send(movieInfo);
  } catch (error) {
    return next(error);
  }
});

router.put("/", (req, res, next) => {
  res.send({
    message: "PUT endpoint for /",
  });
});

router.delete("/", (req, res, next) => {
  res.send({
    message: "DELETE endpoint for /",
  });
});

module.exports = router;
