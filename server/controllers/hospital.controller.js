const Hospital = require("../models/Hospital");

// Create a new hospital
const createHospital = async (req, res) => {
  try {
    const {
      address,
      mondayToFriday,
      saturday,
      sunday,
      awardsWon,
      satisfiedPatient,
      number,
      email,
    } = req.body;

    const newHospital = new Hospital({
      address,
      mondayToFriday,
      saturday,
      sunday,
      awardsWon,
      satisfiedPatient,
      number,
      email,
    });

    const hospital = await newHospital.save();
    res.status(201).json(hospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all hospitals
const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get hospital by ID
const getHospitalById = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ error: "Hospital not found" });
    }
    res.json(hospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update hospital by ID
const updateHospital = async (req, res) => {
  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedHospital) {
      return res.status(404).json({ error: "Hospital not found" });
    }

    res.json(updatedHospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete hospital by ID
const deleteHospital = async (req, res) => {
  try {
    const deletedHospital = await Hospital.findByIdAndRemove(req.params.id);

    if (!deletedHospital) {
      return res.status(404).json({ error: "Hospital not found" });
    }

    res.json(deletedHospital);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createHospital,
  getAllHospitals,
  getHospitalById,
  updateHospital,
  deleteHospital,
};
