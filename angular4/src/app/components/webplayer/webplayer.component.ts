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
  mobileview: boolean = false;
  innerWidth: any;
  hidesidebar: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService, private auth: AuthGuardService) {
    this.innerWidth = (window.screen.width);
    if (this.innerWidth < 426) {
      this.mobileview = true;
      this.hidesidebar = true;
    };
  }

  ngOnInit() {
    this.getCode()
  }

  getCode() {
    if (this.route.snapshot.queryParams.code) {
      this.api.postCode(this.route.snapshot.queryParams.code).subscribe(
        response => {
          localStorage.setItem('code', response['_body']);
          setTimeout(() => this.router.navigate[''], 500);
        },
        error => console.log(error)
      );
    } else {
      if (this.auth.canActivate()) {
        this.router.navigate['/login']
      }
    }
  }


  showsiebar() {
    this.hidesidebar = !this.hidesidebar;
  }

}
