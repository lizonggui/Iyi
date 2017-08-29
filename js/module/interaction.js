var app=angular.module("interactionModule",[]);
app.controller("interactionctrl",function($scope){
	$(document).ready(function(){
		$(".plate3-head li").click(function(){
			$(".plate3-head li").eq($(this).index()).addClass("current").siblings(".plate3-head li").removeClass("current");
			$(".plate3-body").eq($(this).index()).show().siblings(".plate3-body").hide();
		})
		$(".praise").val(0);		
		$(".praise").click(function(ev){
			ev.preventDefault();
			if($(this).val()==0){				
				$(this).children("i").css("color","red");
				$(this).children("span").html("取消");
				$(this).val(1);				
			}else{
			    $(this).children("i").css("color","#999");
			    $(this).children("span").html("点赞");
			    $(this).val(0);
			}
		})
	})
})