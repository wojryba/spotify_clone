import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
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

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getUserMusic();
  }

  // get all the needed data
  getUserMusic() {
    this.api.getUserMusic().subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        // normalizing album output, to fit to all others
        for (let i = 0; i < res.albums.items.length; i++) {
          res.albums.items[i] = res.albums.items[i].album;
        }
        // normalizing tracks output, to fit to all others
        for (let i = 0; i < res.tracks.items.length; i++) {
          res.tracks.items[i] = res.tracks.items[i].track;
        }

        this.tracks = res.tracks;
        this.albums = res.albums;
        this.artists = res.artists.artists;
        this.playlists = res.playlists;
      },
      error => console.log(error)
    );
  }

}
