require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const controller = require('./controller');

const app = express();

app.use(morgan());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.all('/', (req, res) => {
  res.sendStatus(405);
});

app.all('/*', (req, res) => {
  controller.forwardRequest(req, res);
});

module.exports = app;
