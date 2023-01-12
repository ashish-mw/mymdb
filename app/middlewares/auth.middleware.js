const checkForUser = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).send({
      message: "Unauthorized: user id not found",
    });
  }

  const authSplits = authHeader.split(" ");
  if (authSplits.length != 2) {
    return res.status(403).send({
      message: "Unauthorized: user id is in invalid format",
    });
  }
  const userId = authSplits[1];
  res.locals.user = userId;

  next();
};

module.exports = {
  checkForUser,
};
