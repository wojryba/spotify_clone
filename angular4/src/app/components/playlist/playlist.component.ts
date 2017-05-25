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
  private saved;

  constructor(private api: ApiService, private music: MusicService, private router: Router) { }

  ngOnInit() {
    if (this.api.playlist) {
      this.playlist = this.api.playlist;
      this.checkIfPlaylistFollowed();
    }
  }

  checkIfPlaylistFollowed() {
    if (this.playlist.owner) {
      this.api.checkIfPlaylistFollowed(this.playlist.owner.id, this.playlist.id).subscribe(
        response => {
          this.followed = JSON.parse(response['_body']);
          console.log(this.followed);
        },
        error => console.log(error)
      );
    } else {
      this.api.checkIfAlbumSaved(this.playlist.id).subscribe(
        response => {
          this.saved = JSON.parse(response['_body']);
        },
        error => console.log(error)
      );
    }
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

  openAlbum(e) {
    this.playlist = this.api.playlist;
    this.checkIfPlaylistFollowed();
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

  saveAlbum() {
    this.api.saveAlbum(this.playlist.id).subscribe(
      response => {
        this.saved = true;
      },
      error => console.log(error)
    );
  }

  deleteAlbum() {
    this.api.deleteAlbum(this.playlist.id).subscribe(
      response => {
        this.saved = false;
      },
      error => console.log(error)
    );
  }

}
