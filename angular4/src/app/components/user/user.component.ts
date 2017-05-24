import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

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

  constructor(private api: ApiService) { }

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

}
