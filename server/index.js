const express = require("express");
require("./db/config");
const User = require("./db/User");

const app = express();
app.use(express.json());
const port = 5000;

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}🤖`);
});
