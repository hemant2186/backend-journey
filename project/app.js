require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

start();