const express = require("express");
const router = express.Router();

const authAdminController = require("../controllers/authAdmin.controller");

// admin signup route
router.post("/admin/signup", authAdminController.signup);

// admin login route
router.post("/admin/login", authAdminController.login);

module.exports = router;
