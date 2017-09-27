$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
	  	$(‘#nav’).addClass(‘navbar-color’)
      }
      if ($(this).scrollTop() < 50) {
	  	$(‘#nav’).removeClass(‘navbar-color’)
      }
   });
});