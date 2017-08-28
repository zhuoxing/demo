
$(function() {

    var car = JSON.parse($.cookie('car'));


    
    if (car) {

        for (var i = 0; i < car.length; i++) {
            var calcute = car[i].price*car[i].count;
            console.log(car[i].price);
            var oTr = $('<tr><td class="clear"><div class="goodsBox"><img src="' + car[i].imgSrc + '"></div><div class="goodsBox"><p class="p1"><a href="javascript:;"><font color="red">优惠套餐</font><font color="red">' + car[i].title1 + '</font>' + car[i].title2 + '</a></p></div></td><td><span class="priceNow">￥' + car[i].price + '</span><span class="priceOld">￥1936.00</span></td><td><ul class="count"><li class="add">+</li><li class="countNum"><input id="buyNum" type="text" value="' + car[i].count + '" /></li><li class="reduce">-</li></ul></td><td><span class="priceNow oneCalcute">￥' + calcute + '</span></td><td><a class="delGoods" href="javascript:;">删除</a></td></tr>');
            $('tbody').append(oTr);
             //数字加减
            
            var newPrice = car[i].price;
            var oneCalcute = 0
            $('.add').click(function(){
                oneCalcute = newPrice;
                var num = parseInt($('#buyNum').val());
                num++;
                $('#buyNum').val(num);
                oneCalcute = newPrice *num;
                $('.oneCalcute').html('￥'+oneCalcute);
            });
            $('.reduce').click(function(){
                oneCalcute = newPrice;
                var num = parseInt($('#buyNum').val());
                num--;
                //console.log(num);
                if(num <= 1){
                  num = 1;
                }
                $('#buyNum').val(num);
                oneCalcute = newPrice *num;
                $('.oneCalcute').html('￥'+oneCalcute);
            });
        }
    }

    var car = JSON.parse($.cookie('car'));

    $('tbody').on('click', '.delGoods', function() {
        var index = $(this).parents('tr').index();
        console.log(index);
        car.splice(index, 1);
        $.cookie('car', JSON.stringify(car), {
            exprice: 1,
            path: '/'
        });
        $(this).parents('tr').remove();
    });

   

})