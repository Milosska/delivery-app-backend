const Joi = require("joi");

const OrderValidationSchema = Joi.object({
  products: Joi.array()
    .items(Joi.string().alphanum().length(24).required())
    .messages({
      "any.required": "field 'products' is missing",
    }),
  total_price: Joi.number().required().messages({
    "any.required": "field 'total_price' is missing",
  }),
});

module.exports = {
  OrderValidationSchema,
};
