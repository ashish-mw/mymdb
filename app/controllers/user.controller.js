const express = require("express");
const argon2 = require("argon2");

const db = require("../models");
const { makeJWT } = require("../utils");
const validateSchema = require("../middlewares/validate.middleware");
const userSchemas = require("../validations/user.validation");
const { checkForUser } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post(
  "/login",
  validateSchema(userSchemas.userSchema),
  async (req, res, next) => {
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
  }
);

router.post(
  "/signup",
  validateSchema(userSchemas.userSchema),
  async (req, res, next) => {
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
  }
);

router.get("/info", checkForUser, async (req, res, next) => {
  try {
    const userInfo = await db.user.findOne({
      where: {
        id: res.locals.user,
      },
      attributes: ["id", "username", "createdAt"],
    });
    const json = JSON.parse(JSON.stringify(userInfo));
    return res.send({
      ...json,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
