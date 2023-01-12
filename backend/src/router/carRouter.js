const express = require("express");
const carController = require("../controllers/carController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const uploadPic = require('../middleware/uploadPic.jsx');


const carRouter = express.Router();
carRouter.post("/", upload.single("car"), (req, res, next) => {
  const { originalname } = req.file;
	const { filename } = req.file;
	fs
		.rename(`uploads/${filename}`, `uploads/${originalname}`, (err) => {
			if (err) throw err;
      return next()
		}), carController.addCar;
});
carRouter.get("/", carController.getCars);
carRouter.get("/makes", carController.getAllMakes);
// carRouter.post("/", uploadPic, carController.addCar);
carRouter.put("/:id", carController.updateCar);
carRouter.delete("/:id", carController.deleteCar);

module.exports = carRouter;
