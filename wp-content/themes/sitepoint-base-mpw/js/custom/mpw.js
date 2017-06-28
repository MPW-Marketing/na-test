/*Throttle Events*/
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

/* when element at top of screen add class "at-top", otherwise remove the class */
function isAtTop (element, originalTop, otherElement) {
    scroll = jQuery(window).scrollTop();
    if (scroll >= originalTop) {
      element.addClass('at-top');
      otherElement.addClass('at-top');
    }
    else {
      element.removeClass('at-top');
      otherElement.removeClass('at-top');
    }
  }

  // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;

function hasScrolled( element, startHiding) {
    var st = jQuery(this).scrollTop();
    var navbarHeight = element.outerHeight();
delta = 5;
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta ) {
        return;
      }

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > startHiding){
        // Scroll Down
        element.removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + jQuery(window).height() < jQuery(document).height()) {
            element.removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
jQuery( document ).ready(function(){
  var originalTop = jQuery('#headercontainer').offset().top;
  if (jQuery('.ls-wp-container').length) {
    originalTop = jQuery('.ls-wp-container').height();
  }
  var delta = originalTop + 150;
  var sticky = jQuery('#headercontainer');
  var slogan = jQuery('.slogan-outer');

  setInterval(function() {
    if (didScroll) {
      isAtTop(sticky, originalTop, slogan);
      hasScrolled(sticky, delta );
        didScroll = false;
    }
}, 50);

  jQuery(window).scroll(function(){
      didScroll = true;
    });


});
jQuery( document ).ready(function(){

jQuery(function() {
  setTimeout(function() {
    if (location.hash) {
      /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
      window.scrollTo(0, 0);
      target = location.hash.split('#');
      smoothScrollTo(jQuery('#'+target[1]));
    }
  }, 1);

  // taken from: http://css-tricks.com/snippets/jquery/smooth-scrolling/
  jQuery('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      smoothScrollTo(jQuery(this.hash));
      return false;
    }
  });

  function smoothScrollTo(target) {
    target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');

    if (target.length) {
      jQuery('html,body').animate({
        scrollTop: target.offset().top - 160
      }, 1000);
    }
  }
});

});
/*make events tables mobile ready */
jQuery( document ).ready(function(){
jQuery('.events-table').cardtable();
});
