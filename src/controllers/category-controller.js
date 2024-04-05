const Category = require("../models/category");

async function getAllCategories(req, res) {
  try {
    const categories = await Category.find({});
    return res.status(200).json({ success: true, categories });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}

module.exports = {
  getAllCategories,
};
