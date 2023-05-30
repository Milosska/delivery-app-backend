const { Order } = require("../models/Order");

const getAllOrdersService = async (user, query) => {
  const { _id: owner } = user;
  const { page = 1, limit = 10 } = query;
  const skip = (page - 1) * limit;

  const orders = await Order.find({ owner }, "-updatedAt", {
    skip,
    limit,
  });
  return orders;
};

const addOrderService = async (body, user) => {
  const { _id: owner } = user;
  const newOrder = (await Order.create({ ...body, owner })).populate(
    "owner",
    "name email phone address"
  );
  return newOrder;
};

module.exports = {
  getAllOrdersService,
  addOrderService,
};
