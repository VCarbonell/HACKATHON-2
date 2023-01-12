const nodemailer = require("nodemailer");
const bookingModel = require("../models/booking");
const {
  bookingConfirmationMail,
} = require("../services/bookingConfirmationMail");
const transporter = require("../services/mailer");

const bookingController = {
  addBooking: (req, res, next) => {
    const { start_date, end_date, car_id, user_id } = req.body;
    const bookingData = {
      start_date,
      end_date,
      car_id,
      user_id,
    };
    bookingModel
      .createBooking(bookingData)
      .then((result) => {
        res.status(201).send({ id: result.insertId, bookingData });
        return next();
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
  bookingConfirmation: (req, res, next) => {
    const { email, company, car, start_date, end_date, city } = req.body;

    const data = bookingConfirmationMail(
      email,
      company,
      car,
      start_date,
      end_date,
      city
    );

    transporter.sendMail(data, (error, info) => {
      if (error) {
        console.warn(`Error occurred. ${error.message}`);
        return process.exit(1);
      }

      console.warn("Message sent: %s", info.messageId);

      return res.status(200).send({
        message: "email sent successfully please follow instructions",
        link: nodemailer.getTestMessageUrl(info),
      });
    });
  },
};

module.exports = bookingController;
