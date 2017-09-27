(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        return this; // for chaining...
    }
})(jQuery);
function myFunction(identifier) {
	var num_projects = 8;
	for (var i = 1; i <= num_projects; i++) {
		var element = document.getElementById('project' + i);
		element.style.display = 'none';
		var z = document.getElementById('project-button' + i);
		z.style.backgroundColor = 'rgba(0, 0, 0, 0)';
		z.style.fontWeight = 'normal';
	}
    var x = document.getElementById('project' + identifier);
	x.style.display = 'block';
    var y = document.getElementById('project-button' + identifier);
	y.style.backgroundColor = 'rgba(150, 163, 183, 0.9)';
	y.style.fontWeight = 'bold';
	$('#project-button8').goTo();
}