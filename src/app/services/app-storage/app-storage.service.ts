import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  url_name:string;
  params = {
    url_name: this.url_name
  };

  constructor(private route: ActivatedRoute, private router: Router) {}
}
