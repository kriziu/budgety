const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  currency: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', transactionSchema);
