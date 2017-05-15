import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MusicService } from '../../services/music.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class PlaylistComponent implements OnInit {
  private playlist: any;
  private selected: any;
  private whitespace = '&nbsp;';
  private show = false;
  private followed;

  constructor(private api: ApiService, private music: MusicService, private router: Router) { }

  showPlay(i) {
    this.selected = i;
  }

  hidePlay(i) {
    this.selected = undefined;
  }

  ngOnInit() {
    if (this.api.playlist) {
      this.playlist = this.api.playlist;
      this.checkIfPlaylistFollowed();
    }
  }

  checkIfPlaylistFollowed() {
    this.api.checkIfPlaylistFollowed(this.playlist.owner.id, this.playlist.id).subscribe(
      response => {
        this.followed = JSON.parse(response['_body']);
      },
      error => console.log(error)
    );
  }

  playSong(i) {
    this.music.playlist = this.playlist.tracks.items;
    this.music.play(i);
  }

  // OPEN ARTIST
  artistR(i, j) {
    this.api.useLink(this.playlist.tracks.items[i].track.artists[j].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.artist = res;
        this.router.navigate(['/artist']);
      },
      error => console.log(error)
    );
  }


  // open user who created a playlist
  openUser() {
    this.api.useLink(this.playlist.owner.href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.user = res;
        this.router.navigate(['/user']);
      },
      error => console.log(error)
    );
  }

  followPlaylist() {
    this.api.followPlaylist(this.playlist.owner.id, this.playlist.id).subscribe(
      response => {
        this.followed = true;
      },
      error => console.log(error)
    );
  }

  unFollowPlaylist() {
    this.api.unFollowPlaylist(this.playlist.owner.id, this.playlist.id).subscribe(
      response => {
        this.followed = false;
      },
      error => console.log(error)
    );
  }

}
