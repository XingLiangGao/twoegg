//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie"
	}
})
//导入依赖文件
require(["jquery","cookie"],function($,cookie){
	$(function(){
		//$("body").append("<h1>jquery</h1>");
		//$.cookie("key","value",{"expires" : 7,"path" : "/"}); //jQuery创建cookie
		//alert($.cookie("key")); //获取cookie
		//$.removeCookie("key",{"expires" : 7,"path" : "/"});
		//alert($.cookie("key"));
		//alert(mod1.a);
		//alert(mod1.fn());
		//alert(mod2.a);
		//alert(mod2.fn());
		$(".nav_right a").eq(1).mouseover = function(){
			$(".nav_right .nav_pop1").css({"display":"block"})
		}
		$(".nav_right a").eq(1).mouseout = function(){
			$(".nav_right .nav_pop1").css({"display":"none"})
		}
		$(".nav_right a").eq(2).mouseover = function(){
			$(".nav_right .nav_pop1").css({"display":"block"})
		}
		$(".nav_right a").eq(1).mouseout = function(){
			$(".nav_right .nav_pop1").css({"display":"none"})
		}
	})
})
