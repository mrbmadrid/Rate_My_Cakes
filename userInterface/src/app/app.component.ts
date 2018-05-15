import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedin : boolean;
  user : any;

  constructor(private _http: HttpService){
  	
  }

  ngOnInit(){
  	this.loggedin = ;
  }

  login(data){
    this.user = data.user;
    this.loggedin = true;
  }

}
