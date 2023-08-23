const express = require('express');
const art = require('./art');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });

app.get('/', (req, res) => {
  res.json(art);
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