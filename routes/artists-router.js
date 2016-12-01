const router = require('express').Router();
const Artist = require('../models/artist-model');
const Song = require('../models/song-model');

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

const getAllFrankOrChromeoSongs = (req, res) =>{
  Song.findAll({
    where: {
      artistId: [1,4],
    },
    include: Artist
  })
  .then( songs => {
    res.send(songs)
  })
}
const createArtist=(req,res)=>{
  Artist.create({
    name:req.params.name
  })
  res.send('createds ')
}

const deleteArtistById=(req,res)=>{
  Artist.destroy({
    where:{

      id:req.params.id
    }
  })
  .then(()=>{

    res.send('deleted')
  })
  
}

const updateArtistById=(req,res)=>{
  Artist.update(
    {name:'What I Learned With My Bachelors Coming Soon!'},
    {where:{
          id:req.params.id
        }
  })
  .then(()=>{
    res.send('updated')
  })
}


//Routes
router.route('/')
  .get(getAllArtists)
router.route('/sort/a-z')
  .get(getAllSortedArtistAlpha)
router.route('/id/:id')
  .get(getOneArtistById)
  .delete(deleteArtistById)
  .put(updateArtistById)
router.route('/name/:name')
  .get(getOneArtistByName)
  .post(createArtist)

router.route('/no-jungle')
  .get(getAllArtistsExceptJungle)
router.route('/frank-or-chromeo')
  .get(getAllFrankOrChromeoSongs)

module.exports = router;