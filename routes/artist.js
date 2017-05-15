const express = require('express');
const spotifyApi = require('../spotify');

const router = express.Router();

router.post('/', (req, res) => {
  const everything = {};

  spotifyApi.getArtistTopTracks(req.body.artist, 'PL')
  .then( data => {
    everything.topTracks = data.body;

    // secoung call
    spotifyApi.getArtistAlbums(req.body.artist)
    .then(data => {
      everything.albums = data.body;

      //third call
      spotifyApi.getArtistRelatedArtists(req.body.artist)
      .then(data => {
        everything.relatedArtists = data.body;
        res.send(everything);
      })
      // error handling
      .catch(error => {
        console.log(error);
        return res.status(error.statusCode).send(error);
      });
    })
    .catch(error => {
      console.log(error);
      return res.status(error.statusCode).send(error);
    });;
  })
  .catch(error => {
    console.log(error);
    return res.status(error.statusCode).send(error);
  });
})

module.exports = router;
