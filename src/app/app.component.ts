import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(updates: SwUpdate, @Inject(DOCUMENT) dom: Document) {
    updates.available.subscribe(event => {
     updates.activateUpdate().then(() => dom.location.reload())
   });
 }
}
