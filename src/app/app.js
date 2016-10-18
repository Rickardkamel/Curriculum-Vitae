jQuery(function ($) {

    // Animated scrolling
    (function () {
        $('a[href*=#]').bind("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    } ());

    // Back to top
    (function () {
        $(window).scroll(function() {
            alert('hello');
            
            if ($(this).scrollTop() > 500) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());
});