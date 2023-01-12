const express = require("express");

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

router.get("/", (req, res, next) => {
  res.send({
    message: "GET endpoint for /",
  });
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
