import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MusicService } from '../../services/music.service';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class AlbumComponent implements OnInit {
  private album: any;
  private selected: any;
  private show = false;
  private saved;

  constructor(private api: ApiService, private music: MusicService, private router: Router) { }

  showPlay(i) {
    this.selected = i;
  }

  hidePlay(i) {
    this.selected = undefined;
  }


  ngOnInit() {
    if (this.api.album) {
      this.album = this.api.album;
      this.checkAlbum();
    }
  }

  playSong(i) {
    this.music.playlist = this.album.tracks.items;
    this.music.play(i);
  }

  openArtist(i) {
    this.api.useLink(i.href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.artist = res;
        this.router.navigate(['/artist']);
      },
      error => console.log(error)
    );
  }

  checkAlbum() {
    this.api.checkIfAlbumSaved(this.album.id).subscribe(
      response => {
        this.saved = JSON.parse(response['_body']);
      },
      error => console.log(error)
    );
  }

  saveAlbum() {
    this.api.saveAlbum(this.album.id).subscribe(
      response => {
        this.saved = true;
      },
      error => console.log(error)
    );
  }

  deleteAlbum() {
    this.api.deleteAlbum(this.album.id).subscribe(
      response => {
        this.saved = false;
        console.log(response);
      },
      error => console.log(error)
    );
  }

}
