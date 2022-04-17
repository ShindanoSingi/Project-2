const fetch = require('node-fetch')


fetch('https://opentdb.com/api.php?amount=50&difficulty=hard&type=multiple', response)
  .then(response => response.json())
  .then(data => console.log(data));