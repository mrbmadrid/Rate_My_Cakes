import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm }  from '@angular/forms';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
	@Input() cakes: any;
	@Output() rateCake = new EventEmitter();
	rating : any;
  constructor() { }

  ngOnInit() {
  }

  rate(form: NgForm, cake_id) {
  	let cake = form.form.value;
  	cake['_id'] = cake_id;
    this.rateCake.emit(cake);
  }

}
