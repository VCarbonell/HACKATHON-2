const carModel = require("../models/car");

const carController = {
  getCars: (req, res, next) => {
    const where = [];

    if (req.query.city != null) {
      where.push({
        column: "city_id",
        value: req.query.city,
        operator: "=",
      });
    }

    if (req.query.price != null) {
      where.push({
        column: "price",
        value: req.query.price,
        operator: "<=",
      });
    }

    if (req.query.type != null) {
      where.push({
        column: "type_id",
        value: req.query.type,
        operator: "=",
      });
    }

    if (req.query.seats != null) {
      where.push({
        column: "number_of_seats",
        value: req.query.seats,
        operator: ">=",
      });
    }

    if (req.query.fuel != null) {
      where.push({
        column: "fuel",
        value: req.query.fuel,
        operator: "=",
      });
    }

    carModel
      .getCars(where)
      .then((result) => res.send(result))
      .catch((err) => next(err));
  },

  addCar: (req, res, next) => {
    const carInfo = req.body;
    console.log('ici what ever');
    carModel
      .addCar(carInfo)
      .then((result) => res.status(201).send({ id: result.insertId, carInfo }))
      .catch((err) => next(err));
  },

  updateCar: (req, res, next) => {
    const { id } = req.params;
    const carInfo = req.body;
    carModel
      .updateCar(id, carInfo)
      .then((result) => {
        if (result.affectedRows !== 1) {
          return res.status(404).send(`Car ${id} not found`);
        }
        return res.status(200).send({ message: `Car ${id} modified`, carInfo });
      })
      .catch((err) => next(err));
  },

  deleteCar: (req, res, next) => {
    const { id } = req.params;
    carModel
      .deleteCar(id)
      .then((result) => {
        if (result.affectedRows !== 1) {
          return res.status(404).send(`Car ${id} not found`);
        }
        return res.status(200).send(`Car ${id} deleted`);
      })
      .catch((err) => next(err));
  },
  getAllMakes : (req,res,next) => {
    carModel
    .getAllMakes()
    .then((result)=> res.status(200).send(result))
    .catch((err)=> next(err))
  }
};

module.exports = carController;
