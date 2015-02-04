$(document).ready(function() {
	//Hide trap message as soon as page loads
	$('.warning').hide();

	//Capture click on image
	$('.image').click(function() {
		$('.warning').toggle();
	});
});