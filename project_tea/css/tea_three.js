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
    })
});