require.config({
	shim: {
		underscore: {
		  exports: '_'
		},
		backbone: {
		  deps: ['underscore', 'jquery'],
		  exports: 'Backbone'
		}
	},
	paths:{
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min',
		'underscore': 'libs/underscore/underscore.min',
		'backbone': 'libs/backbone/backbone.min',
		'headerView': 'views/header',
		'toolView': 'views/tool',
		'default': 'module/default-control',
		'search':'module/search'
	}
});
var module = [
	'jquery',
	'underscore',
	'backbone',
	'headerView',
	'toolView',
	'default',
	'search'
];
require(module, function($, _, Backbone, headerView, toolView, defaultCtl, search) {
	//默认地图
	var map = new BMap.Map('map');
	map.centerAndZoom('广州', 15);
	map.enableScrollWheelZoom();
	defaultCtl.addDefault(map);
	
	//header区域视图
	var headerView = new headerView;
	headerView.map = map;
	//侧边栏区域视图
	var todlView = new toolView;
	todlView.map = map;
	todlView.search = search;
});