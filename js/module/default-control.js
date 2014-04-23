//加载地图默认控件
define(function() {
	var anchor = {
		topRight:BMAP_ANCHOR_TOP_RIGHT, 
		topLeft:BMAP_ANCHOR_TOP_LEFT,
		btmRight:BMAP_ANCHOR_BOTTOM_RIGHT, 
		btmLeft:BMAP_ANCHOR_BOTTOM_LEFT
	}
	return {
		addDefault: function(map) {
			//缩放平移控件
			map.addControl(new BMap.NavigationControl());
			//比例尺控件
			map.addControl(new BMap.ScaleControl({anchor:anchor.btmLeft}));
			//地图类型控件
			map.addControl(new BMap.MapTypeControl({anchor:anchor.topRight,mapTypes: [BMAP_NORMAL_MAP,BMAP_HYBRID_MAP]}));
			//添加默认略缩图地图控件
			map.addControl(new BMap.OverviewMapControl());

		}
	}
})
