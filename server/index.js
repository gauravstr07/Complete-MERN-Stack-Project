const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");
const Product = require("./db/Product");

const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

//User Register
app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

// User Login
app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "No user found!" });
    }
  } else {
    res.send({ result: "Fill Feild Properly" });
  }
});

// Add Product
app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save();
  res.send(result);
});

app.get("/products", async(req, res) => {
  let product = await Product.find();
  if(product.length > 0){
    res.send(product);
  }else{
    res.send({result: "No Products Found"})
  }
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}🤖`);
});
