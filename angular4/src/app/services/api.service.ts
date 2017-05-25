import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as SpotifyWebApi from 'spotify-web-api-js';

@Injectable()
export class ApiService {
  public playlist: any;
  public playerPlaylist: any;
  public artist: any;
  public album: any;
  public user: any;
  public category: any;
  private uri = 'http://localhost:3000/';
  constructor(private http: Http) { }

  // LOGIN STAFF
  public auth() {
    if (localStorage.getItem(this.uri + 'code')) {
      return true;
    } else {
      return false;
    }
  }

  login() {
    return this.http.get(this.uri + 'getLoginUrl');
  }

  postCode(code) {
    const encoded_data = JSON.stringify({ code });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'callback', encoded_data, options);
  }

  // use links provided by API
  useLink(url) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('code');
    headers.append('Authorization', `Bearer ${authToken}`);

    const options = new RequestOptions({ headers: headers });

    return this.http.get(url, options);
  }

  getFeaturedPlaylists() {
    return this.http.get(this.uri + 'browse/getFeaturedPlaylists');
  }

  getCategoriesAndReleses() {
    return this.http.get(this.uri + 'browse/categories');
  }

  getCategory(category) {
    const encoded_data = JSON.stringify({ category });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'browse/getCategory', encoded_data, options);
  }

  getArtistEverything(artist) {
    const encoded_data = JSON.stringify({ artist });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'artist', encoded_data, options);
  }

  getUserPlaylists(user) {
    const encoded_data = JSON.stringify({ user });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/playlists', encoded_data, options);
  }

  search(query) {
    const encoded_data = JSON.stringify({ query });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'search', encoded_data, options);
  }


  // PLAYLIST FOLLOWING
  followPlaylist(owner, id) {
    const encoded_data = JSON.stringify({ owner, id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/followPlaylist', encoded_data, options);
  }

  unFollowPlaylist(owner, id) {
    const encoded_data = JSON.stringify({ owner, id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/unFollowPlaylist', encoded_data, options);
  }

  checkIfPlaylistFollowed(owner, id) {
    const encoded_data = JSON.stringify({ owner, id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/checkIfPlaylistFollowed', encoded_data, options);
  }

  // ALBUM FOLLOWING
  checkIfAlbumSaved(id) {
    const encoded_data = JSON.stringify({ id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/checkAlbum', encoded_data, options);
  }

  saveAlbum(id) {
    const encoded_data = JSON.stringify({ id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/saveAlbum', encoded_data, options);
  }

  deleteAlbum(id) {
    const encoded_data = JSON.stringify({ id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/deleteAlbum', encoded_data, options);
  }

  // ARTISTS
  checkIfArtistFollowed(id) {
    const encoded_data = JSON.stringify({ id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/checkIfArtistFollowed', encoded_data, options);
  }

  followArtist(id) {
    const encoded_data = JSON.stringify({ id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/followArtist', encoded_data, options);
  }

  unFollowArtist(id) {
    const encoded_data = JSON.stringify({ id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/unFollowArtist', encoded_data, options);
  }


  // TRACKS
  checkIfTrackSaved(id) {
    const encoded_data = JSON.stringify({ id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/checkIfTrackSaved', encoded_data, options);
  }

  saveTrack(id) {
    const encoded_data = JSON.stringify({ id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/saveTrack', encoded_data, options);
  }

  deleteTrack(id) {
    const encoded_data = JSON.stringify({ id });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.uri + 'user/deleteTrack', encoded_data, options);
  }

  // usermusic
  getUserMusic() {
    return this.http.get(this.uri + 'user/getUserMusic');
  }

  getMe() {
    return this.http.get(this.uri + 'user/me');
  }
}
