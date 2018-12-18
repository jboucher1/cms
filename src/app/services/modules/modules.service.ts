import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  modules:app.Module[];

  constructor() { }

  getModules():app.Module[]{
    return [
      {
        type:'users',
        icon:'person',
        title:'Speakers',
        id:1,
        order:0,
        hidden:false
      },
      {
        type:'iframe',
        icon:'picture_in_picture',
        title:'Iframe',
        id:2,
        order:1,
        hidden:false
      },
      {
        type:'companies',
        icon:'business',
        title:'Company',
        id:3,
        order:2,
        hidden:false
      },
      {
        type:'html',
        icon:'code',
        title:'Html',
        id:4,
        order:3,
        hidden:false
      },
      {
        type:'info',
        icon:'info',
        title:'Information',
        id:5,
        order:4,
        hidden:false
      },
      {
        type:'widgets',
        icon:'widgets',
        title:'Widget',
        id:6,
        order:4,
        hidden:false
      },
    ]

  }
}
