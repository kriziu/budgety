const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://root:TFvJiWgCq3K7TvRa@cluster0.jghn2.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());

const budgetsRouter = require('./routes/budgets');
app.use(`/.netlify/functions/api/budgets`, budgetsRouter);

const transactionsRouter = require('./routes/transactions');
app.use(`/.netlify/functions/api/transactions`, transactionsRouter);

module.exports = app;
module.exports.handler = serverless(app);
