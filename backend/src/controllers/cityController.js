const cityModel = require("../models/cityModelsde");


const cityController = {

    getCity: (req, res, next) => {
        artModel
          .findAll()
          .then((city) => res.send(city))
          .catch((err) => next(err));
      },




}

module.exports = cityController;