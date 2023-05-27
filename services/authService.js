const { User } = require("../models/User");
const { HttpError } = require("../utils/HttpError");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const signupService = async (body) => {
  const fetchedUser = await User.findOne({ email: body.email });
  if (fetchedUser) {
    throw new HttpError(409, "Email should be unique");
  }

  return await User.create(body);
};

const loginService = async (body) => {
  const fetchedUser = await User.findOne({ email: body.email });
  if (!fetchedUser) {
    throw new HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: fetchedUser._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  const returnUser = await User.findByIdAndUpdate(
    fetchedUser._id,
    { refresh_token: token },
    { new: true, select: "-createdAt -updatedAt -password" }
  );

  return returnUser;
};

const logoutService = async (user) => {
  const { _id } = user;
  const fetchedUser = await User.findByIdAndUpdate(_id, { refresh_token: "" });
  if (!fetchedUser) {
    throw new HttpError(401, "Not authorized");
  }
};

module.exports = {
  signupService,
  loginService,
  logoutService,
};
