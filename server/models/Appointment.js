const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"], // Restrict to these values
    default: "male", // Set a default value (optional)
    required: true,
  },
  patientEmail: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    enum: ["morning", "afternoon", "evening"], // Restrict to these values
    default: "morning",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed"], // Restrict to these values
    default: "pending",
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  doctor: {
    type: String,
    required: true,
  },
  doctorEmail: {
    type: String,
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

// Create a model based on the schema
const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
