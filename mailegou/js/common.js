
$(function(){
  //导航栏部分实现二级菜单的显示与隐藏以及效果
  $('#nav .allgoods').hover(
    function(){
      $('#nav .subnav').show();
      var subLi =  $('#nav .subnav li');
      subLi.hover(function(){
        var index = $(this).index();
        //console.log(index);
        $(this).css('background','#a90000');
        $(this).first().css('paddingLeft',10);
        $(this).css('width',170);
        $(this).siblings().css('background','#cb351a');
        //$(this).children('a').addClass('.a_white');
        $(this).children('a').css('color','#ffffff');
        //$(this).siblings().css({background:'#cb351a',width:180});
      },function(){
        var index = $(this).index();
        $(this).first().css('paddingLeft',0);
        $(this).css('width',180);
        $(this).children('a').css('color','#eca598');
        });
    },function(){
      $('#nav .subnav').hide();
  });
})
