import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
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

}
