import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

  moduleAddList: app.ModuleAddList[];

  constructor() { }

  ngOnInit() {
    this.moduleAddList = [
      {
        type:'user',
        icon:'people',
        title: 'User',
        subtitle: 'Speakers list, Attendees list'
      },
      {
        type:'company',
        icon:'business',
        title: 'Company',
        subtitle: 'Company list, Sponsor list'
      },
      {
        type:'html',
        icon:'code',
        title: 'Html',
        subtitle: 'A custom homepage'
      },
      {
        type:'iframe',
        icon:'picture_in_picture',
        title: 'Iframe',
        subtitle: 'Intergrate an existing site'
      },
      {
        type:'info',
        icon:'info',
        title: 'Info Page',
        subtitle: 'Event information, Timings, Wifi passwords'
      },
      {
        type:'widget',
        icon:'widgets',
        title: 'Widget Module',
        subtitle: 'Links areas with widgets through the app, great for home pages'
      }
    ]
  }

}
