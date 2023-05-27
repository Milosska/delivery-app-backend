const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    products: [{ type: Schema.Types.ObjectId, ref: "product", required: true }],

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
