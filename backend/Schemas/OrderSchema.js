const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  priice: Number,
  mode: String,
});

module.exports = { OrderSchema };
