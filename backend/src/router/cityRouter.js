const express = require("express");

const cityRouter = express.Router();

const cityController = require("../controllers/cityController");

cityRouter.get("/", cityController.getCity);
cityRouter.get("/:name", cityController.getCityByName);

module.exports = cityRouter;
