// jQuery(function ($) {

//     // Animated scrolling
//     (function () {
//         $('a[href*=\\#]').bind("click", function (e) {
//             var anchor = $(this);
//             $('html, body').stop().animate({
//                 scrollTop: $(anchor.attr('href')).offset().top
//             }, 1000);
//             e.preventDefault();
//         });
//     } ());

//     // Back to top
//     (function () {
//         $(window).scroll(function () {
//             if ($(this).scrollTop() > 500) {
//                 $('.scroll-up').fadeIn();
//             } else {
//                 $('.scroll-up').fadeOut();
//             }
//         });
//     } ());

//     // Fullscreen image
//     (function () {
//         $(".tt-fullHeight").height($(window).height());

//         $(window).resize(function () {
//             $(".tt-fullHeight").height($(window).height());
//         });

//     } ());

//     $("#testimonial-carousel").owlCarousel({
//         navigation: false,
//         slideSpeed: 300,
//         paginationSpeed: 400,
//         responsiveRefreshRate: 200,
//         responsiveBaseWidth: window,
//         pagination: true,
//         singleItem: true
//     });


//     $("#block-slider").owlCarousel({
//         navigation: false,
//         slideSpeed: 300,
//         paginationSpeed: 400,
//         responsiveRefreshRate: 200,
//         responsiveBaseWidth: window,
//         pagination: false,
//         singleItem: true,
//         navigation: true,
//         navigationText: ["<span class='icon-left-open-big'></span>", "<span class='icon-right-open-big'></span>"]
//     });


// });
