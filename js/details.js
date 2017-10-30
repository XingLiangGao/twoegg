//设置配置文件
require.config({
    paths : {
        "jquery" : "jquery",
        "cookie" : "jquery.cookie",
        "index"  : "index",
        "result" : "result"
    }
})
//导入依赖文件
require(["jquery","cookie","index","result"],function($,cookie,index,result){
    $(function(){
		index.collect();
		result.list();
    })
})
