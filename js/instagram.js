var INSTAGRAM  = {
	tags : "",
	client_id: "",
	fadeInCounter: 0,
	initialize : function(tags, client_id) {
		this.tags = tags;
		this.client_id = client_id;
		this.pullAllImages();
	},
	pullTagImages: function(tag) {
		$.ajax({
			async: false,
			type: 'GET',
			dataType: 'jsonp',
			url: 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=' + this.client_id,
			success: function(msg) {
				console.log(msg);
				INSTAGRAM.insertImages(msg, $("#photos"));
			} 
		});
	},
	pullAllImages: function() {
		console.log("PULLING ALL IMAGES");
		for(tag in this.tags) {
			this.pullTagImages(this.tags[tag]);
		}
	},
	insertImages: function(instagramObject, targetDiv) {
		var objectData = instagramObject.data;
		for(photo in objectData) {
			targetDiv.append('<img src="' + objectData[photo].images.standard_resolution.url + '" class="insta_img" />');
		}
	}
		
};
