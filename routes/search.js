const express = require('express');
const spotifyApi = require('../spotify');

const router = express.Router();

router.post('', (req, res) => {
  const all = {};
  // search for tracks
  spotifyApi.searchTracks(req.body.query)
  .then(data => {
    all.tracks = data.body;

    // Search artists
    spotifyApi.searchArtists(req.body.query)
      .then(data => {
        all.artists = data.body;

        // Search Playlists
        spotifyApi.searchPlaylists(req.body.query)
        .then(function(data) {
          all.playlists = data.body;

          spotifyApi.searchAlbums(req.body.query)
          .then(function(data) {
            all.albums = data.body;
            return res.send(all);

          }).catch(() => {
            console.log(error);
            res.status(error.statusCode).send(error);
          });

        }).catch(() => {
          console.log(error);
          res.status(error.statusCode).send(error);
        });

      }).catch(() => {
        console.log(error);
        res.status(error.statusCode).send(error);
      });
  })
  .catch(() => {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

module.exports = router;
