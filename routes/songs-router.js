const router = require('express').Router();
const Song = require('../models/song-model');
const Artist = require('../models/artist-model')
// const app = express();




router.get('/',(req,res)=>{
	Song.findAll({include: Artist}).then(function(data) {
	  // console.log(data)
	  res.send(data)
	})

})


router.get('/id/:id',(req,res)=>{
	Song.findOne({
		include: Artist,
	  where: {
	    artistId: req.params.id

	  }
	}).then(function(data){
	res.send(data)
	});
})

router.get('/name/:title',(req,res)=>{
	Song.findAll({
		include: Artist,
	  where: {
	    title: req.params.title
	  }
	}).then(function(data){
	res.send(data)
	});
})

router.get('/sort/by-date',(req,res)=>{
	Song.findAll({
		include: Artist,
    	order:'"updatedAt" DESC'
  	}).then(function(data){
		res.send(data)
	});
})
router.get('/sort/a-z',(req,res)=>{
	Song.findAll({
		include: Artist,
    	order:'"title" DESC'
  	}).then(function(data){
		res.send(data)
	});
})



router.get('/sort/by-date',(req,res)=>{
	Song.findAll({
		include: Artist,
	  order: '"updatedAt" DESC'
	    
	  
	}).then(function(data){
	res.send(data)
	});
})


router.get('/first-five',(req,res)=>{
	Song.findAll({include: Artist, limit:5}).then(function(data) {
	  // console.log(data)
	  res.send(data)
	})

})

router.get('/count',(req,res)=>{
	Song.findAndCountAll().then(function(data) {
	  // console.log(data)
	  res.send(data)
	})

})



module.exports = router;


