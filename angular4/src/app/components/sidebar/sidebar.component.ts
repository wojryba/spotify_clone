import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MusicService } from '../../services/music.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private user: any;

  constructor(private api: ApiService, private music: MusicService, private router: Router) { }

  ngOnInit() {
    this.api.getMe().subscribe(
      response => {
        this.user = JSON.parse(response['_body']);
        console.log(this.user);
      },
      error => {
        console.log(error);
      }
    );
  }

  logOut() {
    localStorage.removeItem('code');
    this.router.navigate(['/login']);
  }

}
