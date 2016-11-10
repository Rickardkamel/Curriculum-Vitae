import { Component, OnInit } from '@angular/core';

declare var WOW: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  ngOnInit() {
    this.initWow();
    this.animatedScrolling();
    this.backToTop();
  }

  initWow() {
    (function () {

      new WOW({

        mobile: false

      }).init();

    } ());

  }

  backToTop() {
    (function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
          $('.scroll-up').fadeIn();
        } else {
          $('.scroll-up').fadeOut();
        }
      });
    } ());
  }

  animatedScrolling() {
    (function () {
      $('a[href*=\\#]').bind('click', function (e) {
        let anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
      });
    } ());
  }
}
