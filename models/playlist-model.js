var Sequelize = require('sequelize')
const sequelizeConnection = require('../db');

var Playlist = sequelizeConnection.define('playlist',{
	name:{
		type:Sequelize.STRING
		// validation:{min:1, max: 90}
	}
})

Playlist.sync()


module.exports = Playlist;
