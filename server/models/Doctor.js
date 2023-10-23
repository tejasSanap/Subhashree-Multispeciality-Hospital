const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
  },
  birthday: {
    type: Date,
    default:""
  },
  gender: {
    type: String,
    required:true,
    enum: ['Male', 'Female', 'Other'],
  },
  phone: {
    type: String,
    default:""
  },
  speciality: {
    type: String,
    default:"",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  description:{
    type:String
  },
  shifts: [
    {
      type: String,
      enum: ["morning", "afternoon", "evening"], // Restrict to these values
      default: "morning"
    }
  ],
  address: {
    type: String,
  },
  eduLines: [
    {
      eduLine1: { type: String, default: '' },
      eduLine2: { type: String, default: '' },
      eduLine3: { type: String, default: '' }
    }
  ],
  awards: [
    {
      awardFirst: { type: String, default: '' },
      awardSecond: { type: String, default: '' },
      awardThird: { type: String, default: '' }
    }
  ],
  moto:{
    type:String
  },
  photo: {
    type: String,
    default:""
  },
});

// Create a model based on the schema
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
