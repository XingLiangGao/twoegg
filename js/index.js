/*
* @Author: Marte
* @Date:   2017-10-24 17:40:30
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-24 17:54:45
*/

'use strict';
$(function(){
    $(".banner .bannercon").scrollBanner({
    images : [
        {src:"img/ban_01.jpg",title:"banner1",href:"#"},
        {src:"img/ban_02.jpg",title:"banner2",href:"#"},
        {src:"img/ban_03.jpg",title:"banner3",href:"#"},
        {src:"img/ban_04.jpg",title:"banner4",href:"#"},
        {src:"img/ban_05.jpg",title:"banner5",href:"#"},
        {src:"img/ban_06.jpg",title:"banner6",href:"#"},
        {src:"img/ban_07.jpg",title:"banner7",href:"#"}
    ],
    scrollTime:3000,
    bannerHeight:"244px",
    iconColor: "#FFFFFF",
    iconHoverColor : "#f60",
    iconPosition : "right"
});
})