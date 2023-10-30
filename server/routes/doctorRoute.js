const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller')

const authMiddlware = require("../middleware/auth.middleware");
const roleCheck = require("../middleware/roleCheck")

router.post('/addDoctor', authMiddlware.adminVerifyTokken, roleCheck.doctorCheck, doctorController.addDoctor);
router.post('/testDoc', roleCheck.adminCheck, (req, res) => {
    res.send("admin");
})
router.get('/getAllDoctors', doctorController.getAllDoctors);
router.delete('/deleteDoctor/:id', doctorController.deleteDoctor);
router.put('/updateDoctor/:id', doctorController.updateDoctor);
router.get('/getDoctor/:id', doctorController.updateDoctor);

module.exports = router;