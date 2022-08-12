require("dotenv").config({ path: "./configs/.env" });
const express = require("express");

const app = express();

const connectDB = require("./configs/db");

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} in ${process.env.NODE_ENV} mode`);
  connectDB();
});
