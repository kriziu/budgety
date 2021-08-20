const express = require('express');
const router = express.Router();
const Budget = require('../models/budget');

// MIDDLEWARE TO GET ONE BUDGET
const getBudget = async (req, res, next) => {
  let budget;

  try {
    budget = await Budget.findById(req.params.id);
    if (!budget) {
      return res
        .status(404)
        .json({ message: 'Cannot find budget with that id' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.budget = budget;
  next();
};

// GETTING ALL
router.get('/', async (req, res) => {
  try {
    const budgets = req.query.userId
      ? await Budget.find({ userId: req.query.userId })
      : await Budget.find();
    res.json(budgets);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// GETTING ONE
router.get('/:id', getBudget, (req, res) => {
  res.send(res.budget);
});

// CREATING ONE
router.post('/', async (req, res) => {
  const budget = new Budget({
    userId: req.body.userId,
    title: req.body.title,
    amount: req.body.amount,
    date: req.body.date,
  });

  try {
    const newBudget = await budget.save();
    res.status(201).json(newBudget);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATING ONE
router.patch('/:id', getBudget, async (req, res) => {
  if (req.body.title) {
    res.budget.title = req.body.title;
  }
  if (req.body.userId) {
    res.budget.userId = req.body.userId;
  }
  if (req.body.amount) {
    if (req.body.amount.starting) {
      res.budget.amount.starting = req.body.amount.starting;
    }
    if (req.body.amount.actual) {
      res.budget.amount.actual = req.body.amount.actual;
    }
    if (req.body.amount.diff) {
      res.budget.amount.diff = req.body.amount.diff;
    }
    if (req.body.amount.currency) {
      res.budget.amount.currency = req.body.amount.currency;
    }
  }

  try {
    const updatedBudget = await res.budget.save();
    res.json(updatedBudget);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETING ONE
router.delete('/:id', getBudget, async (req, res) => {
  try {
    await res.budget.remove();
    res.json({ message: `Deleted budget ${req.params.id}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
