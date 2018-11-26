$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

let fullScreenElement = document.getElementById("page");

document.getElementById("fsBtn")[document.addEventListener ? 'addEventListener' : 'attachEvent']('click', function() {
    this.innerHTML = this.innerHTML ===  openFullscreen() ? closeFullscreen() : openFullscreen();
});

fullScreenElement.addEventListener("fullscreenchange", function () {
    document.getElementById("fsBtn").innerHTML = '<i class="fas fa-window-close"></i>' ? '<i class="fas fa-window-close"></i>' : '<i class="fas fa-external-link-square-alt"></i>';
}, false);

fullScreenElement.addEventListener("mozfullscreenchange", function () {
    document.getElementById("fsBtn").innerHTML = '<i class="fas fa-window-close"></i>' ? '<i class="fas fa-window-close"></i>' : '<i class="fas fa-external-link-square-alt"></i>';
}, false);

fullScreenElement.addEventListener("webkitfullscreenchange", function () {
    document.getElementById("fsBtn").innerHTML = '<i class="fas fa-window-close"></i>' ? '<i class="fas fa-window-close"></i>' : '<i class="fas fa-external-link-square-alt"></i>';
}, false);

fullScreenElement.addEventListener("msfullscreenchange", function () {
    document.getElementById("fsBtn").innerHTML = '<i class="fas fa-window-close"></i>'? '<i class="fas fa-window-close"></i>' : '<i class="fas fa-external-link-square-alt"></i>';
}, false);

function openFullscreen() {
	if (fullScreenElement.requestFullscreen) {
		fullScreenElement.requestFullscreen();
		return '<i class="fas fa-window-close"></i>';
	} else if (fullScreenElement.mozRequestFullScreen) {
		fullScreenElement.mozRequestFullScreen();
		return '<i class="fas fa-window-close"></i>';
	} else if (fullScreenElement.webkitRequestFullscreen) {
		fullScreenElement.webkitRequestFullscreen();
		return '<i class="fas fa-window-close"></i>';
	} else if (fullScreenElement.msRequestFullscreen) {
		fullScreenElement.msRequestFullscreen();
		return '<i class="fas fa-window-close"></i>';
	}
}

/* Close fullscreen */
function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
		return '<i class="fas fa-external-link-square-alt"></i>';
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
		return '<i class="fas fa-external-link-square-alt"></i>';
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
		return '<i class="fas fa-external-link-square-alt"></i>';
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
		return '<i class="fas fa-external-link-square-alt"></i>';
	}
}