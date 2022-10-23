const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connect = require("./database/connect_db");
const ProductModel = require("./models/product.model");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

dotenv.config();
app.use(
  cors({
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);
app.get("/", async (req, res) => {
  const product = await ProductModel.find({});
  res.status(201).json(product);
});

app.get("/name/:flavor", async (req, res) => {
  const regex = new RegExp(req.params.flavor, "i");
  const product = await ProductModel.find({ name: { $regex: regex } });
  res.status(201).json(product);
});

app.get("/drink", async (req, res) => {
  const product = await ProductModel.find({ category: "drink" });
  res.status(201).json(product);
});

app.get("/burger", async (req, res) => {
  const product = await ProductModel.find({ category: "burger" });
  res.status(201).json(product);
});

app.get("/dessert", async (req, res) => {
  const product = await ProductModel.find({ category: "dessert" });
  res.status(201).json(product);
});

app.get("/side", async (req, res) => {
  const product = await ProductModel.find({ category: "side" });
  res.status(201).json(product);
});

connect();
app.listen(PORT);
