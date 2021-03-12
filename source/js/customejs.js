// -------load more

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