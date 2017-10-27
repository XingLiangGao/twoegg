//设置配置文件
require.config({
    paths : {
        "jquery" : "jquery",
        "cookie" : "jquery.cookie",
        "index"  : "index",
        "json" : "json"
    }
})
//导入依赖文件
require(["jquery","cookie","index","json"],function($,cookie,index,json){
    $(function(){
        json.json();
    })
})
