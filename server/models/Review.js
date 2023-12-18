const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  photoURL: {
    type: String
  }
  
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
