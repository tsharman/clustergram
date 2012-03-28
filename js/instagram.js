var INSTAGRAM  = {
	tags : "",
	client_id: "",
	initialize : function(tags, client_id) {
		this.tags = tags;
		this.client_id = client_id;
	},
	pullTagImages: function(tag) {
		$.ajax({
			async: false,
			type: 'GET',
			url: 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?client_id=' + this.client_id,
			success: function(msg) {
				console.log(msg);
			} 
		});
	}
		
};
