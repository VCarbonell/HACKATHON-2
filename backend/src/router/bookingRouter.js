const express = require("express");

const bookingRouter = express.Router();

const {
  addBooking,
  getBookingByUser,
} = require("../controllers/bookingController");
const authorization = require("../helpers/authentication");

bookingRouter.get("/", authorization, getBookingByUser);
bookingRouter.post("/add", authorization, addBooking);

module.exports = bookingRouter;
