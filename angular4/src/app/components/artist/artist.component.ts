import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
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
  private followed: boolean;

  constructor(private api: ApiService) { }

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
    this.api.getArtistEverything(this.artist.id).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.relatedArtists = res.relatedArtists.artists;
        this.topTracks = res.topTracks.tracks;
        this.albums = res.albums;
      },
      error => console.log(error)
    );
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
    );
  }

}
