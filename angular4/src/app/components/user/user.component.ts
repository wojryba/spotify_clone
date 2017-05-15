import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class UserComponent implements OnInit {
  private user: any;
  private playlists: any;
  imgSelected;

  constructor(private api: ApiService, private router: Router, private music: MusicService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    if (this.api.user) {
      this.user = this.api.user;
      this.api.getUserPlaylists(this.user.id).subscribe(
        response => {
          const res = JSON.parse(response['_body']);
          this.playlists = res;
        },
        error => console.log(error)
      );
    }
  }

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

  // show/ hide play buttons
  showBackgroundPlay(i) {
    this.imgSelected = i;
  }

  hideBackgroundPlay(i) {
    this.imgSelected = undefined;
  }

  // play selected playlist
  playPlaylist(event, i) {
    event.stopPropagation();
    this.api.useLink(this.playlists.items[i].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.music.playlist = res.tracks.items;
        this.music.play(i);
      },
      error => console.log(error)
    );
  }

}
