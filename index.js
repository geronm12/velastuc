const express = require("express");
const app = express();
const dotenv = require("dotenv");

const userRoute = require("./src/routes/user");
const productRoute = require("./src/routes/product");
const categoryRoute = require("./src/routes/category");
const shoppingCartRoute = require("./src/routes/shopping-cart");

dotenv.config();
express.json();

app.use(`/${process.env.API_PREFIX}/user`, userRoute);
app.use(`/${process.env.API_PREFIX}/product`, productRoute);
app.use(`/${process.env.API_PREFIX}/category`, categoryRoute);
app.use(`/${process.env.API_PREFIX}/shopping-cart`, shoppingCartRoute);

app.listen(3000, () => {
  console.log("Server Succeeded connected.");
});
