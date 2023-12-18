const Appointment = require("../models/Appointment");
require("dotenv").config();

const accountSenderId = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILO_AUTH_TOKEN;
const client = require('twilio')(accountSenderId, authToken);

// create a new appointment
const createAppointment = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      age,
      gender,
      patientEmail,
      mobileNumber,
      service,
      shift,
      date,
      description,
      doctorId,
      doctor,
      doctorEmail,
      patientId,
      doctorNumber
    } = req.body;

    const newAppointment = new Appointment({
      firstName,
      lastName,
      age,
      gender,
      patientEmail,
      mobileNumber,
      service,
      shift,
      date,
      description,
      doctorId,
      doctor,
      doctorEmail,
      patientId,
    });

    const appointment = await newAppointment.save();
    console.log("doc no",doctorNumber)
    if (process.env.TWILIO_PHONE_NUMBER && doctorNumber) {
      client.messages.create({
        body:
        `${firstName} ${lastName} - AGE(${age}) has requested appointment for you on` +
        new Date(date).toDateString() + `Description - ${description}` + `Accept appointment on website`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: '+91' + doctorNumber,
      });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get use apponintment 
// const getUserAppointments = async (req,res)=>{
//   try{

//   }
// catch(err){
//   res.status(500).json({err:err.message})
// }
// }

// Get appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findOne(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update appointment by ID
const updateAppointment = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Approve appointment by ID
const approveAppointment = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAppointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    const patientPhone = updatedAppointment?.mobileNumber
    console.log("no",patientPhone);
    if (process.env.TWILIO_PHONE_NUMBER && patientPhone) {
      client.messages.create({
        body:
        'Your appointment for SubhaShree has been approved For Date : ' +
        new Date(updatedAppointment.date).toDateString(),
        from: process.env.TWILIO_PHONE_NUMBER,
        to: '+91' + patientPhone,
      });
    }
    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Reject appointment by ID
const rejectAppointment = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedAppointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }
    const patientPhone = updatedAppointment?.mobileNumber
    console.log("no",patientPhone);
    if (process.env.TWILIO_PHONE_NUMBER && patientPhone) {
      client.messages.create({
        body:
        'Your appointment for SubhaShree has been rejected. Date - ' +
        new Date(updatedAppointment.date).toDateString(),
        from: process.env.TWILIO_PHONE_NUMBER,
        to: '+91' + patientPhone,
      });
    }
    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete appointment by ID
const deleteAppointment = async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndRemove(
      req.params.id
    );

    if (!deletedAppointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.json(deletedAppointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
  approveAppointment,
  rejectAppointment
};
