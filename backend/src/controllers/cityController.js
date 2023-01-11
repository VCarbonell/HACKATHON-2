const cityModels = require("../models/cityModels");

const cityController = {
  getCity: (req, res, next) => {
    cityModels
      .findAll()
      .then((city) => res.send(city))
      .catch((err) => next(err));
  },

  getOneCity: (req, res, next) => {
    const { id } = req.params;
    cityModels
      .findOne(id)
      .then((city) => res.send(city))
      .catch((err) => next(err));
  },
};

module.exports = cityController;
