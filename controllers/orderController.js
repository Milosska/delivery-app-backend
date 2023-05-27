const { catchAsyncWrapper } = require("../utils/catchAsyncWrapper");
const {
  getAllOrdersService,
  addOrderService,
} = require("../services/orderService");

const getOrdersController = catchAsyncWrapper(async (req, res, next) => {
  const orders = await getAllOrdersService(req.user, req.query);
  res.status(200).json(orders);
});

const addOrderController = catchAsyncWrapper(async (req, res, next) => {
  const newOrder = await addOrderService(req.body, req.user);
  res.status(200).json(newOrder);
});

module.exports = {
  getOrdersController,
  addOrderController,
};
