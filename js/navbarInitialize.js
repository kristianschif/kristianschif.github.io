$(document).ready(function() {
	var yPos = 0;
    var width = $(window).width();
	
	/*Configure based on window width*/
    if (width > 900) {
		$(".nav1").removeClass("hide");
		/*$(".slideShow").css("padding-top", "0px"); potentially remove this line*/
    } else {
		if (width > 700) {
			$(".nav2").removeClass("hide");
			$("#navToggleMenu").removeClass("hide");
		} else {
			$(".nav3").removeClass("hide");
			$("#navToggleMenu").removeClass("hide");
		}
	}
});