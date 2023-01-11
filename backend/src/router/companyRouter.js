const express = require("express");

const companyRouter = express.Router();

const {
  addCompany,
  getCompanyById,
  getRoleByCompany,
  updateCompany,
  companyLogin,
  companyLogout,
} = require("../controllers/companyController");
const credentialsCheck = require("../middleware/credentialsCheck");
const authorization = require("../helpers/authentication");

companyRouter.post("/newCompany", credentialsCheck, addCompany);
companyRouter.get("/authCheck", authorization, (req, res) => {
  const email = req.userEmail;
  res.status(200).send(email);
});
companyRouter.get("/", authorization, getCompanyById);
companyRouter.post("/login", credentialsCheck, companyLogin);
companyRouter.get("/logout", authorization, companyLogout);
companyRouter.get("/roleCheck", authorization, getRoleByCompany);
companyRouter.put("/update", authorization, updateCompany);

module.exports = companyRouter;
