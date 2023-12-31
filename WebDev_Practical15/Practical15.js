alert("Practical 15 is linked");

// Function to enter fullscreen mode
function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
    document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen();
    }
}

// Function to exit fullscreen mode
function exitFullscreen() {
    if (document.exitFullscreen) {
    document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
    document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
    document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
    document.msExitFullscreen();
    }
}


// Add event listeners to enter/exit fullscreen on button click
var fullscreenButton = document.getElementById('FullscreenBtn');

fullscreenButton.addEventListener('click', function() {
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  });

