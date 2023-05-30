const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    products: [
      {
        _id: false,
        product_data: [
          {
            _id: false,
            product_id: {
              type: Schema.Types.ObjectId,
              ref: "product",
              required: true,
            },
            name: {
              type: String,
              required: true,
            },
            img: {
              type: String,
              required: true,
            },
          },
        ],
        quantity: {
          type: Number,
          required: [true, "Set number of items"],
        },
      },
    ],
    delivery_data: {
      address: { type: String, required: true },
      phone: { type: String, required: true },
    },
    total_price: {
      type: Number,
      required: [true, "Set price for the order"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", schema);

module.exports = {
  Order,
};
