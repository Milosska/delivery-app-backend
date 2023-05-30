const Joi = require("joi");

const OrderValidationSchema = Joi.object({
  products: Joi.array()
    .items(Joi.string().alphanum().length(24).required())
    .messages({
      "any.required": "field 'products' is missing",
    }),
  delivery_data: Joi.object({
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
  }),
  total_price: Joi.number().required().messages({
    "any.required": "field 'total_price' is missing",
  }),
});

module.exports = {
  OrderValidationSchema,
};
