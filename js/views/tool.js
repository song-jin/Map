define([
	'jquery',
	'underscore',
	'backbone'
	], function($, _, Backbone) {
		var tool = Backbone.View.extend({
			el:'.side-bar',
			initialize:function() {
				this.render('#tool');
			},
			render:function(selector) {
				this.template = _.template($(selector).html());
				this.$el.html(this.template())
			},
			events: {
				'click .ceju': 'a',
				'click p':'b'
			},
			a:function() {
				this.search.localSearch(this.map, '宾馆');
				this.render('#result');
			},
			b:function() {
				this.render('#tool');
			}
		});
	return tool;
})