import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private location: Location) { }

  login(data){
    //add login call and it returns auth token set http intercepter with token
    //fail
    //show error
    //success
    //check terms have been accepted and terms version.
    //not accepted
    this.router.navigate(['/terms']);
    // accepted
    //set auth token and set user data in app storage service
    // this.router.navigate(['/app-list'])
  }

  logout(){
    //clear auth tokens
    this.router.navigate(['/login'])
  }
}
