import { Component, OnInit } from '@angular/core';

import * as products from "../../../../assets/mock-data.json";

@Component({
  selector: 'branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent implements OnInit {
mock;
  constructor() { }

  ngOnInit() {
    this.mock = products.default[0]
    console.log(this.mock)
  }

}
