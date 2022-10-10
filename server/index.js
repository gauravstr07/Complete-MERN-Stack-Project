const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

const connectDB = async () => {
  try {
    console.log("Connected to database🤖");
    mongoose.connect("mongodb://localhost:27017/e-comm");
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model("products", productSchema);
    const data = await product.find();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong in DB connection😪" + error);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send(`Server running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
