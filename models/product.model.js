const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  nutricionalTable: {
    type: Object,
    required: true,
  },
});

const ProductModel = mongoose.model("Product", productSchema);
module.exports = ProductModel;
