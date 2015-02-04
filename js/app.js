$(document).ready(function() {
	//Hide warning message as soon as page loads
	$('.warning').hide();

	//Capture click on image
	$('.image').click(function() {

		//Toggle between showing & hiding warning message
		$('.warning').toggle();
	});
});