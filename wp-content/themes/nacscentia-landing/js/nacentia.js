jQuery(document).ready(function() {

    jQuery(function() {
        setTimeout(function() {
            if (location.hash) {
                /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
                window.scrollTo(0, 0);
                target = location.hash.split('#');
                smoothScrollTo(jQuery('#' + target[1]));
            }
        }, 1);

        // taken from: http://css-tricks.com/snippets/jquery/smooth-scrolling/
        jQuery('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                smoothScrollTo(jQuery(this.hash));
                return false;
            }
        });

        function smoothScrollTo(target) {
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                jQuery('html,body').animate({
                    scrollTop: target.offset().top - 160
                }, 1000);
            }
        }
    });

});