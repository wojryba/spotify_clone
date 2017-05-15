const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId : process.env.ID,
  clientSecret : process.env.SECRET,
  redirectUri : 'https://enigmatic-sea-40799.herokuapp.com/'
});



module.exports = spotifyApi;
