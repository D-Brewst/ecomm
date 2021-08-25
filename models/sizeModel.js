const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sizeSchema = new Schema({
  size: {
    type: String,
    enum:["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    required: true,
    trim: true
  },
  inventory:{
    type: Number
  }
});

const Size = mongoose.model('Size', sizeSchema);

module.exports = Size;