const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
      enum: ["McDonalds", "KFC", "Starbucks", "Domino's Pizza", "Subway"],
      required: true,
    },
    ingredients: {
      type: Array,
    },
    type: {
      type: String,
      enum: [
        "beverage",
        "burger",
        "pizza",
        "sandwich",
        "salad",
        "dessert",
        "sauce",
        "other",
      ],
      required: true,
    },
    cuisine: {
      type: String,
      enum: ["American", "Italian", "International"],
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", schema);

module.exports = {
  Product,
};
