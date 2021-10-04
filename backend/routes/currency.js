const express = require('express');
const router = express.Router();
const Currency = require('../models/currency');
const axios = require('axios');

const { EXCHANGE_API } = process.env;

const fetchCurrency = async () => {
  return await (
    await axios.get(`https://v1.nocodeapi.com/kriziuu/cx/${EXCHANGE_API}/rates`)
  ).data;
};

router.get('/', async (req, res) => {
  try {
    let currency = await Currency.findOne();

    const date = new Date();

    if (!currency) {
      const currencyFetched = await fetchCurrency();

      try {
        const newCurrency = await new Currency({ ...currencyFetched }).save();
        return res.status(201).json(newCurrency);
      } catch (err) {
        return res.status(400).json({ message: err.message });
      }
    }

    if (date.getTime() - currency.timestamp > 10800000) {
      const currencyFetched = await fetchCurrency();

      currency.timestamp = currencyFetched.timestamp;
      currency.rates = currencyFetched.rates;
      currency.source = currencyFetched.source;

      try {
        const newCurrency = await currency.save();
        return res.status(201).json(newCurrency);
      } catch (err) {
        return res.status(400).json({ message: err.message });
      }
    }

    res.json(currency);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
