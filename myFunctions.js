$(document).ready(function() {
	alert('huhu');
	$('#testddd').button();
	// refers to inner buttons!
	$('#testddd').on('click',function(e) {
		alert('hupps');
		//$('#option2').collapse('hide');
	});
	// refers to inner buttons!
	$('#testddd').click(function() {
		alert('also');
	});

	// $('#option2').on('show.bs.collapse',function(e) {
	// 	alert('hier geht was');
	// });


	$('#labelOne').on('click',function(e) {
		// alert('hier geht was');
		$('#testmich').collapse('hide');
	});
	$('#labelOne').click(function() {
		// alert('Option 2');
	});
	$('#testddd').collapse('show');
	alert("bye bye");
	// $('#hallo').css.innerHTML('hossa');
	// $('#testddd').toggle();
	// $('hallo').button('toggle');
	$('#testddd').collapse('hide');
});


