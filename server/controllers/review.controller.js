const Review = require("../models/Review");

const addReview = async (req, res) => {
    try {
      const { describe, rating, email, photoURL,name } = req.body;
      const info = {
        description: describe,
        rating,
        email,
        time: new Date(),
        photoURL ,
        name:name 
      };
  
      const result = await Review.create(info);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getAllReviews = async (req, res) => {
    try {
      const result = await Review.find({}).exec();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    addReview,
    getAllReviews,
  };