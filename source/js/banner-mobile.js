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