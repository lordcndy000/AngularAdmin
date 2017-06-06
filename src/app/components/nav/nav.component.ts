import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.sass'],
})
export class NavComponent implements OnInit {

	app_name: String;
	app_user: String;
	mp: String;
	ep: String;
	settings: String;
	dashboard: String;
	comps: String;
	buttons: String;
	gridsystem: String;
	panels: String;
	notifications: String;
	icons: String;
	typo: String;
	frms: String;
	rf: String;
	vf: String;
	table: String;
	rt: String;
	et: String;
	dt: String;
	gm: String;
	map: String;
	fsm: String;
	vm: String;
	charts: String;
	calendar: String;


  	constructor() { }

	ngOnInit() {
	
		this.app_name = 'Angular Admin';
		this.app_user = 'Lordwill Mabalot';
		this.mp = 'My Profile';
		this.ep = 'Edit Profile';
		this.settings = 'Settings';
		this.dashboard = 'Dashboard';
		this.comps = 'Components';
		this.buttons = 'Buttons';
		this.gridsystem = 'Grid System';
		this.panels = 'Panels';
		this.notifications = 'Notifications';
		this.icons = 'Icons';
		this.typo = 'Typography';
		this.frms = 'Forms';
		this.rf = 'Regular Forms';
		this.vf = 'Validation Forms';
		this.table = 'Tables';
		this.rt = 'Regular Tables';
		this.et = 'Extended Tables';
		this.dt = 'DataTables.net';
		this.map = 'Maps';
		this.gm = 'Google Maps';
		this.fsm = 'Full Screen Map';
		this.vm = 'Vector Map';
		this.charts = 'Charts';
		this.calendar = 'Calendar';

	}



}
