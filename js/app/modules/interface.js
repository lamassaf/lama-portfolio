function Interface() {
  var Interface = this;

  Interface.CustomSlides();
  Interface.fadeControls();
  Interface.Reveal();
  Interface.Type();
}

/**
 * Change slide height to 100% for scrollbar.
 *
 */
Interface.prototype.CustomSlides = function() {
  var sizes = function() {
    $('.scrollable').height(window.innerHeight);
  };
  sizes();

  $(window).bind('resize', function() {
    sizes();
  });
};

Interface.prototype.Type = function() {
  $('.flowtype').flowtype({
    minFont : 12,
    maxFont : 500
  });
}

/**
 * Fade out Controls after 3 seconds
 *
 */
Interface.prototype.fadeControls = function() {
  // $('.reveal').on('mousemove', function() {
  //   $('.controls').show();
  //   setTimeout(function() {
  //     $('.controls').hide();
  //   }, 3000);
  // });
};

/**
 * Reveal JS
 *
 */
Interface.prototype.Reveal = function() {
  Reveal.initialize({
    controls: true, // Show controls
    progress: true, // Show progress bar
    mouseWheel: false, // Collides with scrollbars
    backgroundTransition: 'slide', // none/fade/slide/convex/concave/zoom
    overview: true, // Show overview (esc)
    history: true, // Link to pages
    center: false, //
    minScale: 1, // 1 to prevent auto scaling
    maxScale: 1, // 1 to prevent auto scaling

    transition: 'slide' // none/fade/slide/convex/concave/zoom
  });
};
