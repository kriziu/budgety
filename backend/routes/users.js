const express = require('express');
const router = express.Router();
const User = require('../models/user');

// MIDDLEWARE TO GET ONE USER
const getUser = async (req, res, next) => {
  let user;

  try {
    user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Cannot find user with that id' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
};

// GETTING ONE
router.get('/:id', getUser, (req, res) => {
  res.send(res.user);
});

// CREATING ONE
router.post('/', async (req, res) => {
  const user = new User({
    currency: req.body.currency,
    _id: req.body._id,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATING ONE
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.currency) {
    res.user.currency = req.body.currency;
  }
  if (req.body._id) {
    res.user._id = req.body._id;
  }

  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETING ONE
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: `Deleted user ${req.params.id}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
