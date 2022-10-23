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
  const page = req.query.page || 0
  let limit = req.query.limit || 8
  let itemsTotal = await ProductModel.find({}).count()
 

  const product = await ProductModel.find({})
  .skip(page * limit )
  .limit(limit)

  let totalPages = parseInt(itemsTotal / limit)
  const data = {itemsTotal, limit,page,totalPages, product}
  res.status(201).json(data);
});

app.get("/name/:flavor", async (req, res) => {
  const page = req.query.page || 0
  let limit = req.query.limit || 5
  let itemsTotal = await ProductModel.find({}).count()

  const regex = new RegExp(req.params.flavor, "i");
  const product = await ProductModel.find({ name: { $regex: regex } })
  .skip(page * limit )
  .limit(limit);
  
  let returnTotal = await ProductModel.find({ name: { $regex: regex } }).count()
  let totalPages = parseInt(returnTotal / limit)
  const data = {itemsTotal, returnTotal, limit,page,totalPages, product}
  res.status(201).json(data);
});

app.get("/drink", async (req, res) => {
  const page = req.query.page || 0
  let limit = req.query.limit || 5
  let itemsTotal = await ProductModel.find({}).count()
  

  const product = await ProductModel.find({ category: "drink" })
  .skip(page * limit )
  .limit(limit);

  let returnTotal = await ProductModel.find({ category: "drink" }).count()
  let totalPages = parseInt(returnTotal / limit)
  const data = {itemsTotal, returnTotal, limit,page,totalPages, product}
  res.status(201).json(data);
});

app.get("/burger", async (req, res) => {
  const page = req.query.page || 0
  let limit = req.query.limit || 5
  let itemsTotal = await ProductModel.find({}).count()
  

  const product = await ProductModel.find({ category: "burger" })
    .skip(page * limit )
  .limit(limit);
  

  let returnTotal = await ProductModel.find({ category: "burger" }).count()
  let totalPages = parseInt(returnTotal / limit)
  const data = {itemsTotal, returnTotal, limit,page,totalPages, product}
  res.status(201).json(data);
});

app.get("/dessert", async (req, res) => {
  const page = req.query.page || 0
  let limit = req.query.limit || 5
  let itemsTotal = await ProductModel.find({}).count()
  

  const product = await ProductModel.find({ category: "dessert" })
    .skip(page * limit )
  .limit(limit);
  

  let returnTotal = await ProductModel.find({ category: "dessert" }).count()
  let totalPages = parseInt(returnTotal / limit)
  const data = {itemsTotal, returnTotal, limit,page,totalPages, product}
  res.status(201).json(data);

});

app.get("/side", async (req, res) => {
  const page = req.query.page || 0
  let limit = req.query.limit || 5
  let itemsTotal = await ProductModel.find({}).count()


  const product = await ProductModel.find({ category: "side" })
    .skip(page * limit )
  .limit(limit);
  

  let returnTotal = await ProductModel.find({ category: "side" }).count()
  let totalPages = parseInt(returnTotal / limit)
  const data = {itemsTotal, returnTotal, limit,page,totalPages, product}
  res.status(201).json(data);
});

connect();
app.listen(PORT);
