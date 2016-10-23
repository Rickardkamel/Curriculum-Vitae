jQuery(function ($) {

    'use strict';

    (function () {
      $('.header').sticky({
        topSpacing: 0
      });


        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
         })
    }());

});