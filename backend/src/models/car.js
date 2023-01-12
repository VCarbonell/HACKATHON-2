const db = require("../../config");

const getCars = (where) => {
  const initialSql = `SELECT car.*, city.name, city.department, city.zipcode, make_name as modele, type_name FROM car 
                        JOIN city ON city.id=city_id
                        JOIN make ON make.id=make_id
                        JOIN type ON type.id=type_id
                        WHERE avalaible = 1`;
  if (where.length > 0) {
    return db
      .promise()
      .query(
        where.reduce(
          (sql, { column, operator }) => `${sql} and ${column} ${operator} ?`,
          initialSql
        ),
        where.map(({ value }) => value)
      )
      .then(([res]) => res);
  }
  return db
    .promise()
    .query(initialSql)
    .then(([res]) => res);
};

const addCar = (carInfo) => {
  return db
    .promise()
    .query("INSERT INTO car SET ? ;", [carInfo])
    .then(([res]) => res);
};

const updateCar = (carId, carInfo) => {
  return db
    .promise()
    .query("UPDATE car SET ? WHERE id = ? ;", [carInfo, carId])
    .then(([res]) => res);
};

const deleteCar = (carId) => {
  return db
    .promise()
    .query("DELETE FROM car WHERE id = ? ;", [carId])
    .then(([res]) => res);
};
const getAllMakes = () => {
  return db
  .promise()
  .query('SELECT * from make')
  .then(([res])=> res)

}
module.exports = {
  getCars,
  addCar,
  updateCar,
  deleteCar,
  getAllMakes 
};
