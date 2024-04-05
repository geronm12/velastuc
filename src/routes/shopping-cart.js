const express = require("express");

const router = express.Router();

const {
  addProduct,
  changeCartState,
  createCart,
  getActiveCart,
  removeProduct,
} = require("../controllers/shopping-controller");

router.post("/cart", createCart);
router.put("/cart/:cartId", changeCartState);
router.get("/cart/:userId", getActiveCart);
router.post("/cart/:cartId/product", addProduct);
router.delete("/cart/:cartId/product/:productId", removeProduct);

module.exports = router;
