require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(process.env.PORT, () => {
  console.log(`FEC listening on port ${process.env.PORT}`);
});