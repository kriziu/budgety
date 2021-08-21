const express = require('express');
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect(
  'mongodb+srv://root:TFvJiWgCq3K7TvRa@cluster0.jghn2.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(cors());

const budgetsRouter = require('./routes/budgets');
app.use(`/.netlify/functions/api/budgets`, budgetsRouter);

const transactionsRouter = require('./routes/transactions');
app.use(`/.netlify/functions/api/transactions`, transactionsRouter);

const usersRouter = require('./routes/users');
app.use(`/.netlify/functions/api/users`, usersRouter);

module.exports = app;
module.exports.handler = serverless(app);
