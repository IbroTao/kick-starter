const getAllProductsStatic = (req, res) => {
  res.status(200).json({ msg: "PRODUCT TESTING ROUTE" });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "PRODUCT ROUTE" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
