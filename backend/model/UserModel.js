const mongoose = require("mongoose");
const UserSchema = require("../Schemas/UserSchemas");

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
