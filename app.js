const express = require("express");
const authRouter = require("./routes/authRouter");
const productsRouter = require("./routes/productsRouter");

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.statusCode || 500).json({
    message: error.message || "Something went wrong. Please, try again later",
  });
});

module.exports = {
  app,
};
