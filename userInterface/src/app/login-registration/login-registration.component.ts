import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {

  @Output() userLoggedIn = new EventEmitter();
  @Output() userRegistered = new EventEmitter();
	reg : boolean;
  user : any;
  errors : any;

  constructor() { }

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
    for(let key in this.user){
      if(this.user[key] == ""){
        this.errors.push(key + " cannot be blank.");
      }
    }
    this.userLoggedIn.emit()//add user id
  }

  register(){
  	this.userRegistered.emit()
    this.userLoggedIn.emit()//add user id
  }

}
