const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.use('/hello', (request, response) => {
  response.send('Hello!');
});

module.exports = app;