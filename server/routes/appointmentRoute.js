const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointment.contoller");

router.post("/addappointment", appointmentController.createAppointment);
router.get("/getappointments", appointmentController.getAllAppointments);
router.get("/getappointment/:id", appointmentController.getAppointmentById);
router.put("/updateappointment/:id", appointmentController.updateAppointment);
router.put("/approveAppointment/:id", appointmentController.approveAppointment);
router.put("/rejectAppointment/:id", appointmentController.rejectAppointment);
router.delete(
  "/deleteappointment/:id",
  appointmentController.deleteAppointment
);

module.exports = router;
