const db = require("../../config");

const findAll = () => {
  return db
    .promise()
    .query("SELECT * FROM city;")
    .then(([res]) => res);
};
const findOne = (id) => {
  return db
    .promise()
    .query("SELECT * from city WHERE id = ?", [id])
    .then(([res]) => res);
};

module.exports = {
  findAll,
  findOne,
};
