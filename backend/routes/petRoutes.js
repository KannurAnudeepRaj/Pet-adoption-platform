// backend/routes/petRoutes.js
const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching pets' });
  }
});

router.post('/pets', async (req, res) => {
  try {
    const { name, age, breed, size, gender } = req.body;
    const newPet = new Pet({ name, age, breed, size, gender });
    await newPet.save();
    res.json({ message: 'Pet added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding pet' });
  }
});

module.exports = router;
