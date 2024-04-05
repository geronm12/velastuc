const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

express.json();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server Succeeded connected.");
});
