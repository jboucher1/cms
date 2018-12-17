import { AppStorageService } from './../../../services/app-storage/app-storage.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  params;
  url_name:string;
  constructor(private route: ActivatedRoute, private appStorage: AppStorageService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {this.url_name = params.url_name});
    this.appStorage.url_name = this.url_name;
  }

}
