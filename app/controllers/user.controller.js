const express = require("express");
const argon2 = require("argon2");

const db = require("../models");
const { makeJWT } = require("../utils");

const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    // TODO: do payload validation
    const user = await db.user.findOne({
      where: {
        username: req.body.username,
      },
      attributes: ["id", "username", "password"],
    });

    if (!user) {
      return res.status(403).send({
        message: "User is not present",
      });
    }

    // compare passwords
    const passwordOk = await argon2.verify(user.password, req.body.password);
    if (!passwordOk) {
      return res.status(403).send({
        message: "User credentials invalid",
      });
    }

    const token = makeJWT({
      user: user.id,
    });

    return res.send({
      token,
    });
  } catch (error) {
    return next(error);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    // TODO: do payload validation
    // check if the username is taken
    const userNameTaken = await db.user.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (userNameTaken) {
      return res.status(400).send({
        message: "Username already taken",
      });
    }

    const passwordHash = await argon2.hash(req.body.password);

    const userPayload = {
      username: req.body.username,
      password: passwordHash,
    };

    const newUser = await db.user.create(userPayload);

    return res.status(201).send({
      id: newUser.id,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
