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
    type: String,
    enum: ["doctor", "admin"], // Restrict to these values
    required: true,
  },
  referenceId: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true
  },
});

// Create a model based on the schema
const AdminPanel = mongoose.model("AdminPanel", adminSchema);

module.exports = AdminPanel;
