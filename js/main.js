$(document).ready(function() {
	$("#titlecontainer").hide();
	$("#cluster_tags").keypress(function(e) {
		if(e.which == 13) {
			var tagVal = $(this).val();
			$("#tags").append('<div class="hashtag">' + tagVal + '</div>');
			$(this).val('');
			
			//check if the title contianer is visible, if it isnt fadeIn
			if(!$("#titlecontainer").is(":visible")) {
				$("#titlecontainer").delay(500).fadeIn(200);
			}
		}
	});
	$("#cluster_title").keypress(function(e) {
		if(e.which == 13) {
			console.log("ajax sent!");
		}

	});

});
