    $(function() {
        $('.previewImg').hover(function() {
            $('.mark').show();
            $('#bigPic').show();
        }, function() {
            $('.mark').hide();
            $('#bigPic').hide();
        });
        $(this).mousemove(function(e) {
          //console.log($(window).scrollTop());
          var e = e || window.event;
          var X = e.pageX - $('.previewImg').offset().left -$('.mark').width() / 2;
          var Y = e.pageY -$('.previewImg').offset().top - $('.mark').height() / 2;
          if (X <= 0) { 
              X = 0;
          } else if (X >= $('.previewImg').width() - $('.mark').width()

          ) {
              X = $('.previewImg').width() - $('.mark').width();
          }
          if (Y <= 0) {
              Y = 0;
          } else if (Y >= $('.previewImg').height() - $('.mark').height()) {
              Y = $('.previewImg').height() - $('.mark').height();
          }
          $('.mark').css({ 'left': X, 'top': Y });
          var bLeft = X * ($('#bigPic').find('img').width() -$('#bigPic').width()) / ($('.previewImg').width() -
              $('.mark').width());
          var bTop = Y * ($('#bigPic').find('img').height() -
              $('#bigPic').height()) / ($('.previewImg').height() -
              $('.mark').height());
          //console.log(bLeft, bTop);
          $('#bigPic').find('img').css({
              'left': -bLeft,
              'top': -bTop
          });
      })


      /*li效果*/
        $('.allImg li').each(function(i){
          $(this).hover(function(){
            $(this).find('img').addClass('img_hover');
            $(this).siblings().find('img').removeClass('img_hover');
            var newsrc = $(this).find('img').attr('src');
            $('.previewImg').find('img').attr('src',newsrc);
            $('#bigPic').find('img').attr('src',newsrc);
          })
        });


      //商品属性选择
    
        $('.duawei a').click(function(){
          $(this).addClass('click_act');
          $(this).siblings().removeClass('click_act');
        });

        $('.taocan a').click(function(){
          $(this).addClass('click_act');
          $(this).siblings().removeClass('click_act');
        });

      //数字加减
      $('.add').click(function(){
        var num = parseInt($('#buyNum').val());
        num++;
        $('#buyNum').val(num);
      });

      $('.reduce').click(function(){
        var num = parseInt($('#buyNum').val());
        num--;
        console.log(num);
        if(num <= 1){
          num = 1;
        }
        $('#buyNum').val(num);
      });

    })
