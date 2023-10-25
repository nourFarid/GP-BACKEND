const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
require("dotenv").config();
const connectDB = require("./DB/connection");
const httpStatusText = require("./utils/httpStatustext");
connectDB();
app.all("*", (req, res) =>
  res.status(400).json({ status: httpStatusText.ERROR, message: "NOT FOUND" })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
