import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cakes : any;
  focusedCake : any;
  loggedin : boolean;
  focus: boolean;
  user : any;

  constructor(private _http: HttpService){
  	
  }

  ngOnInit(){
  	this.loggedin = false;
     this.cakes = []]
  }

  login(data){
    this.user = data.user;
    this.loggedin = true;
    this.getCakes();
    console.log(this.cakes);
  }

  getCakes(){
    let observable = this._http.getCakes();
    observable.subscribe(data =>{
      this.cakes=data['cakes'];
    })
  }

  newCake(cake){
    let observable = this._http.newCake({_id: this.user._id, cake: cake});
    observable.subscribe(data =>{
      this.getCakes();
    })
  }

  rateCake(rating){
    rating['user_id'] = this.user._id;
    let observable = this._http.rateCake(rating);
    observable.subscribe(data =>{
      console.log(data)
      this.focusCake(rating._id);
    })
  }

  focusCake(id){
    console.log(id)
    let observable = this._http.getCake(id);
    observable.subscribe(data =>{
      console.log(data)
      this.focus = true;
      this.focusedCake=data['cake'][0];
    })
  }
}
