$(window).resize(function() {
	var width = $(window).width();
	
    if (width > 900) {
		$(".nav2").addClass("hide");
		$(".nav3").addClass("hide");
		$(".nav1").removeClass("hide");
		$("#navToggleMenu").addClass("hide");
    } else {
		if (width > 700) {
			$(".nav1").addClass("hide");
			$(".nav3").addClass("hide");
			$(".nav2").removeClass("hide");
			$("#navToggleMenu").removeClass("hide");
		} else {
			$(".nav1").addClass("hide");
			$(".nav2").addClass("hide");
			$(".nav3").removeClass("hide");
			$("#navToggleMenu").removeClass("hide");
		}
	}
});