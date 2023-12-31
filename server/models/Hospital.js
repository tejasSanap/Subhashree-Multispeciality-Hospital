const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  mondayToFriday:{
    type:String,
    required:true
  },
    saturday:{
    type:String,
    required:true
  },
    sunday:{
    type:String,
    required:true
  },
  awardsWon: {
    type: Number,
    required: true,
  },
  satisfiedPatient: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  email:{
    type:String,
    required:true
  },
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
