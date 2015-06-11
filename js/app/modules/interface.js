function Interface() {
  var Interface = this;

  Interface.CustomSlides();
  Interface.fadeControls();
  Interface.Reveal();
  Interface.Riddler();
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

Interface.prototype.Riddler = function() {

  // All buttons are off at start
  var button_value0 = false;
  var button_value1 = false;
  var button_value2 = false;
  var button_value3 = false;
  var button_value4 = false;
  var button_value5 = false;
  var button_value6 = false;
  var button_value7 = false;
  var button_value8 = false;

  // Previous button value
  var prev_button_value0 = button_value0;
  var prev_button_value1 = button_value1;
  var prev_button_value2 = button_value2;
  var prev_button_value3 = button_value3;
  var prev_button_value4 = button_value4;
  var prev_button_value5 = button_value5;
  var prev_button_value6 = button_value6;
  var prev_button_value7 = button_value7;
  var prev_button_value8 = button_value8;

  var led_state0 = $('.led.one');
  var led_state1 = $('.led.two');
  var led_state2 = $('.led.three');

  if ( button_value0 != prev_button_value0) {
    led_state0 =  led_state1;
    led_state1 =  led_state0;
    delay( 10 );
  }

  // for (i = 0; i < buttons.length; i++) {}
};
