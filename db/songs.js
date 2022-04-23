require('dotenv').config()

const axios = require('axios')

const Song = require("../models/songs-models");

// Define an array of objects to hold all songs from the youtube API
let arraySongs = [];

// Define a new array to hold just some information of interest (songTitle, videoID, thumbnail and video's url)
let seedSongs = []

// I used this youtube API
// https://developers.google.com/youtube/v3/docs/search/list?apix_params=%7B%22part%22%3A%5B%22snippet%22%5D%2C%22maxResults%22%3A1000000000%2C%22order%22%3A%22date%22%2C%22safeSearch%22%3A%22moderate%22%2C%22videoType%22%3A%22any%22%7D&apix=true

// let url = `https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10`

// axios.get(url)
//     .then(data => console.log(data))
//     arraySongs.push(data.data.items)

//     //Loop through the entire array of objects, and just grab song title, videoID and thumbnail
//     arraySongs.forEach(song => {
//         song.forEach(eachSong => {
//             let mySong = {
//                 "songTitle": eachSong.snippet.title,
//                 "videoID": eachSong.id.videoId,
//                 "thumbnail": eachSong.snippet.thumbnails.high,
//                 "url": `https://www.youtube.com/watch?v=${eachSong.id.videoId}`
//             };
//             seedSongs.push(mySong)
//         }

//         )
//         console.log(seedSongs)



//        // Insert data into database
//         let myJsonseedData = JSON.stringify(seedSongs);
//         Song.deleteMany({})
//             .then(() => {
//                 return Song.insertMany(seedSongs);
//             })
//             .then((res) => console.log(res))
//             .catch((err) => console.log(err))
//             .finally(() => {
//                 process.exit();
//             });
//     })
// })

