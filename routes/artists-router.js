const router = require('express').Router();
const Artist = require('../models/artist-model');

const getAllArtists = (req, res) =>{
  Artist.findAll()
  .then(data =>{
    res.send(data)
  })
}

const getAllSortedArtistAlpha = (req, res) =>{
  Artist.findAll({
    order:"name ASC"
  })
  .then( data =>{
    res.send(data)
  })
}

const getOneArtistById = (req, res) =>{
  Artist.findAll({
    where: {
      id: req.params.id
    }
  })
  .then( artist =>{
    res.send(artist)
  })
}

const getOneArtistByName = (req, res) =>{
    Artist.findAll({
    where: {
      name: req.params.name
    }
  })
  .then( artist =>{
    res.send(artist)
  })
}

const getAllArtistsExceptJungle = (req, res) =>{
  Artist.findAll({  
    where: {
      $not: [
        { name: ['Jungle'] }
      ]
    }
  })
  .then( artists => {
    res.send(artists)
  })
}


//Routes
router.route('/')
  .get(getAllArtists)
router.route('/sort/a-z')
  .get(getAllSortedArtistAlpha)
router.route('/id/:id')
  .get(getOneArtistById)
router.route('/name/:name')
  .get(getOneArtistByName)
router.route('/no-jungle')
  .get(getAllArtistsExceptJungle)

module.exports = router;


// /api/artists GET all artists
// /api/artists/sort/a-z GET all artists sorted alphabetically
// /api/artists/id/:id GET specific artist by id
// /api/artists/name/:name GET specific artist by name
// /api/artists/no-jungle GET all artists except for 'Jungle'