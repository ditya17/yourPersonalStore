// we are using esm package so that we do not need to use .js while accessing local file
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

//configure env
dotenv.config();
connectDB();

//rest object
const app = express();

//middelwares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
