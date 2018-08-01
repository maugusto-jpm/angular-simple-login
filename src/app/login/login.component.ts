import { Login } from '../models';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = Object.assign({});

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.fazerLogin(this.login);
  }
}
