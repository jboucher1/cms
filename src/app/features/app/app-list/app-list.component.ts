import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {
  params = {
    url_name:'jesstest'
  }

  constructor(private router: Router) { }

  ngOnInit() {

  }

}
