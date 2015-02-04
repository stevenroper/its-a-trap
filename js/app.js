//Hide trap sign
//When user clicks on image, reveal trap sign

$(document).ready(function() {
	$('.warning').hide();
	$('.image').click(function() {
		$('.warning').toggle();
	});

});