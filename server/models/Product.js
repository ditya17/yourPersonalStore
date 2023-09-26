const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  email: String,
  category: String,
  image: String,
  year: String,
  types: String,
  subject: String,
  products: String,
  brand: String,
  price: String,
  description: String,
});

module.exports = mongoose.model("Product", productSchema);
