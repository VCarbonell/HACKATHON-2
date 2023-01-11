const bookingModel = require("../models/booking");

const bookingController = {
  addBooking: (req, res, next) => {
    const bookingData = req.body;
    bookingModel
      .createBooking(bookingData)
      .then((result) => {
        res.status(201).send({ id: result.insertId, bookingData });
      })
      .catch((err) => next(err));
  },
  getBookingByUser: (req, res, next) => {
    const id = req.userId;
    bookingModel
      .findBookingByUserId(id)
      .then((result) => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },
};

module.exports = bookingController;
