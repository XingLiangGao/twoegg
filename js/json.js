define(function(){
    function json(){
        var json = [];
        $(function(){
            $.getJSON('../list.json', function(data) {
                /*optional stuff to do after success */
                json = data;
                init();
            });
        });
        function init(){
            var li;
            for(var i = 0;i < json.length;i ++){
                li = "<li><img src='" + json[i].src + "'alt='" + json[i].alt + "'/><a>" + json[i].str + "</a>" + "<span></span><b>" + json[i].price + "</b>" + "</li>";
                $(".pro_ri3 ul").append(li);
            }
        }
    }
    return {
        json : json,
    }
})