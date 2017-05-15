const express = require('express');
const spotifyApi = require('../spotify');

const router = express.Router();

router.get('/getFeaturedPlaylists', (req, res) => {
  spotifyApi.getFeaturedPlaylists({ limit : 6, country: 'PL' })
  .then(function(data) {
    res.send(data.body);
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.get('/categories', (req, res) => {
  const response = {};
  spotifyApi.getCategories()
  .then( data => {
    response.categories = data.body;

    spotifyApi.getNewReleases()
    .then( data => {
      response.releses = data.body;
      res.send(response);
    }).catch(error => {
      console.log(error);
      return res.status(error.statusCode).send(error);
    });
  }).catch(error => {
    console.log(error);
    return res.status(error.statusCode).send(error);
  });
})

router.post('/getCategory', (req, res) => {
  spotifyApi.getPlaylistsForCategory(req.body.category)
  .then(function(data) {
    res.send(data.body);
  }, function(error) {
    console.log(error);
    return res.status(error.statusCode).send(error);
  });
})

module.exports = router;
