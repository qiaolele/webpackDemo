$(function(){
    // 头部信息显示隐藏
    $(".header-infoBg").click(function(){
        $(".header-infoList").toggle();
    });
    // 头部链接点击变色
    $(".header-nav li a").click(function(){
        $(".header-nav li a").removeClass('getBgColor');
        $(this).addClass('getBgColor');

    })
    alert("地方艰苦地方都是看webpack")
})