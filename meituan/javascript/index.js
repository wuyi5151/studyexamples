/**
 * Created by Administrator on 2017/7/6.
 */
$(function(){//�ĵ���������
    var $guideUl=$("#guide ul");
    var $navSpan=$("#nav span");
    //click tap
    //click�¼����ƶ��˱�tap�¼���300����
    $navSpan.on("tap", function(){
        //this��ԭ������
        //$(this)��jQuery����,$(this)[0]��ת����ԭ������,jQuery�������صĻ���һ��jQuery����
        //���߿����໥ת��
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

    $("#go-top").on("tap",function(){
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
 �ĵ���������
});

width() ��ȡ���ݿ��
innerWidth() ����+padding
outerWidth() ����+padding+border
outerWidth(true) ����+padding+border+margin

*/
