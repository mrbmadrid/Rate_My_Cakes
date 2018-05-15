import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {

  @Output() userLoggedIn = new EventEmitter();
	reg : boolean;
  user : any;
  errors : any;

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  	this.reg = false;
    this.user = {email: "", password: ""};
    this.errors = [];
  }

  login_tab(){
    if(this.reg){
      this.errors = [];
      this.reg = false;
      this.user = {email: "", password: ""};
    }
  }

  register_tab(){
    if(!this.reg){
      this.errors = [];
      this.reg = true;
      this.user = {f_name: "", l_name: "", email: "", password: ""};
    }
  }

  login(){
    this.errors=[];
    for(let key in this.user){
      if(this.user[key] == ""){
        this.errors.push(key + " cannot be blank.");
      }
    }
    let observable = this._authService.login(this.user)
    observable.subscribe(data =>{
      if(data['success']){
        this.userLoggedIn.emit(data);
      }else{
        this.errors.push("Failed to log in.");
        for(let v of data['errors']){
          this.errors.push(v)
        }
      }
    })
  }

  register(){
    this.errors=[];
    let observable = this._authService.register(this.user)
    observable.subscribe(data =>{
      if(data['success']){
        this.userLoggedIn.emit(data)
      }else{
        this.errors.push("Failed to register.")
        for( let v of data['errors']){
          this.errors.push(v)
        }
      }
    })
  }
}
