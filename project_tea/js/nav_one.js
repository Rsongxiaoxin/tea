$(function(){
    var $ul=$(".slider");//获得轮播图
    var $ulIds=$(".bx-pager-item");//获得下边三个点
    var LIEIFTH=1420,moved=0;//定义长度和移动距离
    $ul.css("width",LIEIFTH*5);//更改轮播图宽度*5
    $(".next").click(function () { //获得向右箭头点击事件
        if(!$ul.is(":animated")){//判断如果轮播图不是动画效果
            moved++;//点击一下移动+1
            $ul.animate({//获得轮播动画
                left:-moved*LIEIFTH//更改动画距离
            },500,function(){//动画时间，
                if(moved==3){
                    $ul.css("left",0);
                    moved=0;
                }
                $ulIds.children(":eq("+moved+")").addClass("active").siblings().removeClass("active");
            });
        }
    });
    $(".prev").click(function () {
        if(!$ul.is(":animated")) {
            if (moved == 0) {
                moved = 3;
                $ul.css("left", -moved * LIEIFTH);
            }
            moved--;
            $ul.animate({
                left: -moved * LIEIFTH
            }, 500, function () {
                $ulIds.children(":eq(" + moved + ")").addClass("active").siblings().removeClass("active");
            });
        }
    });
    $ulIds.on("click","a",function () {
        if(!$ul.is(":animated")) {
            var $a = $(this);
            var i = $a.index();
            moved = i;
            $ul.animate({
                left: -moved * LIEIFTH
            }, 500, function () {
                $ulIds.children(":eq(" + moved + ")").addClass("active").siblings().removeClass("active");
            });
        }
    })
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var $nav = $(".top>.header-nav");
        if (scrollTop >= 78) {
            $nav.addClass("suspension");
        } else {
            $nav.removeClass("suspension");
        }
    });
    $(".testing").on("click",".title",function () {
        var $content=$(this).next();
        if($content.is(".in"))
            $content.removeClass("in");
        else
            $content.addClass("in").siblings(".content").removeClass("in");
    })
    $(".testing").on("click","li",function () {
        $(this).children(":last-child").addClass("determine").parent().siblings().children(":last-child").removeClass("determine");
    }).on("mouseenter","li",function () {
        var $p=$(this).children(":last-child")
        if($p.hasClass("determine")==false){
            $p.addClass("cho")
        }
    }).on("mouseleave","li",function () {
        var $p=$(this).children(":last-child")
        if($p.hasClass("cho")==true){
            $p.removeClass("cho")
        }
    })
});


