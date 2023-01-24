const express = require("express");

const { checkForUser } = require("../middlewares/auth.middleware");
const db = require("../models");

const validateSchema = require("../middlewares/validate.middleware");
const movieSchemas = require("../validations/movie.validation");

const router = express.Router();

router.post(
  "/",
  checkForUser,
  validateSchema(movieSchemas.movieSchema),
  async (req, res, next) => {
    try {
      const moviePayload = {
        ...req.body,
        createdByUser: res.locals.user,
      };

      const newMovie = await db.movie.create(moviePayload);
      res.send(newMovie);
    } catch (error) {
      return next(error);
    }
  }
);

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
          attributes: ['id', 'username']
        },
      ],
    });
    res.send(movieInfo);
  } catch (error) {
    return next(error);
  }
});

router.put(
  "/:movieId",
  checkForUser,
  validateSchema(movieSchemas.movieSchema),
  async (req, res, next) => {
    try {
      const movie = await db.movie.findOne({
        where: {
          id: req.params.movieId,
        },
      });

      if (!movie) {
        return res.status(404).send({
          message: "Movie not found",
        });
      }

      if (req.body.genre) {
        movie.genre = req.body.genre;
        // await db.movie.update(req.body, {
        //   where: {
        //     id: req.params.movieId,
        //   },
        // });
      }
      await movie.save();

      return res.send(movie);
    } catch (error) {
      return next(error);
    }
  }
);

router.delete("/:movieId", checkForUser, async (req, res, next) => {
  try {
    const deleteCount = await db.movie.destroy({
      where: {
        id: req.params.movieId,
        createdByUser: res.locals.user,
      },
    });
    if (deleteCount === 0) {
      return res.status(404).json({
        message: "Movie not found or you are not the owner",
      });
    }
    res.send({
      deleted: deleteCount,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
