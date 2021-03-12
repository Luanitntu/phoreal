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