const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  subtitle1: { type: String },
  subDescription1: { type: String },
  subtitle2: { type: String },
  subDescription2: { type: String },
  subtitle3: { type: String },
  subDescription3: { type: String },
  subtitle4: { type: String },
  subDescription4: { type: String },
  blogType: { type: String },
  date: {
    type: Date,
    default: Date.now,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  totalVisitor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  //need to maintain the refernce
  photo: { type: String },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
