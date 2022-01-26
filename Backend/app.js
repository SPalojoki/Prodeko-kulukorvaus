const express = require('express');
const app = express();
const cors = require('cors');
const expenditureRouter = require('./controllers/expenditures');


app.use(cors());
app.use(express.json());

app.use(expenditureRouter);

module.exports = app;