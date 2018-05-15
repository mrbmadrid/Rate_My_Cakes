import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes(){
  	return this._http.get('/cakes');
  }

  newCake(data){
  	return this._http.post('/cakes', data);
  }

  rateCake(data){
  	return this._http.put('/cakes/'+data._id, data);
  }

  getCake(id){
  	return this._http.get('/cakes/'+id);
  }

}
