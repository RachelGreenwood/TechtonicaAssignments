const express = require('express');
const art = require('./art');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/art', (req, res) => {
  res.json(art);
})

app.get('/art/:isbn', (req, res) => {
  const { isbn } = req.params;
  console.log(req.params);

  const artwork = art.find(artwork => artwork.isbn === isbn);
  if(!artwork) {
    res.status(404).send("Sorry, I don't have that piece");
  }
  res.json(artwork);
})

// User makes post request
  // What are they sending?
//   {
//     "isbn": "9780857660282",
//     "title": "Harry Potter and the Prisoner of Azkaban",
//     "author": "J.K. Rowling",
//     "format": "Paperback"
// },
  // If all fields are not present, send 401 error
// Computer accesses JSON
// Computer updates JSON
  // Push item to the bottom
// Add new data to the local file
// Return new item

app.post('/art', (req, res) => {
  let arr = art;
  console.log(req.body);
  arr.push(req.body);
  res.json(arr);
})

app.all('*', (req, res) => {
  res.status(404).send("Sorry, that's an invalid URL");
})

  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });

  module.exports = app;