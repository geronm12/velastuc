const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./src/routes/user");
const productRoute = require("./src/routes/product");
const categoryRoute = require("./src/routes/category");
const shoppingCartRoute = require("./src/routes/shopping-cart");
const Category = require("./src/models/category");
const { seed } = require("./src/controllers/product-controller");

dotenv.config();
express.json();

app.use(cors());

app.use(process.env.API_PREFIX, userRoute);
app.use(process.env.API_PREFIX, productRoute);
app.use(process.env.API_PREFIX, categoryRoute);
app.use(process.env.API_PREFIX, shoppingCartRoute);

mongoose
  .connect(process.env.CONNECTION_STRINGS)
  .then(() => {
    console.log("Connected to db succesfully");
  })
  .catch((err) => {
    console.log("There's been an error trying to connect.");
  });

app.listen(3000, () => {
  console.log("Server Succeeded connected.");
});
