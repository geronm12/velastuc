const express = require("express");

const router = express.Router();
const {
  getAllProducts,
  getProductsByCategoryId,
} = require("../controllers/product-controller");

router.get("/products", getAllProducts);
router.get("/products/category/:categoryId", getProductsByCategoryId);

module.exports = router;
