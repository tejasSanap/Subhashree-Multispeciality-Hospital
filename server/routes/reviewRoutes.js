const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');

router.post('/reviewAdd', reviewController.addReview);
router.get('/reviews', reviewController.getAllReviews);

module.exports = router;
