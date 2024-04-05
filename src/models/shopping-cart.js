const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
  state: { 
    type: String, 
    required: true, 
    enum: ['active', 'delivered', 'closed'], // Defines the allowed states
    default: 'active' // The default state when a cart is created
  },
  total: { 
    type: Number, 
    required: true,
    default: 0 // Assumes calculation occurs at a different stage, possibly through a function
  },
  createdAt: { type: Date, default: Date.now },
});

// Optionally, you could include a method to calculate the total for the cart
shoppingCartSchema.methods.calculateTotal = async function() {
  // Assume each item's total price must be calculated and summed up to update the `total`.
  // This could involve fetching product prices by their IDs, multiplying by quantity, 
  // and summing all together. Implementation will depend on your Product model and pricing structure.
};

const ShoppingCart = mongoose.model("ShoppingCart", shoppingCartSchema);

module.exports = ShoppingCart;
