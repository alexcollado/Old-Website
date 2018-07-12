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

    // Parallax scrolling on home background
	$('.parallax-window').parallax({
	    naturalWidth: 2160,
	    naturalHeight: 1080,
	    speed: 0.4
	});

	// Line animation under home title
	var width = document.getElementById('title-name').offsetWidth;
	addEventListener("load", function(){
		var cssProperties = anime({
	  	targets: '#cssProperties .line',
	  	width: width,
	  	height: '5px',
	  	duration: 4000,
	 	delay: 300
	});})

    // Show/Hide mobile menu toggle on click
    $('.mobile-menu-bars').click(function(event) {
    	$('#mobile-menu-container').slideToggle(300);
    	$(".mobile-menu-bars").hide(200);
    	$(".mobile-menu-times").show(500);
    })
    $('.mobile-menu-times').click(function(event) {
    	$('#mobile-menu-container').slideToggle(300);
    	$(".mobile-menu-times").hide(200);
    	$(".mobile-menu-bars").show(500);
    })

    // Hide mobile menu on link click
    $('.mobile-link').click(function(event) {
    	$('#mobile-menu-container').slideToggle(300);
    	$(".mobile-menu-times").hide(200);
    	$(".mobile-menu-bars").show(500);
    })

    // Select all links with hashes
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
	      	if (target.length) {
	        	// Only prevent default if animation is actually gonna happen
	        	event.preventDefault();
	        	$('html, body').animate({
	          	scrollTop: target.offset().top
	        }, 	1000, function() {
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

});