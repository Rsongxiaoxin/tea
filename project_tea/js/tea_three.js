$(function(){
 // 下拉菜单
 $(".ite").mouseenter(function(){
        $("#tea").removeClass("third").addClass("third1")
    }).mouseleave(function(){
        $("#tea").removeClass("third1").addClass("third")
    })
    $("#tea").mouseenter(function(){
        $("#tea").removeClass("third").addClass("third2")
    }).mouseleave(function(){
        $("#tea").removeClass("third2").addClass("third")
    });
    // 轮播图
   
    var $ul=$(".slider");
    var $ulIds=$(".bx-pager-item");
    var length=1420,moved=0;
    $ul.css("width",length*5);
    $(".next").click(function () {
        if(!$ul.is(":animated")){
            moved++;
            $ul.animate({
                left:-moved*length
            },500,function(){
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
                $ul.css("left", -moved * length);
            }
            moved--;
            $ul.animate({
                left: -moved * length
            }, 500, function () {
                $ulIds.children(":eq(" + moved + ")").addClass("active").siblings().removeClass("active");
            });
        }
    });
    timer=setInterval(function () {
        if(!$ul.is(":animated")){
            moved++;
            $ul.animate({
                left:-moved*length
            },500,function(){
                if(moved==3){
                    $ul.css("left",0);
                    moved=0;
                }
                $ulIds.children(":eq("+moved+")").addClass("active").siblings().removeClass("active");
            });
        }
    },5000);
    $ulIds.on("click","a",function () {
        if(!$ul.is(":animated")) {
            var $a = $(this);
            var i = $a.index();
            moved = i;
            $ul.animate({
                left: -moved * length
            }, 500, function () {
                $ulIds.children(":eq(" + moved + ")").addClass("active").siblings().removeClass("active");
            });
        }
    })
});