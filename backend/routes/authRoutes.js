// backend/routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login successful', user: req.user });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
});

module.exports = router;
