$(document).ready(function() {
    var width = $(window).width();
	
	/*Configure based on window width*/
	if (width < 500) {
		$("#welcomeMessage").addClass("welcomeMessageChange")
		$("#welcomeMessage").removeClass("hide")
	} else {
		$("#welcomeMessage").removeClass("hide")
	}
});