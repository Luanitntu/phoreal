// ========================banner mobile===========================
jQuery(window).load(function() {
    banner();
});

function banner() {
    if (jQuery(this).width() < 769) {
        var img_mobile = jQuery('.banner__page--image').find('img').attr('src');
        jQuery('.banner__page--image').css({
            'background-image': 'url(' + img_mobile + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center',
            'min-height': '60vh'
        });
        jQuery('.banner__page--image').find('img').css('display', 'none')
    }
}
// --------------button menu----------
jQuery(document).ready(function() {
    jQuery(".button-sticky").click(function() {
        jQuery("#header-page .sticky .header__page .header__page--main .navbar-mobile").toggleClass("active");
        jQuery("#header-page .sticky .header__page .header__page--main .navbar-mobile .navbar-sticky").toggleClass("active");
        jQuery("body").toggleClass("show-scroll");
    });
    jQuery(document).mouseup(function(e) {
        if (!jQuery(".button-sticky").is(e.target) && jQuery(".button-sticky").has(e.target).length === 0) {
            jQuery("#header-page .sticky .header__page .header__page--main .navbar-mobile").removeClass("active");
            jQuery("#header-page .sticky .header__page .header__page--main .navbar-mobile .navbar-sticky").removeClass("active");
            jQuery('body').removeClass('show-scroll');
        }
    });
});
// -------load more
function click_tab() {
    jQuery('.list__tab--menu .nav-tabs > li > a').click(function() {
        jQuery('.list__tab--menu .nav-tabs > li').removeClass();
        jQuery(this).parent().addClass('active');
    });
}
// jQuery(function() {
//     var width = jQuery(window).width();
//     if (width > 600) {
//         jQuery(".more").slice(0, 16).show();
//         jQuery("#loadMore").on('click', function(e) {
//             e.preventDefault();
//             jQuery(".more:hidden").slice(0, 8).slideDown();
//             if (jQuery(".more:hidden").length == 0) {
//                 jQuery("#load").fadeOut('slow');
//             }
//             jQuery('html,body').animate({
//                 scrollTop: jQuery(this).offset().top
//             }, 1500);
//         });
//     } else {
//         jQuery(".more").slice(0, 8).show();
//         jQuery("#loadMore").on('click', function(e) {
//             e.preventDefault();
//             jQuery(".more:hidden").slice(0, 4).slideDown();
//             if (jQuery(".more:hidden").length == 0) {
//                 jQuery("#load").fadeOut('slow');
//             }
//             jQuery('html,body').animate({
//                 scrollTop: jQuery(this).offset().top
//             }, 1500);
//         });
//     }
// });

// jQuery('a[href=#top]').click(function() {
//     jQuery('body,html').animate({
//         scrollTop: 0
//     }, 600);
//     return false;
// });

// jQuery(window).scroll(function() {
//     if (jQuery(this).scrollTop() > 1200) {
//         jQuery('.totop a').fadeIn();
//     } else {
//         jQuery('.totop a').fadeOut();
//     }
// });
jQuery(document).ready(function() {
    // -------------flexslider
    jQuery('.flexslider').flexslider({
        animation: "fade",
        animationLoop: true,
        slideshowSpeed: 4000,
        animationSpeed: 1200,
        start: function(slider) {
            var next = jQuery(".flexslider ul.slides li.flex-active-slide").next().find(".img-flex img").attr("src");
            jQuery(".banner-slider .outside-slider .img-outside").css('background-image', 'url(' + next + ')');
        },
        after: function(slider) {
            if (jQuery(".flexslider ul.slides li.flex-active-slide").is(":last-child")) {
                var next = jQuery(".flexslider ul.slides li:first-child()").find(".img-flex img").attr("src");
                jQuery(".banner-slider .outside-slider .img-outside").css('background-image', 'url(' + next + ')');
            } else {

                var next = jQuery(".flexslider ul.slides li.flex-active-slide").next().find(".img-flex img").attr("src");
                jQuery(".banner-slider .outside-slider .img-outside").css('background-image', 'url(' + next + ')');
            }
        }
        // controlsContainer:jQuery(".flex-control-nav li"),
        // customDirectionNav:jQuery(".flex-control-nav li a")
    });

    // -------button flexsider
    // jQuery(".arrow-prev").on("click", function(event) {
    //     event.preventDefault();
    //     jQuery(".flexslider").flexslider("prev");
    //     return false;
    // })
    // jQuery(".arrow-next").on("click", function(event) {
    //     event.preventDefault();
    //     jQuery(".flexslider").flexslider("next");
    //     return false;
    // })
});
jQuery(document).ready(function() {

    jQuery('.wrap__menu--slide').on('init', function(event, slick) {
        jQuery('.menu__slide--item').each(function() {
            // console.log(slick.currentSlide);
            var start = jQuery('.slick-active').attr('data-slick-index');
            var next_slide = Number(start) + 4;
            var number_four = jQuery(this).attr('data-slick-index');
            // console.log(next_slide);
            // console.log(number_four);
            if (number_four == next_slide) {
                // console.log('true');
                // $(number_four).addClass('test');
                var img_bg = jQuery(this).find("img").attr("src");
                jQuery('.slide__right--nextSlide').css('background-image', 'url(' + img_bg + ')')
            }
        })
    });

    jQuery('.wrap__menu--slide').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        draggable: true,
        infinite: true,
        pauseOnHover: false,
        swipe: true,
        touchMove: false,
        speed: 1500,
        autoplaySpeed: 5000,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 578,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, ]
    });

    jQuery(".btn_prev").click(function(event) {
        event.preventDefault();
        jQuery(".wrap__menu--slide").slick("slickPrev");
    })
    jQuery(".btn_next").click(function(event) {
        event.preventDefault();
        jQuery(".wrap__menu--slide").slick("slickNext");
    })

    jQuery('.wrap__menu--slide').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        jQuery('.menu__slide--item').each(function() {
            var next_slide = nextSlide + 3;
            var number_four = jQuery(this).attr('data-slick-index');
            if (number_four == next_slide) {
                // $(number_four).addClass('test');
                var img_bg = jQuery(this).find("img").attr("src");
                jQuery('.slide__right--nextSlide').css('background-image', 'url(' + img_bg + ')')
            }
        })
    });

});
// --------------sticky menu--------------
// jQuery(document).ready(function() {
//     jQuery(function() {
//         var width = jQuery(window).width();
//         var header = jQuery(".sticky");
//         offset = header.offset().top;
//         jQuery(window).scroll(function() {
//             if (jQuery(this).scrollTop() > offset && width > 992) {
//                 header.addClass("fixed");
//             } else {
//                 header.removeClass("fixed");
//             }
//         })
//     })
// });