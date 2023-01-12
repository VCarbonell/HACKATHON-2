const db = require("../../config");

const createBooking = (payload) => {
  return db
    .promise()
    .query("INSERT INTO booking SET ?", [payload])
    .then(([res]) => res);
};

const findBookingByUser = (id) => {
  return db
    .promise()
    .query(
      "SELECT * FROM booking join car on car.id = booking.car_id JOIN company ON company.id=car.company_id where user_id = ?",

      [Number(id)]
    )
    .then(([res]) => res);
};

module.exports = { createBooking, findBookingByUser };
