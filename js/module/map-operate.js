//对于地图的操作，画线添加标注点之类的
define(function() {
	var linePoint = [];
	var toolAnchor = {
		topLeft:BMAP_ANCHOR_TOP_LEFT,
		topRight:BMAP_ANCHOR_TOP_RIGHT,
		bottomLeft:BMAP_ANCHOR_BOTTOM_LEFT,
		bottomRight:BMAP_ANCHOR_BOTTOM_RIGHT
	}
	return {
		drawTool: function(map, open, style, site) {
/*	使用方法
	各种绘制类型的样式,定义四种四种工具绘制样式
	strokeColor 边线颜色, 
	fillColor 填充颜色,当参数为空时,圆形将没有填充效果
	strokeWeight 边线宽度,以像素为单位。
	strokeOpacity 边线透明度, 取值范围0 - 1
	fillOpacity 填充透明度,取值范围0 - 1 
	strokeStyle 边线样式,solid或dashed。

    var style = {
    	circleStyle: {
    	},
    	polylineStyle: {
    	},
    	polygonStyle: {
    	},
    	rectangleStyle: {
    	},
    };
    	定义总体样式
    	location定义主要位于父元素的哪个位置
		horiz定义水平位置
		verti定义垂直位置
    var site = {
    	location:"topRight",
    	horiz:100,
    	verti:5
    }
*/
			var drawingManager = new BMapLib.DrawingManager(map, {
				isOpen:false, //是否开启绘制模式
				enableDrawingTool:open,//是否显示工具栏
				drawingToolOptions:{
					anchor:toolAnchor[site.location], //位置
					offset: new BMap.Size(site.horiz, site.verti), //偏离值
					scale: 0.8 //工具栏缩放比例
				},
				circleOptions:style.circleStyle, //圆的样式
				polylineOptions:style.polylineStyle, //线的样式
				polygonOptions:style.polygonStyle, //多边形的样式
				rectangleOptions:style.rectangleStyle //矩形的样式
			});
		}
	}
});