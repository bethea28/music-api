const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');


//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
var staticPath = path.join(__dirname,'./client/public')
app.use(express.static(staticPath))
app.use(bodyParser.urlencoded({ extended: true }));

//listen on port 8888
app.listen('8888', () => console.log('Listening on port 8888'));

const models = require('./index').models
const routes = require('./index').routes

app.use("/api/songs", routes.songs)
app.use("/api/artists", routes.artists)
app.use("/api", routes.songsWithArtists)

// if routes hit anything else serve up this html file 
//if doing it the other way i could add the other html files here
console.log(__dirname)
app.use('/*', (req, res) => {res.sendFile(__dirname +'/client/public/index.html')});


//serve all of the HTML views, which we'll eventually use to build a simple user interface
app.use("/view", routes.view)
