import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<app.User>{
    return this.http.get<app.User>(`${API_URL}/users`);
  }

  getUser(id:string):Observable<app.User>{
    return this.http.get<app.User>(`${API_URL}/users/${id}`);
  }
}
