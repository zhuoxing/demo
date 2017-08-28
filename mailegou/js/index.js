

$(function(){


  //登陆之后的显示状态变化
  var user = JSON.parse($.cookie('username'));

  if (user) {
        $('.aticle .toExit').html('退出');
        $('.aticle .toExit').attr('href','javascript:;');
        $('.aticle .loginStus').html('欢迎'+user);
        $('.aticle .loginStus').attr('href','javascript:;');
        
        $('.aticle .toExit').click(function(){
          $.cookie('username','ioi',{expires:-1,path:'/'});
          $(this).html('免费注册');
          //$(this).attr('href','register.html');
          $('.aticle .loginStus').html('请登录');
        $('.aticle .loginStus').attr('href','login.html');
        });
        
  }
  /*显示隐藏的搜索框*/

    $(window).scroll(function(){
      var height = $(document).scrollTop();
      var flytop = $('.flyheader');
      if(height >= 1800){
        flytop.show().animate({top:0},200);
      }
     if(height < 1800){
        flytop.hide().animate({top:-40},200);
      }
    });
  /*显示隐藏的搜索框*/

  /*头部广告点击关闭*/
  $('#top span').click(function(){
    $('#top').remove();
  });
  
  //头部鼠标移入显示隐藏的部分
  $('.mygou').hover(function(){
    $('.aticle .mygou').addClass('hover_act');
    $('.aticle .mygou ul').addClass('hideul');
  },function(){
    $('.mygou').removeClass('hover_act');
    $('.mygou ul').removeClass('hideul');
  });

  $('.phonegou').hover(function(){
    $('.aticle .phonegou').addClass('hover_act');
    $('.phonegou div').show();
  },function(){
    $('.phonegou').removeClass('hover_act');
     $('.phonegou div').hide();
  });

  //导航栏部分实现二级菜单的显示与隐藏以及效果
  $('#nav .allgoods').hover(
    function(){
      //$('#nav .subnav').show();
      $('.allgoods .up').css('background-position','0px 0px');
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
      $('.allgoods .up').css('background-position','0px -10px');
      //$('#nav .subnav').hide();
  });
  

  //banner轮播
    var i = 0;
    var length = $('.ban_box').length;
    var timer = setInterval(function(){

      if(i > length - 1){
        i = 0;
      }
      $('.ban_box').hide();
      $('.ban_box img').removeClass('changesmall');
      $('.ban_box').eq(i).show();

      setTimeout(function() {
        $('.ban_box').eq(i-1).find('img').addClass('changesmall');
      }, 100);
      i++;
    },2000);

  //整点抢
    var oLi = $('.timeLi li');
    oLi.eq(0).addClass('red_bg');
    oLi.eq(0).find('i').addClass('show_arow');

    $('.everyHour').hover(function(){  
        $(this).css('background','#6c6c6c');
    },function(){
        $(this).css('background','#444851');
    });
    $('.everyHour').click(function(){ 
        $(this).find('i').addClass('show_arow');
        $(this).siblings().find('i').removeClass('show_arow');
        //$(this).css('background','#cb351a').siblings().css('background','#444851');
        $(this).addClass('red_bg').siblings().removeClass('red_bg');
    });

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
   /* console.log(year);
    console.log(month);
    console.log(day);
    console.log(hour);*/

    //倒计时
    countDown(year+'/'+month+'/'+day+' '+'24:00:00',"#colockbox1 .hour","#colockbox1 .mini","#colockbox1 .sec");

    //侧边栏小图片轮播
    smallChange.init();



    //通过json获取图片
    $.getJSON("json/index.json",function(data){
      for( i=1; i<12; i++){
        $('.sgEvery').eq(i).find('img').attr('src',data[i-1].imgSrc);
        $('.sgEvery').eq(i).find('.special').html(data[i-1].special);
        $('.sgEvery').eq(i).find('.saleTitR b').html(data[i-1].saleTitR);
      }
      
    })

    
    
});


//倒计时
function countDown(time,hour_elem,minute_elem,second_elem){
    //if(typeof end_time == "string")
    var end_time = new Date(time).getTime(),//月份是实际月份-1
    //current_time = new Date().getTime(),
    sys_second = (end_time-new Date().getTime());
    var timer = setInterval(function(){
        if (sys_second > 0) {
            sys_second -= 10;
            var day = Math.floor((sys_second /1000/ 3600) / 24);
            var hour = Math.floor((sys_second /1000/ 3600) % 24);
            var hour1 = hour%10;
            var hour2 = parseInt(hour/10);
            var minute = Math.floor((sys_second /1000/ 60) % 60);
            var minute1 = minute%10;
            var minute2 = parseInt(minute/10);
            var second = Math.floor(sys_second/1000 % 60);
            var second1 = second%10;
            var second2 = parseInt(second/10);
            var haomiao = Math.floor(sys_second%1000);
            haomiao = parseInt(haomiao/100);
            /*day_elem && $(day_elem).text(day+'天');//计算天*/
            //$(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
            $(hour_elem).find('em:eq(0)').html(hour2);
            $(hour_elem).find('em:eq(1)').html(hour1);
            //$(minute_elem).text(minute<10?"0"+minute:minute);//计算分
            $(minute_elem).find('em:eq(0)').html(minute2);
            $(minute_elem).find('em:eq(1)').html(minute1);
            $(second_elem).find('em:eq(0)').html(second2);
            $(second_elem).find('em:eq(1)').html(second1);
            //$(second_elem).text(second<10?"0"+second:second);// 计算秒 
            //$(minute_elem).find('em:eq(1)').html(minute2);         
            $("#haomiao em").html(haomiao);// 计算秒
        } else { 
            clearInterval(timer);
        }
    }, 10);
}

//侧边栏小图片轮播
var smallChange = { 
  Timer:null,
  dom:{},
  init:function(){
    this.initDom();
    this.bindEvent();
    this.move();
  },
  initDom:function(){
    var dom = this.dom;
    dom.cgUl = $('.lunboList');
    dom.oList = $('.allImg');
    dom.prev = $('.turnPrev');
    dom.next = $('.turnNext');
  },

  move:function(){

    var dom = this.dom;
    var flag=false;
    this.Timer = setInterval(function(){
        clearInterval($(this).Timer);
        if(flag==true){
            return;
        }
        flag = true;
        var numEnd = -2*dom.oList.width();
        var numStart = -1*dom.oList.width();
         //console.log( dom.cgUl);
          dom.cgUl.animate({left:numEnd},'1000',function(){
            var firstChild = $(this).children('li:eq(0)');
            $(this).append(firstChild);
            $(this).css('left',numStart); 
            flag = false;
          });
    }, 1000);
  },
  bindEvent:function(){
    var dom = this.dom;
    var self = this;
    var flag=false;
    dom.next.each(function(i){
      $(this).click(function(){
        clearInterval(self.Timer);
        //$(this).siblings()setInterval(self.Timer);
        if(flag==true){
              return;
        }
        flag = true;
        var numEnd = -2*dom.oList.width();
        var numStart = -1*dom.oList.width();
        dom.cgUl.eq(i).animate({left:numEnd},'1000',function(){
          var firstChild = $(this).children('li:eq(0)');
          $(this).append(firstChild);
          $(this).css('left',numStart); 
          //console.log($(this).css('left'));
          flag = false;
          self.move();

        });
      });
    });        

    dom.prev.each(function(i){

      $(this).click(function(){
        clearInterval(self.Timer);
        if(flag==true){
              return;
        }
        flag = true;
        //var numEnd = -2*dom.oList.width();
        var numStart = -1*dom.oList.width();
        dom.cgUl.eq(i).animate({left:0},'1000',function(){
          var lastChild = $(this).children('li:eq(3)');
          //console.log($(this).children());
          $(this).prepend(lastChild);
          $(this).css('left',numStart); 
          //console.log($(this).css('left'));
          flag = false;
          self.move();
        });
      });

    });

  },
}
 //侧边栏小图片轮播