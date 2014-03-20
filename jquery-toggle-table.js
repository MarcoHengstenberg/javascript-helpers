$(function() {

	// Each table with a certain classname
	$.each($(".classname"), function(index, value) {

		// get the ID of any of those tables
		var table_id = this.id;

		// get all odd table rows and give them a class of odd
		$("#"+table_id+" tr:odd").addClass("odd");

		// hide those table rows, which are not odd
		$("#"+table_id+" tr:not(.odd)").hide();

		// but show the first child (most possibly the thead > tr)
		$("#"+table_id+" tr:first-child").show();

		// on click do the following
		$("#"+table_id+" tr.odd").click(function() {

			// toggle the visibility of that tr's not being odd
			$(this).next("tr").toggle();
			
		});
	});
});