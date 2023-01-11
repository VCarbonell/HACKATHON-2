const express = require("express");
const userRouter = require("./userRouter");
const carRouter = require("./carRouter");

const router = express.Router();

router.use("/users", userRouter);
router.use("/car", carRouter);

module.exports = router;
