// backend/models/Pet.js
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  size: { type: String, required: true },
  gender: { type: String, required: true },
  // Add other pet-related fields as needed
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
