/**
 * Created by Administrator on 2017/7/18.
 */
$(document).on("pageinit",function () {
    $('.add').on('tap',function(){
        var val = $('.count').val();
        var price = $('.price').text();
        $('.count').val(parseInt(val) + 1);
        $('.total-price').text(price * $('.count').val());
    });

    $('.minus').on('tap',function () {
        var val=$('.count').val();
        if(val>1){
            var price = $('.price').text();
            $('.count').val(parseInt(val) - 1);
            $('.total-price').text(price * $('.count').val());
        }
    });

    $('#submit-btn').on('tap',function () {
        var product_id=$('#product-id').val();
        var price=$('.price').text();
        var num=$('.count').val();
        $.get('welcome/add_order',{
            'productId':product_id,
            'num':num,
            'price':price
        },function (data) {
            console.log(data);
            if(data=='success'){
                alert('下单成功');
            }else{
                alert('下单失败');
            }
        },'text');
    });

    $("#left img").on("tap",function(){
        var productId = $('#product-id').val();
        location.href="welcome/detail/"+productId;
    });
});