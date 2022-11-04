const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isCoach: { type: Boolean, default: false },
    rate: { type: Number, default: 0 },
    description: { type: String, default: "" },
    requests: [{ type: Object, default: {} }],
    categories: [{ type: String, default: "" }],
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
  })
);

module.exports = User;
