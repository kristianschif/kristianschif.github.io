$( document ).ready(function() {
    var images = [ "UConnHusky.jpg", "Sikorsky2.jpg", "AKL2.png" ];
    var position = [ "50% 11%", "50% 13%", "56% 10%"];
	var i = 0;

    setInterval(function() {
            $('#home-pictures').animate({opacity: 0}, 'slow', function() {
                    $(this).css({'background-image': 'url("Pictures/' + images[i] + '")'}).animate({opacity: 1}, 400);
           		 	$(this).css({'background-position': position[i]});
		    });
            i = (i + 1) % images.length;
    }, 8000);
});