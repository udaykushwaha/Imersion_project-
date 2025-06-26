const Vehicle = require('../models/Vehicle');
const mongoose = require('mongoose');

// CREATE
exports.createVehicle = async (req, res) => {
  try {
    const { modelName, vehicleName, price, desc, brand } = req.body;
    const image = req.file ? req.file.filename : '';

    // Basic validation
    if (!modelName || !vehicleName || !price) {
      return res.status(400).json({ error: 'modelName, vehicleName, and price are required' });
    }

    const newVehicle = new Vehicle({ modelName, vehicleName, price, image, desc, brand });
    await newVehicle.save();
    res.status(201).json(newVehicle);
  } catch (err) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

// READ ALL
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch vehicles', details: err.message });
  }
};

// READ ONE BY ID
exports.getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid vehicle ID format' });
    }

    const vehicle = await Vehicle.findById(id);
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });

    res.json(vehicle);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching vehicle', details: err.message });
  }
};

// UPDATE
exports.updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid vehicle ID format' });
    }

    if (req.file) updatedData.image = req.file.filename;

    const updatedVehicle = await Vehicle.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedVehicle) return res.status(404).json({ error: 'Vehicle not found' });

    res.json(updatedVehicle);
  } catch (err) {
    res.status(500).json({ error: 'Error updating vehicle', details: err.message });
  }
};

// DELETE
exports.deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid vehicle ID format' });
    }

    const deletedVehicle = await Vehicle.findByIdAndDelete(id);
    if (!deletedVehicle) return res.status(404).json({ error: 'Vehicle not found' });

    res.json({ message: 'Vehicle deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting vehicle', details: err.message });
  }
};
