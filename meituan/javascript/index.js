/**
 * Created by Administrator on 2017/7/6.
 */
$(function(){//�ĵ���������
    var $guideUl=$("#guide ul");
    var $navSpan=$("#nav span");
    //click tap
    //click�¼����ƶ��˱�tap�¼���300����
    $("#nav span").on("tap", function(){
        //this��ԭ������
        //$(this)��jQuery����,$(this)[0]��ת����ԭ������,jQuery�������صĻ���һ��jQuery����
        //���߿����໥ת��
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
 �ĵ���������
});

width() ��ȡ���ݿ��
innerWidth() ����+padding
outerWidth() ����+padding+border
outerWidth(true) ����+padding+border+margin

*/
