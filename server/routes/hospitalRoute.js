const express = require("express");
const router = express.Router();
const hospitalController = require("../controllers/hospital.controller");

router.post("/addhospital", hospitalController.createHospital);

router.get("/gethospital", hospitalController.getAllHospitals);

router.get("/gethospital/:id", hospitalController.getHospitalById);

router.put("/updatehospital/:id", hospitalController.updateHospital);

router.delete("/deletehospital/:id", hospitalController.deleteHospital);

module.exports = router;
