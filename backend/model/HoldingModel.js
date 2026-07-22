const mongoose = require("mongoose");
const { HoldingSchema } = require("../Schemas/HoldingSchema.js");
const HoldingModel = mongoose.model("holding", HoldingSchema);

module.exports = { HoldingModel };
