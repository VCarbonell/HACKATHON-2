const express = require("express");

const cityRouter = express.Router();

const cityController = require("../controllers/cityController");

cityRouter.get("/", cityController.getCity);
cityRouter.get("/:id", cityController.getOneCity);
module.exports = cityRouter;
