const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  modelName: String,
  vehicleName: String,
  price: Number,
  image: String,
  desc: String,
  brand: String,
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
