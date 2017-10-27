/*
* @Author: Marte
* @Date:   2017-10-26 08:29:51
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-27 10:30:48
*/
define(function(){
    function menue(){
        $(".navcon .shop .menue ul li").mouseover(function(){
            $that = $(this).index();
            $(".navcon .shop .menue ul li").css({"background":"#f7f7f7"});
            if($that < 4){
                $(".navcon .shop .menue ul li").eq($that).css({"background":"#fff","box-shadow":"0 4px 2px #000"});
                $(".navcon .three").eq($that).css({"display":"block"});
                $(".navcon .three").eq($that).mouseover(function(){
                    $(this).css({"display":"block"});
                })
                $(".navcon .three").eq($that).mouseout(function(){
                    $(this).css({"display":"none"});
                })
            }
        })
        $(".navcon .shop .menue ul li").mouseout(function(){
            $that = $(this).index();
            $(".navcon .shop .menue ul li").css({"background":"#fff"});
            if($that < 4){
                $(".navcon .three").eq($that).css({"display":"none"});
            }
        })
        $(".navcon .shop .menue ul .list_05 .list_bot").mouseover(function(){
            $that = $(this).index();
            $(".navcon .shop .menue ul .list_05").css({"background":"#f7f7f7"});
            $(this).css({"background":"#fff"});
            $(".navcon .shop .menue ul").css({"background":"#f7f7f7"});
            $(".navcon .three").eq($that + 2).css({"display":"block"});
            $(".navcon .three").eq($that + 2).mouseover(function(){
                $(this).css({"display":"block"});
            })
            $(".navcon .three").eq($that + 2).mouseout(function(){
                $(this).css({"display":"none"});
            })
        })
        $(".navcon .shop .menue ul .list_05 .list_bot").mouseout(function(){
            $that = $(this).index();
            $(this).css({"background":"#f7f7f7"});
            $(".navcon .shop .menue ul li").css({"background":"#fff"});
            $(".navcon .shop .menue ul .list_05").css({"background":"#fff"});
            $(".navcon .three").eq($that + 2).css({"display":"none"})
        })
        $(".navcon .shop .menue ul .list_05").mouseout(function(){
            $(this).css({"background":"#fff"});
        });
    }
    function banner02(){
        $(".banner_02 strong").eq(0).click(function(){
            $(".banner_02 .list_top").css({"display":"none;"})
            $(".banner_02 .list_bottom").css({"display":"block"})
        })
        $(".banner_02 strong").eq(1).click(function(){
            $(".banner_02 .list_top").css({"display":"block;"})
            $(".banner_02 .list_bottom").css({"display":"none"})
        })
        var onff = true;
        setInterval(function(){
            if(onff){
                $(".banner_02 .list_top").css({"display":"none"})
                $(".banner_02 .list_bottom").css({"display":"block"})
            }
            if(!onff){
                $(".banner_02 .list_top").css({"display":"block"})
                $(".banner_02 .list_bottom").css({"display":"none"})
            }
            onff = !onff;
        },2000)
    }
    function rebatch(){
        $(".banner h2 a").mouseover(function(){
            $(this).css({"cursor":"pointer","text-decoration":"underline"});
        })
        $(".banner h2 a").mouseout(function(){
            $(this).css({"cursor":"default","text-decoration":"none"});
        })
        var onff = true;
        $(".banner h2 a").click(function(){
            if(onff){
                $(".banner .hot ul").eq(0).css({"display":"none"});
                $(".banner .hot ul").eq(1).css({"display":"block"});
            }
            if(!onff){
                $(".banner .hot ul").eq(1).css({"display":"none"});
                $(".banner .hot ul").eq(0).css({"display":"block"});
            }
            onff = !onff;
        })
    }
    function collect(){
        $(".navcon .nav_right a").eq(0).mouseover(function(){
            $(".navcon .nav_right .nav_pop1").css({"display":"block"});
        })
        $(".navcon .nav_right a").eq(0).mouseout(function(){
            $(".navcon .nav_right .nav_pop1").css({"display":"none"});
        })
        $(".navcon .nav_right a").eq(1).mouseover(function(){
            $(".navcon .nav_right .nav_pop2").css({"display":"block"});
        })
        $(".navcon .nav_right a").eq(1).mouseout(function(){
            $(".navcon .nav_right .nav_pop2").css({"display":"none"});
        })
        $(".navcon .nav_right .nav_pop1").mouseover(function(){
            $(this).css({"display":"block"});
            $(".navcon .nav_right a").eq(0).css({"background":"#fff","color":"#666"});
            $(".navcon .nav_right a:nth-of-type(1) i").css({"border-color":"transparent transparent #666 transparent","top":"12px"});
        })
        $(".navcon .nav_right .nav_pop1").mouseout(function(){
            $(this).css({"display":"none"});
            $(".navcon .nav_right a").eq(0).css({"background":"#f60"})
            $(".navcon .nav_right a").eq(0).mouseover(function(){
                $(".navcon .nav_right a").eq(0).css({"background":"#fff","color":"#666"});
                $(".navcon .nav_right a:nth-of-type(1) i").css({"border-color":"transparent transparent #666 transparent","top":"12px"});
             })
            $(".navcon .nav_right a").eq(0).mouseout(function(){
                $(".navcon .nav_right a").eq(0).css({"background":"#f60","color":"#fff"});
                $(".navcon .nav_right a:nth-of-type(1) i").css({"border-color":"#fff transparent transparent transparent","top":"17px"});
            })
            $(".navcon .nav_right a:nth-of-type(1) i").css({"border-color":"#fff transparent transparent transparent","top":"17px"});
            $(".navcon .nav_right a").eq(0).css({"background":"#f60","color":"#fff"});
        })
        $(".navcon .nav_right .nav_pop2").mouseover(function(){
            $(this).css({"display":"block"});
            $(".navcon .nav_right a").eq(1).css({"background":"#fff","color":"#666"});
            $(".navcon .nav_right a:nth-of-type(2) i").css({"border-color":"transparent transparent #666 transparent","top":"12px"});
        })
        $(".navcon .nav_right .nav_pop2 i").mouseover(function(){
            $(this).css({"background":"#ff971c","cursor":"pointer"});
        })
        $(".navcon .nav_right .nav_pop2 i").mouseout(function(){
            $(this).css({"background":"#f60","cursor":"default"});
        })
        $(".navcon .nav_right .nav_pop2").mouseout(function(){
            $(this).css({"display":"none"});
            $(".navcon .nav_right a").eq(1).css({"background":"#f60"})
            $(".navcon .nav_right a").eq(1).mouseover(function(){
                $(".navcon .nav_right a").eq(1).css({"background":"#fff","color":"#666"});
                $(".navcon .nav_right a:nth-of-type(2) i").css({"border-color":"transparent transparent #666 transparent","top":"12px"});
             })
            $(".navcon .nav_right a").eq(1).mouseout(function(){
                $(".navcon .nav_right a").eq(1).css({"background":"#f60","color":"#fff"});
                $(".navcon .nav_right a:nth-of-type(2) i").css({"border-color":"#fff transparent transparent transparent","top":"17px"});
            })
            $(".navcon .nav_right a:nth-of-type(2) i").css({"border-color":"#fff transparent transparent transparent","top":"17px"});
            $(".navcon .nav_right a").eq(1).css({"background":"#f60","color":"#fff"});
        })
    }
    function fixed(){
        var oTop = document.getElementById('top');
        window.onscroll = function(){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop >= 300){
                $("#top").css("display","block")
            }else{
                $("#top").css("display","none")
            }
        }
        oTop.onclick = function(){
            onscroll = 0;
        }
    }
    return {
        menue : menue,
        banner02 : banner02,
        rebatch : rebatch,
        collect : collect,
        fixed : fixed
    }
})