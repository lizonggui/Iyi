var app=angular.module("appointmentModule",[]);
app.controller("appointmentctrl",function($scope){
	
//城市选择
	navigator.geolocation.getCurrentPosition(function (position) {
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;
          var point = new BMap.Point(position.coords.longitude,position.coords.latitude);  // 创建坐标点
          // 根据坐标得到地址描述
          var myGeo = new BMap.Geocoder();
          myGeo.getLocation(point, function (result) {
              var city = result.addressComponents.city;
              var mycity=document.getElementById("city");
			  mycity.innerHTML=city;
         });
     });
//	轮播图
var elem = document.getElementById('jiaodiantu');
      		window.mySwipe = Swipe(elem, {      		 
      		   auto: 2000,   
      		 callback: function(index, element) {
      		$(".xiaoyuandian li").eq(index).addClass("cur").siblings().removeClass("cur");
      		}
      		});

      		$(".xiaoyuandian li").click(
      		   function()
      		   {
      		         mySwipe.slide($(this).index());
      		    }
           
);
//名师推荐
	var mySwiper = new Swiper('.swiper-container',{
	slidesPerView : 4,
	slidesPerGroup : 4,
	})
$(document).ready(function(){	
//底部点击    
	$("footer a").click(function(){
		$("footer a").eq($(this).index()).addClass("active").siblings("footer a").removeClass("active");
        $("header>div").eq($(this).index()).show().siblings("header>div").hide()        
	})	
})
})
