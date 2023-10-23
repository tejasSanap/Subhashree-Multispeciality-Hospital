const Review = require("../models/Review");

const addReview = async (req, res) => {
    try {
      const { description, rating, email, photoURL } = req.body;
      const info = {
        description: description,
        rating,
        email,
        time: new Date(),
        photoURL,
      };
  
      const result = await Review.create(info);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getAllReviews = async (req, res) => {
    try {
      const result = await Review.find({}).exec();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    addReview,
    getAllReviews,
  };