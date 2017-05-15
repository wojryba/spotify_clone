const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
require('dotenv').config();
const spotifyApi = require('./spotify');

const scopes = ['user-read-private', 'user-read-email', 'playlist-read-private', 'playlist-modify-public', 'playlist-modify-private', 'user-follow-modify', 'user-follow-read', 'user-library-read', 'user-library-modify'];
const state = 'some-state-of-my-choice';

const authorizeURL = spotifyApi.createAuthorizeURL(scopes);



const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.get('/getLoginUrl', (req, res) => {
  res.send(authorizeURL);
})

app.get('/', (req, res) => {
  res.redirect(authorizeURL);
})

const browse = require('./routes/browse');
app.use('/browse', browse);

const artist = require('./routes/artist');
app.use('/artist', artist)

const user = require('./routes/user');
app.use('/user', user);

const search = require('./routes/search');
app.use('/search', search);

app.post('/callback', (req, res) => {
  var code = req.body.code;

  // Retrieve an access token and a refresh token
  spotifyApi.authorizationCodeGrant(code)
    .then(function(data) {
    // Set the access token on the API object to use it in later calls
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);
    return res.send(data.body['access_token']);
  }, function(err) {
    return res.status(err.statusCode).send(err);
  });
})

// All remaining requests redirect to angular.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './dist/', 'index.html'));
});

app.listen(port, function(){
  console.log("connected to server on port " + port);
});
