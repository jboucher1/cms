import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  hideOld: boolean = true;
  hideNew: boolean = true;
  hideNew2:boolean = true;

  constructor(private location: Location, private snackBar: SnackbarService) { }

  ngOnInit() {
  }

  save(){
    //save profile update stored user profile
    this.snackBar.success('Profile saved');
    this.back();
  }

  back(){
    this.location.back();
  }

}
