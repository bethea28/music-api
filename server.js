const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');


//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));

//listen on port 8888
app.listen('8888', () => console.log('Listening on port 8888'));

const models = require('./index').models
const routes = require('./index').routes

app.use("/api/songs", routes.songs)
app.use("/api/artists", routes.artists)

//serve all of the HTML views, which we'll eventually use to build a simple user interface
app.use("/view", routes.view)
