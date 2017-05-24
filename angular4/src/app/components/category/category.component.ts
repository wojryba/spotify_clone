import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

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

  constructor(private api: ApiService) { }

  ngOnInit() {
    if (this.api.category) {
      this.playlists = this.api.category;
      console.log(this.playlists);
    }
  }
}
