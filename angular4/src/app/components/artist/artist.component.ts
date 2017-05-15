import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { MusicService } from '../../services/music.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class ArtistComponent implements OnInit {
  private artist: any;
  private view = 'overview';
  private relatedArtists: any;
  private topTracks: any;
  private albums: any;
  private selected: any;
  private imgSelected: any;
  private followed: boolean;

  constructor(private api: ApiService, private router: Router, private music: MusicService) { }

  // UI CHANGES
  // show and hide play icon
  showPlay(i) {
    this.selected = i;
  }

  hidePlay(i) {
    this.selected = undefined;
  }

  // show/ hide play buttons
  showBackgroundPlay(i) {
    this.imgSelected = i;
  }

  hideBackgroundPlay(i) {
    this.imgSelected = undefined;
  }

  // INITIALIZATION
  ngOnInit() {
    if (this.api.artist) {
      this.getInfo();
      this.checkIfArtistFollowed();
    }
  }

  // get all the neccerry data
  getInfo() {
    this.artist = this.api.artist;
    console.log(this.artist);
    this.api.getArtistEverything(this.artist.id).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.relatedArtists = res.relatedArtists.artists;
        this.topTracks = res.topTracks.tracks;
        this.albums = res.albums;
      },
      error => console.log(error)
    )
  }

  // check if artist is followed
  checkIfArtistFollowed() {
    this.api.checkIfArtistFollowed(this.artist.id).subscribe(
      response => {
        this.followed = JSON.parse(response['_body'])[0];
      },
      error => console.log(error)
    );
  }

  followArtist() {
    this.api.followArtist(this.artist.id).subscribe(
      response => {
        this.followed = true;
      },
      error => console.log(error)
    );
  }

  unFollowArtist() {
    this.api.unFollowArtist(this.artist.id).subscribe(
      response => {
        this.followed = false;
      },
      error => console.log(error)
    );
  }

  //TOP TRACKS
  // play chosen song from top tracks
  playSong(i) {
    this.music.playlist = this.topTracks;
    this.music.play(i);
  }

  // ALBUMS
  // open certin album
  openAlbum(i) {
    this.api.useLink(this.albums.items[i].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.album = res;
        this.router.navigate(['/album']);
      },
      error => console.log(error)
    )
  }

  // play chosen album
  playAlbum(event, i) {
    event.stopPropagation();
    this.api.useLink(this.albums.items[i].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.music.playlist = res.tracks.items;
        this.music.play(0);
      },
      error => console.log(error)
    );
  }

  // open artist from artist list benefe albums
  chooseAndOpenArtist(i, j) {
    this.api.useLink(this.albums.items[i].artists[j].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.artist = res;
        this.getInfo();
      },
      error => console.log(error)
    );
  }

  // RELATED ARTISTS
  // change to diffrent artist
  artistR(i) {
    this.api.useLink(this.relatedArtists[i].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.artist = res;
        this.getInfo();
        this.view = 'overview';
      },
      error => console.log(error)
    )
  }

  // play top tracks of chosen artist
  playArtist(event, i) {
    event.stopPropagation();
    this.api.getArtistEverything(this.relatedArtists[i].id).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.music.playlist = res.topTracks.tracks;
        this.music.play(0);
      },
      error => console.log(error)
    )
  }

}
