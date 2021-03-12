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