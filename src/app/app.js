jQuery(function ($) {

    // Animated scrolling
    (function () {
        $('a[href*=\\#]').bind("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    } ());

    // Back to top
    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    } ());

    // Fullscreen image
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function () {
            $(".tt-fullHeight").height($(window).height());
        });

    } ());

    $(".resume").each(function () {
        $('ul:even li').addClass('timeline-inverted');
        $('ul:odd li').removeClass('timeline-inverted');
        // $(this).find("ul").find("li").addClass("timeline-inverted")
        //     .filter(":odd").removeClass("timeline-inverted").end()
        //     .filter(":even").addClass("timeline-inverted");
    });
});
