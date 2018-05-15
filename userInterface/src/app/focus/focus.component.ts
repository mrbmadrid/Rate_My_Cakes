import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
	@Input() cake: any;
	@Input() focus: boolean;
  constructor() { }

  ngOnInit() {
  }

}
