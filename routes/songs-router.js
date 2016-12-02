const router = require('express').Router();
const Song = require('../models/song-model');
const Artist = require('../models/artist-model')
// const app = express();



const getAllSongs=(req,res)=>{

	Song.findAll({include: Artist}).then(function(data) {
		  // console.log(data)
		res.send(data)
	})

}


const songId=(req,res)=>{

	Song.findOne({
		include: Artist,
	  where: {
	    artistId: req.params.id
	  }
	})
	.then(function(data){
		res.send(data)
	});
}

const getSongByTitle=(req,res)=>{
		Song.findAll({
			include: Artist,
		  where: {
		    title: req.params.title
		  }
		})
		.then(function(data){
			res.send(data)
		});
}

const sortByDate=(req,res)=>{

	Song.findAll({
		include: Artist,
    	order:'"updatedAt" DESC'
  	})
  	.then(function(data){
		res.send(data)
	});
}

const sortByAlpha=(req,res)=>{
	Song.findAll({
		include: Artist,
    	order:'"title" DESC'
  	})
  	.then(function(data){
		res.send(data)
	});
}



const showFirstFiveSongs=(req,res)=>{

	Song.findAll({include: Artist, limit:5})
		.then(function(data) {
	  // console.log(data)
	  res.send(data)
	})

}

const countSongs=(req,res)=>{

	Song.findAndCountAll().then(function(data) {
	  // console.log(data)
	  res.send(data)
	})
}

// const newSongPost=(req,res)=>{
// 	include:Artist
// 	Song.findOrCreate({	
// 		where:{
// 			title:req.params.title
// 		},
// 		defaults:{
// 			where:{
				
// 			}
// 				artistId:Artist.id
// 		}

// 	})
// 	.then(()=>{
// 		res.send('19 works')
// 	})
// }

// down vote
// global.db.Tag.findOrCreate({
//     where:{
//         name: tags[i]
//     }, 
//     defaults: {
//     //properties you want on create
//     }
// }).then( function(tag){
//     var created  = tag[1];
//     tag = tag[0]; //new or found
//     if( created ){

//     }
// }).fail(function(err) {

// });


router.route('/')
	.get(getAllSongs)
router.route('/id/:id')
	.get(songId)
router.route('/name/:title')
	.get(getSongByTitle)
	// .post(newSongPost)
router.route('/sort/by-date')
	.get(sortByDate)
router.route('/sort/a-z')
	.get(sortByAlpha)
router.route('/first-five')
	.get(showFirstFiveSongs)
router.route('/count')
	.get(countSongs)


module.exports = router;


