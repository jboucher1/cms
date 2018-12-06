import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'cms';
  constructor(updates: SwUpdate, @Inject(DOCUMENT) dom: Document) {
    updates.available.subscribe(event => {
     updates.activateUpdate().then(() => dom.location.reload())
   });
 }
}
