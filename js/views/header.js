define([
	'jquery',
	'underscore',
	'backbone'
	], function($, _, Backbone) {
		var view = Backbone.View.extend({
			el:'header',
			events: {
				'change select' : 'selectCity'
			},
			selectCity: function(e) {
				if(e.currentTarget.value == 'guangzhou') {
					this.map.centerAndZoom('广州', 15);
				}
				if(e.currentTarget.value == 'shanghai') {
					this.map.centerAndZoom('上海', 15);
				}
				if(e.currentTarget.value == 'beijing') {
					this.map.centerAndZoom('北京', 15);
				}
				if(e.currentTarget.value == 'shenzhen') {
					this.map.centerAndZoom('深圳', 15);
				}
			}
		});
	return view;
})