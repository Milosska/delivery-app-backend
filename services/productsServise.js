const { Product } = require("../models/Product");
const { HttpError } = require("../utils/HttpError");

const getProductsByCompanyService = async (company, query) => {
  const { page = 1, limit = 10 } = query;
  const skip = (page - 1) * limit;
  const products = await Product.find({ company }, "-createdAt -updatedAt", {
    skip,
    limit,
  });

  return products;
};

module.exports = {
  getProductsByCompanyService,
};
