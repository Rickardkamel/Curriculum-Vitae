import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  constructor() { }

  redirectToHome() {
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

}
