const mongoose = require("mongoose");

const Coach = mongoose.model(
  "Coach",
  new mongoose.Schema({
    fullname: String,
    description: String,
    rate: Number,
    categories: [],
  })
);

module.exports = Coach;
