const Joi = require("joi");

const UserRegistrationSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "field 'name' is missing",
  }),
  email: Joi.string()
    .pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    .required()
    .messages({
      "any.required": "field 'email' is missing",
      "string.pattern.base": "email contains invalide option",
    }),
  password: Joi.string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .required()
    .messages({
      "any.required": "field 'password' is missing",
      "string.pattern.base": "password contains invalide option",
    }),
  phone: Joi.string()
    .pattern(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
    .required()
    .messages({
      "any.required": "field 'phone' is missing",
      "string.pattern.base": "phone contains invalide option",
    }),
  address: Joi.string().required().messages({
    "any.required": "field 'address' is missing",
  }),
});

const UserLoginSchema = Joi.object().keys({
  email: UserRegistrationSchema.extract("email"),
  password: UserRegistrationSchema.extract("password"),
});

module.exports = {
  UserRegistrationSchema,
  UserLoginSchema,
};
