const express = require("express");
const { validateBody } = require("../utils/validateBody");
const {
  UserRegistrationSchema,
  UserLoginSchema,
} = require("../utils/validation/authSchema");
const {
  registerController,
  loginController,
  logoutController,
  currentController,
} = require("../controllers/authController");
const { authCheck } = require("../utils/authCheck");

const router = express.Router();

router
  .route("/register")
  .post(validateBody(UserRegistrationSchema), registerController);

router.route("/login").post(validateBody(UserLoginSchema), loginController);

router.route("/logout").post(authCheck, logoutController);

router.route("/current").post(authCheck, currentController);

module.exports = router;
