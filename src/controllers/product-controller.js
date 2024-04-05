const Product = require("../models/product");

async function getAllProducts(req, res) {
  const result = await Product.find({});
  if (result) {
    res.status(200).json({
      success: true,
      products: result,
    });
  } else {
    res.status(500).json({ success: false, error: "Error fetching products" });
  }
}

async function getProductsByCategoryId(req, res) {
  const { categoryId } = req.params; // Extract categoryId from URL parameters
  const result = await Product.find({
    catId: categoryId,
  });
  if (result) {
    res.status(200).json({
      success: true,
      products: result,
    });
  } else {
    res.status(500).json({ error: "Error fetching products", success: false });
  }
}

module.exports = { getAllProducts, getProductsByCategoryId };
