import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  ngOnInit() {
    this.animatedScrolling();
    this.backToTop();
    this.fullScreenImage();
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

  fullScreenImage() {
    (function () {
      $('.tt-fullHeight').height($(window).height());

      $(window).resize(function () {
        $('.tt-fullHeight').height($(window).height());
      });
    } ());
  }
}
