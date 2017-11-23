Page({
	/*
  data: {
		latitude: 31.202,
		longitude: 121.712,
    markers: [{
			latitude: 31.202,
			longitude: 121.712,
      name: 'p'
    }],	
    covers: [{
			latitude: 31.202,
			longitude: 121.712,
      iconPath: '/image/location.png'
    }, {
      latitude: 31.202,
			longitude: 121.712,
      iconPath: '/image/location.png'
    }]
  }
	*/

	data: {
		latitude: 31.293437,
		longitude: 121.555454
	},

	getLocation: function (e) {
		//    console.log(e)
		let that = this
		wx.getLocation({
			type: 'gcj02',
			success:(res)=> {
//				console.log(res)
				let latitude = res.latitude;
				let longitude = res.longitude;
//				let marker = this.createMarker(res);
				let marker = [{
					latitude: res.latitude,
					longitude: res.longitude,
					name: 'q'}];
				that.setData({
						longitude: longitude,
						latitude: latitude,
						marker: marker
				})
			}
		})
	},
	createMarker(point) {
		let latitude = point.latitude;
		let longitude = point.longitude;
		let marker = {
			iconPath: "/image/location.png",
			id: point.id || 0,
			name: point.name || '',
			latitude: latitude,
			longitude: longitude,
			width: 25,
			height: 48
		};
		return marker;
	},
//根据经纬度在地图上显示
  openLocation: function( e ) {
    var value = e.detail.value
    wx.openLocation( {
      longitude: Number( value.longitude ),
      latitude: Number( value.latitude )
    })
  }

})
/*
// 引用百度地图微信小程序JSAPI模块   
var bmap = require('../../../../lib/bmap-wx.js');
var wxMarkerData = [];  //定位成功回调对象 
Page({
	data: {
		ak: "mHGux3p7t9em4MhRgPPzmrc9q0hIBr1E", //填写申请到的ak  
		markers: [],
		longitude: '',   //经度  
		latitude: '',    //纬度  
		address: '',     //地址  
		cityInfo: {}     //城市信息  
	},
	onLoad: function (options) {
		var that = this;
		// 获取定位地理位置 
		// 新建bmap对象   
		var BMap = new bmap.BMapWX({
			ak: that.data.ak
		});
		var fail = function (data) {
			console.log(data);
		};
		var success = function (data) {
			//返回数据内，已经包含经纬度  
			console.log(data);
			//使用wxMarkerData获取数据  
			wxMarkerData = data.wxMarkerData;
			//把所有数据放在初始化data内  
			that.setData({
				markers: wxMarkerData,
				latitude: wxMarkerData[0].latitude,
				longitude: wxMarkerData[0].longitude,
				address: wxMarkerData[0].address,
				cityInfo: data.originalData.result.addressComponent
			});
		}
		// 发起regeocoding检索请求   
		BMap.regeocoding({
			fail: fail,
			success: success
		});
	}
})
*/
