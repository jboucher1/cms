import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {

  }

  decline():void {
    this.router.navigate([''])
  }

  accept():void {
    this.router.navigate(['/app-list'])
  }

}
