const router = require('express').Router();
const Song = require('../models/song-model');
const Artist = require('../models/artist-model')
// const app = express();




router.get('/',(req,res)=>{
	Song.findAll({include: Artist}).then(function(data) {
	  console.log(data)
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

// Post.findAll({ limit: 10, order: '"updatedAt" DESC' })


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
	  console.log(data)
	  res.send(data)
	})

})

router.get('/count',(req,res)=>{
	Song.findAndCountAll().then(function(data) {
	  // console.log(data)
	  res.send(data)
	})

})

// router.get('/count',(req,res)=>{
// 	Song.count({where:{id.then(function(data) {
// 	  // console.log(data)
// 	  res.send(data)
// 	})

// })

// Project.count({ where: ["id > ?", 25] }).then(function(c) {
//   console.log("There are " + c + " projects with an id greater than 25.")
// })


// router.get('/count',(req,res)=>{
// 	Song.findAll().then(function(data) {
// 	  console.log(data)
// 	  res.send(data)
// 	})

// })

// .then(function(data)=>{
// 	res.send(data)
// })



// app.get('/id/:song',(req,res)=>{
// 	// Song.findAll().then(function(data) {
// 	//   console.log(data)
// 	//   res.send(data)
// 	// })
// 	Song.findAll({
// 	  where: {
// 	    authorId: 2
// 	  }
// 	}.then(function(data)=>{
// 		res.send(data)
// 	}));

// })


module.exports = router;


