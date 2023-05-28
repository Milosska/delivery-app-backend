const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/authRouter");
const productsRouter = require("./routes/productsRouter");
const orderRouter = require("./routes/orderRouter");

const app = express();

// CORS
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", orderRouter);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode || 500).json({
    message: error.message || "Something went wrong. Please, try again later",
  });
});

module.exports = {
  app,
};
