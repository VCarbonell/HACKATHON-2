const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const carController = require("../controllers/carController");
const uploadPic = require("../middleware/uploadPic.jsx");

const carRouter = express.Router();
carRouter.post("/addCar", carController.addCar);
carRouter.post("imageUpload", upload.single("car"), (req, res) => {
  const { originalname } = req.file;
  const { filename } = req.file;
  // eslint-disable-next-line no-unused-expressions
  fs.rename(`uploads/${filename}`, `uploads/${originalname}`, (err) => {
    if (err) throw err;
  });
});
carRouter.get("/", carController.getCars);
carRouter.get("/makes", carController.getAllMakes);
// carRouter.post("/", uploadPic, carController.addCar);
carRouter.put("/:id", carController.updateCar);
carRouter.delete("/:id", carController.deleteCar);

module.exports = carRouter;
