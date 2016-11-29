const router = require('express').Router();
const Artist = require('../models/artist-model');
const Song = require('../models/song-model');

const getAllSongsWithArtist = (req, res) =>{
  Song.findAll({
    include: Artist
  })
  .then( songs =>{
    res.send(songs)
  })
}

router.route('/songs-with-artists')
  .get(getAllSongsWithArtist)

module.exports = router;