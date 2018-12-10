$(function(){
    //轮播start
    var $ul=$(".slider");//获取轮播图片的ul
    var $ulIds=$(".bx-pager-item");//获取控制圆点
    var length=1420,moved=0;//设置一个长度和页数
    $ul.css("width",length*5);//给ul宽度1420*5
    $(".next").click(function(){//给右箭头一个点击事件
        if(!$ul.is(":animated")){//判断￥ul不是自定义动画
            moved++;//页数+1
            $ul.animate({//给￥ul设置动画
                left:-moved*length//左移动负的页数*长度
            },500,function(){
                if(moved == 3){
                    $ul.css("left",0);
                    moved=0;
                }
                $ulIds.children(":eq("+ moved +")").addClass("active").siblings().removeClass("active");
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
    },3000);
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
    $ulIds.on("click","a",function(){
        if(!$ul.is(":animated")){
            var $a=$(this);
            var i=$a.index();
            moved=i;
            $ul.animate({
                left:-moved*length
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
    });


    // 下拉菜单.ite>a:eq(0)
    $(".ite").mouseenter(function () {//给a标签设置鼠标触发事件
        //给observation删除原始属性，并添加新属性
        $("#observation").removeClass("leave").addClass("observation")
    }).mouseleave(function () {
        //给observation失去焦点的时候
        $("#observation").removeClass("observation").addClass("leave")
    })
    $("#observation").mouseenter(function () {
        $("#observation").removeClass("leave").addClass("observation1")
    }).mouseleave(function () {
        $("#observation").removeClass("observation1").addClass("leave")
    });

})
















