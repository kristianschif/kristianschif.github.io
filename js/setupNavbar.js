$(document).ready(function() {
	var navbar = "<div id='navRelative'><div id='navLeft'><ul><li class='nav3 hide'><a id='navLeftShoppingCart' class='navIcon' href='https://www.linkedin.com/in/kristianschif' target='_blank'><img class='iconSize' src='images/iconLinkedIn.png'></img></a></li><li class='nav1 nav2 hide'><a class='navLinkColor' href='index.html' target='_self'>Kristian Schif</a></li></ul></div><div id='navCenter' class='nav3 hide'><a class='navLinkColor' href='index.html' target='_self'>Kristian Schif</a></div><div id='navRight'><ul><li class='nav1 hide'><a class='navLinkHeight navLinkColor' href='index.html' target='_self'>Home</a></li><li class='nav1 hide'><a class='navLinkHeight navLinkColor' href='About.html' target='_self'>About</a></li><li class='nav1 hide'><a class='navLinkHeight navLinkColor' href='Experience.html' target='_self'>Experience</a></li><li class='nav1 hide'><a class='navLinkHeight navLinkColor' href='Projects.html' target='_self'>Projects</a></li><li class='nav1 hide'><a class='navLinkHeight navLinkColor' href='Contact.html' target='_self'>Contact</a></li><li class='nav1 hide'><div class='navLine'><div class='navLineColor'></div></div></li><li class='nav1 nav2 hide'><a class='navIcon' href='https://www.linkedin.com/in/kristianschif' target='_blank'><img class='iconSize' src='images/iconLinkedIn.png'></img></a></li><li class='nav2 hide'><div class='navLine'><div class='navLineColor'></div></div></li><li class='nav2 nav3 hide'><div id='navToggle'><div id='navToggleButton'><div></div><div></div><div></div></div></div></li></ul></div></div><ul id='navToggleMenu' class='hide'><li id='navToggleMenuItem'><a href='index.html' target='_self'>Home</a></li><li><a href='About.html' target='_self'>About</a></li><li><a href='Experience.html' target='_self'>Experience</a></li><li><a href='Projects.html' target='_self'>Projects</a></li><li><a href='Contact.html' target='_self'>Contact</a></li></ul><div id='navToggleState'></div>";
	$('#navbar').append(navbar);
});