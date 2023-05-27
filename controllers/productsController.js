const { catchAsyncWrapper } = require("../utils/catchAsyncWrapper");
const { getProductsByCompanyService } = require("../services/productsServise");

const getProductsByCompanyController = catchAsyncWrapper(
  async (req, res, next) => {
    const { company } = req.params;
    const products = await getProductsByCompanyService(company, req.query);
    res.status(200).json(products);
  }
);

module.exports = {
  getProductsByCompanyController,
};
