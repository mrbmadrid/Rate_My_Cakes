import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
	@Output() submitCake = new EventEmitter();
	cake: any;
  constructor() { }

  ngOnInit() {
  	this.cake = {title : "", description : "", url: ""};
  }

  submit(){
  	this.submitCake.emit(this.cake);
  }

}
