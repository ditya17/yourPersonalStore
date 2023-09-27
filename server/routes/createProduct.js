const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/", async (req, res) => {
  try {
    const { category, image, year, types, subject, products, brand, price, description, name, email } = req.body;

    const product = new Product({
      name,
      email,
      category,
      image,
      year,
      types,
      subject,
      products,
      brand,
      price,
      description,
    });

    await product.save();

    res.status(201).json({ message: "Product data saved successfully." });
    console.log("Product data saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
