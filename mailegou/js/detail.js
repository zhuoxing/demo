/*左侧树形菜单*/
$(function(){
    treeManu.init();

    /*收缩显示品牌*/
    $(".moreBrand").click(function() {
        $('.showNow').hide();
        $('.showAfter').show();
         $('.moreBrand').hide();
        $('.hideBrand').show();
        //console.log($('.termName'));

    });
    $(".hideBrand").click(function() {
        $('.showNow').show();
        $('.showAfter').hide();
        $('.hideBrand').hide();
        $('.moreBrand').show();

    });
})

/*左侧树形菜单*/
var treeManu = {
    dom:{},
    init:function(){

        this.initDom();
        this.bindEvent();

    },
    initDom:function(){

        var dom = this.dom;
        dom.oSpan = $('.navLi span');
        dom.subNav = $('.subnav_ul');

    },
    bindEvent:function(){
        var dom = this.dom;

        dom.oSpan.each(function(i) {
            
            $(this).click(function(){
                //console.log(i);
                var disValue = dom.subNav.eq(i).css('display');
                if(disValue =="none"){
                    $(this).css('background-position','0px 0px');
                    dom.subNav.eq(i).show();
                }
                else{
                    $(this).css('background-position','0px -16px');
                    dom.subNav.eq(i).hide();
                }
                
            });
        });
    },
}