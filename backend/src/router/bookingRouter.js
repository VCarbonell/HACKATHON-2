const express = require("express");

const bookingRouter = express.Router();

const {
  addBooking,
  getBookingByUser,
  bookingConfirmation,
} = require("../controllers/bookingController");
const authorization = require("../helpers/authentication");

bookingRouter.get("/:id", getBookingByUser);
bookingRouter.post("/new", addBooking, bookingConfirmation); 

module.exports = bookingRouter;
