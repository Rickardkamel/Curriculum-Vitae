import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: 
  `
 <app-home></app-home>
 <app-header></app-header>
 <app-about></app-about>
  `,
})
export class ShellComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

}
