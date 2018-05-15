import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	@Input() user: any;
	@Input() loggedin: boolean;
  constructor() { }

  ngOnInit() {
  	console.log(this.user)
  }

}
