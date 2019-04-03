const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('ci with travis');
});

const server = app.listen(4000, () => {
  console.log('App running on port 4000');
});

module.exports = server;
