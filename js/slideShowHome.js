$(document).ready(function() {
	var readyForChange = 1;
	var numberOfImages = 5;
	var i = 0;
	//Initialize first image
	$(".slideShow").css("background-image","url('images/slideShow0.jpg')");
	
	//Move slides forward and backward
	function changeSlideForward() {
		readyForChange = 0
		$("#slideShowBubble" + i).css("background-color","transparent");
		i = (i + 1) % numberOfImages;
		$(".slideShow").css("background-image","url('images/slideShow" + i + ".jpg')");
		$("#slideShowBubble" + i).css("background-color","rgba(255,255,255,0.9)");
		setTimeout(function() {
			readyForChange = 1;
		}, 1000)
	}
	function changeSlideBackward() {
		readyForChange = 0
		$("#slideShowBubble" + i).css("background-color","transparent");
		i = (i + 4) % numberOfImages;
		$(".slideShow").css("background-image","url('images/slideShow" + i + ".jpg')");
		$("#slideShowBubble" + i).css("background-color","rgba(255,255,255,0.9)");
		setTimeout(function() {
			readyForChange = 1;
		}, 1000)
	}
	//Change to specific slide
	function changeToSlide0() {
		readyForChange = 0;
		$("#slideShowBubble" + i).css("background-color","transparent");
		i = 0;
		$(".slideShow").css("background-image","url('images/slideShow0.jpg')");
		$("#slideShowBubble0").css("background-color","rgba(255,255,255,0.9)");
		setTimeout(function() {
			readyForChange = 1;
		}, 1000)
	}
	function changeToSlide1() {
		readyForChange = 0;
		$("#slideShowBubble" + i).css("background-color","transparent");
		i = 1;
		$(".slideShow").css("background-image","url('images/slideShow1.jpg')");
		$("#slideShowBubble1").css("background-color","rgba(255,255,255,0.9)");
		setTimeout(function() {
			readyForChange = 1;
		}, 1000)
	}
	function changeToSlide2() {
		readyForChange = 0;
		$("#slideShowBubble" + i).css("background-color","transparent");
		i = 2;
		$(".slideShow").css("background-image","url('images/slideShow2.jpg')");
		$("#slideShowBubble2").css("background-color","rgba(255,255,255,0.9)");
		setTimeout(function() {
			readyForChange = 1;
		}, 1000)
	}
	function changeToSlide3() {
		readyForChange = 0;
		$("#slideShowBubble" + i).css("background-color","transparent");
		i = 3;
		$(".slideShow").css("background-image","url('images/slideShow3.jpg')");
		$("#slideShowBubble3").css("background-color","rgba(255,255,255,0.9)");
		setTimeout(function() {
			readyForChange = 1;
		}, 1000)
	}
	function changeToSlide4() {
		readyForChange = 0;
		$("#slideShowBubble" + i).css("background-color","transparent");
		i = 4;
		$(".slideShow").css("background-image","url('images/slideShow4.jpg')");
		$("#slideShowBubble4").css("background-color","rgba(255,255,255,0.9)");
		setTimeout(function() {
			readyForChange = 1;
		}, 1000)
	}
	
	//Click functions for arrows
	$("#slideShowLeftSide").click(function() {
		if (readyForChange == 1) {
			changeSlideBackward();
		}
	});
	$("#slideShowRightSide").click(function() {
		if (readyForChange == 1) {
			changeSlideForward();
		}
	});
	
	//Change the bubble icon
	$("#slideShowBubble0").click(function() {
		if (readyForChange == 1) {
			changeToSlide0();
		}
	});
	$("#slideShowBubble1").click(function() {
		if (readyForChange == 1) {
			changeToSlide1();
		}
	});
	$("#slideShowBubble2").click(function() {
		if (readyForChange == 1) {
			changeToSlide2();
		}
	});
	$("#slideShowBubble3").click(function() {
		if (readyForChange == 1) {
			changeToSlide3();
		}
	});
	$("#slideShowBubble4").click(function() {
		if (readyForChange == 1) {
			changeToSlide4();
		}
	});
	
	//Change automatically after time interval
	setInterval(function() {
		if (readyForChange == 1) {
			changeSlideForward();
		}
	}, 10000);
});