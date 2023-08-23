const express = require('express');
const art = require('./art');

const app = express();
const port = process.env.PORT || 3000;

app.get('/art', (req, res) => {
  res.json(art);
})

app.get('/art/:isbn', (req, res) => {
  const { isbn } = req.params;
  console.log(req.params);
})

app.post('/', (req, res) => {
  let arr = art;
  console.log(req.body);
  // arr.push(req);
  res.json(arr);
})

  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });

  module.exports = app;