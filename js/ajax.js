define(function(){
function lunbo(a,b,id){
		var uu = document.getElementsByClassName(a)[0];
		var spp = document.getElementsByClassName(b);
		var left = uu.offsetWidth / spp.length;
		//console.log(uu);
		left = parseInt(left);
			var nowz = 0;
			var timer = null;
			spp[0].style.background = "#f60";
			function init(){
				move(uu,{left:-nowz*left})
				for(var i=0;i<spp.length;i ++){
				spp[i].style.background = "#737373";
			}
				spp[nowz].style.background = "#f60";
			}

			function autoplay(){
				timer = setInterval(function(){
					nowz ++;
					if(nowz == spp.length){
						nowz = 0;
					}
					init()
					if(nowz > spp.length - 2){
						nowz = -1;

					}
				},5000)
			}
			document.getElementById(id).onmouseenter=function(){
				clearInterval(timer);
			}
			document.getElementById(id).onmouseleave=function(){
				autoplay();
			}
			autoplay();
			for(var i=0;i<spp.length;i ++){
				spp[i].index = i;
				spp[i].onmouseover = function(){
					clearInterval(timer);
					nowz = this.index;
					init();
				}
			}
}

lunbo("slider-room","move-radius","slider");
lunbo("slider-room_01","move-radius_01","slider_01");
lunbo("slider-room_02","move-radius_02","slider_02");
lunbo("slider-room_03","move-radius_03","slider_03");
lunbo("slider-room_04","move-radius_04","slider_04");
lunbo("slider-room_05","move-radius_05","slider_05");
lunbo("slider-room_06","move-radius_06","slider_06");
lunbo("slider-room_07","move-radius_07","slider_07");
lunbo("slider-room_09","move-radius_09","slider_09");

//缓速运动的封装
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}

function move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var stop = true;
		for(var attr in json){
			var cur = attr == "opacity" ? parseInt(parseFloat(getStyle(obj,attr)) * 100) : parseInt(getStyle(obj,attr));
			var speed = (json[attr] - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(cur != json[attr]){
				stop = false;
			}
			if(attr == "opacity"){
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = "alpha(opacity=" + (cur + speed) + +")"
			}else{
				obj.style[attr] = cur + speed + "px";
			}
		}
		if(stop){
			clearInterval(obj.timer);
			if(typeof fn == "function"){
				fn();
			}
		}
	},30)
}
return {
        lunbo : lunbo
    }
})