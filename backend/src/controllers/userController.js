/* eslint-disable camelcase */
const userModel = require("../models/users");
const { passwordHash, passwordVerify } = require("../helpers/password");
const { jwtSign } = require("../helpers/jwt");

const userController = {
  addClient: async (req, res, next) => {
    const userData = req.body;
    try {
      const hash = await passwordHash(userData.password);

      userModel
        .createUser({ ...userData, password: hash, role_id: 3 })
        .then((result) => {
          res.status(201).send({
            id: result.insertId,
            email: userData.email,
          });
        })
        .catch((err) => next(err));
    } catch (err) {
      next(err);
    }
  },
  addCompany: async (req, res, next) => {
    const userData = req.body;
    try {
      const hash = await passwordHash(userData.password);

      userModel
        .createUser({ ...userData, password: hash, role_id: 2 })
        .then((result) => {
          res.status(201).send({
            id: result.insertId,
            companyName: userData.company_name,
          });
        })
        .catch((err) => next(err));
    } catch (err) {
      next(err);
    }
  },
  getUserByEmail: (req, res, next) => {
    const email = req.userEmail;
    userModel
      .findUserByEmail(email)
      .then((result) => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },
  getUserById: (req, res, next) => {
    const id = req.userId;
    userModel
      .findUserById(id)
      .then((result) => {
        if (result.length === 0) {
          res.sendStatus(404);
        } else {
          res.send(result);
        }
      })
      .catch((err) => next(err));
  },
  getRoleByUser: (req, res, next) => {
    const id = req.userId;
    userModel
      .findRoleByUser(id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => next(err));
  },
  updateUser: (req, res, next) => {
    const userData = req.body;
    const id = req.userId;
    userModel
      .updateUser(userData, id)
      .then((user) => {
        if (user.affectedRows !== 0) {
          res.status(201).send({ message: "Your profile has been updated." });
        } else {
          res.status(401).send({ message: "Error updating user." });
        }
      })
      .catch((err) => next(err));
  },
  userLogin: (req, res, next) => {
    const { email, password } = req.body;
    userModel
      .findUserByEmail(email)
      .then(async ([user]) => {
        if (!user) {
          res.status(401).send({ error: "Invalid email." });
        } else {
          const {
            id,
            firstname,
            lastname,
            adress,
            licence_number,
            password: hash,
          } = user;
          if (await passwordVerify(hash, password)) {
            const token = jwtSign(
              {
                id,
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
              .send({
                id,
                firstname,
                lastname,
                email,
                licence_number,
                adress,
              });
          } else {
            res.status(401).send({ error: "Invalid password." });
          }
        }
      })
      .catch((err) => next(err));
  },
  userLogout: (_, res) => {
    return res.clearCookie("access_token").sendStatus(200);
  },
};

module.exports = userController;
