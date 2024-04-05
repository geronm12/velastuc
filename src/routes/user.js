const express = require("express");

const router = express.Router();

const {
  createUser,
  modifyUser,
  loginUser,
} = require("../controllers/user-controller");

router.post("/user", createUser);
router.put("/user/:id", modifyUser);
router.post("/user/login", loginUser);
