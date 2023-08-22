const express = require('express');
const art = require('./art');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });

app.get('/', (req, res) => {
  res.json(art);
})

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });

  module.exports = app;