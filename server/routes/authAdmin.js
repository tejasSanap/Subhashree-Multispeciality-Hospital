const express = require("express");
const router = express.Router();

const authAdminController = require("../controllers/authAdmin.controller");

const  authMiddlware = require("../middleware/auth.middleware");
const roleCheck = require("../middleware/roleCheck")
// admin signup route
router.post("/admin/signup", authAdminController.signup);

// admin login route
router.post("/admin/login", authAdminController.login);

router.post("/token",authMiddlware.adminVerifyTokken,(req,res)=>{
    console.log(req.admin.role);
});
router.post("/token/rolecheck",authMiddlware.adminVerifyTokken,roleCheck.doctorCheck);

module.exports = router;
