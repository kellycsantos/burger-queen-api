const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connect = require("./database/connect_db");
const ProductModel = require("./models/product.model");
const app = express();

const PORT = 3000;

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

app.post("/addnew", async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    console.log("erro");
  }
});

connect();
app.listen(PORT);
