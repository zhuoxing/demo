
    $(function() {

        $('.toCar').click(function() {
            // 先拿出购物车的cookie
            var arr = JSON.parse($.cookie('car'));

            // 如果是第一次的话，arr是一个 null, 给它赋值为一个空数组。
            if (!arr) {
                arr = [];
            }

            var obj = {
                "title1": $('.detail').find('.desc_con font:eq(2)').html(),
                "title2": $('.detail').find('.desc_con font:eq(3)').html(),
                "imgSrc": $('.preview').find('.previewImg img').attr('src'),
                "price": $('.price .priceNum').html(),
                "count": $('.buyCount #buyNum').val()
            }
            arr.push(obj);
           
            $.cookie('car', JSON.stringify(arr), {
                exprice: 1,
                path: '/'
            });
            //console.log($.cookie('car'));
        });
        
    })