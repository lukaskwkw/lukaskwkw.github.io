
$(document).ready(function() {
	$navbar = $(".navbar");

	$(window).scroll(function() {
		if (window.pageYOffset<=50)
			$navbar.removeClass("navbar-fixed-top");
		else  if (window.pageYOffset>50)
		{
			if( $navbar.hasClass("navbar-fixed-top")===false )
				$navbar.addClass("navbar-fixed-top");
		}
	});




});