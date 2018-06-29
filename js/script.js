$('.parallax-window').parallax({
    naturalWidth: 2160,
    naturalHeight: 1080,
    speed: 0.4
});

var width = document.getElementById('title-name').offsetWidth;

var cssProperties = anime({
  targets: '#cssProperties .line',
  width: width,
  height: '5px',
  duration: 4000,
  delay: 300,
});

jQuery(document).ready(function($) {

    // Store the window width
    var windowWidth = $(window).width();

    // Resize Event
    $(window).resize(function(){

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ($(window).width() != windowWidth) {

            // Update the window width for next time
            windowWidth = $(window).width();

            window.location.reload(); 

        }

        // Otherwise do nothing

    });

});