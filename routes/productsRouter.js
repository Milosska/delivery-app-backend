const express = require("express");
const {
  getProductsByCompanyController,
} = require("../controllers/productsController");
const { authCheck } = require("../utils/authCheck");

const router = express.Router();

router.route("/:company").get(authCheck, getProductsByCompanyController);

module.exports = router;
