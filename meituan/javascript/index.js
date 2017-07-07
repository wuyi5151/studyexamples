/**
 * Created by Administrator on 2017/7/6.
 */
$(function(){//文档就绪函数
    var $guideUl=$("#guide ul");
    var $navSpan=$("#nav span");
    //click tap
    //click事件在移动端比tap事件慢300毫秒
    $navSpan.on("tap", function(){
        //this是原生对象
        //$(this)是jQuery对象,$(this)[0]可转换成原生对象,jQuery方法返回的还是一个jQuery对象
        //两者可以相互转换
        $(this).addClass("active").siblings().removeClass("active");
        $guideUl.css({
           left: -$(this).index() * $guideUl.width()/2
        });
    });
    $guideUl.on("swipeleft",function(){
        $navSpan.eq(1).addClass("active").siblings().removeClass("active");
        $guideUl.css({
            left:-$guideUl.width()/2
        });
    }).on("swiperight",function(){
        $navSpan.eq(0).addClass("active").siblings().removeClass("active");
        $guideUl.css({
            left:0
        });
    });
});
/*$(document).ready(function(){
 文档就绪函数
});

width() 获取内容宽度
innerWidth() 内容+padding
outerWidth() 内容+padding+border
outerWidth(true) 内容+padding+border+margin

*/
