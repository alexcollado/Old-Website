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

window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});