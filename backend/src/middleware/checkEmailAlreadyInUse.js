const userModel = require("../models/users");

const checkEmailAlreadyInUse = (req, res, next) => {
  userModel
    // je le récupere de mon body donc req.body.email
    .findByEmail(req.body.email)
    .then(([user]) => {
      if (user) {
        return res.status(404).send("Email already in use");
      }
      return next();
    })
    .catch((err) => next(err));
};

module.exports = checkEmailAlreadyInUse;
