//设置配置文件
require.config({
	paths : {
		"jquery" : "jquery",
		"cookie" : "jquery.cookie",
		"index"	 : "index",
		"ajax" : "ajax",
		"timer" : "timer"
	}
})
//导入依赖文件
require(["jquery","cookie","index","ajax","timer"],function($,cookie,index,ajax,timer){
	$(function(){
		index.menue();
		index.banner02();
		index.rebatch();
		index.collect();
		index.fixed();
		ajax.lunbo();
		timer.getTime();
	})
})
