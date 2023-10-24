const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  adminName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    enum: ["doctor", "admin"], // Restrict to these values
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

// Create a model based on the schema
const AdminPanel = mongoose.model("AdminPanel", adminSchema);

module.exports = AdminPanel;
