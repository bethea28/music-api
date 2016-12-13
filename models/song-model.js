const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Artist = require('./artist-model');
const Playlist = require('./playlist-model');

// create the Song model
var Song = sequelizeConnection.define('song', {
  title: Sequelize.STRING,
});

//joining Song and Artist tables. this will aumatically add an 'artistId' field to the songs table
//see the docs for more info: http://docs.sequelizejs.com/en/latest/docs/associations/
Song.belongsTo(Artist);
// // there are a few other ways we can do this:
// Song.belongsTo(Artist); // artistId will be added to Song model
// Song.hasOne(Artist); //songId will be added on Artist model
// Song.hasMany(Artist, {as: 'Artists'}); //songIds will be added to Artist

Song.belongsToMany(Playlist, { through: 'songPlaylist'});
Playlist.belongsToMany(Song, { through: 'songPlaylist'});
// Project.belongsToMany(User, {through: 'UserProject'});

Song.sync()

module.exports = Song;
