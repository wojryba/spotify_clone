import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
  private show = 'top';

  constructor(private api: ApiService) { }

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


  // API CALLS TO FIND MORE STAFF
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
