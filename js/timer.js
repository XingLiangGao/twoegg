define(function(){
function getTime(obj){
        var timer = null;
        timer = setInterval(function(){
                var a = new Date((obj.getAttribute("data-end-time"))).getTime();
                var b = new Date().getTime();
                var d = 0,s=0,h=0,m=0;
                var ee = obj.getElementsByTagName("em")
                d = Math.floor((a - b)/1000/60/60/24);
                h = Math.floor((a - b)/1000/60/60%24);
                m = Math.floor((a - b)/1000/60%60);
                s = Math.floor((a - b)/1000%60);
                ee[0].innerHTML = d;
                ee[1].innerHTML = h;
                ee[2].innerHTML = m;
                if(parseInt(s) < 10){
                    s = "0" + s;
                }
                ee[3].innerHTML = s;
                if(a <= b){
                    clearInterval(timer);
                    ee[0].innerHTML = 0;
                    ee[1].innerHTML = 0;
                    ee[2].innerHTML = 0;
                    ee[3].innerHTML = 0;
                }
            },1000)
            }
var sp = document.getElementById("end");
            getTime(sp);
return {
        getTime : getTime
    }
})