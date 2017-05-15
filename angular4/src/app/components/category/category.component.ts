import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MusicService } from '../../services/music.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class CategoryComponent implements OnInit {
  private playlists: any;
  private imgSelected: any;

  constructor(private api: ApiService, private router: Router, private music: MusicService) { }

  ngOnInit() {
    if (this.api.category) {
      this.playlists = this.api.category;
      console.log(this.playlists);
    }
  }

  // show/ hide play buttons
  showBackgroundPlay(i) {
    this.imgSelected = i;
  }

  hideBackgroundPlay(i) {
    this.imgSelected = undefined;
  }

  // open playlist
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
        this.music.play(i);
      },
      error => console.log(error)
    );
  }
}
