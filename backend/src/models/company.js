const db = require("../../config");

const createCompany = (payload) => {
  return db
    .promise()
    .query("INSERT INTO company SET ?", [payload])
    .then(([res]) => res);
};

const findCompanyByEmail = (email) => {
  return db
    .promise()
    .query("SELECT * FROM company where email = ?", [email])
    .then(([res]) => res);
};

const findCompanyById = (id) => {
  return db
    .promise()
    .query("SELECT firstname, lastname, email FROM company where id = ?", [
      Number(id),
    ])
    .then(([res]) => res);
};

const findRoleByCompany = (id) => {
  return db
    .promise()
    .query(
      "SELECT role.id FROM role INNER JOIN company ON role.id = company.role_id where company.id = ?",
      [Number(id)]
    )
    .then(([res]) => res);
};

const updateCompany = (payload, id) => {
  return db
    .promise()
    .query("UPDATE company SET ? where id = ?", [payload, Number(id)])
    .then(([res]) => res);
};

module.exports = {
  createCompany,
  findCompanyByEmail,
  findCompanyById,
  findRoleByCompany,
  updateCompany,
};
