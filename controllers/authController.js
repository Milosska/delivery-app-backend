const { catchAsyncWrapper } = require("../utils/catchAsyncWrapper");
const {
  signupService,
  loginService,
  logoutService,
} = require("../services/authService");

const registerController = catchAsyncWrapper(async (req, res, next) => {
  const newUser = await signupService(req.body);
  res.status(201).json(newUser);
});

const loginController = catchAsyncWrapper(async (req, res, next) => {
  const returnUserData = await loginService(req.body);
  res.status(200).json(returnUserData);
});

const logoutController = catchAsyncWrapper(async (req, res, next) => {
  const returnUserData = await logoutService(req.user);
  res.status(200).json({ message: "Logout success" });
});

const currentController = async (req, res, next) => {
  res.status(200).json(req.user);
};

module.exports = {
  registerController,
  loginController,
  logoutController,
  currentController,
};
