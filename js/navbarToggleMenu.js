$(document).ready(function() {
	var toggleMenuHeight = 175;

	$("#navToggle").click(function() {
		var toggleState = $("#navToggleState").width();
		if (toggleState == 0) {
			$("#navToggle").css("background-color","rgba(100,100,100,0.2)");
			$("#navToggleMenu").css("height",toggleMenuHeight);
			$("#navToggleState").css("width",1);
		} else {
			$("#navToggle").css("background-color","");
			$("#navToggleMenu").css("height",0);
			$("#navToggleState").css("width",0);
		}
	});
});
$(window).resize(function() {
	var width = $(window).width();	

	if (width > 900) {
		$("#navToggle").css("background-color","");
		$("#navToggleMenu").css("height",0);
		$("#navToggleState").css("width",0);
	}
});