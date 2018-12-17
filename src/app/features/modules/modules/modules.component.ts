import { AppComponent } from './../../app/app/app.component';
import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements AfterViewInit {
  params: Object;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    this.route.parent.parent.params.subscribe((params) => this.params = params);
  }

}
