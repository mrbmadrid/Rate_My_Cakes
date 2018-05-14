import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedin : boolean;
  @Input() user_id;

  constructor(){
  	
  }

  ngOnInit(){
  	this.loggedin = false;
  }

}
