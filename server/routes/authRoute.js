const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.post("/signup", authController.signup, (req, res) => {
  console.log("signup route hit");
});
router.post("/login", authController.login, (req, res) => {
  console.log("login route hit");
});

module.exports = router;
