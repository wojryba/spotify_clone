import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Injectable()
export class MusicService {
  public playlist: any;
  public random;
  public i: number;
  public p = true;
  public value = 0;
  public volume = 0.7;
  public track: any;
  public duration = 30.04;
  public currentTime = 0;
  public saved: boolean;
  innerWidth: any;
  audio;

  constructor(private api: ApiService, private router: Router) {
    this.audio = new Audio();

    this.audio.ontimeupdate = () => {
     this.value = (this.audio.currentTime / this.audio.duration) * 100;
     this.duration = Math.round(this.audio.duration * 100) / 100;
     this.currentTime = Math.round(this.audio.currentTime * 100) / 100;
   };

    // handle ended song
    this.audio.onended = () => {
      this.audio = new Audio();
      if (this.random) {
        this.shuffle();
      } else {
        this.next(this.i);
      }
    };
 }


 play(i) {
   // stop any previes audio playing, and create a new one
   this.audio.pause();
   this.audio = new Audio();

   // set up i for next and previes buttons
   this.i = i;
   localStorage.setItem('playlist', JSON.stringify(this.playlist));
   localStorage.setItem('i', JSON.stringify(i));
   // load the new song
   if (this.playlist[i].track) {
     this.load(this.playlist[i].track.href);
   } else if (this.playlist[i].href) {
     this.load(this.playlist[i].href);
   }

   // play the song
   this.audio.play();
   this.p = false;

   this.audio.ontimeupdate = () => {
    this.value = (this.audio.currentTime / this.audio.duration) * 100;
    this.duration = Math.round(this.audio.duration * 100) / 100;
    this.currentTime = Math.round(this.audio.currentTime * 100) / 100;
  };

   // handle ended song
   this.audio.onended = () => {
     this.audio = new Audio();
     if (this.random) {
       this.shuffle();
     } else {
       this.next(this.i);
     }
   };
 }

 load(url) {
   this.api.useLink(url).subscribe(
     response => {
       const res = JSON.parse(response['_body']);
       if (res.preview_url) {
         this.track = res;
         localStorage.setItem('track', JSON.stringify(res));
         // check if the music is saved in users music
         this.checkIfTrackSaved();

         // load the music to audio
         this.audio.src = res.preview_url;
       } else {
         this.next(this.i);
       }
     },
     error => {
       console.log(error);
       this.next(this.i);
     }
   );
 }

 next(i) {
   if (this.random) {
     this.shuffle();
   } else {
     if (i === this.playlist.length - 1) {
       i = 0;
     } else {
       i = i + 1;
     }
     this.play(i);
   }
 }

 previes(i) {
   if (this.random) {
     this.shuffle();
   } else {
     if (i === 0) {
       i = this.playlist.length - 1;
       console.log(this.playlist[i]);
     } else {
       i = i - 1;
     }
     this.play(i);
   }
 }

 shuffle() {
   const i = Math.floor(Math.random() * this.playlist.length) + 1;
   this.play(i);
 }

 pause() {
   if (this.p) {
     this.audio.play();
   } else {
     this.audio.pause();
   }
   this.p = !this.p;
 }

 changeTime(time) {
   this.audio.currentTime = time;
 }

 changeVolume() {
   this.audio.volume = this.volume;
 }

 mute() {
   if (this.audio.volume > 0) {
     this.audio.volume = 0;
   } else {
     this.audio.volume = this.volume;
   }
 }

 checkIfTrackSaved() {
   this.api.checkIfTrackSaved(this.track.id).subscribe(
     response => {
       this.saved = JSON.parse(response['_body']);
     },
     error => {
       console.log(error);
     }
   );
 }

}
