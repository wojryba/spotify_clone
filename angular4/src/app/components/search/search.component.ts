import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MusicService } from '../../services/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1}))
      ])
    ])
  ],
})
export class SearchComponent implements OnInit {
  private tracks: any;
  private playlists: any;
  private albums: any;
  private artists: any;
  private overview: any;
  private timeout = null;
  private selected;
  private imgSelected;
  private whitespace = '&nbsp;';
  private show = 'top';

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
  }

  // search for the query
  searchInput(event, search) {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.api.search(search.value).subscribe(
        response => {
          const res = JSON.parse(response['_body']);
          this.tracks = res.tracks.tracks;
          this.albums = res.albums.albums;
          this.artists = res.artists.artists;
          this.playlists = res.playlists.playlists;
          this.overview = {
            tracks: res.tracks.tracks.items.slice(0, 6),
            albums: res.albums.albums.items.slice(0, 6),
            artists: res.artists.artists.items.slice(0, 6),
            playlists: res.playlists.playlists.items.slice(0, 6)
          };
          console.log(res);
          console.log(this.overview);
        }
      );
    }, 500);
  }


  // tracks
  playSong(i) {
    this.music.playlist = this.tracks.items;
    this.music.play(i);
  }

  findMoreTracks() {
    this.api.useLink(this.tracks['next']).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        console.log(res);
        if (res.tracks.next === this.tracks['next']) {
          console.log('no more');
        } else {
          let items = this.tracks['items'];
          items = items.concat(res.tracks.items);
          res.tracks.items = items;
          this.tracks = res.tracks;
        }
      },
      error => console.log(error)
    );
  }

  // ARTISTS
  openArtist(i, j) {
    if (j) {
      console.log('YEY');
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

  findMoreArtists() {
    this.api.useLink(this.artists['next']).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        console.log(res);
        if (res.artists.next === this.artists['next']) {
          console.log('no more');
        } else {
          let items = this.artists['items'];
          items = items.concat(res.artists.items);
          res.artists.items = items;
          this.artists = res.artists;
        }
      },
      error => console.log(error)
    );
  }

  // ALBUMS
  openAlbum(i) {
    this.api.useLink(this.albums.items[i].href).subscribe(
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
    this.api.useLink(this.albums.items[i].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.music.playlist = res.tracks.items;
        this.music.play(0);
      },
      error => console.log(error)
    );
  }

  findMoreAlbums() {
    this.api.useLink(this.albums['next']).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        console.log(res);
        if (res.albums.next === this.albums['next']) {
          console.log('no more');
        } else {
          let items = this.albums['items'];
          items = items.concat(res.albums.items);
          res.albums.items = items;
          this.albums = res.albums;
        }
      },
      error => console.log(error)
    );
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

  onScroll(event) {
    console.log();
  }

  findMorePlaylists() {
    this.api.useLink(this.playlists['next']).subscribe(
      response => {
        const res = JSON.parse(response['_body']);

        if (res.playlists.next === this.playlists['next']) {
          console.log('no more');
        } else {
          let items = this.playlists['items'];
          items = items.concat(res.playlists.items);
          res.playlists.items = items;
          this.playlists = res.playlists;
        }
      },
      error => console.log(error)
    );
  }
}
