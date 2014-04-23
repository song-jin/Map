define(function() {
	return {
		localSearch:function(map,keywords) {
			var local = new BMap.LocalSearch(map, {
				renderOptions: {map:map}
			});
			local.searchInBounds(keywords, map.getBounds());
			map.addEventListener('dragend', function() {
					local.searchInBounds(keywords, map.getBounds());
			})
		},
		circleSearch:function(map) {				
			var options = {
			    renderOptions: {
			        map: map
			    }
			};
			var localSearch = new BMap.LocalSearch(map,options);

			var drawingManager = new BMapLib.DrawingManager(map, {
			        isOpen: true, //是否开启绘制模式
			        enableDrawingTool: true, //是否显示工具栏
			        drawingToolOptions: {
			            anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
			            offset: new BMap.Size(5, 5), //偏离值
			            scale: 0.8, //工具栏缩放比例
						drawingModes : [
							BMAP_DRAWING_CIRCLE
						 ]
					}
			});
			drawingManager.setDrawingMode(BMAP_DRAWING_CIRCLE);
			var circle = null;

			drawingManager.addEventListener('circlecomplete', function(e) {
       			circle = e;
	   			var radius= parseInt(e.getRadius());
	   			var center= e.getCenter();
       			drawingManager.close();//关闭绘图工具
	   			localSearch.searchNearby('火车票', center, radius, {customData:{databoxId:15611}});
			});


		}
	}
});