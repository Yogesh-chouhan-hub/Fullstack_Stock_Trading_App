const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Your Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Your Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Enter a valid password"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = userSchema;
