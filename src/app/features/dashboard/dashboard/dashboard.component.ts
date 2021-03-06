import { Component, AfterViewInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  isMobile: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(map(result => {
    this.smallNav = result.matches;
    return result.matches
  }))

  smallNav: boolean = false;

  @Input('url_name') url_name: string;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngAfterViewInit() {
    console.log('dashboard: ',this.url_name)
 
  }

}
