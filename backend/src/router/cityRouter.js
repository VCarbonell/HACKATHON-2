const express = require("express");

const cityRouter = express.Router();

const cityController = require("../controllers/cityController");

cityRouter.get("/city", cityController.getCity);

module.exports = cityRouter;
