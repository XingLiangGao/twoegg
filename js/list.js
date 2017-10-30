//设置配置文件
require.config({
    paths : {
        "jquery" : "jquery",
        "cookie" : "jquery.cookie",
        "index"  : "index",
        "json" : "json",
        "result:" : "result"
    }
})
//导入依赖文件
require(["jquery","cookie","index","json","result"],function($,cookie,index,json,result){
    $(function(){
        json.json();
        result.list();
        result.collect();
    })
})
