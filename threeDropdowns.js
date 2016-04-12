$(document).ready(function() {

	var openOne = 0;
	var openTwo = 0;
	var openThree = 0;

	$('#labelOne').on('click',function(evt) {
		$('#divTwo').collapse('hide');
		$('#divThree').collapse('hide');
		// alert(this.id);
	});

	$('#labelTwo').on('click',function(evt) {
		$('#divOne').collapse('hide');
		$('#divThree').collapse('hide');
		// alert(this.id);
	});

	$('#labelThree').on('click',function(evt) {
		$('#divOne').collapse('hide');
		$('#divTwo').collapse('hide');
		// alert(this.id);
	});


	

});
