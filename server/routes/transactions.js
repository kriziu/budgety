const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// MIDDLEWARE TO GET ONE TRANSACTION
const getTransaction = async (req, res, next) => {
  let transaction;

  try {
    transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res
        .status(404)
        .json({ message: 'Cannot find transaction with that id' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.transaction = transaction;
  next();
};

// GETTING ALL
router.get('/', async (req, res) => {
  try {
    const transactions = req.query.userId
      ? await Transaction.find({ userId: req.query.userId })
      : await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// GETTING ONE
router.get('/:id', getTransaction, (req, res) => {
  res.send(res.transaction);
});

// CREATING ONE
router.post('/', async (req, res) => {
  const transaction = new Transaction({
    userId: req.body.userId,
    budgetId: req.body.budgetId,
    currency: req.body.currency,
    title: req.body.title,
    amount: req.body.amount,
    date: req.body.date,
  });

  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETING ONE
router.delete('/:id', getTransaction, async (req, res) => {
  try {
    await res.transaction.remove();
    res.json({ message: `Deleted transaction ${req.params.id}` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
