$(function(){
    //轮播start
    var $ul=$(".slider");
    var $ulIds=$(".bx-pager-item");
    var lieifth=1420,moved=0;
    $ul.css("width",lieifth*5);
    $(".next").click(function(){
        if(!$ul.is(":animated")){
            moved++;
            $ul.animate({
                left:-moved*lieifth
            },500,function(){
                if(moved == 3){
                    $ul.css("left",0);
                    moved=0;
                }
                $ulIds.children(":eq("+ moved +")").addClass("active").siblings().removeClass("active");
            });
        }
    });
    $(".prev").click(function () {
        if(!$ul.is(":animated")) {
            if (moved == 0) {
                moved = 3;
                $ul.css("left", -moved * lieifth);
            }
            moved--;
            $ul.animate({
                left: -moved * lieifth
            }, 500, function () {
                $ulIds.children(":eq(" + moved + ")").addClass("active").siblings().removeClass("active");
            });
        }
    });
    $ulIds.on("click","a",function(){
        if(!$ul.is(":animated")){
            var $a=$(this);
            var i=$a.index();
            moved=i;
            $ul.animate({
                left:-moved*lieifth
            },500,function(){
                $ulIds.children(":eq("+ moved +")").addClass("active").siblings().removeClass("active");
            });
        }
    })
//轮播end
//手风琴

    $(".testing").on("click",".title",function () {
        var $content=$(this).next();
        if($content.is(".in"))
            $content.removeClass("in");
        else
            $content.addClass("in").siblings(".content").removeClass("in");
    });
    $(".testing").on("click","li",function () {
        $(this).children(":last-child").addClass("determine").parent().siblings().children(":last-child").removeClass("determine");
    })

})
















