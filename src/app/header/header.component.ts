import { Component, OnInit } from '@angular/core';

declare const myTest: any;
declare const scrollFunction: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  onClick() {
    myTest();
  }

  ngOnInit() {
    scrollFunction()
  }
  

}
