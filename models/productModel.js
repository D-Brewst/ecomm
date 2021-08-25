const { Decimal128 } = require("bson");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter the name of the product",
    unique: false
  },

  price: {
    type: Decimal128,
    trim: true,
    required: "Please enter cash amount",
    unique: false
  },

  image: {
    type: String,
    trim: true,
    required: "Please provide an image url",
    unique: false
  },

  description: {
    type: String,
    default: false
  },

  quantity: {
    type: Number,
    min: 0,
    default: 0
  },

  inventory: {
    type: Number,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },

  size: [{
    type: Schema.Types.ObjectId,
    ref: 'Size',
  }]
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;