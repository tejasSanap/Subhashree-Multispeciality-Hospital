const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      // unique: [true, "name not unique"],
    },
    email: {
      type: String,
      required: true,
      unique: [true, "email not unique"],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      // Set a default value (optional)
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
