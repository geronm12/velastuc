const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  cod: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  catId: { type: mongoose.Types.ObjectId, required: true },
  oferta: { type: Boolean, required: true },
  img: { type: String, required: true },
  price: {
    type: Number,
    required: true,
    set: (v) => parseFloat(v.replace(",", ".")),
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
