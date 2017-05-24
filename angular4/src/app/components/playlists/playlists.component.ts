import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MusicService } from '../../services/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class PlaylistsComponent implements OnInit {
  @Input() playlists;
  @Input() artists;
  @Input() round;
  private imgSelected;
  @Output() artistR = new EventEmitter();

  constructor(private api: ApiService, private music: MusicService, private router: Router) { }

  // show/ hide play buttons
  showBackgroundPlay(i) {
    this.imgSelected = i;
  }

  hideBackgroundPlay(i) {
    this.imgSelected = undefined;
  }

  ngOnInit() {
    console.log(this.playlists);
  }

  playPlaylist(event, i) {
    event.stopPropagation();
    if (this.artists) { // play artist
      this.api.getArtistEverything(this.playlists[i].id).subscribe(
        response => {
          const res = JSON.parse(response['_body']);
          this.music.playlist = res.topTracks.tracks;
          this.music.play(0);
        },
        error => console.log(error)
      );
    } else { // play the rest of staff
      this.api.useLink(this.playlists[i].href).subscribe(
        response => {
          const res = JSON.parse(response['_body']);
          this.music.playlist = res.tracks.items;
          this.music.play(0);
        },
        error => console.log(error)
      );
    }
  }

  openArtistOrPlaylist(i) {
    this.api.useLink(this.playlists[i].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);

        // if we need are in artists view, open arist
        if (this.artists) {
          this.api.artist = res;
          this.router.navigate(['/artist']);
        }
        // if we are in other views, open playlist or album
        else {
          // normalize tracks output.
          // if they are not straight in items, move them to items
          if (res.tracks.items[i].track) {
            for (let i=0; i < res.tracks.items.length; i++) {
              res.tracks.items[i] = res.tracks.items[i].track;
            }
          }
          this.api.playlist = res;
          this.router.navigate(['/playlist']);
        }
      },
      error => console.log(error)
    );
  }

  // open artist with two varibles
  openArtist(i, j) {
    this.api.useLink(this.playlists[i].artists[j].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
          this.api.artist = res;
          this.router.navigate(['/artist']);
      },
      error => console.log(error)
    );
  }

  artistRedirect(i) {
    this.artistR.emit(i);
  }

}
