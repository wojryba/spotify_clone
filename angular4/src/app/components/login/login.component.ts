import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCode()
  }

  logIn() {
    this.api.login().subscribe(
      response => {
        window.location.assign(response['_body']);
      },
      error => console.log(error)
    )
  }

  logOut() {
    console.log('logout');
    localStorage.removeItem('code');
  }

  getCode() {
    if (this.route.snapshot.queryParams.code) {
      this.api.postCode(this.route.snapshot.queryParams.code).subscribe(
        response => {
          localStorage.setItem('code', response['_body']);
          setTimeout(() => {
            this.router.navigate([''])
          }, 500);
        },
        error => console.log(error)
      );
    } else {
      if (this.api.auth()) {
        this.router.navigate['/login']
      }
    }
  }

}
