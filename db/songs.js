const axios = require('axios')

axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&key=AIzaSyBI2VKuOz2CdgJBXUBfnmyPy7f6fHzwYO8')
  // .then(response => response.json())
  .then(data => console.log(data.data.items));