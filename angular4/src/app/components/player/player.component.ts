import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MusicService } from '../../services/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  slider = false;
  @Input() mobileview;
  @Output() showsiebar = new EventEmitter();

  constructor(private api: ApiService, private music: MusicService, private router: Router) {
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('playlist'))) {
      this.music.playlist = JSON.parse(localStorage.getItem('playlist'));
      this.music.i = JSON.parse(localStorage.getItem('i'));
      this.music.track = JSON.parse(localStorage.getItem('track'));
      this.music.audio.src = this.music.track.preview_url;
      this.music.checkIfTrackSaved()
    }
  }

  sidebar() {
    this.showsiebar.emit();
  }

  progressBar(event: any) {
    if (this.music.audio.duration) {
      let t = (this.music.value * this.music.audio.duration) / 100;
      this.music.changeTime(t);
    }
  }

  volume(event: any) {
    if (this.music.audio.duration) {
      this.music.changeVolume();
    }
  }

  // OPEN ARTIST AND ALBUM PAGES
  album() {
    this.api.useLink(this.music.track.album.href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.album = res;
        this.router.navigate(['/album']);
      },
      error => console.log(error)
    )
  }

  artist() {
    this.api.useLink(this.music.track.artists[0].href).subscribe(
      response => {
        const res = JSON.parse(response['_body']);
        this.api.artist = res;
        this.router.navigate(['/artist']);
      },
      error => console.log(error)
    )
  }

  // saving tracks
  saveTrack() {
    this.api.saveTrack(this.music.track.id).subscribe(
      response => {
        this.music.saved = true;
      },
      error => console.log(error)
    );
  }

  deleteTrack() {
    this.api.checkIfTrackSaved(this.music.track.id).subscribe(
      response => {
        this.music.saved = false;
      },
      error => console.log(error)
    );
  }
}
