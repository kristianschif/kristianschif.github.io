$(window).resize(function() {
	var width = $(window).width();
	
	if (width < 500) {
		$("#welcomeMessage").addClass("welcomeMessageChange")
	} else {
		$("#welcomeMessage").removeClass("welcomeMessageChange")
	}
});