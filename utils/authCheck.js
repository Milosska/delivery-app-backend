const { HttpError } = require("../utils/HttpError");
// require("dotenv").config();
const { SECRET_KEY } = process.env;
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");

const authCheck = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(new HttpError(401, "Not authorized"));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id, "-createdAt -updatedAt -password");
    if (!user || !token || user.refresh_token !== token) {
      next(new HttpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch {
    next(new HttpError(401, "Not authorized"));
  }
};

module.exports = {
  authCheck,
};
