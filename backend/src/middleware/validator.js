const { check } = require("express-validator");

const userValidationMiddleware = [
  check("email").isEmail().withMessage("email must be valid"),
  check("firstname").isLength({ min: 2 }),
];

module.exports = userValidationMiddleware;
