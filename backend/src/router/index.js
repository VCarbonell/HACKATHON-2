const express = require("express");
const userRouter = require("./userRouter");
const carRouter = require("./carRouter");
const cityRouter = require("./cityRouter");
const companyRouter = require("./companyRouter");
const bookingRouter = require("./bookingRouter");

const router = express.Router();

router.use("/users", userRouter);
router.use("/car", carRouter);
router.use("/city", cityRouter);
router.use("/company", companyRouter);
router.use("/booking", bookingRouter);

module.exports = router;
