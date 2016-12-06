                                          // Require models
// const Song = require('./models/song-model');
// const Artist = require('./models/artist-model');

// Require routes
const view = require('./routes/view-router.js');
const songs = require('./routes/songs-router.js');
const artists = require('./routes/artists-router.js');
const songsWithArtists = require('./routes/songsWithArtists-router.js');

module.exports = {
  // models: {
  //   Song: Song,
  //   Artist: Artist
  // },
  
  routes: {
    view: view, 
    songs: songs,
    artists: artists,
    songsWithArtists: songsWithArtists
  }
}