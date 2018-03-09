$(window).scroll(function() {
	var yPos = 0;
    var width = $(window).width();
	if ($(window).scrollTop() > yPos) {
		$(".nav").addClass("navScrollTransition");
	} else {
		$(".nav").removeClass("navScrollTransition");
	}		
	if (width > 900) {
		if ($(window).scrollTop() > yPos) {
			$(".navLinkColor").removeClass("navLinkColorHome");
			$(".navLineColor").removeClass("navLineColorHome");
			$(".navIconFilter").removeClass("navIconFilterHome");
	    } else {
			$(".navLinkColor").addClass("navLinkColorHome");
			$(".navLineColor").addClass("navLineColorHome");
			$(".navIconFilter").addClass("navIconFilterHome");
    	}
	}
});