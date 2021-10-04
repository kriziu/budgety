const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

const { DB_PASS } = process.env;

mongoose.connect(
  `mongodb+srv://root:${DB_PASS}@cluster0.jghn2.mongodb.net/Cluster0?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(cors());

const budgetsRouter = require('./routes/budgets');
app.use(`/budgets`, budgetsRouter);

const transactionsRouter = require('./routes/transactions');
app.use(`/transactions`, transactionsRouter);

const usersRouter = require('./routes/users');
app.use(`/users`, usersRouter);

const currencyRouter = require('./routes/currency');
app.use(`/currency`, currencyRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
