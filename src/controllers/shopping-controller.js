const ShoppingCart = require("../models/ShoppingCart");
const Product = require("../models/Product"); // Ensure this is added for product validation

async function createCart(userId) {
  try {
    const cart = new ShoppingCart({ userId });
    await cart.save();
    return { success: true, cartId: cart._id };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function addProduct(cartId, productId, quantity) {
  try {
    // First, validate the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return { success: false, error: "Product not found" };
    }

    const updatedCart = await ShoppingCart.findOneAndUpdate(
      { _id: cartId, state: "active" },
      { $push: { items: { productId, quantity } } },
      { new: true }
    );

    if (!updatedCart) {
      return {
        success: false,
        error: "Shopping cart not found or not active",
      };
    }

    return { success: true, updatedCart };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function removeProduct(cartId, productId, quantity) {
  try {
    const cart = await ShoppingCart.findById(cartId);
    if (!cart || cart.state !== "active") {
      return { success: false, error: "Cart not found or not active" };
    }

    // Find the item to remove or adjust the quantity
    const itemIndex = cart.items.findIndex((item) =>
      item.productId.equals(productId)
    );
    if (itemIndex === -1) {
      return { success: false, error: "Product not found in cart" };
    }

    if (quantity >= cart.items[itemIndex].quantity || !quantity) {
      cart.items.splice(itemIndex, 1); // Remove item if quantity not specified or more than/equal to in cart
    } else {
      cart.items[itemIndex].quantity -= quantity; // Reduce the quantity
    }

    await cart.save();
    return { success: true, updatedCart: cart };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function getActiveCart(userId) {
  try {
    const cart = await ShoppingCart.findOne({ userId, state: "active" });
    if (!cart) {
      return { success: false, error: "Active cart not found" };
    }
    return { success: true, cart };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function changeCartState(cartId, newState) {
  try {
    const updatedCart = await ShoppingCart.findByIdAndUpdate(
      cartId,
      { state: newState },
      { new: true }
    );
    if (!updatedCart) {
      return { success: false, error: "Shopping cart not found" };
    }
    return { success: true, updatedCart };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = {
  createCart,
  addProduct,
  removeProduct,
  getActiveCart,
  changeCartState,
};
