//定位
define(function() {
	var geolocation = new BMap.Geolocation();
	return {
		getPosition: function(map) {
			geolocation.getCurrentPosition(function(r) {
				if(this.getStatus() == BMAP_STATUS_SUCCESS) {
					var mk = new BMap.Marker(r.point);
					map.addOverlay(mk);
					map.panTo(r.point);
				} else {
					alert('定位服务出错，出错码为：' + this.getStatus())
				}
			}, {enableHighAccuracy:true})
		},
		useCityPotch:function(map, city) {
			map.centerAndZoom(city,15);
		}
	}
});