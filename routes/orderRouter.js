const express = require("express");
const { validateBody } = require("../utils/validateBody");
const { OrderValidationSchema } = require("../utils/validation/orderSchema");
const {
  getOrdersController,
  addOrderController,
} = require("../controllers/orderController.js");
const { authCheck } = require("../utils/authCheck");

const router = express.Router();

router
  .route("/")
  .get(authCheck, getOrdersController)
  .post(authCheck, validateBody(OrderValidationSchema), addOrderController);

module.exports = router;
