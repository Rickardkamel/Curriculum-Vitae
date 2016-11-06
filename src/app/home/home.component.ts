import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.fullScreenImage();
  }

  fullScreenImage() {
    (function () {
      $('.tt-fullHeight').height($(window).height());

      $(window).resize(function () {
        $('.tt-fullHeight').height($(window).height());
      });
    } ());
  }
}
