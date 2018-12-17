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

  constructor(private route: ActivatedRoute, private router: Router) {
    // this.route.params.subscribe(params => this.params = params);
    // if(this.url_name){
    //   this.params.url_name = this.url_name
    //   console.log(this.params)
    // }
    // console.log(this.params)
    
  }

  setParamSubscriber(){
    // this.route.params.subscribe(params => this.params = params);
    // if(this.url_name){
    //   this.params.url_name = this.url_name
    //   console.log(this.params)
    // }
    // this.router.events.forEach(event => {
    //   this.route.params.subscribe(params => this.params = params);
      
    //   if(this.url_name){
    //     console.log('called')
    //     this.params.url_name = this.url_name
    //   }
    //   console.log(this.router.url, this.params, this.url_name)

    // })
  }


}
