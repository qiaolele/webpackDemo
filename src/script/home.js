
require('./jquery-2.1.4.min');
import '../style/css/aaa.css';
// // 头部信息显示隐藏
$(".header-infoBg").click(function(){
    $(".header-infoList").toggle();
});
// 头部链接点击变色
$(".header-nav li a").click(function(){
    $(".header-nav li a").removeClass('getBgColor');
    $(this).addClass('getBgColor');

})