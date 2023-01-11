const express = require("express");
const userRouter = require("./userRouter");
const cityRouter = require("./cityRouter");
const router = express.Router();

router.use("/users", userRouter);
router.use("/city", cityRouter);
module.exports = router;
