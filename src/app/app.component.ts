import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-auth-ngrx';

  constructor() {
    console.log('Constructing app component');
  }

  ngOnInit() {
    console.log('Initializing app component');
  }

  ngAfterViewInit() {
    console.log('View initialized');
  }

}
