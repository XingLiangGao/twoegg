define(function(){
    function list(){
    	$(".shop").hover(function(){
    		$(".navcon .shop .menue").css("display","block");
    	},function(){
    		$(".navcon .shop .menue").css("display","none");
    	})
        $(".navcon .shop .menue ul li").mouseover(function(){
            $that = $(this).index();
            //li的颜色变色
            $(".navcon .shop .menue ul li").css({"background":"#f7f7f7"});
            //二级菜单下的div变色
            $(".navcon .shop .menue ul .list_05 .list_bot").css({"background":"#f7f7f7"});
            if($that < 4){
            	//当前li下标的颜色变回
                $(".navcon .shop .menue ul li").eq($that).css({"background":"#fff","box-shadow":"0 4px 2px #000"});
                //三级菜单出现
                $(".navcon .three").eq($that).css({"display":"block"});
                //移入三级菜单
                $(".navcon .three").eq($that).mouseover(function(){
                	//三级菜单不消失
                    $(this).css({"display":"block"});
                    //二级菜单不消失
                    $(".navcon .shop .menue").css("display","block");
                    //当前li的颜色变色
                    $(".navcon .shop .menue ul li").css({"background":"#f7f7f7"});
                    $(".navcon .shop .menue ul li").eq($that).css({"background":"#fff"});
                    $(".navcon .shop .menue ul .list_05 .list_bot").css({"background":"#f7f7f7"});
                })
                //移出三级菜单
                $(".navcon .three").eq($that).mouseout(function(){
                	//三级菜单消失
                    $(this).css({"display":"none"});
                    //二级菜单颜色变白
                    $(".navcon .shop .menue ul li").css({"background":"#fff"});
                    //二级菜单消失
                    $(".navcon .shop .menue").css("display","none");
                    //二级菜单下的div变白
                    $(".navcon .shop .menue ul .list_05 .list_bot").css({"background":"#fff"});
                    //二级菜单消失
                    /*$(".navcon .shop .menu").css({"display":"none"});
                    $(".navcon .shop .menu ul").css({"display":"none"});*/
                })
            }
        })
        //移出二级菜单
        $(".navcon .shop .menue ul li").mouseout(function(){
            $that = $(this).index();
            //二级菜单颜色变为白色
            $(".navcon .shop .menue ul li").css({"background":"#fff"});
            //二级菜单下的div变白
			$(".navcon .shop .menue ul .list_05 .list_bot").css({"background":"#fff"});
            //三级菜单消失
            $(".navcon .three").css({"display":"none"});
            //二级菜单消失
            //$(".navcon .shop .menue").css("display","none");
        })
        //移入二级菜单下的div
        $(".navcon .shop .menue ul .list_05 div").mouseover(function(){
            $that = $(this).index();
            //二级菜单变色
            $(".navcon .shop .menue ul").css({"background":"#f7f7f7"});
            //二级菜单下的当前div变白色
            //console.log($(".navcon .shop .menue ul .list_05 .list_bot").eq($that));
//          console.log($(".navcon .shop .menue ul .list_05 .list_bot").eq($that));
//          console.log($that);
//          $(".navcon .shop .menue ul .list_05 .list_bot").eq($that - 2).css({"background":"red"});
			//$(this).css({"background":"red"})
            //当前div对应的三级菜单出现
            $(".navcon .three").eq($that + 2).css({"display":"block"});
            //移入三级菜单
            $(".navcon .three").eq($that + 2).mouseover(function(){
            	//三级菜单不消失
                $(this).css({"display":"block"});
                //二级菜单不消失
                $(".navcon .shop .menue").css("display","block");
                //二级菜单变色
                $(".navcon .shop .menue ul li").css({"background":"#f7f7f7"});
                $(".navcon .shop .menue ul .list_05 div").css({"background":"#f7f7f7"});
                //当前div颜色变为白色
                //$(".navcon .shop .menue ul .list_05 div").css({"background":"#fff"});
            })
            //移出三级菜单
            $(".navcon .three").eq($that + 2).mouseout(function(){
            	//三级菜单消失
                $(this).css({"display":"none"});
                //二级菜单消失
                $(".navcon .shop .menue").css("display","none");
                //$(".navcon .shop .menue ul .list_05 div").css({"background":"#fff"});
                $(".navcon .shop .menue ul li").css({"background":"#fff"});
                $(".navcon .shop .menue ul .list_05 div").css({"background":"#fff"});
                
            })
//          $(".three_05").hover(function(){
//	        	$(".navcon .list_05 div").eq(0).css({"background":"#fff"});
//	        })
            $(".three_05").mouseover(function(){
            	$(".navcon .list_05 div").eq(0).css({"background":"#fff"});
            })
            $(".three_06").mouseover(function(){
            	$(".navcon .list_05 div").eq(1).css({"background":"#fff"});
            })
            $(".three_07").mouseover(function(){
            	$(".navcon .list_05 div").eq(2).css({"background":"#fff"});
            })
            $(".three_08").mouseover(function(){
            	$(".navcon .list_05 div").eq(3).css({"background":"#fff"});
            })
            $(".three_09").mouseover(function(){
            	$(".navcon .list_05 div").eq(4).css({"background":"#fff"});
            })
        })
        /*$(".product .product_con .pro_left .pro_le01 p").eq(0).click(function(){
        	$(".product .product_con .pro_left .pro_le01 ul").eq(0).css("display","none");
        })*/
        var onff = true;
		$(".product .product_con .pro_left .pro_le01 p").click(function(){
			$that = $(this).index();
			switch($that){
				case 0 : $that = 0;break;
				case 2 : $that = 1;break;
				case 4 : $that = 2;break;
			}
			var aa = $(".product .product_con .pro_left .pro_le01 ul").eq($that);
			var bb = aa.children().length * aa.children().innerHeight();
			var ii= $(".product .product_con .pro_left .pro_le01 p").eq($that).children()[0];
//			console.log(bb)
			
			$(".product .product_con .pro_left .pro_le01 ul").each(function(){
				$(this).animate({
					height : 0
				},200)
			})
			//console.log($(".product .product_con .pro_left .pro_le01 p").children()[0])
			if(aa.innerHeight()){
				aa.animate({
					height : 0
				},100)
				$(ii).css("background-position","2px -46px")
			}else{
				aa.animate({
					height: bb
				},100)
				$(ii).css("background-position","-1px -81px")
//				$(".product .product_con .pro_left .pro_le01 ul").css("background-position","-1px -81px")
			}
//			console.log((".product .product_con .pro_left .pro_le01 ul").css("display"))
//			$(".product .product_con .pro_left .pro_le01 ul").each(function(){
//				console.log($(".product .product_con .pro_left .pro_le01 ul").eq($that).css("display"));
//				if($(this).css("display") == "block"){
//					$(this).css("display","none")
//				}
//			})
//			if($(".product .product_con .pro_left .pro_le01 ul").eq($that).css("display") ==  "block"){
//				$(".product .product_con .pro_left .pro_le01 ul").eq($that).css("display","none");
//			}
//			$(".product .product_con .pro_left .pro_le01 ul").eq($that).css("display","block");

		})
		$(".product .product_con .pro_left .pro_le02 ul:nth-of-type(2)").css("height","0");
		$(".product .product_con .pro_left .pro_le02 > a:nth-of-type(1)").mouseover(function(){
			$(".product .product_con .pro_left .pro_le02 ul:nth-of-type(2)").css("height","0");
			$(".product .product_con .pro_left .pro_le02 ul:nth-of-type(1)").css("height","");
			$(".product .product_con .pro_left .pro_le02 > a:nth-of-type(2)").css({"background":"#dbdbdb"});
			$(".product .product_con .pro_left .pro_le02 > a:nth-of-type(1)").css({"background":"#fff"});
		})
		$(".product .product_con .pro_left .pro_le02 > a:nth-of-type(2)").mouseover(function(){
			$(".product .product_con .pro_left .pro_le02 ul:nth-of-type(2)").css("height","");
			$(".product .product_con .pro_left .pro_le02 ul:nth-of-type(1)").css("height","0");
			$(".product .product_con .pro_left .pro_le02 > a:nth-of-type(2)").css({"background":"#fff"});
			$(".product .product_con .pro_left .pro_le02 > a:nth-of-type(1)").css({"background":"#dbdbdb"});
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
    return {
        list : list,
        collect : collect
    }
})