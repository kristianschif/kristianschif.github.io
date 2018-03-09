$(document).ready(function() {
	$(".projectTitle").click(function(){
		/* Hides and clears all projects */
		var numberOfProjects = 11;
		for (i = 0; i <= numberOfProjects - 1; i++) {
			var projectTitle = "#projectTitle" + i;
			$(projectTitle).removeClass("backgroundColor")
			var project = "#project" + i;
			$(project).addClass("hide")
		}
		
		/* Selects project */
		$(this).addClass("backgroundColor");
		var selectedProject = $(this).attr("id").replace('projectTitle','#project');
		$(selectedProject).removeClass("hide");
		
		/* Scrolls down to selected project */
		$('html, body').animate({scrollTop: $(selectedProject).offset().top - 100}, 350);
	});
});

