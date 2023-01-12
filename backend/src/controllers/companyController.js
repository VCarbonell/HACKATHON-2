const companyModel = require("../models/company");
const { passwordHash, passwordVerify } = require("../helpers/password");
const { jwtSign } = require("../helpers/jwt");

const companyController = {
  addCompany: async (req, res, next) => {
    const companyData = req.body;
    try {
      const hash = await passwordHash(companyData.password);

      companyModel
        .createCompany({ ...companyData, password: hash, role_id: 2 })
        .then((result) => {
          res.status(201).send({
            id: result.insertId,
            companyName: companyData.name_company,
          });
        })
        .catch((err) => next(err));
    } catch (err) {
      next(err);
    }
  },
  getCompanyByEmail: (req, res, next) => {
    const email = req.userEmail;
    companyModel
      .findCompanyByEmail(email)
      .then((result) => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },
  getCompanyById: (req, res, next) => {
    const id = req.userId;
    companyModel
      .findCompanyById(id)
      .then((result) => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },
  getRoleByCompany: (req, res, next) => {
    const id = req.userId;
    companyModel
      .findRoleByCompany(id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => next(err));
  },
  updateCompany: (req, res, next) => {
    const companyData = req.body;
    const id = req.userId;
    companyModel
      .updateCompany(companyData, id)
      .then((result) => {
        if (result.affectedRows !== 0) {
          res.status(201).send({ message: "Your profile has been updated." });
        } else {
          res.status(401).send({ message: "Error updating profile." });
        }
      })
      .catch((err) => next(err));
  },
  companyLogin: (req, res, next) => {
    const { email, password } = req.body;
    companyModel
      .findCompanyByEmail(email)
      .then(async ([result]) => {
        if (!result) {
          res.status(401).send({ error: "Invalid email." });
        } else {
          const { id, name_company, password: hash } = result;
          if (await passwordVerify(hash, password)) {
            const token = jwtSign(
              {
                id,
                name_company,
                email,
              },
              {
                expiresIn: "1h",
              }
            );
            res
              .cookie("access_token", token, {
                httpOnly: true,
                secure: false,
              })
              .status(200)
              .send({ id, name_company, email });
          } else {
            res.status(401).send({ error: "Invalid password." });
          }
        }
      })
      .catch((err) => next(err));
  },
  companyLogout: (_, res) => {
    return res.clearCookie("access_token").sendStatus(200);
  },
};

module.exports = companyController;
