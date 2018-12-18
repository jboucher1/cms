import { AuthService } from './../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide:boolean = true;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login():void {
    this.authService.login('data')
  }
}
