import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MusicService } from '../../services/music.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class MainComponent implements OnInit {
  private message: any;
  private playlists: any;
  private categories: any;
  private newReleses: any;
  private recomendations: any;
  private show = false;
  private imgSelected;
  private switch = 'chosen';

  constructor(private api: ApiService, private router: Router, private music: MusicService) { }

  // UI CHANGES
  // show/hide play buttons
  showBackgroundPlay(i) {
    this.imgSelected = i;
  }

  hideBackgroundPlay(i) {
    this.imgSelected = undefined;
  }

  // INITIATION
  ngOnInit() {
    this.getFeaturedPlaylists();
    this.getCategories();
  }

  // get featured playlists
  getFeaturedPlaylists() {
    this.api.getFeaturedPlaylists().subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.message = res.message;
        this.playlists = res.playlists;
      },
      error => {
        console.log(error);
        if (this.api.auth()) {
          localStorage.clear();
          this.router.navigate(['/login']);
        }
      }
    );
  }

  // get categories and releses
  getCategories() {
    this.api.getCategoriesAndReleses().subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.categories = res.categories.categories;
      },
      error => console.log(error)
    );
  }

  // FEATURED PLAYLISTS
  // open playlist
  openPlaylist(i) {
    this.api.useLink(this.playlists['items'][i].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        for (let i=0; i < res.tracks.items.length; i++) {
          res.tracks.items[i] = res.tracks.items[i].track;
        }
        this.api.playlist = res;
        this.router.navigate(['/playlist']);
      },
      error => console.log(error)
    );
  }

  // play clicked playlist
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

  // find more playlists click handle
  findMore() {
    this.api.useLink(this.playlists['next']).subscribe(
      response => {
        const res = JSON.parse(response['_body']);

        if (res.playlists.next === this.playlists['next']) {
          this.show = true;
          setTimeout( () => this.show = false, 1000);
        } else {
          let items = this.playlists['items'];
          items = items.concat(res.playlists.items);
          res.playlists.items = items;
          this.playlists = res.playlists;
        }
      },
      error => {
        this.show = true;
        setTimeout( () => this.show = false, 1000);
      }
    );
  }

  // CATEGORIS PAGE
  // open category
  openCategory(i) {
    this.api.getCategory(this.categories.items[i].id).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.category = res.playlists;
        this.router.navigate(['/category']);
      },
      error => console.log(error)
    );
  }
}
