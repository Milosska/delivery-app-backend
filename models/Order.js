const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    products: [{ type: Schema.Types.ObjectId, ref: "product", required: true }],
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

schema.pre("find", function (next) {
  this.populate([
    {
      path: "owner",
      select: "name email phone address",
      model: "user",
    },
    {
      path: "products",
      populate: {
        path: "product",
        select: "name price company ingredients type cuisine img",
        model: "product",
      },
    },
  ]);
  next();
});

const Order = model("order", schema);

module.exports = {
  Order,
};
