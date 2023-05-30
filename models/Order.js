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

// schema.pre("find", function (next) {
//   this.populate([
//     {
//       path: "owner",
//       select: "name email phone address",
//       model: "user",
//     },
//     {
//       path: "products.product_data",
//       populate: {
//         path: "product",
//         select: "name price company ingredients type cuisine img",
//         model: "product",
//       },
//     },
//   ]);
//   next();
// });

// schema.pre("find", async function findAllSteps(next) {
//   return this.stepModel
//     .find()
//     .populate({
//       path: "form",
//       strictPopulate: false,
//     })
//     .exec();
// });

const Order = model("order", schema);

module.exports = {
  Order,
};
