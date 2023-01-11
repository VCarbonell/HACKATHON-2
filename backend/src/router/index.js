const express = require("express");
const userRouter = require("./userRouter");
const carRouter = require("./carRouter");
const cityRouter = require("./cityRouter");

const router = express.Router();

router.use("/users", userRouter);
router.use("/car", carRouter);

router.use("/city", cityRouter);
module.exports = router;
