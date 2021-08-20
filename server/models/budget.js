const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    actual: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    diff: {
      type: Number,
      required: true,
    },
    starting: { type: Number, required: true },
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Budget', budgetSchema);
