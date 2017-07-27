var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $(".main-nav").height();
    hdr2 = $(".main-nav-scrolled").height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns).removeClass("main-nav");
  } else {
    mn.removeClass(mns).addClass("main-nav");
  }
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length && target[0].className == "about-section") {
        // Only prevent default if animation is actually gonna happen
        console.log(target[0].className);
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - $(window).height()/3 + hdr
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
      else if (target.length) {
        // Only prevent default if animation is actually gonna happen
        console.log(target[0].className);
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - hdr
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });