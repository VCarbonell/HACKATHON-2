const cityModels = require("../models/cityModels");

const cityController = {
  getCity: (req, res, next) => {
    cityModels
      .findAll()
      .then((city) => res.send(city))
      .catch((err) => next(err));
  },

  getCityByName: (req, res, next) => {
    const { name } = req.params;
    cityModels
      .findByName(name)
      .then((city) => res.send(city))
      .catch((err) => next(err));
  },
};

module.exports = cityController;
