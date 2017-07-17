/**
 * Created by Administrator on 2017/7/6.
 */
//$(function(){//文档就绪函数
$(document).on("pageinit",function(event){
    var $guideUl=$("#guide ul");
    var $navSpan=$("#nav span");
    //click tap
    //click事件在移动端比tap事件慢300毫秒
    $navSpan.on("tap", function(){
        //this是原生对象
        //$(this)是jQuery对象,$(this)[0]可转换成原生对象,jQuery方法返回的还是一个jQuery对象
        //两者可以相互转换
        /* $(this).addClass("active").siblings().removeClass("active");
         $guideUl.css({
         left: -$(this).index() * $guideUl.width()/2
         });*/
        swipeGuide($(this).index());
    });
    $guideUl.on("swipeleft",function(){
        /* $navSpan.eq(1).addClass("active").siblings().removeClass("active");
         $guideUl.css({
         left:-$guideUl.width()/2
         });*/
        swipeGuide(1);
    }).on("swiperight",function(){
        /* $navSpan.eq(0).addClass("active").siblings().removeClass("active");
         $guideUl.css({
         left:0
         });*/
        swipeGuide(0)
    });
    $("#menu li").on("tap", function(){
        var productId=$(this).children('.product-id').val();
        location.href = "welcome/detail/"+productId;
    });

    $("#login").on("tap", function(){
        location.href = "user/login_page";
    });

    $("#user-detail").on("tap",function () {
        location.href="user/user_detail";
    });

    $("#logout").on("tap",function () {
        location.href="user/logout";
    });

    $("#go-top").on("tap",function(event){
        event.stopPropagation();
        if($(window).scrollTop()<=1){
            return false;
        }
        $("body").animate({
            scrollTop: 0
        },500);
        var top=$(this).css("top");
        $(this).animate({
            top: 0
        },500,function(){
            $(this).css("top",top);
        });
    });
    /*oTop.onclick = function(){
     var timer = setInterval(function(){
     var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
     window.scrollTo(0, scrollTop-=50);
     if(scrollTop <= 0){
     clearInterval(timer);
     }
     }, 100);
     };*/

    function swipeGuide(index){
        $navSpan.eq(index).addClass("active").siblings().removeClass("active");
        $guideUl.css({
            left: -index * $guideUl.width() / 2
        });
    }
});
/*$(document).ready(function(){
 文档就绪函数
 });

 width() 获取内容宽度
 innerWidth() 内容+padding
 outerWidth() 内容+padding+border
 outerWidth(true) 内容+padding+border+margin

 */
