const express = require("express");
const carController = require("../controllers/carController");

const carRouter = express.Router();

carRouter.get("/", carController.getCars);
carRouter.post("/", carController.addCar);
carRouter.put("/:id", carController.updateCar);
carRouter.delete("/:id", carController.deleteCar);

module.exports = carRouter;
