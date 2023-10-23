const Doctor = require("../models/Doctor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    const result = await Doctor.create(doctorInfo);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find({});
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDoctor = async (req, res, next) => {
  const id = req.params.id;

  try {
    const result = await Doctor.findByIdAndDelete(id);
    res.json(result);
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
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
