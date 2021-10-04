const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
  source: { type: String, required: true },
  rates: {
    type: mongoose.Schema.Types.Map,
    of: Number,
  },
  timestamp: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Currency', currencySchema);
