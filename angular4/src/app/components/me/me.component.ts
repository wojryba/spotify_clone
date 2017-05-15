import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MusicService } from '../../services/music.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class MeComponent implements OnInit {
  private switch = 'playlists';
  private tracks: any;
  private albums: any;
  private artists: any;
  private playlists: any;
  private selected;
  private imgSelected;

  constructor(private api: ApiService, private music: MusicService, private router: Router) { }
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

  ngOnInit() {
    this.getUserMusic();
  }

  // get all the needed data
  getUserMusic() {
    this.api.getUserMusic().subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.albums = res.albums;
        this.tracks = res.tracks;
        this.artists = res.artists.artists;
        this.playlists = res.playlists;
        console.log(res);
      },
      error => console.log(error)
    );
  }

  // tracks
  playSong(i) {
    this.music.playlist = this.tracks.items;
    this.music.play(i);
  }

  // ARTISTS
  openArtist(i, j) {
    if (j) {
      console.log('YEY')
    } else {
      this.api.useLink(this.artists.items[i].href).subscribe(
        response => {
          const res = JSON.parse(response['_body']);
          this.api.artist = res;
          this.router.navigate(['/artist']);
        },
        error => console.log(error)
      );
    }
  }

  playArtist(event, i) {
    event.stopPropagation();
    this.api.getArtistEverything(this.artists.items[i].id).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.music.playlist = res.topTracks.tracks;
        this.music.play(0);
      },
      error => console.log(error)
    );
  }

  // ALBUMS
  openAlbum(i) {
    this.api.useLink(this.albums.items[i].album.href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.album = res;
        this.router.navigate(['/album']);
      },
      error => console.log(error)
    );
  }

  playAlbum(event, i) {
    event.stopPropagation();
    this.api.useLink(this.albums.items[i].album.href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.music.playlist = res.tracks.items;
        this.music.play(0);
      },
      error => console.log(error)
    )
  }

  // PLAYLISTS
  openPlaylist(i) {
    this.api.useLink(this.playlists.items[i].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.playlist = res;
        this.router.navigate(['/playlist']);
      },
      error => console.log(error)
    );
  }

  playPlaylist(event, i) {
    event.stopPropagation();
    this.api.useLink(this.playlists.items[i].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.music.playlist = res.tracks.items;
        this.music.play(0);
      },
      error => console.log(error)
    );
  }

}
