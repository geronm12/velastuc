const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function createUser(req, res) {
  const { email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ success: true, userId: newUser._id });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}

async function modifyUser({ req, res }) {
  const { userId, updates } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true,
    });
    return res.status(200).json({ success: true, updatedUser });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    // Find the user by their email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ success: true, token });
  } catch (error) {
    return { success: false, error: error.message };
  }
}

module.exports = {
  createUser,
  modifyUser,
  loginUser,
};
