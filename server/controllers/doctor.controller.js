const Doctor = require("../models/Doctor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AdminPanel = require("../models/AdminPanel");

exports.addDoctor = async (req, res, next) => {
  const {
    name,
    experience,
    birthday,
    gender,
    phone,
    speciality,
    email,
    description,
    shifts,
    address,
    eduLines,
    awards,
    moto,
    photo,
  } = req.body;

  const doctorInfo = {
    name,
    experience,
    birthday,
    gender,
    phone,
    speciality,
    email,
    description,
    shifts,
    address,
    eduLines,
    awards,
    moto,
    photo,
  };
  try {
    const doctor = new Doctor(doctorInfo);
    const resp1 = await doctor.save();
    const resp2 = await AdminPanel.findByIdAndUpdate(req.admin._id, { referenceId: doctor._id }).exec();

    res.status(200).json(resp2);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDoctor = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Doctor.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteDoctor = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Doctor.findByIdAndDelete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDoctor = async (req, res, next) => {
  const id = req.params.id;
  const updateFields = req.body;

  try {
    const result = await Doctor.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
