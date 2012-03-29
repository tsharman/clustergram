$(document).ready(function() {
	tags = new Array();
	
	
	$("#submit_container").hide();
	$("#submit_success_message").hide();
	$(".message").hide();
	$("#titlecontainer").hide();
	
	$("#content").hide();
	$("#content").fadeIn(400);

	$("#cluster_tags").keypress(function(e) {
		if(e.which == 13) {
			var tagVal = $(this).val();
			//removing spaces
			tagVal = tagVal.split(' ').join('');

			$("#tags").append('<div class="hashtag">' + tagVal + '</div>');
			tags.push(tagVal);
			$(this).val('');
			
			//check if the title contianer is visible, if it isnt fadeIn
			if(!$("#titlecontainer").is(":visible")) {
				$("#titlecontainer").delay(500).fadeIn(200);
			}
		}
	});
	$("#cluster_title").keypress(function(e) {
		if(e.which == 13) {
			$.ajax({
				method: 'GET',
				url: 'ajax/checkTitle.php',
				data: 'clusterTitle=' + $("#cluster_title").val(),
				success: function(msg) {
					if(msg == "success") {
						$("#title_error").fadeOut(200);
						$("#title_success").delay(200).fadeIn(200);
						$("#submit_container").delay(500).fadeIn(200);	
					}
					else {
						$("#title_success").fadeOut(200);
						$("#title_error").delay(200).fadeIn(200);
					}
				},
				error: function(error) {
					console.log("error" + error);
					console.log(error);
				}
			});
		}
		else {
			$("#title_success").fadeOut(200);
			$("#title_error").fadeOut(200);
			$("#submit_container").fadeOut(200);
		}

	});
	$("#submit_button").click(function() {
		title = $("#cluster_title").val();
		$.ajax({
			async: false,
			type: 'POST',
			url: 'ajax/createCluster.php',
			data: 'clusterTags=' + JSON.stringify(tags) + '&clusterTitle=' + $("#cluster_title").val(),
			success: function(msg) {
				$("#content").children().fadeOut(400)
				$("#submit_success_message").delay(400).fadeIn();
				setTimeout(function() {
					window.location = "cluster.php?clusterTitle=" + $("#cluster_title").val();
				}, 3000);
			}
		});
	});

});
