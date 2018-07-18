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

	$(".nav-place-holder").css({
    	'width': ($(".navbar-logo").width() + 'px')
  	});

	// Line animation under home title
	var titleWidth = document.getElementById('title-name').offsetWidth;
	var titleLine = anime({
	  	targets: '#title-line-properties #title-line',
	  	width: titleWidth,
	  	height: '5px',
	  	duration: 3000,
	 	delay: 300,
	 	autoplay: false
	})
	addEventListener("load", function(){
		titleLine.play();
	;})

	// Line animation under about header
	function updateTopOfAbout() {
		var about = document.getElementById('about-col');
		var aboutRelView = about.getBoundingClientRect();
		var topOfAbout = aboutRelView.top;
		if(topOfAbout < (initialTopOfAbout/2)) {
	  		aboutLine.play();
	  	}
	}
	var initialTopOfAbout = $("#about-col").offset().top;
	var aboutHeaderWidth = document.getElementById('about-header').offsetWidth;
	aboutLine = anime({
		targets: '#about-line-properties #about-line',
		width: aboutHeaderWidth + 40,
		height: '5px',
		duration: 2000,
		autoplay: false
	});
	$(window).on("scroll", function(){
		updateTopOfAbout();
	});
	addEventListener("load", function(){
		updateTopOfAbout();
	;})

	// Line animation under education header
	function updateTopOfEducation() {
		var education = document.getElementById('education-col');
		var educationRelView = education.getBoundingClientRect();
		var topOfEducation = educationRelView.top;
		if(topOfEducation < (initialTopOfEducation/4)) {
	  		educationLine.play();
	  	}
	}
	var initialTopOfEducation = ($("#education-col").offset().top);
	console.log(initialTopOfEducation);
	var educationHeaderWidth = document.getElementById('education-header').offsetWidth;
	educationLine = anime({
		targets: '#education-line-properties #education-line',
		width: educationHeaderWidth + 40,
		height: '5px',
		duration: 2000,
		autoplay: false
	});
	$(window).on("scroll", function(){
	  	updateTopOfEducation();
	});
	addEventListener("load", function(){
		updateTopOfEducation();
	;})

	// Line animation under contact header
	function updateTopOfContact() {
		var contact = document.getElementById('contact-col');
		var contactRelView = contact.getBoundingClientRect();
		var topOfContact = contactRelView.top;
		if(topOfContact < (initialTopOfContact/6)) {
	  		contactLine.play();
	  	}
	}
	var initialTopOfContact = ($("#contact-col").offset().top);
	console.log(initialTopOfContact);
	var contactHeaderWidth = document.getElementById('contact-header').offsetWidth;
	contactLine = anime({
		targets: '#contact-line-properties #contact-line',
		width: contactHeaderWidth + 40,
		height: '5px',
		duration: 2000,
		autoplay: false
	});
	$(window).on("scroll", function(){
	  	updateTopOfContact();
	});
	addEventListener("load", function(){
		updateTopOfContact();
	;})

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

    // Show/Hide Coursework List
    $('#show-coursework').click(function(event) {
    	$('.coursework-list').slideToggle(500);
    	$("#show-coursework").hide(200);
    	$("#hide-coursework").show(200);
    })
    $('#hide-coursework').click(function(event) {
    	$('.coursework-list').slideToggle(500);
    	$("#hide-coursework").hide(200);
    	$("#show-coursework").show(200);
    })

    // Show/Hide Project List
    $('#show-projects').click(function(event) {
    	$('.project-list').slideToggle(500);
    	$("#show-projects").hide(200);
    	$("#hide-projects").show(200);
    })
    $('#hide-projects').click(function(event) {
    	$('.project-list').slideToggle(500);
    	$("#hide-projects").hide(200);
    	$("#show-projects").show(200);
    })

    // Show/Hide Metro Map Maker Details
    $('#show-metro').click(function(event) {
    	$('.metro-map-maker').slideToggle(500);
    	$("#show-metro").hide(200);
    	$("#hide-metro").show(200);
    })
    $('#hide-metro').click(function(event) {
    	$('.metro-map-maker').slideToggle(500);
    	$("#hide-metro").hide(200);
    	$("#show-metro").show(200);
    })

    // Show/Hide VT100 Details
    $('#show-vt100').click(function(event) {
    	$('.vt100').slideToggle(500);
    	$("#show-vt100").hide(200);
    	$("#hide-vt100").show(200);
    })
    $('#hide-vt100').click(function(event) {
    	$('.vt100').slideToggle(500);
    	$("#hide-vt100").hide(200);
    	$("#show-vt100").show(200);
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
	        }, 	750, function() {
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