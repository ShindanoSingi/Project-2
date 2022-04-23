const mongoose = require('../db/connection')

// Structure data in database
const SongSchema = new mongoose.Schema({
    songTitle: String,
    videoID: String,
    thumbnail: {
        url:String,
        width: Number,
        height: Number
    },
    url: String
}
);

const Song = mongoose.model('song', SongSchema);

module.exports = Song;