const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////


var Genre = sequelizeConnection.define('genre',{
	title:{
		type:Sequelize.STRING
		// ,
		// validation: {min:1, max:100}
	}
})

Genre.sync()



module.exports = Genre;
