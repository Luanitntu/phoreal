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