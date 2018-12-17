import { UsersService } from './../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$;
  user;

  constructor(private users: UsersService) { }

  ngOnInit() {
     this.users.getUsers().subscribe(res => {
       this.users$ = res
      })
  }

}
