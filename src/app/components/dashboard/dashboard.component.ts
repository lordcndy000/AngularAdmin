import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

	section_title: String;

	constructor() { }

	ngOnInit() {

		this.section_title = 'Dashboard';
	}

}
