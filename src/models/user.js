const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, required: false }, // Optional, considering not all users might set this initially
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  location: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
