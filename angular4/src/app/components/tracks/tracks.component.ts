import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MusicService } from '../../services/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
  animations: [
    trigger('enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('150ms', style({opacity: 1}))
      ])
    ])
  ]
})
export class TracksComponent implements OnInit {
  @Input() tracks;
  private selected;

  constructor(private api: ApiService, private music: MusicService, private router: Router) { }

  showPlay(i) {
    this.selected = i;
  }

  hidePlay(i) {
    this.selected = undefined;
  }


  ngOnInit() {
  }

  playSong(i) {
    this.music.playlist = this.tracks;
    this.music.play(i);
  }

  openArtist(i, j) {
      this.api.useLink(this.tracks[i].artists[j].href).subscribe(
        response => {
          const res = JSON.parse(response['_body']);
          this.api.artist = res;
          this.router.navigate(['/artist']);
        },
        error => console.log(error)
      );
  }

  openAlbum(i) {
    this.api.useLink(this.tracks[i].album.href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.playlist = res;
        this.router.navigate(['/playlist']);
      },
      error => console.log(error)
    );
  }

}
