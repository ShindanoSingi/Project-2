const axios = require('axios')

axios.get('https://opentdb.com/api.php?amount=50&difficulty=hard&type=multiple')
  // .then(response => response.json())
  .then(data => console.log(data.data.results));