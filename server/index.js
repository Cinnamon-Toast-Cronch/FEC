require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();

const ATELIER_API_URL = `https://app-hrsei-api.herokuapp.com/api/fec2/${process.env.CAMPUS_CODE}/`;

app.use(morgan());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.all('/*', (req, res) => {
  const axiosConfig = {
    url: req.originalUrl,
    method: req.method,
    baseURL: ATELIER_API_URL,
    headers: { Authorization: process.env.ATELIER_API_TOKEN },
    data: req.body
  }

  axios(axiosConfig)
    .then((response) => {
      res.set(response.headers);
      res.status(response.status).json(response.data);
    })
    .catch((err) => {
      if (err.response) {
        res.sendStatus(err.response.status);
      } else {
        res.sendStatus(400);
      }
    });
})

app.listen(process.env.PORT, () => {
  console.log(`FEC listening on port ${process.env.PORT}`);
});