$(document).ready(function() {
	var yPos = 0;
    var width = $(window).width();
	
	/*Configure based on vertical position*/
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
	/*Configure based on window width*/
    if (width > 900) {
		$(".nav").removeClass("navWidthTransition");
		$(".nav1").removeClass("hide");
		$(".slideShow").css("padding-top", "0px");
		if ( $(window).scrollTop() > yPos ) {
		} else {
			$(".navLinkColor").addClass("navLinkColorHome");
			$(".navLineColor").addClass("navLineColorHome");
			$(".navIconFilter").addClass("navIconFilterHome");
		}
    } else {
		if (width > 700) {
			$(".nav").addClass("navWidthTransition");
			$(".nav2").removeClass("hide");
			$("#navToggleMenu").removeClass("hide");
			$(".slideShow").css("padding-top", "80px");
			$(".navLinkColor").removeClass("navLinkColorHome");
			$(".navLineColor").removeClass("navLineColorHome");
			$(".navIconFilter").removeClass("navIconFilterHome");
		} else {
			$(".nav").addClass("navWidthTransition");
			$(".nav3").removeClass("hide");
			$("#navToggleMenu").removeClass("hide");
			$(".slideShow").css("padding-top", "80px");
			$(".navLinkColor").removeClass("navLinkColorHome");
			$(".navLineColor").removeClass("navLineColorHome");
			$(".navIconFilter").removeClass("navIconFilterHome");
		}
	}
});