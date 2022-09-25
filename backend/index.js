const express = require("express");
const cors = require("cors");
const products = require("./products");
const a = require("./productsMac");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Welcome to our online shop API...");
});
app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/productsMac", (req, res) => {
  res.send(a);
});
const port = process.env.PORT || 4000;
app.listen(4000, console.log(`server running on port ${port}`));
