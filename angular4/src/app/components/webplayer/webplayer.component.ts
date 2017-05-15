import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-webplayer',
  templateUrl: './webplayer.component.html',
  styleUrls: ['./webplayer.component.css']
})
export class WebplayerComponent implements OnInit {
  mobileview = false;
  innerWidth: any;
  hidesidebar = false;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private auth: AuthGuardService) {
    this.innerWidth = (window.screen.width);
    if (this.innerWidth < 426) {
      this.mobileview = true;
      this.hidesidebar = true;
    };
  }

  ngOnInit() {
  }


  showsiebar() {
    this.hidesidebar = !this.hidesidebar;
  }

}
