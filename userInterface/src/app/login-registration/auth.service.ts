import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  login(user){
  	return this._http.post('/cakes/login', user);
  }

  register(user){
  	return this._http.post('/cakes/register', user);
  }
}
