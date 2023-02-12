const express = require("express");

const userRouter = express.Router();

const {
  addClient,
  getUserById,
  getRoleByUser,
  updateUser,
  userLogin,
  userLogout,
} = require("../controllers/userController");
const credentialsCheck = require("../middleware/credentialsCheck");
const authorization = require("../helpers/authentication");

userRouter.post("/newClient", credentialsCheck, addClient);
userRouter.get("/authCheck", authorization, (req, res) => {
  const email = req.userEmail;
  res.status(200).send(email);
});
userRouter.get("/", authorization, getUserById);
userRouter.post("/login", credentialsCheck, userLogin);
userRouter.get("/logout", authorization, userLogout);
userRouter.get("/roleCheck", authorization, getRoleByUser);
userRouter.put("/update", authorization, updateUser);

module.exports = userRouter;
