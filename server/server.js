const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

import dotenv from "dotenv";
import connectDB from "./config/db";
const app = express();

app.use(express.json({ limit: "50mb" }));


app.use(cors({
  origin: "http://localhost:3000",
}));

dotenv.config();
connectDB();;

const User = require("./models/User");
const Product = require("./models/Product");
const createProductRoute = require("./routes/createProduct");
const getProductsRoute = require("./routes/getProducts");

app.use("/api/products", createProductRoute);
app.use("/api/products", getProductsRoute);


app.get("/api/allproduct", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.use(bodyParser.json());

app.post("/api/user", async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = new User({ name, email });

    await newUser.save();

    res.status(201).json({ message: "User data saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
