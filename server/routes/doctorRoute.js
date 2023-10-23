const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller')

router.post('/addDoctor', doctorController.addDoctor);
router.get('/getAllDoctors', doctorController.getAllDoctors);
router.delete('/deleteDoctor/:id', doctorController.deleteDoctor);
router.put('/updateDoctor/:id', doctorController.updateDoctor);

module.exports = router;