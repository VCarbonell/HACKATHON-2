const db = require("../../config")

const findAll = () => {
    return db
      .promise()
      .query("SELECT * FROM city ;")
      .then(([res]) => res);
  };



  module.exports = {
    findAll,
  };
  