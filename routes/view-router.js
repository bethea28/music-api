const router = require('express').Router();
const path = require('path')

router.get('/all-songs', (req, res) => {res.sendFile(path.join(__dirname, '../views/all-songs.html'))});
router.get('/all-artists', (req, res) => {res.sendFile(path.join(__dirname, '../views/all-artists.html'))});
router.get('/artists-search', (req, res) => {res.sendFile(path.join(__dirname, '../views/artists-search.html'))});
router.get('/youtube-search', (req, res) => {res.sendFile(path.join(__dirname, '../views/youtube-search.html'))});


module.exports = router;