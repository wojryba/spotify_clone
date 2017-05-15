const express = require('express');
const spotifyApi = require('../spotify');

const router = express.Router();

router.post('/playlists', (req, res) => {
  spotifyApi.getUserPlaylists(req.body.user)
    .then(function(data) {
      res.send(data.body);
    },function(error) {
      console.log(error);
      res.status(error.statusCode).send(error);
    });
})

// PLAYLISTS
router.post('/followPlaylist', (req, res) => {
  spotifyApi.followPlaylist(req.body.owner, req.body.id, {
    'public' : false
  }).then(function(data) {
     res.send('followed');
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.post('/checkIfPlaylistFollowed', (req, res) => {

  spotifyApi.getMe()
  .then(data => {
    spotifyApi.areFollowingPlaylist(req.body.owner, req.body.id, [data.body.id])
     .then(data => {
        data.body.forEach(function(isFollowing) {
          res.send(isFollowing);
        });
      })
      .catch(error => {
        console.log(error);
        res.status(error.statusCode).send(error);
      });
  })
  .catch(error => {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.post('/unFollowPlaylist', (req, res) => {
  spotifyApi.unfollowPlaylist(req.body.owner, req.body.id)
  .then(function(data) {
     res.send('unfollowed');
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

// ALBUMS
router.post('/checkAlbum', (req, res) => {
  spotifyApi.containsMySavedAlbums([req.body.id])
  .then(function(data) {

    // An array is returned, where the first element corresponds to the first album ID in the query
    var albumIsInYourMusic = data.body[0];

    if (albumIsInYourMusic) {
      return res.send(true);
    } else {
      return res.send(false)
    }
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.post('/saveAlbum', (req, res) => {
  spotifyApi.addToMySavedAlbums([req.body.id])
  .then(function(data) {
    res.send('Added album!');
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.post('/deleteAlbum', (req, res) => {
  spotifyApi.removeFromMySavedAlbums([req.body.id])
  .then(function(data) {
    res.send('Removed!');
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

// ARTISTS
router.post('/checkIfArtistFollowed', (req, res) => {
  spotifyApi.isFollowingArtists([req.body.id])
  .then(function(data) {
     res.send(data.body);
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.post('/followArtist', (req, res) => {
  spotifyApi.followArtists([req.body.id])
  .then(function(data) {
     res.send(data);
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.post('/unFollowArtist', (req, res) => {
  spotifyApi.unfollowArtists([req.body.id])
  .then(function(data) {
     res.send(data);
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})


// TRACKS
router.post('/checkIfTrackSaved', (req, res) => {
  spotifyApi.containsMySavedTracks([req.body.id])
  .then(function(data) {

    // An array is returned, where the first element corresponds to the first track ID in the query
    var trackIsInYourMusic = data.body[0];

    if (trackIsInYourMusic) {
      return res.send(true);
    } else {
      return res.send(false);
    }
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.post('/saveTrack', (req, res) => {
  spotifyApi.addToMySavedTracks([req.body.id])
  .then(function(data) {
    res.send('saved');
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.post('/deleteTrack', (req, res) => {
  spotifyApi.removeFromMySavedTracks([req.body.id])
  .then(function(data) {
    res.send('Removed!');
  }, function(error) {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.get('/getUserMusic', (req, res) => {
  const usersMusic = {};

  // get Albums
  spotifyApi.getMySavedAlbums()
  .then(data => {
    usersMusic.albums = data.body;

    // get tracks
    spotifyApi.getMySavedTracks()
    .then(data => {
      usersMusic.tracks = data.body;

      // get ARTISTS
      spotifyApi.getFollowedArtists()
      .then(data => {
        usersMusic.artists = data.body;

        // get Playlists
        spotifyApi.getUserPlaylists('thelinmichael')
        .then(function(data) {
          usersMusic.playlists = data.body;
          res.send(usersMusic);
        }).catch(error => {
          console.log(error);
          res.status(error.statusCode).send(error);
        });
      }).catch(error => {
        console.log(error);
        res.status(error.statusCode).send(error);
      });
    }).catch(error => {
      console.log(error);
      res.status(error.statusCode).send(error);
    });
  }).catch(error => {
    console.log(error);
    res.status(error.statusCode).send(error);
  });
})

router.get('/me', (req, res) => {
  spotifyApi.getMe()
  .then(data => {
    res.send(data.body);
  })
  .catch(error => {
    res.status(error.statusCode).send(error);
  })
})

module.exports = router;
